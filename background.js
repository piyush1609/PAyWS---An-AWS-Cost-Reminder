const DEFAULTS = {
  enabled: true,
  sound: "auto",
  volume: 0.65,
  cooldownSeconds: 18,
  mutedUntil: 0
};

const recentAlerts = new Map();

async function settings() {
  return { ...DEFAULTS, ...(await chrome.storage.sync.get(DEFAULTS)) };
}

async function ensureAudioDocument() {
  const contexts = await chrome.runtime.getContexts({ contextTypes: ["OFFSCREEN_DOCUMENT"] });
  if (!contexts.length) {
    await chrome.offscreen.createDocument({
      url: "offscreen.html",
      reasons: ["AUDIO_PLAYBACK"],
      justification: "Play a short user-configured local alert sound for AWS Console cost warnings."
    });
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "aws-service-visited") {
    alertForService(message.service, sender.tab?.id).then(sendResponse);
    return true;
  }

  if (message.type === "test-alert") {
    ensureAudioDocument()
      .then(() => settings())
      .then((prefs) => chrome.runtime.sendMessage({ type: "play-sound", sound: prefs.sound, volume: prefs.volume }))
      .then(() => sendResponse({ ok: true }))
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }

  if (message.type === "mute-for-30") {
    chrome.storage.sync.set({ mutedUntil: Date.now() + 30 * 60 * 1000 }).then(() => sendResponse({ ok: true }));
    return true;
  }
});

async function alertForService(service, tabId) {
  const prefs = await settings();
  const key = `${tabId}:${service.id}`;
  const now = Date.now();
  if (!prefs.enabled || prefs.mutedUntil > now || (recentAlerts.get(key) || 0) + prefs.cooldownSeconds * 1000 > now) {
    return { alert: false };
  }

  recentAlerts.set(key, now);
  try {
    await ensureAudioDocument();
    await chrome.runtime.sendMessage({ type: "play-sound", sound: prefs.sound === "auto" ? service.sound : prefs.sound, volume: prefs.volume });
  } catch (error) {
    // The toast remains useful even if Chrome refuses audio on a particular device.
    console.warn("Could not play AWS Spend Jumpscare sound", error);
  }
  return { alert: true };
}

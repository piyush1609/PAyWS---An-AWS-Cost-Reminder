const DEFAULTS = { enabled: true, sound: "auto", volume: 0.65, cooldownSeconds: 18 };
const controls = ["enabled", "sound", "volume", "cooldownSeconds"].reduce((all, id) => ({ ...all, [id]: document.getElementById(id) }), {});
const status = document.getElementById("status");

async function initialize() {
  const prefs = { ...DEFAULTS, ...(await chrome.storage.sync.get(DEFAULTS)) };
  controls.enabled.checked = prefs.enabled;
  controls.sound.value = prefs.sound;
  controls.volume.value = Math.round(prefs.volume * 100);
  controls.cooldownSeconds.value = String(prefs.cooldownSeconds);
  renderVolume();
}
function renderVolume() { document.getElementById("volume-output").value = `${controls.volume.value}%`; }
async function save() {
  renderVolume();
  await chrome.storage.sync.set({ enabled: controls.enabled.checked, sound: controls.sound.value, volume: Number(controls.volume.value) / 100, cooldownSeconds: Number(controls.cooldownSeconds.value) });
}
Object.values(controls).forEach((control) => control.addEventListener("change", save));
controls.volume.addEventListener("input", save);
document.getElementById("test").addEventListener("click", async () => {
  await save();
  const result = await chrome.runtime.sendMessage({ type: "test-alert" });
  status.textContent = result?.ok ? "Regret successfully previewed. 💸" : "Chrome could not play the sound.";
});
initialize();

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "play-sound") playSound(message.sound, message.volume);
});

// Original Web Audio effects. These are short synthesized cues, not copied media clips.
const MEME_EFFECTS = {
  coins: [[1960, 0, .08, "sine", .42], [1568, .07, .1, "sine", .48], [2093, .15, .15, "triangle", .58]],
  windowsError: [[784, 0, .14, "square", .55], [622, .16, .22, "square", .55]],
  sadTrombone: [[392, 0, .18, "sawtooth", .43], [330, .16, .18, "sawtooth", .43], [262, .32, .3, "sawtooth", .5]],
  airRaid: [[610, 0, .14, "sawtooth", .35], [820, .14, .14, "sawtooth", .35], [610, .28, .14, "sawtooth", .35], [820, .42, .2, "sawtooth", .35]],
  ohNo: [[540, 0, .15, "sine", .46], [380, .13, .28, "sine", .5]],
  violin: [[880, 0, .07, "sawtooth", .32], [1175, .06, .08, "sawtooth", .4], [1568, .13, .3, "sawtooth", .48]],
  recordScratch: [[1220, 0, .06, "sawtooth", .45], [820, .05, .06, "sawtooth", .42], [520, .1, .09, "sawtooth", .4], [260, .17, .12, "sawtooth", .33]],
  boom: [[90, 0, .48, "sine", .82], [62, .03, .55, "sawtooth", .35]],
  creditDecline: [[392, 0, .12, "square", .52], [311, .16, .24, "square", .58]],
  tinyViolin: [[1760, 0, .12, "sawtooth", .25], [1568, .1, .12, "sawtooth", .25], [1318, .2, .12, "sawtooth", .25], [1046, .3, .2, "sawtooth", .25]],
  levelUp: [[523, 0, .08, "square", .35], [659, .08, .08, "square", .4], [784, .16, .08, "square", .45], [1046, .24, .23, "triangle", .58]],
  horror: [[174, 0, .4, "sawtooth", .3], [207, .02, .4, "sawtooth", .3], [932, .28, .23, "sine", .55]],
  casino: [[523, 0, .07, "square", .35], [659, .07, .07, "square", .4], [784, .14, .07, "square", .42], [1046, .22, .12, "square", .5], [1318, .34, .3, "triangle", .58]],
  gasp: [[260, 0, .06, "sine", .35], [780, .035, .08, "sine", .5], [1175, .1, .2, "sine", .4]],
  missionAlarm: [[988, 0, .06, "square", .48], [988, .1, .06, "square", .48], [988, .2, .06, "square", .48], [1318, .3, .16, "square", .52]],
  clock: [[1046, 0, .035, "square", .3], [1046, .18, .035, "square", .3], [1046, .36, .035, "square", .3], [1568, .54, .18, "triangle", .48]],
  dialup: [[440, 0, .08, "square", .35], [740, .08, .08, "square", .35], [330, .16, .08, "square", .35], [90, .25, .23, "sawtooth", .45]],
  evilLaugh: [[370, 0, .09, "sawtooth", .3], [440, .1, .09, "sawtooth", .34], [370, .2, .09, "sawtooth", .3], [520, .3, .12, "sawtooth", .4], [620, .43, .2, "sawtooth", .46]],
  funeralBell: [[392, 0, .72, "sine", .55], [784, 0, .68, "sine", .18], [392, .78, .58, "sine", .45], [784, .78, .54, "sine", .15]]
};

function playSound(kind = "register", volume = 0.65) {
  const AudioContext = self.AudioContext || self.webkitAudioContext;
  const ctx = new AudioContext();
  const gain = ctx.createGain();
  gain.gain.value = Math.max(0, Math.min(1, volume)) * 0.23;
  gain.connect(ctx.destination);
  const now = ctx.currentTime;
  if (MEME_EFFECTS[kind]) {
    MEME_EFFECTS[kind].forEach(([frequency, offset, duration, type, peak]) => tone(ctx, gain, frequency, now + offset, duration, type, peak));
  } else if (kind === "fhaaa") {
    [155, 220, 294, 392].forEach((frequency, index) => tone(ctx, gain, frequency, now + index * .075, .26, "sawtooth", .75));
  } else if (kind === "chaChing") {
    tone(ctx, gain, 1300, now, .06, "square", .5);
    tone(ctx, gain, 1850, now + .09, .22, "sine", .8);
  } else if (kind === "engine") {
    [90, 110, 155, 220].forEach((frequency, index) => tone(ctx, gain, frequency, now + index * .07, .13, "sawtooth", .55));
  } else if (kind === "database") {
    [440, 660, 880].forEach((frequency, index) => tone(ctx, gain, frequency, now + index * .075, .09, "sine", .55));
  } else if (kind === "zap") {
    tone(ctx, gain, 160, now, .04, "sawtooth", .45);
    tone(ctx, gain, 1400, now + .035, .18, "square", .65);
  } else if (kind === "cluster") {
    [196, 247, 294, 392].forEach((frequency, index) => tone(ctx, gain, frequency, now + index * .055, .12, "triangle", .52));
  } else if (kind === "splash") {
    [520, 430, 350, 280].forEach((frequency, index) => tone(ctx, gain, frequency, now + index * .065, .18, "sine", .45));
  } else if (kind === "search") {
    [360, 540, 810].forEach((frequency, index) => tone(ctx, gain, frequency, now + index * .09, .12, "square", .42));
  } else if (kind === "whoosh") {
    [160, 260, 420, 680].forEach((frequency, index) => tone(ctx, gain, frequency, now + index * .04, .12, "sawtooth", .32));
  } else if (kind === "alarm") {
    [780, 620, 780].forEach((frequency, index) => tone(ctx, gain, frequency, now + index * .1, .08, "square", .5));
  } else if (kind === "robot") {
    [230, 330, 260, 470].forEach((frequency, index) => tone(ctx, gain, frequency, now + index * .07, .1, "square", .42));
  } else if (kind === "bubble") {
    [330, 440, 660].forEach((frequency, index) => tone(ctx, gain, frequency, now + index * .095, .14, "sine", .47));
  } else {
    tone(ctx, gain, 1046, now, .08, "square", .55);
    tone(ctx, gain, 1318, now + .085, .07, "square", .45);
    tone(ctx, gain, 1568, now + .17, .22, "triangle", .8);
  }
  window.setTimeout(() => ctx.close(), 1800);
}

function tone(ctx, output, frequency, start, duration, type, peak) {
  const oscillator = ctx.createOscillator();
  const envelope = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  envelope.gain.setValueAtTime(.0001, start);
  envelope.gain.exponentialRampToValueAtTime(peak, start + .012);
  envelope.gain.exponentialRampToValueAtTime(.0001, start + duration);
  oscillator.connect(envelope).connect(output);
  oscillator.start(start);
  oscillator.stop(start + duration + .02);
}

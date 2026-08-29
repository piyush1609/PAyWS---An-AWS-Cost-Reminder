# pAyWS — Spend Jumpscare

A local Chrome extension that gives a playful audio-and-toast reminder when you visit commonly billable AWS Console services. It does **not** estimate or read your AWS bill; it only matches console routes and treats them as likely spend risks. It is unofficial and not affiliated with Amazon Web Services.

The included extension icon features a startled cat, fireball asteroid, AWS-console cue, and dollar note. Standard 16, 32, 48, and 128-pixel PNG variants are in `icons/`.

See `SOUND_LIBRARY.md` for the complete locally synthesized sound library and its service-aware Auto mappings.

## Install in Chrome

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Choose **Load unpacked**.
4. Select this `aws-spend-jumpscare` folder.
5. Pin the extension and use its popup to select the sound, volume, and cooldown.

## Coverage

The extension recognises 50+ AWS Console services, including compute, containers, databases, analytics, storage, networking, developer tools, monitoring, security, and cost management. The default **Auto** sound setting plays a distinct synthesized sound for each service category. Most toasts use the matching service-specific joke; AWS-wide jokes appear occasionally.

The alert appears when navigating to a matching service and is throttled per tab/service. Use the toast’s **Mute for 30 min** link when the joke has run its course.

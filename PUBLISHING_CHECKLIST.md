# Publishing checklist — pAyWS — Spend Jumpscare

## Before upload

- [ ] Reload and test the extension through `chrome://extensions`.
- [ ] Verify every supported route shows one alert, then obeys the selected cooldown.
- [ ] Confirm the mute control and extension popup settings work.
- [ ] Review the required permissions and remove any that are no longer needed.
- [ ] Replace `[publisher support email]` in `PRIVACY_POLICY.md` with a real monitored address.
- [ ] Publish the privacy policy at a stable public URL (for example, a GitHub Pages site) if the Store requires a policy URL for the selected privacy disclosures.
- [ ] Capture clean screenshots with no real AWS account or resource data.

## Package

1. Open the `aws-spend-jumpscare` folder.
2. Select its contents, including `manifest.json`, `icons/`, HTML, CSS, and JavaScript files.
3. Create a ZIP whose root contains `manifest.json`—do not wrap it in an additional parent directory.
4. Exclude development notes and source-control folders if desired; they are not needed for the extension to run.

## Chrome Web Store dashboard

- [ ] Register a developer account and complete its profile.
- [ ] Upload the ZIP as a new item.
- [ ] Copy the text in `STORE_LISTING.md` into the Store Listing fields.
- [ ] Use `icons/icon-128.png` as the listing icon if requested.
- [ ] Complete the Privacy tab accurately using `PRIVACY_POLICY.md` as the source of truth.
- [ ] Set visibility and countries on the Distribution tab.
- [ ] Paste `TEST_INSTRUCTIONS.md` into Test instructions if that section is shown.
- [ ] Submit for review, choosing automatic or deferred publication.

# Chrome Web Store reviewer test instructions

No account, credentials, payment method, special hardware, or test environment is required.

1. Install the extension.
2. Click the extension icon and confirm that **Spend alerts** is enabled. Leave **Sound** set to **Auto — match AWS service**.
3. Click **Test the regret** to confirm a short local sound plays.
4. Visit a public AWS Console route such as `https://us-east-1.console.aws.amazon.com/ec2/home`.
5. The extension shows a “Potential Spend Detected” toast and plays a brief service-specific sound.
6. Click **Mute for 30 min** in the toast and navigate to another supported service; no new alert should appear while muted.

The extension does not require sign-in. If the AWS Console redirects to a sign-in page, the extension can still be tested after signing in with any reviewer account; it never reads credentials, resources, billing information, or page content.

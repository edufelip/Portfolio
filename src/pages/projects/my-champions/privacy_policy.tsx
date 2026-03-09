import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'
import { SupportBody, SupportCard, SupportPage } from '~/styles/support'

const MyChampionsPrivacyPolicy: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - MyChampions Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy for the MyChampions fitness app, covering data collection, third-party services, AI meal analysis, and user rights."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <SupportPage>
        <SupportCard>
          <SupportBody>
            <PrivacyPolicyBody className="support_body">
              <h1>Privacy Policy</h1>
              <p className="support_meta">Effective date: March 9, 2026</p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eduardo Santos built the <b>MyChampions</b> app as a
                subscription-based service. This page informs you of the policies regarding the
                collection, use, and disclosure of personal information when you use MyChampions. By
                using the Service you agree to the collection and use of information in accordance
                with this policy.
              </p>

              <h2>Information We Collect</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To provide and improve the Service, we may collect the
                following categories of information:
              </p>
              <div className="bulletContainer">
                <ul>
                  <li>
                    <b>Account data</b> — name, email address, and authentication credentials when
                    you register via email/password, Google, or Apple Sign-In.
                  </li>
                  <li>
                    <b>Profile data</b> — account type (Student or Professional), specialty
                    settings, and profile photo if provided.
                  </li>
                  <li>
                    <b>Health &amp; fitness data</b> — nutrition logs, meal entries (calories,
                    macros, portions), training session records, hydration logs, and plan
                    assignments you create or receive within the app.
                  </li>
                  <li>
                    <b>Uploaded images</b> — recipe photos you choose to upload are stored in
                    Firebase Cloud Storage and associated with your account.
                  </li>
                  <li>
                    <b>Meal photos for AI analysis</b> — when you use the optional AI meal-photo
                    feature, the image is compressed on-device and sent to a Firebase Cloud Function
                    to obtain macro estimates. The photo is not stored permanently on our servers
                    after analysis is complete.
                  </li>
                  <li>
                    <b>Usage &amp; crash data</b> — anonymous crash reports and stability
                    diagnostics collected via Firebase Crashlytics to help us fix bugs.
                  </li>
                  <li>
                    <b>Subscription data</b> — purchase and entitlement status managed by
                    RevenueCat. We do not store payment card details.
                  </li>
                </ul>
              </div>

              <h2>How We Use Your Information</h2>
              <div className="bulletContainer">
                <ul>
                  <li>To create and manage your account and deliver the core app functionality.</li>
                  <li>
                    To enable the student–professional relationship (assigning plans, tracking
                    adherence).
                  </li>
                  <li>To process subscription purchases and enforce entitlements.</li>
                  <li>To perform AI-assisted meal photo analysis on your request.</li>
                  <li>To monitor app stability and fix crashes.</li>
                  <li>To comply with legal obligations.</li>
                </ul>
              </div>

              <h2>Third-Party Services</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MyChampions uses third-party services that may collect
                information used to identify you. These providers have their own privacy policies:
              </p>
              <div className="bulletContainer">
                <ul>
                  <li>
                    <a
                      href="https://www.google.com/policies/privacy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google Play Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://firebase.google.com/support/privacy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Firebase (Auth, Firestore, Cloud Storage, Cloud Functions)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://firebase.google.com/support/privacy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Firebase Crashlytics
                    </a>
                  </li>
                  <li>
                    <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noreferrer">
                      RevenueCat
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://openai.com/policies/privacy-policy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      OpenAI (AI meal analysis, server-side only)
                    </a>
                  </li>
                </ul>
              </div>

              <h2>Data Retention</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We retain your personal data for as long as your
                account is active or as needed to provide the Service. You may request deletion of
                your account and associated data at any time by contacting us at the address below.
                Anonymised crash diagnostics may be retained for a longer period for stability
                analysis.
              </p>

              <h2>Security</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We use commercially reasonable measures — including
                Firebase security rules, encrypted transit (TLS), and server-side key management for
                the AI integration — to protect your data. No method of electronic storage or
                transmission is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Children&apos;s Privacy</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MyChampions is not directed to children under 13. We
                do not knowingly collect personal information from children under 13. If you believe
                a child has provided us with personal data, please contact us and we will delete it
                promptly.
              </p>

              <h2>Links to Other Sites</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Service may contain links to external websites. We
                have no control over and assume no responsibility for the content or privacy
                practices of those sites.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We may update this Privacy Policy from time to time.
                Changes will be posted on this page with an updated effective date. Continued use of
                the Service after changes are posted constitutes your acceptance of the revised
                policy.
              </p>

              <h2>Contact Us</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you have any questions or requests regarding this
                Privacy Policy, please contact us at{' '}
                <a href="mailto:eduardofelipi@gmail.com">eduardofelipi@gmail.com</a>.
              </p>
            </PrivacyPolicyBody>
          </SupportBody>
        </SupportCard>
      </SupportPage>
    </div>
  )
}

export default MyChampionsPrivacyPolicy

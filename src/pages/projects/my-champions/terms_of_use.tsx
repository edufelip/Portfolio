import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'
import { SupportBody, SupportCard, SupportPage } from '~/styles/support'

const MyChampionsTermsOfUse: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - MyChampions Terms of Use</title>
        <meta
          name="description"
          content="Terms of Use for the MyChampions fitness app, covering account rules, subscriptions, acceptable use, and limitations of liability."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <SupportPage>
        <SupportCard>
          <SupportBody>
            <PrivacyPolicyBody className="support_body">
              <h1>Terms of Use</h1>
              <p className="support_meta">Effective date: March 9, 2026</p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These Terms of Use govern your access to and use of
                the <b>MyChampions</b> application and related services provided by Eduardo Santos.
                By downloading, installing, or using MyChampions you agree to be bound by these
                terms. If you do not agree, do not use the Service.
              </p>

              <h2>1. Accounts</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You must create an account to use MyChampions. You are
                responsible for maintaining the confidentiality of your credentials and for all
                activity that occurs under your account. You must provide accurate information and
                keep it up to date. Account types (Student and Professional) are set at registration
                and cannot be changed afterwards.
              </p>

              <h2>2. Subscriptions &amp; Billing</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certain features of MyChampions require a paid
                subscription managed through RevenueCat and processed by the relevant app store
                (Apple App Store or Google Play). The following apply:
              </p>
              <div className="bulletContainer">
                <ul>
                  <li>
                    <b>Free tier</b> — Professional accounts may manage up to 10 active students at
                    no cost.
                  </li>
                  <li>
                    <b>Pro subscription</b> — Unlocks an unlimited student roster and additional
                    premium features. Pricing is displayed in the app prior to purchase.
                  </li>
                  <li>
                    <b>AI meal analysis</b> — Available as a premium feature gated by subscription.
                  </li>
                  <li>
                    Subscriptions auto-renew unless cancelled at least 24 hours before the end of
                    the current billing period. Manage or cancel your subscription through your app
                    store account settings.
                  </li>
                  <li>
                    We do not process refunds directly — refund requests must be directed to Apple
                    or Google according to their respective policies.
                  </li>
                </ul>
              </div>

              <h2>3. License</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject to these Terms, Eduardo Santos grants you a
                limited, non-exclusive, non-transferable, revocable license to install and use
                MyChampions on devices you own or control, solely for your personal or professional
                fitness management purposes. You may not copy, modify, distribute, sell, reverse
                engineer, or create derivative works of the app except where expressly permitted by
                law.
              </p>

              <h2>4. Acceptable Use</h2>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You agree not to use MyChampions to:</p>
              <div className="bulletContainer">
                <ul>
                  <li>Violate any applicable law or regulation.</li>
                  <li>Upload content that is harmful, abusive, fraudulent, or misleading.</li>
                  <li>Impersonate another person or misrepresent your professional credentials.</li>
                  <li>
                    Attempt to gain unauthorised access to another user&apos;s account or data.
                  </li>
                  <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                  <li>
                    Use the AI meal-analysis feature to process images of individuals without their
                    consent.
                  </li>
                </ul>
              </div>

              <h2>5. Health Disclaimer</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MyChampions is a fitness tracking and planning tool
                and does not constitute medical advice. Nutrition and training information provided
                through the app — including AI-generated macro estimates — is for informational
                purposes only and should not replace guidance from a qualified healthcare
                professional. Always consult a doctor before starting a new diet or exercise
                programme.
              </p>

              <h2>6. User Content</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You retain ownership of any content you create or
                upload (meal entries, recipe photos, training logs). By uploading content you grant
                Eduardo Santos a limited, non-exclusive, royalty-free licence to store and display
                that content solely to provide and operate the Service. You are solely responsible
                for ensuring your content does not infringe third-party rights.
              </p>

              <h2>7. Termination</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We may suspend or terminate your access to MyChampions
                at any time if you breach these Terms or if the Service is discontinued. You may
                stop using the app at any time. Upon termination, your licence to use the app ceases
                immediately. You may request deletion of your account data by contacting us at the
                address below.
              </p>

              <h2>8. Disclaimers</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Service is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express or implied, including
                but not limited to implied warranties of merchantability, fitness for a particular
                purpose, or non-infringement. We do not warrant that the Service will be
                uninterrupted, error-free, or free of harmful components.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To the maximum extent permitted by applicable law,
                Eduardo Santos shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages — including loss of data, revenue, or goodwill —
                arising from your use of or inability to use the Service, even if advised of the
                possibility of such damages.
              </p>

              <h2>10. Changes to These Terms</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We may update these Terms from time to time. Changes
                will be posted on this page with an updated effective date. Continued use of
                MyChampions after changes are posted constitutes your acceptance of the revised
                Terms.
              </p>

              <h2>Contact Us</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For questions about these Terms, please contact us at{' '}
                <a href="mailto:eduardofelipi@gmail.com">eduardofelipi@gmail.com</a>.
              </p>
            </PrivacyPolicyBody>
          </SupportBody>
        </SupportCard>
      </SupportPage>
    </div>
  )
}

export default MyChampionsTermsOfUse

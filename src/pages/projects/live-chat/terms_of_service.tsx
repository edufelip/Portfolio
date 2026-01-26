import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'
import { SupportBody, SupportCard, SupportPage } from '~/styles/support'

const LiveChatTermsOfService: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - LiveChat Terms of Service</title>
        <meta
          name="description"
          content="Terms of Service governing the use of the LiveChat application."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <SupportPage>
        <SupportCard>
          <SupportBody>
            <PrivacyPolicyBody className="support_body">
              <h1>LiveChat Terms of Service</h1>
              <p>Effective Date: January 7, 2026</p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These Terms of Service (&quot;Terms&quot;) govern your
                access to and use of the <b>LiveChat</b> mobile application and any related services
                (the &quot;Service&quot;) provided by Eduardo Santos (&quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;). By downloading, accessing, or using the
                Service, you agree to be bound by these Terms. If you do not agree, do not use the
                Service.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By using the Service, you confirm that you have read,
                understood, and agree to these Terms and to the LiveChat Privacy Policy. The Privacy
                Policy describes how we collect, use, and share information and is incorporated into
                these Terms by reference.
              </p>

              <h2>2. Eligibility</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You must be at least 13 years old to use the Service.
                If you are under the age of 18, you represent that you have permission from a parent
                or legal guardian.
              </p>

              <h2>3. Account Registration and Security</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To use certain features, you may need to create an
                account and provide information such as a phone number, display name, and optional
                email address. You are responsible for maintaining the confidentiality of your
                account and for all activity that occurs under your account. Notify us immediately
                of any unauthorized use.
              </p>

              <h2>4. Service Description and Availability</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LiveChat is an open source chat application that
                enables real-time messaging and media sharing. We may update, change, suspend, or
                discontinue any part of the Service at any time without notice. We do not guarantee
                that the Service will always be available, secure, or error-free.
              </p>

              <h2>5. User Content and Communications</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Service allows you to create, send, and store
                content such as messages, attachments, and audio recordings (&quot;User
                Content&quot;). You retain ownership of your User Content. By using the Service, you
                grant us a limited, worldwide, non-exclusive, royalty-free license to host, store,
                process, and transmit your User Content solely for the purpose of operating and
                improving the Service. You are responsible for your User Content and for ensuring
                that you have all rights and permissions needed to share it.
              </p>

              <h2>6. Permissions and Device Access</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To support features such as media sharing, the app may
                request access to your camera, photo library, microphone, or contacts. Granting
                these permissions is optional, and you can manage them in your device settings. You
                are responsible for any charges from your mobile carrier related to your use of the
                Service.
              </p>

              <h2>7. Acceptable Use</h2>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You agree not to use the Service to:</p>
              <div className="bulletContainer">
                <ul>
                  <li>violate any law or regulation;</li>
                  <li>infringe or violate the rights of others, including privacy or IP rights;</li>
                  <li>send spam, malware, or other harmful content;</li>
                  <li>harass, threaten, or abuse others;</li>
                  <li>attempt to gain unauthorized access to systems or data; or</li>
                  <li>interfere with or disrupt the Service.</li>
                </ul>
              </div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We may remove content or suspend accounts that violate
                these Terms.
              </p>

              <h2>8. Third-Party Services</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Service relies on third-party services such as
                Google Play Services, Firebase Authentication, Firebase Firestore, Firebase Cloud
                Functions, Firebase Cloud Storage, and Google Analytics for Firebase. Your use of
                these services is subject to their terms and policies, and we are not responsible
                for third-party services.
              </p>

              <h2>9. Open Source and License</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Service is open source. Any access to source code
                is governed by the applicable open source license. You agree to comply with the
                terms of any license that applies to the source code or related components.
              </p>

              <h2>10. Privacy</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Privacy Policy explains how we collect and use
                information. By using the Service, you agree to our collection and use of
                information as described in that policy.
              </p>

              <h2>11. Termination</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You may stop using the Service at any time. We may
                suspend or terminate access if we believe you violated these Terms or if necessary
                to protect the Service or other users. Upon termination, these Terms will continue
                to apply to any provisions that by their nature should survive.
              </p>

              <h2>12. Disclaimer of Warranties</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Service is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, whether express or implied. We
                disclaim all warranties including merchantability, fitness for a particular purpose,
                and non-infringement.
              </p>

              <h2>13. Limitation of Liability</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To the fullest extent permitted by law, we are not
                liable for any indirect, incidental, special, consequential, or punitive damages, or
                any loss of data, profits, or revenues, arising from your use of the Service.
              </p>

              <h2>14. Indemnification</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You agree to indemnify and hold us harmless from any
                claims, damages, losses, and expenses (including reasonable attorneys’ fees) arising
                out of or related to your use of the Service or your violation of these Terms.
              </p>

              <h2>15. Changes to These Terms</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We may update these Terms from time to time. We will
                notify you by posting the updated Terms within the Service or on our website.
                Continued use of the Service after changes become effective means you accept the
                revised Terms.
              </p>

              <h2>16. Contact</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you have questions about these Terms, contact us
                at: Email: eduardofelipi@gmail.com
              </p>
            </PrivacyPolicyBody>
          </SupportBody>
        </SupportCard>
      </SupportPage>
    </div>
  )
}

export default LiveChatTermsOfService

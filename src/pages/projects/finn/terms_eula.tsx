import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'
import { SupportBody, SupportCard, SupportPage } from '~/styles/support'

const FinnTermsEula: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - Finn Terms & EULA</title>
        <meta
          name="description"
          content="Terms and end-user license agreement for the Finn application, including usage rules, license scope, and limitations."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <SupportPage>
        <SupportCard>
          <SupportBody>
            <PrivacyPolicyBody className="support_body">
              <h1>Terms and EULA</h1>
              <p>
                These Terms and the End-User License Agreement (EULA) govern your access to and use
                of the Finn application and related services provided by Eduardo Santos. By using
                Finn, you agree to these terms.
              </p>

              <h2>License</h2>
              <p>
                Finn is provided as-is for personal, non-commercial use. You may install and use the
                app on compatible devices you own or control. You may not copy, modify, distribute,
                sell, lease, reverse engineer, or create derivative works except where such
                restrictions are prohibited by law.
              </p>

              <h2>Acceptable Use</h2>
              <div className="bulletContainer">
                <ul>
                  <li>Do not misuse the app, interfere with its operation, or bypass security.</li>
                  <li>Do not post illegal, harmful, or abusive content.</li>
                  <li>Do not impersonate others or misrepresent your identity or affiliations.</li>
                  <li>Respect the privacy and rights of other users.</li>
                </ul>
              </div>

              <h2>User Content</h2>
              <p>
                You are responsible for the content you post. You retain ownership of your content
                while granting Finn a limited, non-exclusive license to host and display it as
                needed to operate the service.
              </p>

              <h2>Termination</h2>
              <p>
                We may suspend or terminate access to Finn if you violate these terms or if the
                service is discontinued. You may stop using the app at any time.
              </p>

              <h2>Disclaimers and Limitation of Liability</h2>
              <p>
                Finn is provided without warranties of any kind. To the maximum extent permitted by
                law, we are not liable for any indirect, incidental, or consequential damages
                arising from your use of the app.
              </p>

              <h2>Changes</h2>
              <p>
                These terms may be updated from time to time. Continued use of Finn after changes
                means you accept the updated terms.
              </p>

              <h2>Contact</h2>
              <p>
                For questions about these terms, contact
                <a href="mailto:eduardofelipi@gmail.com"> eduardofelipi@gmail.com</a>.
              </p>

              <p>Last updated: January 28, 2026.</p>
            </PrivacyPolicyBody>
          </SupportBody>
        </SupportCard>
      </SupportPage>
    </div>
  )
}

export default FinnTermsEula

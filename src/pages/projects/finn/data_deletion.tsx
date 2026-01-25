import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'

const FinnDataDeletion: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - Finn Account & Data Deletion</title>
        <meta
          name="description"
          content="Instructions on how to request the deletion of your account and associated data for the Finn application."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <PrivacyPolicyBody>
          <h1>Account and Data Deletion</h1>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At <b>Finn</b>, developed by <b>Eduardo Santos</b>, we
            value your privacy and provide a simple way to manage your data. If you wish to delete
            your account and associated data, please follow the instructions below.
          </p>

          <h2>How to Request Deletion</h2>
          <div className="bulletContainer">
            <p>You can request the deletion of your account through the following methods:</p>
            <ul>
              <li>
                <strong>In-App:</strong> Go to <b>Profile &gt; Settings &gt; Delete Account</b>.
                This will immediately trigger the deletion process.
              </li>
              <li>
                <strong>Email Request:</strong> Send an email to <b>eduardofelipi@gmail.com</b> with
                the subject &quot;Finn Account Deletion Request&quot;. Please include the email
                address associated with your account.
              </li>
            </ul>
          </div>

          <h2>Data Handled</h2>
          <div className="bulletContainer">
            <p>
              <strong>Data that will be deleted:</strong>
            </p>
            <ul>
              <li>Profile information (name, email, profile picture).</li>
              <li>Posts, comments, and interactions.</li>
              <li>Community memberships and preferences.</li>
              <li>Authentication tokens.</li>
            </ul>

            <p>
              <strong>Data that may be retained:</strong>
            </p>
            <ul>
              <li>
                Anonymized logs for technical stability and security purposes (retained for up to 90
                days).
              </li>
              <li>Aggregated usage statistics that do not identify you personally.</li>
            </ul>
          </div>

          <h2>Retention Period</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upon request, your account will be immediately
            deactivated. All personal data listed above will be permanently purged from our active
            databases within <b>30 days</b>.
          </p>

          <h2>Contact Us</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you have any questions about this process, please
            contact us at <b>eduardofelipi@gmail.com</b>.
          </p>
        </PrivacyPolicyBody>
      </main>
    </div>
  )
}

export default FinnDataDeletion

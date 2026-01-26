import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'
import { SupportBody, SupportCard, SupportPage } from '~/styles/support'

const FinnChildSafety: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - Finn Child Safety Standards</title>
        <meta
          name="description"
          content="Child safety standards for the Finn app, including CSAE prevention, reporting, and enforcement policies."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <SupportPage>
        <SupportCard>
          <SupportBody>
            <PrivacyPolicyBody className="support_body">
              <h1>Child Safety Standards (CSAE)</h1>
              <p>
                Finn has zero tolerance for child sexual abuse and exploitation (CSAE). We do not
                allow content, behavior, or interactions that sexualize, endanger, or exploit
                minors. These standards apply to all users, content, and communication channels
                within the app.
              </p>

              <h2>Prohibited Content and Behavior</h2>
              <div className="bulletContainer">
                <ul>
                  <li>
                    Any sexual content involving minors, including images, videos, audio, or text.
                  </li>
                  <li>
                    Grooming, solicitation, sexual extortion, or attempts to arrange in-person
                    contact with a minor for sexual purposes.
                  </li>
                  <li>
                    Sharing, requesting, or distributing CSAE material, links, or instructions to
                    obtain such material.
                  </li>
                  <li>
                    Content that sexualizes minors or encourages self-harm, abuse, or exploitation.
                  </li>
                </ul>
              </div>

              <h2>Reporting and Response</h2>
              <p>
                If you encounter CSAE-related content or behavior, report it immediately by
                contacting us at{' '}
                <a href="mailto:eduardofelipi@gmail.com">eduardofelipi@gmail.com</a>. We prioritize
                reports involving minors and will take appropriate action, which may include content
                removal, account suspension, and reporting to relevant authorities.
              </p>
              <p>
                If a child is in immediate danger, contact your local emergency services right away.
              </p>

              <h2>Enforcement</h2>
              <p>
                We investigate reports, remove violating content, and disable accounts that breach
                these standards. Repeat or severe violations result in permanent bans. We may
                preserve and share relevant information with law enforcement when required or
                appropriate.
              </p>

              <h2>Additional References</h2>
              <p>
                For definitions and additional policy context, see Google Play’s CSAE guidance:
                <a
                  href="https://support.google.com/googleplay/android-developer/answer/14747720#4&zippy=%2Chow-do-you-define-csae"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Google Play CSAE policy
                </a>
                .
              </p>

              <h2>Contact</h2>
              <p>
                Owner: Eduardo Santos. For questions about these standards, contact
                <a href="mailto:eduardofelipi@gmail.com"> eduardofelipi@gmail.com</a>.
              </p>

              <p>Last updated: January 22, 2026.</p>
            </PrivacyPolicyBody>
          </SupportBody>
        </SupportCard>
      </SupportPage>
    </div>
  )
}

export default FinnChildSafety

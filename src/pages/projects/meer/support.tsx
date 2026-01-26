import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'
import { SupportBody, SupportCard, SupportPage } from '~/styles/support'

const MeerSupport: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - Suporte Guia Brechó</title>
        <meta
          name="description"
          content="Página de suporte para o aplicativo Guia Brechó com detalhes de contato e tempo de resposta."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <SupportPage>
        <SupportCard>
          <SupportBody>
            <PrivacyPolicyBody className="support_body">
              <h1>Suporte Guia Brechó</h1>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O Guia Brechó é um aplicativo React Native feito com
                Expo que ajuda as pessoas a descobrirem brechós. Esta página fornece informações de
                suporte e maneiras de obter ajuda com o aplicativo.
              </p>
              <h2>Contato</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para suporte, envie um e-mail para{' '}
                <a href="mailto:guiabrechoapp@gmail.com">guiabrechoapp@gmail.com</a>.
              </p>
              <h2>Como obter ajuda</h2>
              <div className="bulletContainer">
                <ul>
                  <li>Descreva o problema e os passos que você seguiu.</li>
                  <li>Inclua o modelo do seu dispositivo e a versão do sistema operacional.</li>
                  <li>Anexe capturas de tela se elas ajudarem a explicar o problema.</li>
                </ul>
              </div>
              <h2>Tempo de resposta</h2>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Geralmente respondemos em até 3 dias úteis.</p>
              <h2>Última atualização</h2>
              <p className="support_meta">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26 de janeiro de 2026</p>
            </PrivacyPolicyBody>
          </SupportBody>
        </SupportCard>
      </SupportPage>
    </div>
  )
}

export default MeerSupport

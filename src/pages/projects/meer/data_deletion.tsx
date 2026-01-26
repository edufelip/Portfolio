import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'
import { SupportBody, SupportCard, SupportPage } from '~/styles/support'

const MeerDataDeletion: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - Exclusão de Conta e Dados Guia Brechó</title>
        <meta
          name="description"
          content="Instruções sobre como solicitar a exclusão de sua conta e dados associados para o aplicativo Guia Brechó."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <SupportPage>
        <SupportCard>
          <SupportBody>
            <PrivacyPolicyBody className="support_body">
              <h1>Exclusão de Conta e Dados</h1>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No <b>Guia Brechó</b>, desenvolvido por{' '}
                <b>Eduardo Santos</b>, valorizamos sua privacidade e oferecemos uma maneira simples
                de gerenciar seus dados. Se você deseja excluir sua conta e os dados associados,
                siga as instruções abaixo.
              </p>

              <h2>Como Solicitar a Exclusão</h2>
              <div className="bulletContainer">
                <p>Você pode solicitar a exclusão da sua conta através dos seguintes métodos:</p>
                <ul>
                  <li>
                    <strong>No Aplicativo:</strong> Vá em{' '}
                    <b>Perfil &gt; Configurações &gt; Excluir Conta</b>. Isso iniciará imediatamente
                    o processo de exclusão.
                  </li>
                  <li>
                    <strong>Solicitação por E-mail:</strong> Envie um e-mail para{' '}
                    <b>guiabrechoapp@gmail.com</b> com o assunto &quot;Solicitação de Exclusão de
                    Conta Guia Brechó&quot;. Por favor, inclua o endereço de e-mail associado à sua
                    conta.
                  </li>
                </ul>
              </div>

              <h2>Dados Tratados</h2>
              <div className="bulletContainer">
                <p>
                  <strong>Dados que serão excluídos:</strong>
                </p>
                <ul>
                  <li>Informações do perfil (nome, e-mail, foto de perfil).</li>
                  <li>Conteúdo de mídia e interações.</li>
                  <li>Tokens de autenticação.</li>
                </ul>

                <p>
                  <strong>Dados que podem ser retidos:</strong>
                </p>
                <ul>
                  <li>
                    Logs anonimizados para fins de estabilidade técnica e segurança (retidos por até
                    90 dias).
                  </li>
                  <li>Estatísticas de uso agregadas que não identificam você pessoalmente.</li>
                </ul>
              </div>

              <h2>Período de Retenção</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Após a solicitação, sua conta será imediatamente
                desativada. Todos os dados pessoais listados acima serão permanentemente removidos
                de nossos bancos de dados ativos em até <b>30 dias</b>.
              </p>

              <h2>Contato</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se você tiver alguma dúvida sobre este processo, entre
                em contato conosco em <b>guiabrechoapp@gmail.com</b>.
              </p>
            </PrivacyPolicyBody>
          </SupportBody>
        </SupportCard>
      </SupportPage>
    </div>
  )
}

export default MeerDataDeletion

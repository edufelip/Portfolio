import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'
import { SupportBody, SupportCard, SupportPage } from '~/styles/support'

const MeerChildSafety: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - Padrões de Segurança Infantil Guia Brechó</title>
        <meta
          name="description"
          content="Padrões de segurança infantil para o aplicativo Guia Brechó, incluindo prevenção de CSAE, denúncia e políticas de aplicação."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <SupportPage>
        <SupportCard>
          <SupportBody>
            <PrivacyPolicyBody className="support_body">
              <h1>Padrões de Segurança Infantil (CSAE)</h1>
              <p>
                O Guia Brechó tem tolerância zero para abuso e exploração sexual infantil (CSAE).
                Não permitimos conteúdo, comportamento ou interações que sexualizem, coloquem em
                perigo ou explorem menores. Estes padrões aplicam-se a todos os utilizadores,
                conteúdos e canais de comunicação dentro da aplicação.
              </p>

              <h2>Conteúdo e Comportamento Proibidos</h2>
              <div className="bulletContainer">
                <ul>
                  <li>
                    Qualquer conteúdo sexual envolvendo menores, incluindo imagens, vídeos, áudio ou
                    texto.
                  </li>
                  <li>
                    Aliciamento (grooming), solicitação, extorsão sexual ou tentativas de organizar
                    contato pessoal com um menor para fins sexuais.
                  </li>
                  <li>
                    Compartilhamento, solicitação ou distribuição de material de CSAE, links ou
                    instruções para obter tal material.
                  </li>
                  <li>
                    Conteúdo que sexualiza menores ou incentiva a automutilação, abuso ou
                    exploração.
                  </li>
                </ul>
              </div>

              <h2>Denúncia e Resposta</h2>
              <p>
                Se encontrar conteúdo ou comportamento relacionado com CSAE, denuncie-o
                imediatamente contactando-nos através de{' '}
                <a href="mailto:guiabrechoapp@gmail.com">guiabrechoapp@gmail.com</a>. Priorizamos
                denúncias que envolvam menores e tomaremos as medidas adequadas, que podem incluir a
                remoção de conteúdo, suspensão de conta e denúncia às autoridades competentes.
              </p>
              <p>
                Se uma criança estiver em perigo imediato, contacte imediatamente os serviços de
                emergência locais.
              </p>

              <h2>Aplicação</h2>
              <p>
                Investigamos denúncias, removemos conteúdo infrator e desativamos contas que violem
                estes padrões. Violações repetidas ou graves resultam em banimentos permanentes.
                Podemos preservar e compartilhar informações relevantes com as autoridades quando
                exigido ou apropriado.
              </p>

              <h2>Referências Adicionais</h2>
              <p>
                Para definições e contexto político adicional, consulte as orientações de CSAE do
                Google Play:
                <a
                  href="https://support.google.com/googleplay/android-developer/answer/14747720#4&zippy=%2Chow-do-you-define-csae"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Política de CSAE do Google Play
                </a>
                .
              </p>

              <h2>Contato</h2>
              <p>
                Proprietário: Eduardo Santos. Para dúvidas sobre estes padrões, entre em contato
                através de
                <a href="mailto:guiabrechoapp@gmail.com"> guiabrechoapp@gmail.com</a>.
              </p>

              <p>Última atualização: 26 de janeiro de 2026.</p>
            </PrivacyPolicyBody>
          </SupportBody>
        </SupportCard>
      </SupportPage>
    </div>
  )
}

export default MeerChildSafety

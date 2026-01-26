import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'
import { SupportBody, SupportCard, SupportPage } from '~/styles/support'

const MeerPrivacyPolicy: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - Política de Privacidade Guia Brechó</title>
        <meta
          name="description"
          content="Política de privacidade descrevendo as práticas de dados para o aplicativo Guia Brechó, incluindo informações sobre serviços de terceiros e direitos do usuário."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <SupportPage>
        <SupportCard>
          <SupportBody>
            <PrivacyPolicyBody className="support_body">
              <h1>Política de Privacidade</h1>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eduardo Santos construiu o aplicativo{' '}
                <b>Guia Brechó</b> como um aplicativo de código aberto. Este SERVIÇO é fornecido por
                Eduardo Santos sem custo e destina-se ao uso como está. Esta página é usada para
                informar os visitantes sobre minhas políticas de coleta, uso e divulgação de
                Informações Pessoais se alguém decidir usar meu Serviço. Se você optar por usar meu
                Serviço, concorda com a coleta e uso de informações em relação a esta política. As
                Informações Pessoais que eu coleto são usadas para fornecer e melhorar o Serviço.
                Não usarei ou compartilharei suas informações com ninguém, exceto conforme descrito
                nesta Política de Privacidade. Os termos usados nesta Política de Privacidade têm os
                mesmos significados que em nossos Termos e Condições, que são acessíveis no Guia
                Brechó, a menos que definido de outra forma nesta Política de Privacidade.
              </p>
              <h2>Coleta e Uso de Informações</h2>
              <div className="bulletContainer">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para uma melhor experiência, ao usar nosso Serviço,
                  posso exigir que você nos forneça certas informações de identificação pessoal,
                  incluindo, mas não se limitando a, nome e e-mail. As informações que eu solicitar
                  serão retidas no seu dispositivo e não serão coletadas por mim de forma alguma. O
                  aplicativo usa serviços de terceiros que podem coletar informações usadas para
                  identificá-lo. Link para a política de privacidade dos provedores de serviços de
                  terceiros usados pelo aplicativo:
                </p>
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
                      href="https://firebase.google.com/policies/analytics"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google Analytics for Firebase
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
                </ul>
              </div>
              <h2>Dados de Log</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quero informar que sempre que você usar meu Serviço,
                em caso de erro no aplicativo, eu coleto dados e informações (por meio de produtos
                de terceiros) em seu telefone chamados Dados de Log. Esses Dados de Log podem
                incluir informações como o endereço de Protocolo de Internet (“IP”) do seu
                dispositivo, nome do dispositivo, versão do sistema operacional, a configuração do
                aplicativo ao utilizar meu Serviço, a hora e a data do seu uso do Serviço e outras
                estatísticas.
              </p>
              <h2>Cookies</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookies são arquivos com uma pequena quantidade de
                dados que são comumente usados como identificadores exclusivos anônimos. Eles são
                enviados para o seu navegador a partir dos sites que você visita e são armazenados
                na memória interna do seu dispositivo. Este Serviço não usa esses “cookies”
                explicitamente. No entanto, o aplicativo pode usar código e bibliotecas de terceiros
                que usam “cookies” para coletar informações e melhorar seus serviços. Você tem a
                opção de aceitar ou recusar esses cookies e saber quando um cookie está sendo
                enviado para o seu dispositivo. Se você optar por recusar nossos cookies, talvez não
                consiga usar algumas partes deste Serviço.
              </p>
              <h2>Prestadores de Serviços</h2>
              <div className="bulletContainer">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posso empregar empresas e indivíduos terceirizados
                  devido aos seguintes motivos:
                </p>
                <ul>
                  <li>Para facilitar nosso Serviço;</li>
                  <li>Para fornecer o Serviço em nosso nome;</li>
                  <li>Para realizar serviços relacionados ao Serviço; ou</li>
                  <li>Para nos auxiliar na análise de como nosso Serviço é usado.</li>
                </ul>
              </div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quero informar aos usuários deste Serviço que esses
                terceiros têm acesso às suas Informações Pessoais. O motivo é realizar as tarefas
                atribuídas a eles em nosso nome. No entanto, eles são obrigados a não divulgar ou
                usar as informações para qualquer outra finalidade.
              </p>
              <h2>Segurança</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valorizo sua confiança em nos fornecer suas
                Informações Pessoais, portanto, estamos nos esforçando para usar meios
                comercialmente aceitáveis de protegê-las. Mas lembre-se de que nenhum método de
                transmissão pela internet ou método de armazenamento eletrônico é 100% seguro e
                confiável, e não posso garantir sua segurança absoluta.
              </p>
              <h2>Links para Outros Sites</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este Serviço pode conter links para outros sites. Se
                você clicar em um link de terceiros, será direcionado a esse site. Observe que esses
                sites externos não são operados por mim. Portanto, recomendo fortemente que você
                revise a Política de Privacidade desses sites. Não tenho controle e não assumo
                responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer
                sites ou serviços de terceiros.
              </p>
              <h2>Privacidade das Crianças</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estes Serviços não se dirigem a menores de 13 anos.
                Não coleto intencionalmente informações de identificação pessoal de crianças menores
                de 13 anos. Caso eu descubra que uma criança menor de 13 anos me forneceu
                informações pessoais, eu as apago imediatamente de nossos servidores. Se você é
                pai/mãe ou responsável e sabe que seu filho nos forneceu informações pessoais, entre
                em contato comigo para que eu possa tomar as medidas necessárias.
              </p>
              <h2>Alterações nesta Política de Privacidade</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posso atualizar nossa Política de Privacidade de
                tempos em tempos. Portanto, recomenda-se revisar esta página periodicamente para
                quaisquer alterações. Notificarei você sobre quaisquer alterações publicando a nova
                Política de Privacidade nesta página. Esta política é efetiva a partir de
                26/01/2026.
              </p>
              <h2>Contato</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se você tiver alguma dúvida ou sugestão sobre minha
                Política de Privacidade, não hesite em entrar em contato comigo em
                guiabrechoapp@gmail.com.
              </p>
            </PrivacyPolicyBody>
          </SupportBody>
        </SupportCard>
      </SupportPage>
    </div>
  )
}

export default MeerPrivacyPolicy

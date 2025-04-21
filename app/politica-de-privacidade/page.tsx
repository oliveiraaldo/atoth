export const metadata = {

    title: 'Política de Privacidade',
    description: 'Política de Privacidade',
    keywords: [ 'Política de Privacidade' ],
    openGraph: {
      title: 'Política de Privacidade',
      description: 'Política de Privacidade',
      url: 'https://atoth.com.br/politica-de-privacidade',
      siteName: 'Atoth Consultoria Empresarial',
      type: 'article',
    },
  }
  
  export default function PoliticaPrivacidade() {
    return (
      <div className="container mx-auto bg-neutral-100 text-neutral-800 p-8 rounded-lg my-10">
        <h1 className="text-h1 font-bold mb-8 text-blue-900">Política de Privacidade</h1>
  
        <section className="mb-8">
          <h2 className="text-h2 font-semibold mb-4 text-blue-900">1. Introdução</h2>
          <p className="text-p1 text-neutral-800">
            A Atoth Consultoria em Gestão Empresarial valoriza a privacidade de seus usuários e está comprometida em proteger os dados pessoais coletados por meio de seu site www.atoth.com.br. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos suas informações, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-h2 font-semibold mb-4 text-blue-900">2. Dados Pessoais Coletados</h2>
          <p className="text-p1 mb-2 text-neutral-800">Coletamos os seguintes dados pessoais fornecidos voluntariamente por você:</p>
          <ul className="list-disc list-inside mb-4 text-p1 text-neutral-800">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Empresa e cargo</li>
            <li>Outras informações fornecidas por meio de formulários de contato ou inscrição</li>
          </ul>
          <p className="text-p1 mb-2 text-neutral-800">Além disso, coletamos automaticamente informações técnicas, como:</p>
          <ul className="list-disc list-inside text-p1 text-neutral-800">
            <li>Endereço IP</li>
            <li>Tipo de navegador</li>
            <li>Páginas acessadas</li>
            <li>Tempo de visita</li>
            <li>Cookies e identificadores de dispositivos</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-h2 font-semibold mb-4 text-blue-900">3. Finalidades do Tratamento de Dados</h2>
          <ul className="list-disc list-inside text-p1 text-neutral-800">
            <li>Responder a solicitações e dúvidas</li>
            <li>Fornecer informações sobre nossos serviços</li>
            <li>Melhorar a experiência do usuário em nosso site</li>
            <li>Cumprir obrigações legais e regulatórias</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-h2 font-semibold mb-4 text-blue-900">4. Compartilhamento de Dados</h2>
          <ul className="list-disc list-inside text-p1 text-neutral-800">
            <li>Cumprir obrigações legais</li>
            <li>Proteger nossos direitos e propriedade</li>
            <li>Fornecer serviços contratados por meio de parceiros confiáveis, que também estejam em conformidade com a LGPD</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-h2 font-semibold mb-4 text-blue-900">5. Armazenamento e Segurança dos Dados</h2>
          <p className="text-p1 text-neutral-800">
            Armazenamos seus dados pessoais em servidores seguros e adotamos medidas técnicas e administrativas para protegê-los contra acesso não autorizado, perda, alteração ou divulgação.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-h2 font-semibold mb-4 text-blue-900">6. Seus Direitos</h2>
          <ul className="list-disc list-inside text-p1 text-neutral-800">
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
            <li>Revogar o consentimento a qualquer momento</li>
          </ul>
          <p className="text-p1 mt-2 text-neutral-800">
            Para exercer seus direitos, entre em contato conosco pelo e-mail: <a href="mailto:rogerio.gomes@atoth.com.br" className="text-blue-600 underline">rogerio.gomes@atoth.com.br</a>
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-h2 font-semibold mb-4 text-blue-900">7. Cookies</h2>
          <p className="text-p1 text-neutral-800">
            Utilizamos cookies para melhorar a funcionalidade do nosso site e entender melhor o comportamento dos usuários. Você pode gerenciar suas preferências de cookies por meio das configurações do seu navegador.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-h2 font-semibold mb-4 text-blue-900">8. Alterações nesta Política</h2>
          <p className="text-p1 text-neutral-800">
            Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você reveja esta página regularmente para estar ciente de quaisquer alterações.
          </p>
        </section>
  
        <section>
          <h2 className="text-h2 font-semibold mb-4 text-blue-900">9. Contato</h2>
          <p className="text-p1 mb-1 text-neutral-800">Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco:</p>
          <p className="text-p1 text-neutral-800">E-mail: <a href="mailto:rogerio.gomes@atoth.com.br" className="text-blue-600 underline">rogerio.gomes@atoth.com.br</a></p>
          <p className="text-p1 text-neutral-800">Telefone: +55 11 98364-6546</p>
          <p className="text-p1 text-neutral-800">Endereço: São Paulo, Brasil</p>
        </section>
      </div>
    )
  }
  
  
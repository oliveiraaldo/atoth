export const metadata = {
  title: 'Sobre Nós',
  description: 'Conheça mais sobre a nossa missão, visão e equipe.',
  keywords: ['sobre', 'empresa', 'missão', 'valores'],
  openGraph: {
    title: 'Sobre a Atoth Consultoria Empresarial',
    description: 'Informações institucionais sobre nossa empresa.',
    url: 'https://atoth.com/sobre',
    siteName: 'Atoth Consultoria Empresarial',
    type: 'article',
  },
}

import Image from 'next/image'
import { CgArrowLongRight } from "react-icons/cg"
import Cta from '../components/Cta'

export default function AboutPage() {
  return (
    <section className="">
      {/* Imagem topo */}
      <div className="w-full">
        <Image
          src="/bg/bg-hero-sobre.jpg"
          alt="Sobre - Atoth"
          quality={100}
          priority
          className="w-full h-auto"
          width={1000}
          height={500}
        />
      </div>
      <div className="p-8 container mx-auto">
        <div className="text-center">
          <div className="flex flex-col items-center justify-center">
              <h5 className="text-blue-500 text-[18px]">Sobre</h5>
          </div>

          <h3 className="text-blue-900 text-[28px] md:text-[36px] text-center">
            Estratégias e Soluções focadas em Resultados
          </h3>
        </div>

        {/* Descrição da empresa */}
        <div className="text-justify pt-8 text-[16px] md:text-[18px] text-blue-900">
        A Atoth Consultoria em Gestão Empresarial é uma organização especializada em treinamento, consultoria, auditoria e desenvolvimento da cadeia de fornecedores. Atuamos na melhoria da gestão de negócios, qualidade e produtividade empresarial, com o propósito de contribuir para o crescimento sólido e sustentável das empresas brasileiras. Nascemos do sonho de um empreendedor que acredita no poder da multiplicação do conhecimento como ferramenta essencial para transformar o desempenho das organizações. Com base em conceitos, métodos e técnicas reconhecidos por sua eficácia, desenvolvemos projetos personalizados, alinhados às necessidades e expectativas de cada cliente. Nosso trabalho envolve a implantação de sistemas de gestão baseados em normas internacionais, como a ISO 9001, 14001, 45001, 37301, 45003, 26000, 31000, 20400 e 39001 e a norma automotiva IATF 16949 e outras similares. A Atoth foi criada para atender organizações públicas e privadas, além de profissionais que buscam se destacar em seus segmentos de atuação. Oferecemos um portfólio completo de soluções em gestão empresarial, com foco em excelência, inovação e resultados consistentes.
        </div>
        
        {/* Missão, Valores e Visão */}
        <div className="grid grid-cols-1 lg:grid-cols-3 pt-8">
          <div className="flex flex-col items-center justify-center bg-blue-50 p-8 rounded-md">
            <h3 className="text-blue-500 text-[34px] md:text-[36px] text-center">Nossa Visão</h3>
            <p className="pt-4 text-[16px] md:text-[18px] text-justify text-blue-900">Ser reconhecida nacionalmente como referência na prestação de serviços de consultoria, treinamentos e auditorias voltados à Gestão Empresarial, contribuindo de forma estratégica para o desenvolvimento sustentável das organizações.</p>
            <div className="flex flex-col items-center justify-center w-50 border-1 border-blue-500 mt-12"></div>
          </div>

          <div className="flex flex-col items-center justify-center bg-blue-50 p-8 rounded-md">
            <h3 className="text-blue-500 text-[34px] md:text-[36px] text-center">Nossa Missão</h3>
            <p className="pt-4 text-[16px] md:text-[18px] text-justify text-blue-900">
              Ajudar pessoas e organizações a alcançarem todo o seu potencial por meio da multiplicação de conhecimento e da aplicação de conceitos, métodos e técnicas comprovadas, promovendo a melhoria contínua da gestão dos negócios.
            </p>
            <div className="flex flex-col items-center justify-center w-50 border-1 border-blue-500 mt-12"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center bg-blue-50 p-8 rounded-md">
            <h3 className="text-blue-500 text-[34px] md:text-[36px] text-center">Nossos Valores</h3>
            <p className="pt-4 text-[16px] md:text-[18px] text-justify text-blue-900">
              A Atoth valoriza e acredita em um trabalho conduzido com honestidade, respeito, transparência, paixão pelo que faz, comprometimento com prazos, persistência e foco em resultados.           
              Esses valores orientam nosso comportamento como equipe, nosso relacionamento com os clientes e dão propósito ao que fazemos. Eles nos inspiram a buscar a excelência em cada ação e a entregar sempre o nosso melhor.
            </p>
            <div className="flex flex-col items-center justify-center w-50 border-1 border-blue-500 mt-6"></div>
          </div>

        </div>

        {/* CTA */}
        <Cta />

        {/* Mini-currículo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-8">
          <div className="flex flex-col items-center justify-center md:p-8">
            <Image src="./rogerio-sobre.svg" alt="Estratégias e Soluções focadas em Resultados" quality={100} priority className="w-full h-auto" width={500} height={500} />
          </div>

          <div className="flex flex-col md:p-8 text-blue-900">
            <h5 className="text-blue-500 text-[18px] flex items-center gap-1">Rogério Gomes <CgArrowLongRight className="ml-2" /></h5>
            <h3 className="text-[30px] md:text-[32px] text-left mt-3">Mini-currículo </h3>
            <div className="mt-4 text-[15px] md:text-[17px] text-justify"> 
              <p>Rogério Gomes é Mestre em Administração com foco em Desenvolvimento de Negócios pela Universidade Presbiteriana Mackenzie, graduado em Administração de Empresas pelo Centro Universitário São Camilo e possui MBA em Gestão de Operações em Produtos e Serviços pela Universidade de São Paulo (USP). Complementa sua formação com pós-graduação em Sistema de Gestão Integrado pelo SENAC, MBA em Gestão de Compliance e ESG pela USP/ESALQ e certificação Black Belt em Lean Six Sigma pela Fundação Vanzolini.</p>
              <p className='mt-4'>Auditor Líder com sólida atuação nas normas ISO 9001:2015, 14001:2015, 45001:2018, 37301:2021, 45003:2021, 26000:2010, 20400:2017 e 39001:2012. Atuou como avaliador no Prêmio Nacional da Qualidade (PNQ) – ciclo 2015, além de ter sido professor do SENAC-SP em cursos de formação de auditores internos e Lead Assessor em Sistemas de Gestão Integrados.</p>
              <p className='mt-4'>Com mais de 30 anos de experiência em gestão de negócios — sendo 19 deles dedicados à consultoria em sistemas de gestão —, acumula ampla vivência na implementação, manutenção e aprimoramento de programas de Qualidade, Meio Ambiente, Saúde e Segurança do Trabalho, bem como no planejamento estratégico de organizações de diversos portes e segmentos, tanto nacionais quanto multinacionais.</p>
              <p className='mt-4'>Em junho de 2015 fundou a Atoth Consultoria e desde então atua como Diretor Geral da empresa, liderando projetos que impulsionam a excelência operacional e a sustentabilidade corporativa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

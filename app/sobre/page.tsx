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
          <p> A Atoth Consultoria em Gestão Empresarial é uma organização de treinamento, consultoria, auditoria, desenvolvimento da cadeia de fornecedores, que presta serviços em gestão de negócios, qualidade e produtividade empresarial, nasceu do sonho de um empreendedor que acredita que a multiplicação de conhecimento pode ajudar as empresas brasileiras a melhorarem seu desempenho de forma robusta e sustentável. </p>

          <p className='pt-4'>Com a utilização de conceitos, métodos e técnicas de comprovada eficiência a Atoth Consultoria desenvolve projetos personalizados afim de atender as necessidades e expectativas de seus clientes. O trabalho da Atoth Consultoria envolve projetos e implantação de sistemas de gestão baseados em normas internacionais, como a ISO 9001, ISO 14001, ISO 45001, OHSAS 18001, ISO 31000, SA 8000 a norma automotiva IATF 16949 e outras similares. </p>

          <p className='pt-4'>A Atoth Consultoria foi criada com o intuito de atender as organizações sejam elas públicas ou privadas e aos profissionais que têm como objetivo destacarem-se em seus respectivos ramos de atuação. Colocamos a disposição das organizações e dos profissionais um grande leque de serviços ligados à Gestão Empresarial.</p>
        </div>
        
        {/* Missão, Valores e Visão */}
        <div className="grid grid-cols-1 lg:grid-cols-3 pt-8">
          <div className="flex flex-col items-center justify-center bg-blue-50 p-8 rounded-md">
            <h3 className="text-blue-500 text-[34px] md:text-[36px] text-center">Nossa Missão</h3>
            <p className="pt-4 text-[16px] md:text-[18px] text-justify text-blue-900">A Atoth é uma empresa voltada para o futuro e expressa isso em sua visão: &quot;Ser considerada uma empresa de referência nacional na prestação de serviços de consultoria, treinamentos e auditorias voltados a Gestão Empresarial&quot;.</p>
            <div className="flex flex-col items-center justify-center w-50 border-1 border-blue-500 mt-12"></div>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-50 p-8 rounded-md">
            <h3 className="text-blue-500 text-[34px] md:text-[36px] text-center">Nossos Valores</h3>
            <p className="pt-4 text-[16px] md:text-[18px] text-justify text-blue-900">Valorizamos e acreditamos no trabalho realizado de forma honesta, respeitosa, transparente, com paixão na sua execução, com comprometimento em cumprir com os prazos acordados, persistência e focado em resultados. Eles orientam nossos comportamentos como equipe e nosso relacionamento com os clientes, dão sentido ao trabalho que fazemos e nos inspiram a buscar a excelência em todos as nossas ações e fazermos o melhor possível. Sempre!</p>
            <div className="flex flex-col items-center justify-center w-50 border-1 border-blue-500 mt-6"></div>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-50 p-8 rounded-md">
            <h3 className="text-blue-500 text-[34px] md:text-[36px] text-center">Nossa Visão</h3>
            <p className="pt-4 text-[16px] md:text-[18px] text-justify text-blue-900">A Atoth é uma organização que tem como missão ajudar as pessoas e organizações a concretizarem todo o seu potencial por meio da multiplicação de conhecimento e a utilização de conceitos, métodos e técnicas comprovadas para a melhoria da gestão do negócio.</p>
            <div className="flex flex-col items-center justify-center w-50 border-1 border-blue-500 mt-12"></div>
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

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

import Link from 'next/link'
import Image from 'next/image'
import { CgArrowLongRight } from "react-icons/cg"

export default function AboutPage() {
  return (
    <section className="">
      {/* Imagem topo */}
      <div className="w-full">
        <Image
          src="./bg-hero-sobre.svg" 
          alt="Estratégias e Soluções focadas em Resultados"
          quality={100}
          priority
          className="w-full h-auto"
          width={1000}
          height={500}
        />
      </div>
      <div className="p-8">
        <div className="text-center">
          <h3 className="text-blue-900 text-[28px] md:text-[36px] text-center">
          Estratégias e Soluções focadas em Resultados        </h3>
        </div>

        {/* Descrição da empresa */}
        <div className="text-justify pt-8 text-[16px] md:text-[18px] text-blue-900">
          <p> A Atoth Consultoria em Gestão Empresarial é uma organização de treinamento, consultoria, auditoria, desenvolvimento da cadeia de fornecedores, que presta serviços em gestão de negócios, qualidade e produtividade empresarial, nasceu do sonho de um empreendedor que acredita que a multiplicação de conhecimento pode ajudar as empresas brasileiras a melhorarem seu desempenho de forma robusta e sustentável. </p>

          <p className='pt-4'>Com a utilização de conceitos, métodos e técnicas de comprovada eficiência a Atoth Consultoria desenvolve projetos personalizados afim de atender as necessidades e expectativas de seus clientes. O trabalho da Atoth Consultoria envolve projetos e implantação de sistemas de gestão baseados em normas internacionais, como a ISO 9001, ISO 14001, ISO 45001, OHSAS 18001, ISO 31000, SA 8000 a norma automotiva IATF 16949 e outras similares. </p>

          <p className='pt-4'>A Atoth Consultoria foi criada com o intuito de atender as organizações sejam elas públicas ou privadas e aos profissionais que têm como objetivo destacarem-se em seus respectivos ramos de atuação. Colocamos a disposição das organizações e dos profissionais um grande leque de serviços ligados à Gestão Empresarial.</p>
        </div>
        
        {/* Missão, Valores e Visão */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
          <div className="flex flex-col items-center justify-center bg-blue-50 p-8 rounded-md">
            <h3 className="text-blue-500 text-[34px] md:text-[36px] text-center">Nossa Missão</h3>
            <p className="pt-4 text-[16px] md:text-[18px] text-justify text-blue-900">A Atoth é uma empresa voltada para o futuro e expressa isso em sua visão: "Ser considerada uma empresa de referência nacional na prestação de serviços de consultoria, treinamentos e auditorias voltados a Gestão Empresarial".</p>
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
        <div className="flex flex-col items-center justify-center bg-blue-50 p-10 rounded-md mt-12"> 
          <h3 className="text-blue-500 text-[34px] md:text-[36px] text-center">Quer revolucionar os resultados de sua empresa?</h3>
          <Link 
            href="https://wa.me/5511983646546"
            target="_blank"
          >
            <button className="bg-blue-500 text-white px-4 py-2 rounded-sm mt-6 hover:bg-blue-900 transition-all duration-300 cursor-pointer">Entre em contato</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
          <div className="flex flex-col items-center justify-center md:p-8">
            <Image src="./rogerio-sobre.svg" alt="Estratégias e Soluções focadas em Resultados" quality={100} priority className="w-full h-auto" width={500} height={500} />
          </div>
          <div className="flex flex-col md:p-8 text-blue-900">
            <h5 className="text-blue-500 text-[18px] flex items-center gap-1">Rogério Gomes <CgArrowLongRight className="ml-2" /></h5>
            <h3 className="text-[30px] md:text-[32px] text-left mt-3">Mini-currículo </h3>
            <div className="mt-4 text-[15px] md:text-[17px] text-justify"> 
              <p>Graduado em Administração de Empresas, com Pós – Graduação em Sistema de gestão integrado, MBA em Gestão de Operações em produtos e Serviços pela Universidade de São Paulo – USP e Mestrando em Administração de desenvolvimento de negócios pela Universidade Presbiteriana Mackenzie, Auditor líder nas normas ISO 9001:2015;14001:2015 e OHSAS 18001:2007, tendo atuado como avaliador do prêmio nacional da Qualidade – PNQ ciclo de 2015 e Professor no SENAC – SP para o curso de formação de auditores internos em sistema de gestão integrada.</p>
              <p className='mt-4'>Experiência de 25 anos na área de Sistemas de gestão da Qualidade, Meio – Ambiente, Saúde e Segurança do Trabalho, Sendo 16 anos como consultor em Sistema de gestão possuindo vivência na implementação, manutenção e melhorias em programas voltados a gestão da qualidade, meio ambiente e Saúde e Segurança do Trabalho e no planejamento estratégico de diversas organizações de pequeno, médio e grande porte, nacionais e multinacionais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

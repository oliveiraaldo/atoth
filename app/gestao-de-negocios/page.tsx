export const metadata = {
  title: 'Gestão de Negócios | Atoth Consultoria',
  description: 'Conheça nossos serviços de gestão de negócios para melhorar a performance da sua empresa.',
  keywords: ['consultoria', 'consultoria empresarial', 'serviços', 'soluções empresariais'],
  openGraph: {
    title: 'Gestão de Negócios | Atoth Consultoria Empresarial',
    description: 'Serviços especializados de consultoria para melhorar a performance da sua empresa.',
    url: 'https://atoth.com/gestao-de-negocios',
    siteName: 'Atoth Consultoria Empresarial',
    type: 'article',
  },
}

import Image from 'next/image'

export default function GestaoDeNegociosPage() {
  return (
    <section className="">
      {/* Imagem topo */}
      <div className="w-full mb-10">
        <Image
          src="/bg/bg-hero-consultorias.jpg"
          alt="Consultorias - Atoth"
          quality={100}
          priority
          className="w-full h-auto"
          width={1000}
          height={500}
        />
      </div>
      <div className="mb-10 container mx-auto">
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-blue-500 text-[18px]">Gestão de Negócios</h5>
        </div>

        <div className="flex flex-col items-center pt-4">
            <h2 className="text-blue-900 text-[40px] text-center">Gestão de Negócios com Foco em Resultados Reais</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 pt-10">
          <div className="flex-1 text-justify text-blue-900">
            <p>Atoth Consultoria – Soluções que Transformam.</p>
            <p className='py-4'>Na Atoth Consultoria, acreditamos que uma gestão de negócios eficaz é a base para o crescimento sustentável, a competitividade e a inovação. Atuando em diversos segmentos, desenvolvemos soluções personalizadas que ajudam empresas a superarem desafios, aproveitarem oportunidades e alcançarem seus objetivos com solidez e estratégia.</p>
            <p>Nosso papel vai além da análise: acompanhamos a tomada de decisões, estruturamos processos e ajudamos a transformar planos em ações consistentes.</p>
            <p>Nossos principais pilares em Gestão de Negócios:</p>
            <ul className="text-blue-900 list-disc pl-6 pt-4">
              <li>Diagnóstico estratégico completo, com identificação de gargalos, riscos e oportunidades de melhoria;</li>
              <li>Planejamento personalizado, alinhado ao contexto e às metas de cada negócio;</li>
              <li>Gestão financeira e orçamentária eficiente, com foco na rentabilidade e sustentabilidade;</li>
              <li>Otimização de processos operacionais, promovendo agilidade e redução de custos;</li>
              <li>Desenvolvimento de lideranças e equipes, com foco em desempenho e alinhamento organizacional.</li>
            </ul>
            <p>Atuamos de forma próxima, com metodologia prática e visão integrada.</p>
          </div>
          <div className="flex-1 flex h-full items-center justify-center md:justify-end">
            <Image
              src="./img-consultorias.svg" 
              alt="Estratégias e Soluções focadas em Resultados"
              quality={100}
              priority
              className="w-full h-auto"
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 
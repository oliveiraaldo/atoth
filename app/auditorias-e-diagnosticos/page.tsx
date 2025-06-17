export const metadata = {
  title: 'Auditorias e Diagnósticos | Atoth Consultoria',
  description: 'Auditorias e diagnósticos especializados em Sistemas de Gestão Integrados (SGI) para garantir conformidade e melhoria contínua.',
  keywords: ['auditoria', 'diagnóstico', 'SGI', 'sistemas de gestão integrados', 'ISO 9001', 'ISO 14001', 'ISO 45001'],
  openGraph: {
    title: 'Auditorias e Diagnósticos | Atoth Consultoria Empresarial',
    description: 'Auditorias e diagnósticos especializados em Sistemas de Gestão Integrados para garantir conformidade e melhoria contínua.',
    url: 'https://atoth.com/auditorias-e-diagnosticos',
    siteName: 'Atoth Consultoria Empresarial',
    type: 'article',
  },
}

import Image from 'next/image'

export default function AuditoriasDiagnosticosPage() {
  return (
    <section className="">
      {/* Imagem topo */}
      <div className="w-full mb-10">
        <Image
          src="/bg/bg-hero-consultorias.jpg"
          alt="Auditorias e Diagnósticos - Atoth"
          quality={100}
          priority
          className="w-full h-auto"
          width={1000}
          height={500}
        />
      </div>
      <div className="mb-10 container mx-auto">
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-blue-500 text-[18px]">Auditorias e Diagnósticos</h5>
        </div>

        <div className="flex flex-col items-center pt-4">
            <h2 className="text-blue-900 text-[40px] text-center">Auditorias e Diagnósticos de Sistemas de Gestão Integrados (SGI)</h2>
        </div>
        
        <div className="flex flex-col items-center pt-4">
            <h3 className="text-blue-900 text-[24px] text-center font-semibold">Eficiência, Conformidade e Melhoria Contínua com a Atoth Consultoria</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 pt-10">
          <div className="flex-1 text-justify text-blue-900">
            <p>A gestão integrada é essencial para empresas que buscam excelência em qualidade, meio ambiente, saúde, segurança e outros pilares estratégicos. Na Atoth Consultoria, realizamos auditorias e diagnósticos especializados em Sistemas de Gestão Integrados (SGI), ajudando sua empresa a garantir conformidade, reduzir riscos e impulsionar a melhoria contínua.</p>
            
            <p className="py-4">Nosso trabalho é identificar com precisão o nível de aderência às normas e integrar práticas que tornam os sistemas mais eficazes, sustentáveis e alinhados à estratégia do negócio.</p>
            
            <p className="font-semibold">O que entregamos:</p>
            <ul className="text-blue-900 list-disc pl-6 pt-4">
              <li><strong>Auditorias internas e diagnósticos completos</strong> baseados nas principais normas (ISO 9001, ISO 14001, ISO 45001, entre outras);</li>
              <li><strong>Análise de maturidade e integração dos sistemas</strong>, com identificação de pontos fortes, falhas e oportunidades de melhoria;</li>
              <li><strong>Verificação da conformidade legal e regulatória</strong> nas áreas aplicáveis;</li>
              <li><strong>Avaliação da eficácia dos processos</strong>, indicadores e controles internos;</li>
              <li><strong>Recomendações práticas e personalizadas</strong> para fortalecer a gestão e preparar a empresa para auditorias externas ou recertificações.</li>
            </ul>
            
            <p className="py-4">Nossa abordagem é técnica, objetiva e adaptada à realidade de cada cliente. Atuamos em diferentes segmentos, sempre com foco em entregar clareza, segurança e valor real por meio da auditoria.</p>
            
            <p className="font-semibold">Ter um SGI estruturado não é apenas atender normas — é ter uma gestão sólida, integrada e voltada para resultados.</p>
            
            <p className="pt-4">Confie na Atoth para realizar um diagnóstico preciso e estratégico do seu sistema de gestão.</p>
          </div>
          <div className="flex-1 flex h-full items-center justify-center md:justify-end">
            <Image
              src="./img-consultorias.svg" 
              alt="Auditorias e Diagnósticos - Estratégias e Soluções focadas em Resultados"
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
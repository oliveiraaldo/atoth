export const metadata = {
  title: 'Desenvolvimento da Cadeia de Fornecedores | Atoth Consultoria',
  description: 'Desenvolvimento estratégico da cadeia de fornecedores para fortalecer parcerias e aumentar a performance dos negócios.',
  keywords: ['fornecedores', 'cadeia de suprimentos', 'desenvolvimento de fornecedores', 'parcerias estratégicas', 'qualificação'],
  openGraph: {
    title: 'Desenvolvimento da Cadeia de Fornecedores | Atoth Consultoria Empresarial',
    description: 'Desenvolvimento estratégico da cadeia de fornecedores para fortalecer parcerias e aumentar a performance.',
    url: 'https://atoth.com/desenvolvimento-fornecedores',
    siteName: 'Atoth Consultoria Empresarial',
    type: 'article',
  },
}

import Image from 'next/image'

export default function DesenvolvimentoFornecedoresPage() {
  return (
    <section className="">
      {/* Imagem topo */}
      <div className="w-full mb-10">
        <Image
          src="/bg/bg-hero-consultorias.jpg"
          alt="Desenvolvimento da Cadeia de Fornecedores - Atoth"
          quality={100}
          priority
          className="w-full h-auto"
          width={1000}
          height={500}
        />
      </div>
      <div className="mb-10 container mx-auto">
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-blue-500 text-[18px]">Desenvolvimento da Cadeia de Fornecedores</h5>
        </div>

        <div className="flex flex-col items-center pt-4">
            <h2 className="text-blue-900 text-[40px] text-center">Desenvolvimento da Cadeia de Fornecedores</h2>
        </div>
        
        <div className="flex flex-col items-center pt-4">
            <h3 className="text-blue-900 text-[24px] text-center font-semibold">Fortalecendo Parcerias, Aumentando a Performance</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 pt-10">
          <div className="flex-1 text-justify text-blue-900">
            <p>Na Atoth Consultoria, entendemos que uma cadeia de fornecedores bem estruturada é um dos pilares para a eficiência operacional, a qualidade dos produtos e a sustentabilidade dos negócios. Atuamos no <strong>desenvolvimento estratégico da cadeia de fornecedores</strong>, ajudando empresas a selecionar, avaliar, qualificar e desenvolver seus fornecedores de forma contínua e alinhada aos objetivos organizacionais.</p>
            
            <p className="py-4">Mais do que negociar preços, é preciso construir relações de confiança, garantir conformidade e buscar inovação colaborativa.</p>
            
            <p className="font-semibold">Como atuamos:</p>
            <ul className="text-blue-900 list-disc pl-6 pt-4">
              <li><strong>Mapeamento e análise da cadeia atual</strong>, identificando riscos, gargalos e oportunidades de melhoria;</li>
              <li><strong>Avaliação e qualificação de fornecedores</strong>, com critérios técnicos, financeiros, ESG e de desempenho;</li>
              <li><strong>Desenvolvimento de indicadores de performance (KPIs)</strong> e planos de ação personalizados;</li>
              <li><strong>Implementação de programas de desenvolvimento e capacitação de fornecedores;</strong></li>
              <li><strong>Apoio na estruturação de políticas e critérios para compras sustentáveis;</strong></li>
              <li><strong>Fortalecimento das relações com fornecedores estratégicos</strong>, promovendo parcerias de longo prazo.</li>
            </ul>
            
            <p className="py-4">Nosso trabalho combina visão estratégica com conhecimento técnico e boas práticas de mercado. Atuamos lado a lado com nossos clientes para tornar a gestão da cadeia de suprimentos mais inteligente, integrada e resiliente.</p>
            
            <p className="font-semibold">Empresas fortes têm cadeias de fornecimento fortes.</p>
            
            <p className="pt-4">Conte com a Atoth para transformar seus fornecedores em parceiros de valor.</p>
          </div>
          <div className="flex-1 flex h-full items-center justify-center md:justify-end">
            <Image
              src="./img-consultorias.svg" 
              alt="Desenvolvimento da Cadeia de Fornecedores - Estratégias e Soluções focadas em Resultados"
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
export const metadata = {
    title: 'Concepção | Atoth Consultoria',
    description: 'Conheça os fundamentos e a concepção dos métodos de consultoria da Atoth.',
    keywords: ['concepção', 'metodologia', 'fundamentos', 'consultoria empresarial'],
    openGraph: {
      title: 'Concepção | Atoth Consultoria Empresarial',
      description: 'Entenda a concepção e os fundamentos metodológicos que orientam nossa consultoria.',
      url: 'https://atoth.com/concepcao',
      siteName: 'Atoth Consultoria Empresarial',
      type: 'article',
    },
  }

  import Image from 'next/image'
  
  export default function ConcepcaoPage() {
    return (
      <section className="">
      {/* Imagem topo */}
      <div className="w-full mb-10">
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
      <div className="px-8 mb-10">
        <h1 className="text-blue-900 text-[40px]">Concepção</h1>
      </div>
    </section>
    )
  }
  
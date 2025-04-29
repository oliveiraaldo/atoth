export const metadata = {
  title: 'Treinamentos | Atoth Consultoria',
  description: 'Conheça nossos treinamentos corporativos e programas de desenvolvimento profissional.',
  keywords: ['treinamentos', 'treinamento corporativo', 'desenvolvimento profissional', 'capacitação'],
  openGraph: {
    title: 'Treinamentos | Atoth Consultoria Empresarial',
    description: 'Programas de treinamento e capacitação para equipes e lideranças empresariais.',
    url: 'https://atoth.com/treinamentos',
    siteName: 'Atoth Consultoria Empresarial',
    type: 'article',
  },
}

import Image from 'next/image'

export default function TreinamentosPage() {
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
        <h1 className="text-blue-900 text-[40px]">Treinamentos</h1>
      </div>
    </section>
  )
} 
  
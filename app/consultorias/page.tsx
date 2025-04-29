export const metadata = {
  title: 'Consultorias | Atoth Consultoria',
  description: 'Conheça nossos serviços de consultoria empresarial e soluções para sua empresa.',
  keywords: ['consultoria', 'consultoria empresarial', 'serviços', 'soluções empresariais'],
  openGraph: {
    title: 'Consultorias | Atoth Consultoria Empresarial',
    description: 'Serviços especializados de consultoria para melhorar a performance da sua empresa.',
    url: 'https://atoth.com/consultorias',
    siteName: 'Atoth Consultoria Empresarial',
    type: 'article',
  },
}

import Image from 'next/image'

export default function ConsultoriasPage() {
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
        <h1 className="text-blue-900 text-[40px] text-center">Consultorias</h1>
      </div>
    </section>
  )
} 
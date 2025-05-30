export const metadata = {
  title: 'Depoimentos | Atoth Consultoria',
  description: 'Veja o que nossos clientes dizem sobre nossos serviços de consultoria e treinamentos.',
  keywords: ['depoimentos', 'testemunhos', 'cases de sucesso', 'satisfação de clientes'],
  openGraph: {
    title: 'Depoimentos | Atoth Consultoria Empresarial',
    description: 'Depoimentos de clientes que transformaram seus negócios com nossas soluções.',
    url: 'https://atoth.com/depoimentos',
    siteName: 'Atoth Consultoria Empresarial',
    type: 'article',
  },
}

import Image from 'next/image'
import Testemunials from '../components/sections/Testemunials'

export default function DepoimentosPage() {
  return (
    <section className=" mb-15">
      {/* Imagem topo */}
      <div className="w-full mb-10">
        <Image
          src="/bg/bg-hero-depoimentos.jpg"
          alt="Depoimentos - Atoth"
          quality={100}
          priority
          className="w-full h-auto"
          width={1000}
          height={500}
        />
      </div>
      <Testemunials />
    </section>
  )
} 
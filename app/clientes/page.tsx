export const metadata = {
  title: 'Clientes | Atoth Consultoria',
  description: 'Conheça as empresas e organizações que confiam em nossos serviços de consultoria.',
  keywords: ['clientes', 'parceiros', 'cases', 'empresas atendidas'],
  openGraph: {
    title: 'Clientes | Atoth Consultoria Empresarial',
    description: 'Empresas de diversos segmentos que contam com as soluções da Atoth Consultoria.',
    url: 'https://atoth.com/clientes',
    siteName: 'Atoth Consultoria Empresarial',
    type: 'article',
  },
}

import Image from 'next/image'
import Clients from '../components/sections/Clients'

export default function ClientesPage() {
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
      <Clients />
    </section>
  )
} 

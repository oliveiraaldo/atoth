'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[508px] bg-cover bg-center flex pt-10 md:pt-0 text-center md:text-left" 
             style={{ backgroundImage: 'url(/bg-hero.png)' }}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto relative z-10 px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados de Sucesso!
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            A Gestão é um dos fatores primordiais<br />
            para o sucesso do seu negócio.
          </h2>
          
          <p className="text-lg md:text-xl mb-8">
            Consultoria e Treinamentos que irão revolucionar sua empresa.
            <br />
            Procurando soluções eficazes em gestão?
          </p>
          
          <Link 
            href="https://wa.me/5511983646546"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-900 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Solicitar Serviços
          </Link>
        </div>
        
        <div className="">
          <Image 
            src="/rogerio.svg" 
            alt="Rogério Gomes - Consultor de Gestão Empresarial" 
            width={400} 
            height={500}
            className="mt-20 lg:mt-0 lg:absolute lg:bottom-0 lg:right-0"
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}
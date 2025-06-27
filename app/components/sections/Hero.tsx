'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 2

  // Auto-play do slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // Muda slide a cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-[400px] md:min-h-[508px] overflow-hidden">
      {/* Slide 1 - Conteúdo com background atual */}
      <div 
        className={`absolute inset-0 bg-cover bg-center flex pt-10 md:pt-0 text-center md:text-left transition-transform duration-500 ease-in-out ${
          currentSlide === 0 ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundImage: 'url(/bg-hero.png)' }}
      >
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
      </div>

      {/* Slide 2 - Banner responsivo */}
      <div 
        className={`absolute inset-0 bg-cover bg-center md:bg-center bg-top transition-transform duration-500 ease-in-out ${
          currentSlide === 1 ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Banner mobile */}
        <div className="md:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/banner-mobile.png)' }}></div>
        
        {/* Banner desktop */}
        <div className="hidden md:block absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/banner.png)' }}></div>
      </div>

      {/* Controles de navegação */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <button 
          onClick={prevSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
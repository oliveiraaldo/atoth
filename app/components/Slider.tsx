'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'


export default function Slider() {
  const slidesHome = [
    { id: 1, content: 'Home 1', bg: 'bg-yellow-500' },
    { id: 2, content: 'Home 2', bg: 'bg-red-500' },
    { id: 3, content: 'Home 3', bg: 'bg-violet-500' },
  ]
    
  const slidesSobre = [
    { id: 1, content: 'Slide Sobre 1', bg: 'bg-pink-500' },
    { id: 2, content: 'Slide Sobre 2', bg: 'bg-purple-500' },
    { id: 3, content: 'Slide Sobre 3', bg: 'bg-green-500' },
  ]

  const [current, setCurrent] = useState(0)
  const pathname = usePathname()

  const slides = pathname === '/sobre' ? slidesSobre : slidesHome

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  //autoplay com intervalo
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // muda a cada 3 segundos

    // limpa o intervalo ao desmontar
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full overflow-hidden h-64 rounded-xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold transition-all duration-700 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          } ${slide.bg}`}
        >
          {slide.content}
        </div>
      ))}

      <button
        onClick={prevSlide}
        className=" cursor-pointer z-10 absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className=" cursor-pointer z-10 absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  )
}

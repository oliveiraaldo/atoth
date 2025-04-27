'use client'

import Services from './components/sections/Services'
import Numbers from './components/sections/Numbers'
import Testemunials from './components/sections/Testemunials'
import Clients from "./components/sections/Clients";
import Hero from './components/sections/Hero';

export default function Home() {
  return (
    <>
      <div className="hero mt-15 mx-5 md:mx-0">
        <Hero />
      </div>
      <div className="services mt-15 mx-5 md:mx-0">
        <Services />
      </div>

      <div className="numbers mt-15 mx-5 md:mx-0">
        <Numbers />
      </div>

      <div className="testemunials mt-15 mx-5 md:mx-0">
        <Testemunials />
      </div>

      <div className="clients mt-15 mx-5 md:mx-0">
        <Clients />
      </div>
    </>
  )
}

'use client'

import Services from './components/sections/Services'
import Numbers from './components/sections/Numbers'
import Testemunials from './components/sections/Testemunials'
import Clients from "./components/sections/Clients";

export default function Home() {
  return (
    <>
      <div className="services mt-15">
        <Services />
      </div>

      <div className="numbers mt-15">
        <Numbers />
      </div>

      <div className="testemunials mt-15">
        <Testemunials />
      </div>

      <div className="clients mt-15">
        <Clients />
      </div>
    </>
  )
}

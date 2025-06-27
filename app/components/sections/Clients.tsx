import Image from 'next/image'

const logos = [
  { src: './clientes/cliente44.svg', alt: 'Cliente 44' },
  { src: './clientes/cliente43.svg', alt: 'Cliente 43' },
  { src: './clientes/cliente24.svg', alt: 'Cliente 24' },
  { src: './clientes/cliente37.svg', alt: 'Cliente 37' },
  { src: './clientes/cliente15.svg', alt: 'Cliente 15' },
  { src: './clientes/cliente36.svg', alt: 'Cliente 36' },
  { src: './clientes/cliente32.svg', alt: 'Cliente 32' },
  { src: './clientes/cliente1.svg', alt: 'Cliente 1' },
  { src: './clientes/cliente2.svg', alt: 'Cliente 2' },
  { src: './clientes/cliente3.svg', alt: 'Cliente 3' },
  { src: './clientes/cliente4.svg', alt: 'Cliente 4' },
  { src: './clientes/cliente5.svg', alt: 'Cliente 5' },
  { src: './clientes/cliente6.svg', alt: 'Cliente 6' },
  { src: './clientes/cliente7.svg', alt: 'Cliente 7' },
  { src: './clientes/cliente8.svg', alt: 'Cliente 8' },
  { src: './clientes/cliente9.svg', alt: 'Cliente 9' },
  { src: './clientes/cliente10.svg', alt: 'Cliente 10' },
  { src: './clientes/cliente11.svg', alt: 'Cliente 11' },
  { src: './clientes/cliente12.svg', alt: 'Cliente 12' },
  { src: './clientes/cliente13.svg', alt: 'Cliente 13' },
  { src: './clientes/cliente14.svg', alt: 'Cliente 14' },
  { src: './clientes/cliente16.svg', alt: 'Cliente 16' },
  { src: './clientes/cliente17.svg', alt: 'Cliente 17' },
  { src: './clientes/cliente18.svg', alt: 'Cliente 18' },
  { src: './clientes/cliente45.svg', alt: 'Cliente 42' },
  { src: './clientes/cliente19.svg', alt: 'Cliente 19' },
  { src: './clientes/cliente20.svg', alt: 'Cliente 20' },
  { src: './clientes/cliente21.svg', alt: 'Cliente 21' },
  { src: './clientes/cliente22.svg', alt: 'Cliente 22' },
  { src: './clientes/cliente23.svg', alt: 'Cliente 23' },
  { src: './clientes/cliente25.svg', alt: 'Cliente 25' },
  { src: './clientes/cliente26.svg', alt: 'Cliente 26' },
  { src: './clientes/cliente27.svg', alt: 'Cliente 27' },
  { src: './clientes/cliente28.svg', alt: 'Cliente 28' },
  { src: './clientes/cliente29.svg', alt: 'Cliente 29' },
  { src: './clientes/cliente30.svg', alt: 'Cliente 30' },
  { src: './clientes/cliente31.svg', alt: 'Cliente 31' },
  { src: './clientes/cliente33.svg', alt: 'Cliente 33' },
  { src: './clientes/cliente34.svg', alt: 'Cliente 34' },
  { src: './clientes/cliente35.svg', alt: 'Cliente 35' },
  { src: './clientes/cliente38.svg', alt: 'Cliente 38' },
  { src: './clientes/cliente40.svg', alt: 'Cliente 40' },
  { src: './clientes/cliente41.svg', alt: 'Cliente 41' },
  { src: './clientes/cliente46.svg', alt: 'Cliente 46' },
  { src: './clientes/cliente47.svg', alt: 'Cliente 47' },
  { src: './clientes/cliente48.svg', alt: 'Cliente 48' },
  { src: './clientes/cliente49.svg', alt: 'Cliente 49' },
  { src: './clientes/cliente50.svg', alt: 'Cliente 50' },
]

export default function Clients() {
  return (
    <section className="clients">
      <div className="container mx-auto text-white text-justify">
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-blue-500 text-[18px]">Os melhores clientes estão ao nosso lado!</h5>
        </div>

        <div className="flex flex-col items-center justify-center pt-4">
            <h2 className="text-blue-900 text-[40px]">Clientes Atendidos</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center py-10">
          {logos.map((logo, index) => (
            <div key={index} className="opacity-100 hover:opacity-80 transition">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                objectFit="contain"
                priority
                quality={100}
              />
            </div>
          ))}
        </div>

      </div>
  </section>
  )
}
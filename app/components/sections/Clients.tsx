import Image from 'next/image'

const logos = [
  { src: './clientes/cliente00001.svg', alt: 'Arkema' },
  { src: './clientes/cliente00002.svg', alt: 'Arkema' },
  { src: './clientes/cliente00003.svg', alt: 'Arkema' },
  { src: './clientes/cliente00004.svg', alt: 'Arkema' },
  { src: './clientes/cliente00005.svg', alt: 'Arkema' },
  { src: './clientes/cliente00006.svg', alt: 'Arkema' },
  { src: './clientes/cliente00007.svg', alt: 'Arkema' },
  { src: './clientes/cliente00008.svg', alt: 'Arkema' },
  { src: './clientes/cliente00009.svg', alt: 'Arkema' },
  { src: './clientes/cliente00010.svg', alt: 'Arkema' },
  { src: './clientes/cliente00011.svg', alt: 'Arkema' },
  { src: './clientes/cliente00012.svg', alt: 'Arkema' },
  { src: './clientes/cliente00013.svg', alt: 'Arkema' },  
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-4 py-10">
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
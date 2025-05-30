export const metadata = {
    title: 'Concepção | Atoth Consultoria',
    description: 'Conheça os fundamentos e a concepção dos métodos de consultoria da Atoth.',
    keywords: ['concepção', 'metodologia', 'fundamentos', 'consultoria empresarial'],
    openGraph: {
      title: 'Concepção | Atoth Consultoria Empresarial',
      description: 'Entenda a concepção e os fundamentos metodológicos que orientam nossa consultoria.',
      url: 'https://atoth.com/concepcao',
      siteName: 'Atoth Consultoria Empresarial',
      type: 'article',
    },
  }

  import Image from 'next/image'
  import { CgArrowLongRight } from "react-icons/cg"

  export default function ConcepcaoPage() {
    return (
      <section className="">
        {/* Imagem topo */}
        <div className="w-full">
          <Image
            src="/bg/bg-hero-concepcao.jpg" 
            alt="Estratégias e Soluções focadas em Resultados"
            quality={100}
            priority
            className="w-full h-auto"
            width={1000}
            height={500}
          />
        </div>
        <div className="p-8 container mx-auto">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center">
                <h5 className="text-blue-500 text-[18px]">Concepção</h5>
            </div>
  
            <h3 className="text-blue-900 text-[28px] md:text-[36px] text-center">
              Concepção da Marca Atoth: Uma Jornada de Evolução
            </h3>
          </div>

          <div className="evolucao w-full flex justify-between items-center gap-8 py-12">
            <div className="flex-1 flex justify-center">
              <Image src="/logos/logo1.svg" alt="Logo 1" width={200} height={100} className="w-full h-auto" />
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/logos/logo2.svg" alt="Logo 2" width={200} height={100} className="w-full h-auto" />
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/logos/logo3.svg" alt="Logo 3" width={200} height={100} className="w-full h-auto" />
            </div>
        </div>
  
          <div className="text-justify pt-8 text-[16px] md:text-[18px] text-blue-900">
            <p>A história da Atoth é marcada por uma constante evolução, e sua nova identidade visual reflete esse espírito de transformação e crescimento.</p>
            <p>Em uma proposta ousada que explora a noção de eternidade, o símbolo do infinito se quebra para mostrar que toda jornada, por mais longa que seja, tem seu ápice. Em cada metade desse símbolo, inserimos uma gota que abriga "10" e "anos" em sentidos opostos, celebrando tanto o décimo aniversário da Atoth quanto a superação dos desafios enfrentados ao longo dessa trajetória.</p>

            <p>A paleta de cores, que une o azul e o laranja, reforça a modernidade e a energia vibrante da marca, enquanto a tipografia firme e os traços que remetem ao "Consórcio em Gestão Empresarial" preservam a credibilidade já conquistada. Essa identidade visual, ao mesmo tempo dinâmica e reflexiva, simboliza a evolução contínua da Atoth, que abraça a renovação como parte essencial de seu crescimento.</p>

            <p>Desde sua origem, a Atoth tem se reinventado, e essa nova concepção marca um capítulo significativo nessa jornada.</p>

            <p>A quebra intencional do infinito não representa um fim, mas sim um novo começo — um ciclo que se renova com a certeza de que a inovação e a adaptação são os pilares que sustentam o futuro da marca.</p>
          </div>
        </div>
      </section>
    )
  }
  
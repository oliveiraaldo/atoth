export const metadata = {
  title: 'Consultorias | Atoth Consultoria',
  description: 'Conheça nossos serviços de consultoria empresarial e soluções para sua empresa.',
  keywords: ['consultoria', 'consultoria empresarial', 'serviços', 'soluções empresariais'],
  openGraph: {
    title: 'Consultorias | Atoth Consultoria Empresarial',
    description: 'Serviços especializados de consultoria para melhorar a performance da sua empresa.',
    url: 'https://atoth.com/consultorias',
    siteName: 'Atoth Consultoria Empresarial',
    type: 'article',
  },
}

import Image from 'next/image'

export default function ConsultoriasPage() {
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
      <div className="px-8 mb-10">
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-blue-500 text-[18px]">Consultorias</h5>
        </div>

        <div className="flex flex-col items-center pt-4">
            <h2 className="text-blue-900 text-[40px] text-center">Qualificação para Melhores Resultados</h2>
        </div>
        <div className="text-justify text-blue-900 pt-4">
          <p>Nos dias atuais, tanto as organizações privadas quanto as públicas reconhecem a necessidade de continuamente melhorarem sua forma de atuação nos mercados em que atuam, tendo como objetivo um melhor posicionamento estratégico e um melhor desempenho. Um dos principais fundamentos nesta nova ordem é a reorganização destas empresas e de seus profissionais através da capacitação e do aumento de conhecimento.</p>
          <p className='py-4'>A (Atoth Consultoria em Gestão empresarial) foi criada com o intuito de atender a estas organizações e aos profissionais que têm como objetivo destacarem-se em seus respectivos ramos de atuação. Nossas equipes usam conhecimento local e global para ajudá-lo a desafiar convenções e apresentar estratégias que funcionam especificamente para o seu negócio e necessidade. Através de nossos consultores a </p>
          <p>Atoth Consultoria fará parte de sua equipe de trabalho, participando da implementação dos sistemas, não só como orientador do processo, mas também de forma operacional contribuindo para a efetiva realização das atividades planejadas com pleno sucesso. Colocamos a disposição das organizações e dos profissionais um grande leque de serviços ligados à Gestão de negócios.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 mb-10 place-items-center">
        <div>
          <h3 className="text-blue-900 text-[32px] pl-5 text-center md:text-left">Consultorias em:</h3>
          <ul className="text-blue-900 list-disc pl-6 pt-4">
            <li><a href="#">Sistema de Gestão da Qualidade</a></li>
            <li><a href="#">Sistema de Gestão Ambiental</a></li>
            <li><a href="#">Sistema de Gestão de Segurança e Saúde Ocupacional</a></li>
            <li><a href="#">Sistema de Gestão Integrada</a></li>
            <li><a href="#">Sistema de Gestão da Qualidade Automotiva</a></li>
            <li><a href="#">Gerenciamento de Riscos (ISO 31000)</a></li>
            <li><a href="#">Gestão de Riscos Aplicado à ISO 9001, ISO 14001, ISO 45001 e IATF 16949</a></li>
            <li><a href="#">Gestão de Processos</a></li>
            <li><a href="#">Sistema de Gestão Empresarial e Financeira</a></li>
            <li><a href="#">RGCP – Requisitos Gerais de Certificação de Produtos Portaria INMETRO Nº 118/2015</a></li>
          </ul>
        </div>
        <div>
          <Image
            src="./consultorias.svg" 
            alt="Estratégias e Soluções focadas em Resultados"
            quality={100}
            priority
            className="w-full h-auto"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </section>
  )
} 
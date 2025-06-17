'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { AiOutlineLeft, AiOutlineRight, AiFillStar } from 'react-icons/ai'

const testimonials = [
  {
    text: "“Meu nome é Giovanni, sou o Gerente da Qualidade da Arkema química Ltda. Tivemos o privilégio de trabalhar por 3 anos com a atoth, que nos trouxe vários benefícios como: mapeamento de processos, procedimentos por escrito, padronização das atividades, e claro, nos mostrou ferramentas de melhoria de processos que nos ajudou a trabalhar de maneira mais eficaz. Só temos a agradecer o senhor Rogério Gomes por todos esses anos de parceria.”",
    name: "Giovanni Molinaro",
    role: "Gerente do Sistema de Qualidade",
    company: "Arkema Brasil.",
    website: "www.arkema.com",
  },
  {
    text: "“O Rogério da Atoth tem sido um grande parceiro da Dynatronix desde 2007. Foi responsável por um grande movimento de mudança cultural dentro da empresa, que nos trouxe ao nível de excelência e qualidade que alcançamos hoje...”",
    name: "Nathan Leitão",
    role: "Diretor Industrial",
    company: "Dynatronix Indústria e Comércio Ltda",
    website: "www.dynatronix.com.br",
  },
  {
    text: `"Rogério da Atoth chegou na Eurometal através de ótimos trabalhos realizados em grandes empresas... Nos apresentou documentos de fácil entendimento e por fim um trabalho árduo em 6 meses é claro o sucesso foi certo!"`,
    name: "Juliana",
    role: "Gerente do Sistema de Gestão da Qualidade",
    company: "Eurometal Indústria e Comércio Ltda.",
    website: "www.euromar.com.br",
  },
  {
    text: "“Deixamos aqui o nosso “muito obrigado” pelo profissionalismo e comprometimento da empresa Atoth, através do envolvimento do Sr. Rogério Gomes, com o projeto para migração da norma ISO 9001:2008 para a versão ISO 9001:2015. Esta migração transcorreu de forma satisfatória, envolvendo todos os colaboradores da empresa, sendo realizada com muita competência e dedicação.”",
    name: "Edson Luiz de Freitas",
    role: "Garantia da Qualidade",
    company: "Conmtemp",
    website: "www.contemp.com.br",
  },
  // {
  //   text: "“O apoio da Atoth para auxiliar nos ajustes do Sistema de Gestão da RFS foi crucial para o sucesso da certificação ISO 9001:2015 e 14001:2015. Com o uso de metodologias simples e trazendo ferramentas para dar suporte no atendimento dos requisitos das normas, o envolvimento da Alta Direção e dos Líderes de Processos tornou-se algo natural, o que acelerou a adequação dos processos nos padrões da ISO. A Atoth não chegou como uma consultoria, mas sim como uma parceira, complemente comprometida com a melhoria dos processos e na busca dos resultados tanto para a empresa quanto para o Sistema de Gestão. O Rogério Gomes, Diretor Geral da Atoth, sempre mostrou-se colaborativo e participativo e, nas conversas que temos, ele nunca se refere à RFS como “Vocês” e sempre se posiciona sentindo-se parte da equipe e referindo-se como “NÓS”. Enfim, a parceria da RFS e Atoth tem trazido excelentes resultados e manteremos essa cooperação nos projetos futuros em desenvolvimento.”",
  //   name: "Idallécio Lima",
  //   role: "Quality Manager",
  //   company: "RFS Brasil",
  //   website: "www.rfs.com.br",
  // },
  {
    text: `"Rogerio é um parceiro de longa data da Layher e não é por acaso. Ele tem ajudado enormemente ao desenvolvimento da empresa graças a visão estratégica que possui e que além do mais coloca excelentemente na prática. O compromisso dele com as tarefas e os prazos é algo muito destacável pois gera confiança e faz com que a consultoria flua de maneira adequada. Gostaria de destacar a capacidade do Rogerio de homogenizar a estratégia e processos ao longo de diferentes unidades, desde as mais consolidadas as mais novas."`,
    name: "Sérgio Lobo",
    role: "CEO – Layher Brasil/ México e Colômbia",
    company: "Layher Brasil Ltda.",
    website: "www.layher.com.br",
  },
  {
    text: `"Gostaríamos de registrar nossa satisfação com os serviços prestados pela Atoth Consultoria, cuja parceria tem sido fundamental ao longo dos últimos anos, especialmente nas áreas de certificações ISO e construção de procedimentos internos. A equipe da Atoth sempre demonstrou dedicação, competência técnica e atenção ao cliente, contribuindo diretamente para o sucesso das nossas auditorias e para o fortalecimento da nossa governança interna.Em especial, destacamos o trabalho do consultor Rogério, cuja experiência, comprometimento e proximidade com o nosso time foram decisivos para alcançarmos resultados sólidos e consistentes."`,
    name: "André Fazia",
    role: "CEO",
    company: "WKR Prime Representação Comercial Ltda",
    website: "https://www.wkrprime.com.br/pt/",
  },
  {
    text: `"Parabenizamos a Atoth Consultoria pelos seus 10 anos de trajetória! Ao longo desses anos, sua expertise tem sido fundamental para nos auxiliar no mapeamento de processos, padronização de atividades e fortalecimento de nossas auditorias. A Arkema agradece pela parceria sólida e pelo compromisso com a excelência, além de contribuírem de forma significativa para nossos avanços"`,
    name: "Carlos de Lion",
    role: "Presidente",
    company: "Arkema Brasil e Cone Sul",
    website: "https://www.arkema.com/brazil/pt/",
  },
  {
    text: `"Utilizamos a consultoria Atoth inicialmente com o foco na transição NBR - ISO 9001:2015, cujo trabalho foi excelente no alcance do requisito "chave" riscos e oportunidades do negócio – da norma . Dando continuidade aos trabalhos de qualidade, Rogério nos auxiliou na utilização de ferramentas da qualidade – identificação de causas e resolução de problemas, como também uso do APQP/FMEA no que tange ao desenvolvimento de produtos e processos visando ações preventivas para garantir a qualidade na fabricação. Hoje, essas ferramentas, já fazem parte do dia a dia da PLP, o qual sem o devido apoio Atoth, não seria possível. Gratidão!"`,
    name: "Ana Lúcia M. André",
    role: "Executive Manager",
    company: "PLP – Brasil",
    website: "https://www.plp.com.br",
  },
  {
    text: `"Minha grata experiência com a Atoth Consultoria começa em 2015, quando notando os riscos do nosso negócio decidimos contratá-los para mapeamento de todos os nossos processos e certificar a Premier Pack nas Normas ISO 9001, com o objetivo de mitigar tais riscos e desenvolver no nosso time a importância de trabalhar de forma organizada e sistematizada. Os desafios foram 3, o mapeamento completo através do envolvimento das equipes, a adequação das normas levando-se em conta o nosso negócio e a certificação no prazo de 6 meses, esse último realmente desafiador. De forma muito focada e determinada o Rogério conseguiu atingir o objetivo no tempo previsto, mas não foi somente isso. Ele soube envolver toda a equipe mostrando sua liderança, que foi contribuída com o comprometimento de todos. Pelo trabalho exemplar deixado pela Atoth Consultoria nossa equipe trabalha diariamente na manutenção e atualização das Normas ISO 9001"`,
    name: "Marcelo Falcão",
    role: "Diretor Geral",
    company: "Premier Pack",
    website: "https://www.premierpack.com.br",
  },
]

export default function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: true })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative w-full mx-auto container">
      {/* Botões de navegação */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow text-blue-500 hover:bg-blue-500 hover:text-white"
      >
        <AiOutlineLeft size={20} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow text-blue-500 hover:bg-blue-500 hover:text-white"
      >
        <AiOutlineRight size={20} />
      </button>

      <div className="px-12">
        {/* Carrossel */}
        <div className="overflow-hidden px-10" ref={emblaRef}>
        <div className="flex gap-15 pl-15 pr-15">
        {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[400px] bg-blue-50 p-10 rounded-sm flex flex-col justify-between text-[16px] text-blue-900 text-justify"
              >
                <div className="mb-4 text-blue-500 flex gap-1 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>

                <p className="text-[16px] pb-4">{item.text}</p>

                <div className="mt-auto text-left">
                  <h3 className="font-bold text-[23px]">{item.name}</h3>
                  <p className="">{item.role}</p>
                  <p className="">{item.company}</p>
                  <a
                    href={`https://${item.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-800 underline mt-1 inline-block"
                  >
                    {item.website}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

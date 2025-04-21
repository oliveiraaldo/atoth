import Slider from '@/app/components/Slider'

export const metadata = {
    title: 'Sobre Nós',
    description: 'Conheça mais sobre a nossa missão, visão e equipe.',
    keywords: ['sobre', 'empresa', 'missão', 'valores'],
    openGraph: {
      title: 'Sobre Nós Teste de Deploy',
      description: 'Informações institucionais sobre nossa empresa.',
      url: 'https://seudominio.com/about',
      siteName: 'Nome do Site',
      type: 'article',
    },
  }
  
  export default function AboutPage() {
    return (
      <section>
        <h1 className="text-3xl font-bold py-6">Sobre Nós Teste de Deploy</h1>
        <p className='pb-6'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit doloribus ea error animi omnis obcaecati non distinctio rerum culpa doloremque amet laborum assumenda natus? Modi animi maxime ut quisquam?
        </p>
        < Slider />
      </section>
    )
  }
  
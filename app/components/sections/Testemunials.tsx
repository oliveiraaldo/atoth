import EmblaCarousel from './Slider'

export default function Testemunials() {
  return (
    <section className="testimonials">
        <div className="container mx-auto text-white text-justify">
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-blue-500 text-[18px]">Competência e Excelência Comprovadas</h5>
        </div>

        <div className="flex flex-col items-center justify-center pt-4">
            <h2 className="text-blue-900 text-[40px]">Clientes Satisfeitos</h2>
        </div>        
        </div>

        <div className="slider mt-10">
          <EmblaCarousel />
        </div>
  </section>
)}
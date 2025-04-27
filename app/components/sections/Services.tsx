import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { FiPieChart } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

export default function Services() {
  return (
    <section className="services container mx-auto">
    <div className="flex flex-col items-center justify-center">
      <h5 className="text-blue-500 text-[18px]">Nossos Serviços</h5>
    </div>

    <div className="flex flex-col items-center justify-center pt-4">
      <h2 className="text-blue-900 text-[40px]">Soluções Empresariais Personalizadas</h2>
    </div>

    <div className="flex flex-col items-center justify-center text-justify pt-4">
      <p className="text-blue-900 text-[18px]">
      Na Atoth Consultoria em Gestão Empresarial, acreditamos que o conhecimento é a chave para transformar organizações. Com uma abordagem prática e estratégica, oferecemos serviços personalizados que atendem às necessidades de empresas públicas e privadas, bem como profissionais que buscam se destacar em seus mercados. Nossos consultores atuam como parceiros, integrando-se às suas equipes para implementar soluções eficazes e sustentáveis.
      </p>
    </div>
    
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
      {/* card 1 */}
      <Link href="/consultorias" className="group hover:bg-blue-500 hover:text-white hover:rounded-md">
        <div className="bg-blue-50 rounded-md w-full h-80 flex flex-col justify-between p-8 border-b-6 border-blue-300 group-hover:bg-blue-500">
          {/* Header */}
          <div className="text-blue-500 group-hover:text-white text-4xl">
            <FiPieChart />
          </div>

          {/* Body */}
          <div className="flex-1 mt-2 mb-2 overflow-hidden mt-5">
            <h4 className="text-blue-900 group-hover:text-white text-[18px]">
              Consultorias
            </h4>
            <p className="text-sm text-gray-700 group-hover:text-white mt-1 line-clamp-4">
              Oferecemos soluções personalizadas em gestão empresarial, normas como ISO 9001, ISO 14001 e IATF 16949, para otimizar processos, mitigar riscos e impulsionar resultados sustentáveis.
            </p>
          </div>

          {/* Footer */}
          <div>
            <span className="flex items-center gap-2 text-[18px] text-blue-900 group-hover:text-white font-medium cursor-pointer pt-5">
              Saiba mais <CgArrowLongRight />
            </span>
          </div>
        </div>          
      </Link>
      {/* fim do card 1 */}
      

      {/* card 2 */}
      <Link href="/treinamentos" className="group hover:bg-blue-500 hover:text-white hover:rounded-md">
        <div className="bg-blue-50 rounded-md w-full h-80 flex flex-col justify-between p-8 border-b-6 border-blue-300 group-hover:bg-blue-500">
          {/* Header */}
          <div className="text-blue-500 group-hover:text-white text-4xl">
            <FaUsers />
          </div>

          {/* Body */}
          <div className="flex-1 mt-2 mb-2 overflow-hidden mt-5">
            <h4 className="text-blue-900 group-hover:text-white text-[18px]">
              Treinamentos
            </h4>
            <p className="text-sm text-gray-700 group-hover:text-white mt-1 line-clamp-4">
              Treinamentos para Excelência: Desenvolvemos equipes competentes com cursos práticos e focados em resultados. Treinamos equipes em todo o Brasil.
            </p>
          </div>

          {/* Footer */}
          <div>
            <span className="flex items-center gap-2 text-[18px] text-blue-900 group-hover:text-white font-medium cursor-pointer pt-5">
              Saiba mais <CgArrowLongRight />
            </span>
          </div>
        </div>          
      </Link>
      {/* fim do card 2 */}
    </div>
  </section>
  )
}
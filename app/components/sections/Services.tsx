import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { FiPieChart } from "react-icons/fi";
import { FaUsers, FaSearch, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";

export default function Services() {
  return (
    <section className="services container mx-auto">
    <div className="flex flex-col items-center justify-center">
      <h5 className="text-blue-500 text-[18px]">Nossos Serviços</h5>
    </div>

    <div className="flex flex-col items-center justify-center pt-4 text-center">
      <h2 className="text-blue-900 text-[40px]">Soluções Empresariais Personalizadas</h2>
    </div>

    <div className="flex flex-col items-center justify-center text-justify pt-4">
      <p className="text-blue-900 text-[18px]">
      Na Atoth Consultoria em Gestão Empresarial, acreditamos que o conhecimento é a chave para transformar organizações. Com uma abordagem prática e estratégica, oferecemos serviços personalizados que atendem às necessidades de empresas públicas e privadas, bem como profissionais que buscam se destacar em seus mercados. Nossos consultores atuam como parceiros, integrando-se às suas equipes para implementar soluções eficazes e sustentáveis.
      </p>
    </div>
    
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-10">
      {/* card 1 */}
      <Link href="/consultorias" className="group hover:bg-blue-500 hover:text-white hover:rounded-md">
        <div className="bg-blue-50 rounded-md w-full h-95 flex flex-col justify-between p-8 border-b-6 border-blue-300 group-hover:bg-blue-500">
          {/* Header */}
          <div className="text-blue-500 group-hover:text-white text-4xl">
            <FiPieChart />
          </div>

          {/* Body */}
          <div className="flex-1 mt-2 mb-2 overflow-hidden">
            <h4 className="text-blue-900 group-hover:text-white text-[18px]">
              Consultorias
            </h4>
            <p className="text-sm text-gray-700 group-hover:text-white mt-4 line-clamp-4 h-100">
              Reorganização de empresas e de seus profissionais através da capacitação e do aumento de conhecimento.
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
        <div className="bg-blue-50 rounded-md w-full h-95 flex flex-col justify-between p-8 border-b-6 border-blue-300 group-hover:bg-blue-500">
          {/* Header */}
          <div className="text-blue-500 group-hover:text-white text-4xl">
            <FaUsers />
          </div>

          {/* Body */}
          <div className="flex-1 mt-2 mb-2 overflow-hidden">
            <h4 className="text-blue-900 group-hover:text-white text-[18px]">
              Treinamentos
            </h4>
            <p className="text-sm text-gray-700 group-hover:text-white mt-4 line-clamp-4 h-100">
              Cursos para tornar equipes mais competentes em seus ramos de atuações, sempre focado em resultados.
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

      {/* card 3 - Gestão de Negócios */}
      <Link href="/gestao-de-negocios" className="group hover:bg-blue-500 hover:text-white hover:rounded-md">
        <div className="bg-blue-50 rounded-md w-full h-95 flex flex-col justify-between p-8 border-b-6 border-blue-300 group-hover:bg-blue-500">
          {/* Header */}
          <div className="text-blue-500 group-hover:text-white text-4xl">
            <MdOutlineManageAccounts />
          </div>
          {/* Body */}
          <div className="flex-1 mt-2 mb-2 overflow-hidden">
            <h4 className="text-blue-900 group-hover:text-white text-[18px]">
              Gestão de Negócios
            </h4>
            <p className="text-sm text-gray-700 group-hover:text-white mt-4 line-clamp-4 h-100">
              Resultados de sucesso! A Gestão é um dos fatores primordiais para o sucesso do seu negócio.
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
      {/* fim do card 3 */}

      {/* card 4 - Auditorias */}
      <Link href="/auditorias-e-diagnosticos" className="group hover:bg-blue-500 hover:text-white hover:rounded-md">
        <div className="bg-blue-50 rounded-md w-full h-95 flex flex-col justify-between p-8 border-b-6 border-blue-300 group-hover:bg-blue-500">
          {/* Header */}
          <div className="text-blue-500 group-hover:text-white text-4xl">
            <FaSearch />
          </div>
          {/* Body */}
          <div className="flex-1 mt-2 mb-2 overflow-hidden mt-5">
            <h4 className="text-blue-900 group-hover:text-white text-[18px]">
              Auditorias e Diagnósticos
            </h4>
            <p className="text-sm text-gray-700 group-hover:text-white mt-4 line-clamp-4 h-100">
              Mais do que um mecanismo de garantia para toda a organização, o processo de auditoria interna e externa tem um papel de grande relevância na criação de valor para o seu negócio.
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
      {/* fim do card 4 */}

      {/* card 5 - Diagnósticos e Desenvolvimento da Cadeia de Fornecedores */}
      <Link href="/desenvolvimento-fornecedores" className="group hover:bg-blue-500 hover:text-white hover:rounded-md">
        <div className="bg-blue-50 rounded-md w-full h-95 flex flex-col justify-between p-8 border-b-6 border-blue-300 group-hover:bg-blue-500">
          {/* Header */}
          <div className="text-blue-500 group-hover:text-white text-4xl">
            <FaProjectDiagram />
          </div>
          {/* Body */}
          <div className="flex-1 mt-2 mb-2 overflow-hidden">
            <h4 className="text-blue-900 group-hover:text-white text-[18px]">
              Desenvolvimento da Cadeia de Fornecedores
            </h4>
            <p className="text-sm text-gray-700 group-hover:text-white mt-4 line-clamp-4 h-100">
              Realizamos a gestão de todas as operações associadas à organização, garantindo a coordenação e integração entre clientes e fornecedores que compõe a cadeia de uma determinado segmento industrial.
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
      {/* fim do card 5 */}
    </div>
  </section>
  )
}
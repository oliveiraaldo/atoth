import { TbReportAnalytics } from "react-icons/tb";
import { PiUsersThree } from "react-icons/pi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { BsBuildingCheck } from "react-icons/bs";

export default function Numbers() {
  return (
    <section className="numbers bg-blue-50 p-8">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-blue-500 text-[36px] text-center">
          Números que comprovam nossa excelência
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 container mx-auto">
        {/* Auditorias */}
        <div className="flex flex-col items-center">
          <div className="text-blue-500 text-5xl mb-4">
            <TbReportAnalytics className="h-16 w-16" />
          </div>
          <h2 className="text-blue-900 text-3xl font-bold mb-2">600<span className="text-blue-500">+</span></h2>
          <p className="text-blue-900 text-center font-medium">
            Auditorias<br />Realizadas
          </p>
        </div>

        {/* Profissionais */}
        <div className="flex flex-col items-center">
          <div className="text-blue-500 text-5xl mb-4">
            <PiUsersThree className="h-16 w-16" />
          </div>
          <h2 className="text-blue-900 text-3xl font-bold mb-2">1000<span className="text-blue-500">+</span></h2>
          <p className="text-blue-900 text-center font-medium">
            Profissionais<br />Treinados
          </p>
        </div>

        {/* Sistemas */}
        <div className="flex flex-col items-center">
          <div className="text-blue-500 text-5xl mb-4">
            <BsBuildingCheck className="h-16 w-16" />
          </div>
          <h2 className="text-blue-900 text-3xl font-bold mb-2">100<span className="text-blue-500">+</span></h2>
          <p className="text-blue-900 text-center font-medium">
            Sistemas<br />Implementados
          </p>
        </div>

        {/* Entregas */}
        <div className="flex flex-col items-center">
          <div className="text-blue-500 text-5xl mb-4">
            <LuCalendarCheck2 className="h-16 w-16" />
          </div>
          <h2 className="text-blue-900 text-3xl font-bold mb-2">100<span className="text-blue-500">%</span></h2>
          <p className="text-blue-900 text-center font-medium">
            Entregas no<br />prazo
          </p>
        </div>
      </div>
    </section>
  )
}
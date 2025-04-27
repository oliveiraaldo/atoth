import Image from "next/image";
import { TbReportAnalytics } from "react-icons/tb";
import { PiUsersThree } from "react-icons/pi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { BsBuildingCheck } from "react-icons/bs";

export default function Numbers() {
  return (
    <section className="numbers bg-blue-50 py-15 container mx-auto px-10 md:px-0">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-blue-500 text-[36px] text-center">
          Números que comprovam nossa excelência
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 container mx-auto">

        {/* Auditorias */}
        <div className="flex items-center justify-center gap-4">
          <div className="icon text-blue-500 text-[60px]">  
            <TbReportAnalytics />
          </div>
          <div className="right-number text-center">
            <div className="number text-blue-900 text-[28px] md:text-[32px] font-bold">
              300 <span className="text-blue-500">+</span>
            </div>
            <div className="description">
              <p className="text-blue-900 text-center font-medium">
                Auditorias<br />Realizadas
              </p>
            </div>
          </div>
        </div>

        {/* Treinamentos */}
        <div className="flex items-center justify-center gap-4">
          <div className="icon text-blue-500 text-[60px]">  
            <PiUsersThree />
          </div>
          <div className="right-number text-center">
            <div className="number text-blue-900 text-[28px] md:text-[32px] font-bold">
              500 <span className="text-blue-500">+</span>
            </div>
            <div className="description">
              <p className="text-blue-900 text-center font-medium">
                Profissionais<br />Treinados
              </p>
            </div>
          </div>
        </div>

        {/* Sistemas */}
        <div className="flex items-center justify-center gap-4">
          <div className="icon text-blue-500 text-[60px]">  
            <BsBuildingCheck />
          </div>
          <div className="right-number text-center">
            <div className="number text-blue-900 text-[28px] md:text-[32px] font-bold">
              600 <span className="text-blue-500">+</span>
            </div>
            <div className="description">
              <p className="text-blue-900 text-center font-medium">
                Sistemas<br />Implementados
              </p>
            </div>
          </div>
        </div>

        {/* Prazo */}
        <div className="flex items-center justify-center gap-4">
          <div className="icon text-blue-500 text-[60px]">  
            <LuCalendarCheck2 />
          </div>
          <div className="right-number text-center">
            <div className="number text-blue-900 text-[28px] md:text-[32px] font-bold">
              100 <span className="text-blue-500">%</span>
            </div>
            <div className="description">
              <p className="text-blue-900 text-center font-medium">
                Entregues<br />no Prazo
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
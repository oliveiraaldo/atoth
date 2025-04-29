import Link from "next/link";

export default function Cta() {
    return (
        <div className="flex flex-col items-center justify-center bg-blue-50 p-10 rounded-md mt-12"> 
            <h3 className="text-blue-500 text-[34px] md:text-[36px] text-center">Quer revolucionar os resultados de sua empresa?</h3>
            <Link 
                href="https://wa.me/5511983646546"
                target="_blank"
            >
                <button className="bg-blue-500 text-white px-4 py-2 rounded-sm mt-6 hover:bg-blue-900 transition-all duration-300 cursor-pointer">Entre em contato</button>
            </Link>
        </div>
    )
}
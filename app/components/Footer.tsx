import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaWhatsapp, FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="text-[14px]">
      <div className="bg-blue-900 text-white p-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
            <div className='flex md:justify-start justify-center w-full items-center'>
              <Link href="/" className="flex justify-center md:justify-start">
                <Image
                  src="/logo-footer.svg"
                  width={130}
                  height={81}
                  alt="Logotipo Atoth Consultoria Empresarial"
                  className="mx-auto md:mx-0 w-auto h-auto"
                  priority
                  quality={100}
                  unoptimized
                />
              </Link>
            </div>
            <div className='flex text-center items-center justify-center gap-3 text-3xl'>
              <Link href="https://wa.me/5511983646546" target="_blank" className="text-white hover:text-blue-300 transition">
                < FaInstagram/>
              </Link>
              <Link href="https://www.linkedin.com/in/rogerio-gomes-7000228?originalSubdomain=br" target="_blank" className="text-white hover:text-blue-300 transition">
                < FaWhatsapp/>
              </Link>
              <Link href="https://www.linkedin.com/in/rogerio-gomes-7000228?originalSubdomain=br" target="_blank" className="text-white hover:text-blue-300 transition">
                < FaLinkedin/>
              </Link>
            </div>
            <div className='md:text-right'>
              <ul className='flex flex-col gap-2'>
                <li className="flex items-center md:justify-end justify-center">
                  <span className="order-1">São Paulo</span>
                  <FaMapMarkerAlt className="ml-2 order-2"/>
                </li>
                <li className="flex items-center md:justify-end justify-center">
                  <span className="order-1">rogerio.gomes@atoth.com.br</span>
                  <MdOutlineEmail className="ml-2 order-2"/>
                </li>
                <li className="flex items-center md:justify-end justify-center">
                  <span className="order-1">+55 (11) 98364-6546</span>
                  <FaPhone className="ml-2 order-2"/>
                </li>
              </ul>
            </div>
          </div>
      </div>
      <div className="bg-white text-blue-900 p-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          <div className='flex md:justify-start justify-center'>
            <p className="pr-2">Desenvolvido por </p>
            <Link href="https://www.lumidea.com.br" target="_blank">
              <Image
                src="/lumidea-logo.svg"
                width={98}
                height={28}
                quality={100}
                priority
                alt="Logotipo Lumidea Desenvolvimento de Software e Sites"
                unoptimized
              />
            </Link>
          </div>
          <div className='md:text-center'>
            <p>
              © Copyright {new Date().getFullYear()}. Atoth
            </p>
          </div>
          <div className='md:text-right'>
            <p>
              <Link href="/politica-de-privacidade">
                Politica de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </div>  
    </footer>
  )
}
  
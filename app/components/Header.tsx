'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { FaLinkedin, FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const menu = [
  { label: 'Home', href: '/' },
  {
    label: 'Institucional',
    children: [
      { label: 'Sobre', href: '/sobre' },
      { label: 'Concepção', href: '/concepcao' },
    ],
  },  
  {
    label: 'Serviços',
    children: [
      { label: 'Consultorias', href: '/consultorias' },
      { label: 'Treinamentos', href: '/treinamentos' },
      { label: 'Gestão de Negócios', href: '/gestao-de-negocios' },
      { label: 'Auditorias e Diagnósticos', href: '/auditorias-e-diagnosticos' },
      { label: 'Desenvolvimento da cadeia de fornecedores', href: '/desenvolvimento-fornecedores' },
    ],
  },
  { label: 'Depoimentos', href: '/depoimentos' },
  { label: 'Clientes', href: '/clientes' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Função para alternar o menu com um simples clique
  const toggleMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-50">
      {/* Barra superior */}
      <nav className="text-white bg-blue-500 hidden md:block text-[13px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-4 text-center md:text-left">
          <div className='flex md:justify-start justify-center gap-2'>
            <MdOutlineEmail className='text-xl'/>
            <span>rogerio.gomes@atoth.com.br</span>
          </div>
          <div className='flex md:justify-center justify-center gap-2'>
            <FaPhone className='text-md align-baseline mt-1'/>
            <span>+55 11 9 8364-6546</span>
          </div>
          <div className='flex md:justify-end justify-center gap-3'>
            <Link href="https://www.instagram.com/atoth_consultoria/" target="_blank" className="text-white hover:text-blue-300 transition">
              < FaInstagram className='text-2xl' />
            </Link>
            <Link href="https://wa.me/5511983646546" target="_blank" className="text-white hover:text-blue-300 transition">
              < FaWhatsapp className='text-2xl' />
            </Link>
            <Link href="https://www.linkedin.com/company/atoth-consultoria" target="_blank" className="text-white hover:text-blue-300 transition">
              < FaLinkedin className='text-2xl' />
            </Link>                        
          </div>
        </div>
      </nav>

      {/* Barra principal */}
      <nav className="container mx-auto flex items-center justify-between py-4 relative px-4 md:px-0">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={130}
              height={81}
              alt="Logotipo Atoth Consultoria Empresarial"
              priority
              quality={100}
              sizes="(max-width: 768px) 100px, 130px"
              className="w-auto h-auto"
              unoptimized
            />
          </Link>
        </div>

        {/* Ícone hamburguer (mobile only) */}
        <button
          ref={buttonRef}
          className="lg:hidden text-blue-900 relative h-14 w-14 flex items-center justify-center z-50 cursor-pointer"
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <span 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
              }`}
            >
              <span className="text-5xl">☰</span>
            </span>
            <span 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
              }`}
            >
              <IoClose size={36} />
            </span>
          </div>
        </button>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex space-x-6">
          {menu.map((item) => (
            <li
              key={item.label}
              className="relative group"
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className={`cursor-pointer ${
                    pathname === item.href ? 'text-blue-500' : 'text-blue-900'
                  } hover:text-blue-500 transition`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`cursor-pointer group-hover:text-blue-500 transition ${
                    item.children?.some(child => child.href === pathname)
                      ? 'text-blue-500'
                      : 'text-blue-900'
                  } flex items-center`}
                  onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                >
                  {item.label}
                </span>
              )}
              {item.children && (
                <ul
                  className={`absolute left-1/2 transform -translate-x-1/2 mt-2 flex flex-col gap-3 bg-white border-0 rounded shadow-lg z-50 transition-opacity duration-300 ${openSubmenu === item.label ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  style={{ minWidth: 220 }}
                >
                  {item.children.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 text-blue-900 hover:bg-neutral-200 whitespace-nowrap cursor-pointer"
                        onClick={() => setOpenSubmenu(null)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link
              href="https://wa.me/5511983646546"
              target='_blank'
              className='text-white bg-blue-500 hover:bg-blue-900 transition px-4 py-2 rounded cursor-pointer'
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Menu Mobile */}
        <div 
          ref={menuRef} 
          className={`absolute top-full right-0 w-full min-h-[200px] bg-white border-t border-neutral-200 md:hidden z-50 shadow text-[17px] transform transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col space-y-6 text-center px-40 py-10">
            {menu.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-blue-900 hover:text-blue-500 transition block cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="border-l-2 border-blue-500 flex flex-col gap-2 py-2">
                    <span className="block text-blue-900 text-center cursor-pointer">
                      {item.label}
                    </span>
                    <ul className="">
                      {item.children?.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="text-blue-900 hover:text-blue-500 block py-2 cursor-pointer"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link
                href="https://wa.me/5511983646546"
                target='_blank'
                className='text-white bg-blue-500 hover:bg-blue-900 transition px-4 py-2 rounded cursor-pointer'
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
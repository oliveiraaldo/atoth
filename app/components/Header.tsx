'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menu = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Preços', href: '/pricing' },
  { label: 'Contato', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">Atoth</div>
        <ul className="flex space-x-6">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${
                  pathname === item.href ? 'text-blue-600 font-semibold' : 'text-gray-700'
                } hover:text-blue-500 transition`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

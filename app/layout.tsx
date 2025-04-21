import './globals.css'
import { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: {
    default: 'Atoth | Consultoria em Gestão Empresarial',
    template: 'Atoth | %s',
  },
  description: 'Site institucional com serviços, blog e informações de contato.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-28 md:pt-42">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

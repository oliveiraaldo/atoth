import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
      <div className="author pb-2">
        Desenvolvido por <Link href="https://lumidea.com.br" target="_blank" >Lumidea</ Link>
      </div>
      <div className="rights">
        © {new Date().getFullYear()} Atoth. Todos os direitos reservados.
      </div>
    </footer>
  )
}
  
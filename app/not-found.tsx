export default function NotFound() {
    return (
      <section className="flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">Página não encontrada. Verifique o endereço digitado ou volte para a página inicial.</p>
        <a
          href="/"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Voltar para a Home
        </a>
      </section>
    )
  }
  
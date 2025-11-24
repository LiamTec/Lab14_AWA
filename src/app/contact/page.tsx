import Link from 'next/link';

export const metadata = {
  title: 'Contacto',
  description: 'Formulario de contacto estático',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Contacto</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Volver
          </Link>
        </div>

        <form action="#" method="post" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Nombre"
              className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <textarea
            name="message"
            placeholder="Mensaje"
            rows={6}
            className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Este formulario es estático y no envía datos.</p>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

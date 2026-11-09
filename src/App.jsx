function App() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-neutral-50 px-4">
      <main className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Proyecto base limpio con Tailwind CSS
        </h1>
        <p className="mt-2 text-neutral-600">
          Para comenzar, crea la siguiente estructura dentro de{' '}
          <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-sm">src/</code>:
        </p>

        <div className="mt-6 space-y-4">
          <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-neutral-900">
              <code className="rounded bg-violet-100 px-1.5 py-0.5 text-sm text-violet-700">src/pages/</code>
            </h2>
            <p className="mt-1.5 text-sm text-neutral-600">
              Componentes que representan una página completa de la app
              (Inicio, Perfil, Contacto, etc.).
            </p>
          </section>

          <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-neutral-900">
              <code className="rounded bg-violet-100 px-1.5 py-0.5 text-sm text-violet-700">src/services/</code>
            </h2>
            <p className="mt-1.5 text-sm text-neutral-600">
              Funciones que se comunican con el backend (fetch/axios). Los
              componentes las llaman para obtener o enviar datos.
            </p>
          </section>

          <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-neutral-900">
              <code className="rounded bg-violet-100 px-1.5 py-0.5 text-sm text-violet-700">.env</code> — URL del backend
            </h2>
            <p className="mt-1.5 text-sm text-neutral-600">
              Crea un archivo <code className="rounded bg-neutral-200 px-1.5 py-0.5">.env</code> en la
              raíz del proyecto con la URL del backend:
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-900 p-3 text-sm text-neutral-100">
              VITE_API_URL=http://localhost:3000/api
            </pre>
            <p className="mt-3 text-sm text-neutral-600">
              En los servicios se lee con{' '}
              <code className="rounded bg-neutral-200 px-1.5 py-0.5">import.meta.env.VITE_API_URL</code>.
              Las variables deben partir con <code className="rounded bg-neutral-200 px-1.5 py-0.5">VITE_</code> y
              hay que reiniciar <code className="rounded bg-neutral-200 px-1.5 py-0.5">npm run dev</code> si la cambias.
            </p>
          </section>

          <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-neutral-900">Rutas y menú</h2>
            <p className="mt-1.5 text-sm text-neutral-600">
              Para navegar entre páginas instala{' '}
              <code className="rounded bg-neutral-200 px-1.5 py-0.5">react-router-dom</code>:
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-900 p-3 text-sm text-neutral-100">
              npm install react-router-dom
            </pre>
            <p className="mt-3 text-sm text-neutral-600">
              Luego envuelve la app con <code className="rounded bg-neutral-200 px-1.5 py-0.5">BrowserRouter</code>,
              define tus <code className="rounded bg-neutral-200 px-1.5 py-0.5">Routes</code> y
              crea un menú básico con <code className="rounded bg-neutral-200 px-1.5 py-0.5">NavLink</code> en
              el header.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App

function Inicio() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <section className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 px-8 py-12 text-white shadow-lg">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-100">
          Bienvenido
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          ¡Hola! Qué bueno tenerte aquí
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-indigo-100">
          Este es el espacio de nuestra clase. Desde el menú puedes conocer a tus
          compañeros o ir a la sección de registro.
        </p>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Conocé al curso
          </h2>
          <p className="mt-2 text-slate-600">
            Visita la sección Compañeros para ver su página.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Nuevo por aquí?
          </h2>
          <p className="mt-2 text-slate-600">
            Encuentra la sección Registro en el menú de navegación.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Inicio
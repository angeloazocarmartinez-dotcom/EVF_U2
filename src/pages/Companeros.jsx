import { useEffect, useState } from 'react'
import { obtenerUsuarios } from '../services/usuario'
import { Link } from 'react-router-dom'

function Companeros() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    obtenerUsuarios()
      .then((datos) => setUsuarios(datos.users))
      .catch(() => setError('No se pudieron cargar los compañeros.'))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) return <p className="p-6">Cargando compañeros...</p>
  if (error) return <p className="p-6 text-red-600">{error}</p>

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Compañeros</h1>
      <Link
  to="/registro"
  className="mb-6 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
>
  Registrarme
</Link>

      <ul className="grid gap-4 sm:grid-cols-2">
        {usuarios.map((usuario) => (
          <li
            key={usuario.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold">
              {usuario.name} {usuario.lastName}
            </h2>
            <p className="mt-2 text-slate-600">RUT: {usuario.rut}</p>
            <p className="text-slate-600">Email: {usuario.email}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Companeros
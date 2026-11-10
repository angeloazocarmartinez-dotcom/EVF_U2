import { useState } from 'react'
import { registrarUsuario } from '../services/usuario'

function Registro() {
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')
  const [enviando, setEnviando] = useState(false)

  async function manejarEnvio(event) {
    event.preventDefault()
    setMensaje('')
    setError('')
    setEnviando(true)

    const formulario = event.currentTarget
    const datosFormulario = new FormData(formulario)

    const usuario = {
      name: datosFormulario.get('name'),
      lastName: datosFormulario.get('lastName'),
      rut: datosFormulario.get('rut'),
      email: datosFormulario.get('email'),
      password: datosFormulario.get('password'),
    }

    try {
      await registrarUsuario(usuario)
      setMensaje('¡Registro completado!')
      formulario.reset()
    } catch (error) {
      setError(error.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Registro</h1>

      <form
        onSubmit={manejarEnvio}
        className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <label className="block">
          <span className="mb-1 block font-medium">Nombre</span>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="mb-1 block font-medium">Apellido</span>
          <input
            name="lastName"
            type="text"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="mb-1 block font-medium">RUT</span>
          <input
            name="rut"
            type="text"
            placeholder="12.345.678-9"
            pattern="[0-9]{1,2}[.][0-9]{3}[.][0-9]{3}-[0-9kK]"
            title="Ingresá el RUT con puntos y guion, por ejemplo 12.345.678-9"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="mb-1 block font-medium">Correo electrónico</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="mb-1 block font-medium">Contraseña</span>
          <input
            name="password"
            type="password"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <button
          type="submit"
          disabled={enviando}
          className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
        >
          {enviando ? 'Registrando...' : 'Registrarme'}
        </button>

        {mensaje && <p className="text-green-700">{mensaje}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </main>
  )
}

export default Registro
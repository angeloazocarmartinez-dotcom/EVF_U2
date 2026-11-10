const API_URL = import.meta.env.VITE_API_URL

export async function registrarUsuario(usuario) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  })

  const datos = await res.json()

  if (!res.ok) {
    throw new Error(datos.message || `Error ${res.status} al registrar`)
  }

  return datos
}

export async function obtenerUsuarios() {
  const res = await fetch(`${API_URL}/users`)

  if (!res.ok) {
    throw new Error(`La API respondió con el estado ${res.status}`)
  }

  return res.json()
}
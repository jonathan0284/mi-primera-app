// Botón principal
document.getElementById('btn-empezar').addEventListener('click', () => {
  const mensaje = document.getElementById('mensaje-bienvenida')
  mensaje.textContent = '¡Hola! Tu app está funcionando correctamente 🎉'

  setTimeout(() => {
    mensaje.textContent = ''
  }, 3000)
})

// Botón secundario
document.getElementById('btn-info').addEventListener('click', () => {
  const mensaje = document.getElementById('mensaje-bienvenida')
  mensaje.textContent = 'Creado con Vite + HTML + JavaScript puro ⚡'

  setTimeout(() => {
    mensaje.textContent = ''
  }, 3000)
})
import '@styles/globals.css'

export const metadata = {
    title: "Dazaudio",
    description: "Inventario 7 de Agosto"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
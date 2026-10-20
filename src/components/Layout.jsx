
import { useEffect } from 'react'

const particles = Array.from({ length: 25 }, (_, index) => index)

function Layout({ children }) {
  useEffect(() => {
    document.title = 'Islam Ahmed | Laravel Developer'
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#09090B] text-white antialiased">
      {/* Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <span key={particle}></span>
        ))}
      </div>

      {/* Decorative Blobs */}
      <div className="hero-shape hero-shape-1 absolute top-24 left-24"></div>

      <div className="hero-shape hero-shape-2 absolute right-24 bottom-20"></div>

      {/* Background Glow */}
      <div className="absolute top-10 right-80 h-[700px] w-[700px] translate-x-1/2 rounded-full bg-violet-600/50 blur-[150px]"></div>

      <div className="absolute right-1/2 bottom-10 h-[200px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600 blur-[150px]"></div>

      {/* Page Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  )
}

export default Layout

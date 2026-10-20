
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.35, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)


  const renderLinks = (mobile = false) =>
    navLinks.map((link) => {
      const targetId = link.href.slice(1)
      const isActive = activeSection === targetId

      return (
        <li key={link.href} className="w-full text-center">
          <a
            href={link.href}
            onClick={(event) => {
              event.preventDefault()

              const target = document.getElementById(targetId)

              if (target) {
                setActiveSection(targetId)
                setIsMenuOpen(false)

                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })

                window.history.replaceState(null, '', link.href)
              } else {
                console.warn(`Section not found: #${targetId}`)
              }
            }}
            className={`${mobile
                ? 'mobile-nav-link block w-full py-2 touch-manipulation'
                : 'nav-link transition'
              } ${isActive
                ? 'text-violet-400 font-semibold'
                : 'text-white'
              }`}
          >
            {link.label}
          </a>
        </li>
      )
    })


  return (
    <nav
      id="navbar"
      className={`fixed top-5 left-1/2 z-50 w-[92%] max-w-7xl
        -translate-x-1/2 border transition-all duration-500
        ${isScrolled
          ? 'border-white/10 bg-black/40 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
        }`}
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] px-5 backdrop-blur-xl sm:px-6 lg:rounded-full lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={() => {
              setActiveSection('home')
              closeMenu()
            }}
            className="text-3xl font-black tracking-tight sm:text-4xl"
          >
            Islam<span className="text-violet-500">.</span>
          </a>

          <ul className="hidden items-center gap-8 font-medium lg:flex xl:gap-12">
            {renderLinks()}
          </ul>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center text-2xl text-zinc-200 transition hover:text-violet-400 lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <i
              className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'
                }`}
              aria-hidden="true"
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`relative z-50 ${isMenuOpen ? 'block' : 'hidden'
            } pb-5 lg:hidden`}
        >
          <ul className="flex flex-col items-center gap-5 border-t border-white/10 pt-4 font-medium">
            {renderLinks(true)}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

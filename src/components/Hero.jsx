
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const texts = ['Laravel Developer', 'Backend Engineer']

function Hero() {
  const heroRef = useRef(null)
  const typingRef = useRef(null)
  const glow1Ref = useRef(null)
  const glow2Ref = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const hero = heroRef.current
    const typingElement = typingRef.current

    if (!hero || !typingElement) return

    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingTimer

    // Typing effect
    function typeEffect() {
      const currentText = texts[textIndex]

      if (!isDeleting) {
        charIndex++
        typingElement.textContent = currentText.substring(0, charIndex)

        if (charIndex === currentText.length) {
          isDeleting = true
          typingTimer = setTimeout(typeEffect, 1800)
          return
        }
      } else {
        charIndex--
        typingElement.textContent = currentText.substring(0, charIndex)

        if (charIndex === 0) {
          isDeleting = false
          textIndex = (textIndex + 1) % texts.length
        }
      }

      typingTimer = setTimeout(typeEffect, isDeleting ? 60 : 100)
    }

    typeEffect()

    // Random particles
    particlesRef.current.forEach((particle) => {
      if (!particle) return

      gsap.set(particle, {
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
      })

      gsap.to(particle, {
        y: -100,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    // Entrance animations
    const context = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: 'power4.out',
      })

      gsap.from('.hero-subtitle', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.45,
      })

      gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
      })

      gsap.from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
      })

      gsap.from('.hero-social', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1,
      })

      gsap.from('.hero-image', {
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: 'back.out(1.7)',
      })
    }, hero)

    // Desktop mouse parallax
    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 20
      const y = (event.clientY / window.innerHeight - 0.5) * 20

      gsap.to([glow1Ref.current, glow2Ref.current], {
        x,
        y,
        duration: 1.5,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    }

    if (canHover) {
      hero.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      clearTimeout(typingTimer)
      hero.removeEventListener('mousemove', handleMouseMove)
      context.revert()
      gsap.killTweensOf(particlesRef.current)
    }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#09090B] pt-28"
    >
      {/* Background grid */}
      <div className="bg-grid absolute inset-0 opacity-[0.05]" />

      {/* Purple glows */}
      <div ref={glow1Ref} className="hero-glow hero-glow-1" />
      <div ref={glow2Ref} className="hero-glow hero-glow-2" />

      {/* Particles */}
      <div className="particles">
        {Array.from({ length: 25 }, (_, index) => (
          <span
            key={index}
            ref={(element) => {
              particlesRef.current[index] = element
            }}
          />
        ))}
      </div>

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 h-[900px] w-[900px]
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-teal-900 blur-[150px]"
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 h-72 w-full
        bg-gradient-to-t from-violet-900/20 to-transparent"
      />

      {/* Background grid overlay */}
      <div
        className="absolute inset-0 opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Background glows */}
      <div
        className="absolute top-10 right-80 h-[700px] w-[700px]
        translate-x-1/2 rounded-full bg-violet-600/50 blur-[150px]"
      />

      <div
        className="absolute right-1/2 bottom-10 h-[200px] w-[500px]
        -translate-x-1/2 rounded-full bg-blue-600 blur-[150px]"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <h1 className="hero-title mt-6 text-4xl leading-tight font-extrabold sm:text-5xl md:text-7xl">
              Islam{' '}
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                Ahmed
              </span>
            </h1>

            <h2
              id="typing"
              ref={typingRef}
              className="hero-subtitle mt-4 min-h-[36px] text-xl text-zinc-400 sm:text-2xl md:text-3xl"
            >
              Laravel Developer
            </h2>


            {/* Mobile Hero Image */}
            <div className="mt-8 flex justify-center lg:hidden">
              <div className="hero-image relative">
                <div
                  className="absolute inset-0 scale-110 animate-pulse
      rounded-full border-4 border-violet-500/40"
                />

                <div
                  className="absolute inset-0 rotate-12 scale-[1.15]
      rounded-full border border-violet-500 sm:scale-[1.18]"
                />

                <div className="orbit-dot dot-1" />
                <div className="orbit-dot dot-2" />

                <div
                  className="relative h-[220px] w-[220px] overflow-hidden
      rounded-full border-4 border-violet-500/20
      shadow-[0_0_80px_rgba(139,92,246,.35)]
      sm:h-[280px] sm:w-[280px]"
                >
                  <img
                    src="/images/formal.jpeg"
                    className="h-full w-full object-cover"
                    alt="Islam Ahmed"
                  />
                </div>
              </div>
            </div>

            <p className="hero-text mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:mt-8 sm:text-lg sm:leading-8">
              I build scalable backend applications using Laravel and PHP,
              with clean architecture, secure APIs, and efficient database
              solutions.
            </p>

            <div className="hero-buttons mt-8 flex flex-wrap items-center gap-4">
              <div className="hero-social">
                <div className="mt-8">
                  {/* Main buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="#projects"
                      className="btn-primary inline-flex items-center justify-center rounded-full bg-violet-600 px-7 py-4 font-medium transition hover:bg-violet-500"
                    >
                      View Projects
                    </a>

                    <a
                      href="https://drive.google.com/file/d/1no0U9syOPQgN9O14ZT3WEu7t4R0PtP6x/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/40 bg-white/5 px-7 py-4 font-medium text-white transition hover:border-violet-400 hover:bg-violet-500/20"
                    >
                      <i className="fa-solid fa-file-pdf" aria-hidden="true" />
                      View CV
                    </a>
                  </div>

                  {/* Social links */}
                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href="https://github.com/IslamAhmed74"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="GitHub"
                    >
                      <i className="fa-brands fa-github" aria-hidden="true" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/eslam-ahmed-668613205?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                    </a>

                    <a
                      href="https://wa.me/+0201122876999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="WhatsApp"
                    >
                      <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                    </a>

                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=eslamahmed231555@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="Email"
                    >
                      <i className="fa-solid fa-envelope" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="hidden justify-center lg:order-2 lg:mt-0 lg:flex">
            <div className="hero-image relative">
              <div
                className="absolute inset-0 scale-110 animate-pulse
                rounded-full border-4 border-violet-500/40"
              />

              <div
                className="absolute inset-0 rotate-12 scale-[1.15]
                rounded-full border border-violet-500 sm:scale-[1.18]"
              />

              <div className="orbit-dot dot-1" />
              <div className="orbit-dot dot-2" />

              <div
                className="relative h-[260px] w-[260px] overflow-hidden
                rounded-full border-4 border-violet-500/20
                shadow-[0_0_80px_rgba(139,92,246,.35)]
                sm:h-[320px] sm:w-[320px]
                lg:h-[380px] lg:w-[380px]"
              >
                <img
                  src="/images/formal.jpeg"
                  className="h-full w-full object-cover"
                  alt="Islam Ahmed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

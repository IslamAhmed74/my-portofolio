import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Icon } from '@iconify/react'
import { skillCategories } from '../data/skills'

gsap.registerPlugin(ScrollTrigger)

function Skills() {
  const skillsRef = useRef(null)

  
  useEffect(() => {
    const root = skillsRef.current

    if (!root) return

    const context = gsap.context(() => {
      const categories = root.querySelectorAll('.skill-category')

      categories.forEach((category) => {
        const title = category.querySelector('.skill-category-title')
        const cards = category.querySelectorAll('.skill-item')

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: category,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        })

        timeline.from(title, {
          opacity: 0,
          y: 35,
          duration: 0.6,
          ease: 'power3.out',
        })

        timeline.from(
          cards,
          {
            opacity: 0,
            y: 45,
            scale: 0.92,
            duration: 0.45,
            stagger: 0.08,
            ease: 'back.out(1.6)',
          },
          '-=0.2'
        )
      })
    }, root)

    return () => context.revert()
  }, [])
  return (
    <section
      ref={skillsRef}
      id="skills"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background effects */}
      <div className="absolute top-10 right-80 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-violet-600/50 blur-[150px]" />

      <div className="absolute right-80 bottom-10 h-[700px] w-[700px] translate-x-1/2 rounded-full bg-violet-600/50 blur-[150px]" />

      <div className="absolute top-1/8 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500 blur-[150px]" />

      <div className="absolute right-1/2 bottom-[12.5%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-600 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[5px] text-violet-400 uppercase sm:gap-3 sm:text-lg sm:tracking-[8px] lg:text-2xl lg:tracking-[10px]">
            <span className="h-px w-8 bg-violet-500 sm:w-10 lg:w-12" />

            My Skills

            <span className="h-px w-8 bg-violet-500 sm:w-10 lg:w-12" />
          </span>

          <h2 className="mt-5 text-4xl font-black text-white sm:mt-6 sm:text-5xl md:text-6xl">
            Technologies{' '}
            <span className="text-violet-500">
              I Work With
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
            Technologies, tools and frameworks I use to build
            modern, scalable and high-performance applications.
          </p>
        </div>

        {/* Skill categories */}
        {skillCategories.map((category) => (
          <div
            key={category.category}
            className="skill-category mb-14 sm:mb-16 lg:mb-20"
          >
            {/* Category title */}
            <div className="skill-category-title mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-violet-500/60 to-transparent" />

              <h3 className="whitespace-nowrap text-lg font-bold text-violet-400 sm:text-xl lg:text-2xl">
                {category.category}
              </h3>

              <div className="h-px flex-1 bg-gradient-to-l from-violet-500/60 to-transparent" />
            </div>

            {/* Skills grid */}
            <div className="skills-grid grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-5 lg:gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item"
                >
                  <div className="skill-icon-wrapper">
                    <Icon
                      icon={skill.icon}
                      width={70}
                      height={70}
                      className="skill-icon"
                      aria-hidden="true"
                    />
                  </div>

                  <h4 className="skill-title">
                    {skill.name}
                  </h4>

                  <p className="skill-desc">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

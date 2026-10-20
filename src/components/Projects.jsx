
import { projects } from '../data/projects'

function Projects() {
  return (
    
    <section id="projects" className="py-20 sm:py-24 lg:py-32">

      
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16 lg:mb-20">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold
            tracking-[5px] text-violet-400 uppercase
            sm:gap-3 sm:text-lg sm:tracking-[8px]
            lg:text-2xl lg:tracking-[10px]"
          >
            <span className="h-px w-8 bg-violet-500 sm:w-10 lg:w-12" />

            My Projects

            <span className="h-px w-8 bg-violet-500 sm:w-10 lg:w-12" />
          </span>

          <h2 className="mt-5 text-4xl font-black sm:mt-6 sm:text-5xl md:text-6xl">
            Featured{' '}
            <span className="text-violet-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
            Some of the projects I've built using modern technologies.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              {/* Image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="project-overlay">
                  {/* Demo button and credentials */}
                  <div className="demo-wrapper">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        Demo
                      </a>
                    )}

                    {/* {project.demoCredentials && (
                      <div className="demo-tooltip">
                        <div className="demo-tooltip-title">
                          Demo Admin Account
                        </div>

                        <div>
                          <span>Email:</span>{' '}
                          {project.demoCredentials.email}
                        </div>

                        <div>
                          <span>Password:</span>{' '}
                          {project.demoCredentials.password}
                        </div>
                      </div>
                    )} */}
                  </div>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn secondary"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project details */}
              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <hr className="project-divider" />

                {/* Tech stack */}
                <div className="project-stack flex flex-wrap items-center gap-2">
                  {project.stack.map((tech, index) => (
                    <span key={`${project.title}-${tech}-${index}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

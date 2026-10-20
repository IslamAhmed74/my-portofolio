
function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/2 h-[800px] w-[500px]
        -translate-x-1/2 rounded-full bg-blue-900 blur-[150px]"
      />
      

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center sm:mb-16 lg:mb-20">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold
            tracking-[5px] text-violet-400 uppercase
            sm:gap-3 sm:text-lg sm:tracking-[8px]
            lg:text-2xl lg:tracking-[10px]"
          >
            <span className="h-px w-8 bg-violet-500 sm:w-10 lg:w-12" />

            about me

            <span className="h-px w-8 bg-violet-500 sm:w-10 lg:w-12" />
          </span>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl lg:text-5xl">
            Passion Meets{' '}
            <span className="text-violet-500">Code</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Profile image */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl
              bg-violet-600/20 blur-3xl"
            />

            <div
              className="relative rounded-3xl border border-white/10
              bg-white/5 p-4 backdrop-blur-xl sm:p-6"
            >
              <img
                src="/images/profile.png"
                className="max-h-[550px] w-full rounded-2xl object-cover"
                alt="Islam Ahmed profile"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: About information */}
          <div>
            <h3 className="text-3xl leading-tight font-bold sm:text-4xl">
              Laravel Developer{' '}
              <span className="text-violet-500">
                &amp; Problem Solver
              </span>
            </h3>

            <p
              className="mt-6 text-base leading-7 text-zinc-400
              sm:mt-8 sm:text-lg sm:leading-8"
            >
              I build scalable backend applications using Laravel and PHP,
              with a focus on clean architecture, secure REST APIs, and
              efficient database solutions. I enjoy turning complex problems
              into reliable, maintainable software.
            </p>

            {/* Statistics */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
              <div className="about-card">
                <h4 className="text-3xl font-black text-violet-500 sm:text-4xl">
                  7+
                </h4>
                <p className="mt-2 text-zinc-400 sm:mt-3">
                  Projects
                </p>
              </div>

              <div className="about-card">
                <h4 className="text-3xl font-black text-violet-500 sm:text-4xl">
                  4+
                </h4>
                <p className="mt-2 text-zinc-400 sm:mt-3">
                  Years Learning
                </p>
              </div>

              <div className="about-card">
                <h4 className="text-3xl font-black text-violet-500 sm:text-4xl">
                  Laravel
                </h4>
                <p className="mt-2 text-zinc-400 sm:mt-3">
                  Main Framework
                </p>
              </div>

              <div className="about-card">
                <h4 className="text-3xl font-black text-violet-500 sm:text-4xl">
                  Egypt
                </h4>
                <p className="mt-2 text-zinc-400 sm:mt-3">
                  Location
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

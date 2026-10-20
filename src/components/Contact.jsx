
function Contact() {
  const emailUrl =
    'https://mail.google.com/mail/?view=cm&fs=1&to=eslamahmed231555@gmail.com'

  const contacts = [
    {
      title: 'Email',
      description: 'eslamahmed231555@gmail.com',
      icon: 'fa-solid fa-envelope',
      href: emailUrl,
      breakText: true,
    },
    {
      title: 'GitHub',
      description: 'View my projects',
      icon: 'fa-brands fa-github',
      href: 'https://github.com/IslamAhmed74',
    },
    {
      title: 'LinkedIn',
      description: "Let's connect",
      icon: 'fa-brands fa-linkedin-in',
      href: 'https://www.linkedin.com/in/eslam-ahmed-668613205?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute top-10 right-80 h-[700px] w-[700px] translate-x-1/2 rounded-full bg-violet-600/50 blur-[150px]" />

      <div className="absolute right-1/2 bottom-[12.5%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-600 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[4px] text-violet-400 uppercase sm:gap-3 sm:text-sm sm:tracking-[6px]">
            <span className="h-px w-8 bg-violet-500 sm:w-12" />

            Contact

            <span className="h-px w-8 bg-violet-500 sm:w-12" />
          </span>

          <h2 className="mt-5 text-4xl font-black text-white sm:mt-6 sm:text-5xl md:text-6xl">
            Let's <span className="text-violet-500">Talk</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8">
            Have a project in mind or want to get in touch?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        {/* Contact card */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-violet-950/20 backdrop-blur-xl sm:p-8 md:p-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <i className={contact.icon} aria-hidden="true" />
                </div>

                <h3>{contact.title}</h3>

                <p className={contact.breakText ? 'break-all' : undefined}>
                  {contact.description}
                </p>
              </a>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-8 border-t border-white/10 pt-6 text-center sm:mt-10 sm:pt-8">
            <p className="mb-5 text-zinc-400">
              Ready to work together?
            </p>

            <a
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-violet-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/30 sm:px-7 sm:py-4"
            >
              Get In Touch

              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

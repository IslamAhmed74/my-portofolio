
function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/IslamAhmed74',
      icon: 'fa-brands fa-github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eslam-ahmed-668613205?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      icon: 'fa-brands fa-linkedin-in',
    },
    {
      label: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=eslamahmed231555@gmail.com',
      icon: 'fa-solid fa-envelope',
    },
  ]

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:gap-6 md:flex-row">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-black text-white sm:text-3xl"
          >
            Islam<span className="text-violet-500">.</span>
          </a>

          {/* Copyright */}
          <p className="order-3 text-center text-xs text-zinc-500 sm:text-sm md:order-none">
            © {currentYear} Islam Ahmed. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label={link.label}
              >
                <i className={link.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

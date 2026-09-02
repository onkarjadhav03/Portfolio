import './Contact.css'

const LINKS = [
  { href: 'mailto:jadhavonkar333@gmail.com', label: 'jadhavonkar333@gmail.com', icon: '✉️' },
  { href: 'tel:+919611400449', label: '9611400449', icon: '📞' },
  { href: 'https://www.linkedin.com/in/jadhavonkar333/', label: 'LinkedIn', icon: '💼' },
  { href: 'https://github.com/onkarjadhav03/', label: 'GitHub', icon: '🖥️' },
  { href: './resume.pdf', label: 'Resume', icon: '📄' },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-card">
          <h2>Let's build something together</h2>
          <p>
            Open to full-stack and AI/automation roles — feel free to reach
            out for opportunities or collaborations.
          </p>
          <div className="contact-links">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener' : undefined}
              >
                {link.icon} {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import './About.css'

const FACTS = [
  { label: 'Based in', value: 'Belagavi, Karnataka, India' },
  { label: 'Education', value: 'MCA, RV College of Engineering' },
  { label: 'Focus', value: 'Full-Stack & AI Automation' },
  { label: 'Interests', value: 'Tabla, Chess, Football' },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="kicker">// About</div>
        <h2 className="sec-title">A bit about me</h2>
        <div className="about-grid">
          <div className="avatar-block">
            <div className="initials">OJ</div>
          </div>
          <div className="about-copy">
            <p>
              I'm Onkar Jadhav — born and raised in Belagavi. I did my
              undergrad at Gogte College of Commerce, Belgaum, then went on
              to RV College of Engineering, Bangalore, for my Master of
              Computer Applications.
            </p>
            <p>
              I'm a software engineer at heart, mainly drawn to full-stack
              web development. These days though, most of my time goes into
              AI-driven automation — building RAG pipelines, AI agents, and
              n8n workflows for real, working applications.
            </p>
            <p>
              Outside of work, I helped organize coding and LAN gaming events
              during college fests. I play the tabla, and I'm always up for a
              game of chess — or the occasional video game.
            </p>
            <div className="about-facts">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <span className="label">{f.label}</span>
                  <span className="value">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import './Hero.css'

const STATS = [
  { num: '2+', label: 'Years building software' },
  { num: '6', label: 'Shipped projects' },
  { num: 'MCA', label: 'RV College of Engineering' },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="eyebrow">
          <span className="dot"></span> Available for new opportunities
        </div>
        <h1>
          I build full-stack products{' '}
          <span className="grad">— and the AI agents</span> that live inside them.
        </h1>
        <p className="lede">
          I'm Onkar, a software engineer who works across the stack — React
          on the front end, Node.js APIs on the back. Lately most of my time
          goes into RAG pipelines, AI agents, and workflow automation.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>
        <div className="stat-row">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

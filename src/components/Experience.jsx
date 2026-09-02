import './Experience.css'

const JOBS = [
  {
    role: 'Software Developer',
    org: 'Watave Solutions',
    date: 'Oct 2025 — Sept 2026',
    points: [
      'Built and maintained full-stack web applications with Node.js, React.js, and RESTful APIs.',
      'Designed AI agents and RAG pipelines to power context-aware, automated responses.',
      'Built n8n-based workflow automations to cut down repetitive manual work.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Mphasis',
    date: 'Sept 2023 — Mar 2024',
    points: [
      'Worked hands-on with core web technologies (HTML, CSS, JavaScript) and SQL as part of backend development tasks.',
      'Contributed to database integration and backend logic for enterprise applications as part of a team.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="kicker">// Experience</div>
        <h2 className="sec-title">Where I've worked</h2>
        <div className="timeline">
          {JOBS.map((job) => (
            <div className="tl-item" key={job.org}>
              <div className="tl-head">
                <div>
                  <span className="tl-role">{job.role}</span> ·{' '}
                  <span className="tl-org">{job.org}</span>
                </div>
                <div className="tl-date">{job.date}</div>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

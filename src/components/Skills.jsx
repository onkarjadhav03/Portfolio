import './Skills.css'

const SKILL_GROUPS = [
  { title: 'Languages', tags: ['Java', 'JavaScript', 'Python', 'HTML'] },
  { title: 'Frontend', tags: ['React.js', 'HTML5', 'CSS'] },
  { title: 'Backend', tags: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Databases', tags: ['MySQL', 'MongoDB', 'SQL'] },
  { title: 'AI & Automation', tags: ['AI Agents', 'RAG', 'LLM Integration', 'n8n'] },
  { title: 'Tools', tags: ['Git', 'Version Control', 'Excel'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="kicker">// Skills</div>
        <h2 className="sec-title">What I work with</h2>
        <p className="sec-intro">
          A stack that spans frontend, backend, and the AI/automation layer
          increasingly sitting on top of both.
        </p>
        <div className="skill-groups">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

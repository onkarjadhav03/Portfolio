import './Projects.css'

const PROJECTS = [
  {
    tag: 'Full-Stack',
    title: 'Task & Project Management Platform',
    description:
      'A full-stack task and project management app — JWT and OAuth (Google/GitHub/Facebook) login, role-based access control, Kanban-style drag-and-drop boards, and automated email notifications.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    tag: 'AI / Voice',
    title: 'AI-Powered Conversational Voice Agent',
    description:
      'A voice-agent platform that simulates real-time interview, sales, and customer-support conversations, using LLM-driven persona generation, speech-to-text/text-to-speech, and full transcript logging.',
    stack: ['Node.js', 'LLM Integration', 'STT / TTS'],
  },
  {
    tag: 'AI / RAG',
    title: 'RAG-Based Document Q&A Application',
    description:
      'A full-stack RAG app — users upload documents and get context-aware, LLM-generated answers, powered by vector embeddings and semantic search.',
    stack: ['React', 'Node.js', 'Express', 'Vector Embeddings'],
  },
  {
    tag: 'Full-Stack',
    title: 'QR-Code Based Event Management System',
    description:
      'A system that streamlines event registration, ticket distribution, and attendee verification with QR codes, backed by a MySQL database for attendee and activity analytics.',
    stack: ['MySQL', 'QR Codes'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="kicker">// Projects</div>
        <h2 className="sec-title">Selected work</h2>
        <p className="sec-intro">
          A mix of full-stack products and AI tools I've built — from a
          Kanban-style project manager to a RAG document assistant.
        </p>
        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <div className="proj-card" key={p.title}>
              <div className="proj-tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="proj-stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

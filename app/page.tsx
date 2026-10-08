import Image from "next/image";

const projects = [
  {
    title: "After the Rain",
    kind: "CONTEMPORARY · STAGE",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1100&q=85",
    alt: "Dancer moving across a softly lit stage",
    className: "project-image project-image-wide",
  },
  {
    title: "Pulse / Pause",
    kind: "COMMERCIAL · MOVEMENT",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=900&q=85",
    alt: "Expressive dancer captured mid-movement",
    className: "project-image",
  },
  {
    title: "The In-Between",
    kind: "DANCE FILM · ENSEMBLE",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=85",
    alt: "Performers sharing a moment on stage",
    className: "project-image project-image-offset",
  },
];

const disciplines = [
  "Contemporary",
  "Commercial",
  "Movement direction",
  "Workshops",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=2200&q=90"
          alt="Dancer performing beneath dramatic stage lights"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#home" aria-label="Aarav Mehta home">
            AM<span>.</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#work">Selected work</a>
            <a href="#practice">Practice</a>
            <a href="#contact">Contact</a>
          </nav>
          <span className="demo-label">DEMO PROFILE</span>
        </header>

        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            CHOREOGRAPHER · MOVEMENT ARTIST · MUMBAI
          </p>
          <h1 id="hero-title">
            Aarav
            <br />
            Mehta<span className="hero-period">.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-description">
              Making space for stories that can only be told in motion.
            </p>
            <a className="text-link hero-link" href="#work">
              EXPLORE THE WORK <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <p className="hero-index" aria-hidden="true">
          01 / 03
        </p>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-eyebrow">A FEW STORIES IN MOTION</p>
            <h2 id="work-title">
              Selected work<span>.</span>
            </h2>
          </div>
          <p className="section-note">
            Choreography for stage, screen, and everywhere between.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project project-${index + 1}`}
              key={project.title}
            >
              <div className={project.className}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 38vw"
                />
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-caption">
                <div>
                  <p className="project-kind">{project.kind}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className="project-year">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-caption">
          Sample projects and photography shown for layout preview.
        </p>
      </section>

      <section
        className="practice-section"
        id="practice"
        aria-labelledby="practice-title"
      >
        <div className="practice-intro">
          <p className="eyebrow">THE PRACTICE</p>
          <h2 id="practice-title">
            Curiosity first.
            <br />
            Technique with feeling.
          </h2>
        </div>
        <div className="practice-detail">
          <p>
            Every collaboration starts with listening. From the first studio
            session to the final cue, movement is shaped around the people,
            place, and feeling at its heart.
          </p>
          <ul className="discipline-list" aria-label="Services and disciplines">
            {disciplines.map((discipline) => (
              <li key={discipline}>{discipline}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2 id="contact-title">
          Let’s make
          <br />
          something move<span>.</span>
        </h2>
        <a className="contact-link" href="mailto:hello@example.com">
          HELLO@EXAMPLE.COM <span aria-hidden="true">↗</span>
        </a>
        <p className="contact-placeholder">
          Demo address: replace with your friend&apos;s email.
        </p>
      </section>

      <footer className="site-footer">
        <a
          className="wordmark footer-mark"
          href="#home"
          aria-label="Back to top"
        >
          AM<span>.</span>
        </a>
        <p>DEMO PROFILE · SAMPLE CONTENT AND PHOTOGRAPHY</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

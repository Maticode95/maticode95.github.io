import { useState, type FormEvent } from "react";

const profileImage = new URL(
  "./assets/profile.png",
  import.meta.url,
).href;

const brandImage = new URL(
  "./assets/brand-strip.png",
  import.meta.url,
).href;

const navigation = [
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

const skills = [
  {
    title: "Frontend",
    icon: "code_blocks",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
  },
  {
    title: "Backend",
    icon: "dns",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "JWT", "Validaciones"],
  },
  {
    title: "Herramientas",
    icon: "terminal",
    items: ["Git", "GitHub", "Vite", "Vercel", "GitHub Pages", "Testing básico"],
  },
];

const projects = [
  {
    title: "Portfolio Full Stack",
    kicker: "Proyecto principal",
    description:
      "Sitio personal construido con React y Vite a partir de un diseño exportado desde Stitch. El foco está en performance, accesibilidad, estructura de componentes y deploy simple.",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    icon: "web_asset",
  },
  {
    title: "TaskFlow API",
    kicker: "Backend practice",
    description:
      "API REST para gestión de tareas con autenticación, middlewares, manejo de errores y una estructura pensada para crecer sin perder claridad.",
    tags: ["Node.js", "Express", "JWT", "PostgreSQL"],
    icon: "api",
  },
  {
    title: "E-Commerce Analytics UI",
    kicker: "Frontend dashboard",
    description:
      "Dashboard responsive para practicar estados, filtros y visualización de información de negocio con una interfaz oscura y profesional.",
    tags: ["React", "Data UI", "Charts", "UX"],
    icon: "dashboard",
  },
  {
    title: "Learning Lab",
    kicker: "Mejora continua",
    description:
      "Repositorio de ejercicios, pruebas técnicas y mini proyectos donde documento decisiones, trade-offs y aprendizajes de desarrollo web.",
    tags: ["GitHub", "Docs", "Testing", "Clean Code"],
    icon: "science",
  },
];

const timeline = [
  {
    date: "2025 - presente",
    title: "Full Stack Developer Junior",
    place: "Portfolio y proyectos personales",
    points: [
      "Construcción de aplicaciones completas con React, Node.js y bases de datos relacionales.",
      "Práctica de flujo profesional: ramas, commits claros, deploys y documentación de decisiones.",
      "Enfoque en interfaces accesibles, código mantenible y aprendizaje constante.",
    ],
  },
  {
    date: "2024 - 2025",
    title: "Formación práctica en desarrollo web",
    place: "Ruta autodidacta y proyectos guiados",
    points: [
      "Base sólida en HTML, CSS, JavaScript moderno y TypeScript.",
      "Consumo de APIs, manejo de formularios, validaciones y estados de UI.",
      "Desarrollo de criterio para dividir problemas grandes en entregables pequeños.",
    ],
  },
  {
    date: "Objetivo actual",
    title: "Primer rol profesional en desarrollo",
    place: "Frontend, backend o full stack junior",
    points: [
      "Aportar energía, prolijidad y responsabilidad en un equipo real.",
      "Aprender de code reviews y convertir feedback en mejoras concretas.",
      "Crecer hacia ownership técnico con bases sanas desde el inicio.",
    ],
  },
];

function Icon({ name }: { name: string }) {
  return <span className="material-symbols-outlined" aria-hidden="true">{name}</span>;
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Ir al inicio">
        <Icon name="terminal" />
        <span>MATIAS ALARIO</span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">
        Contactar
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Hola, mi nombre es</p>
        <h1>Matias Alario.</h1>
        <h2>Construyo experiencias web claras, rápidas y mantenibles.</h2>
        <p className="hero-description">
          Soy desarrollador full stack junior en Viña del Mar, Chile. Busco mi primer rol
          profesional aportando una base sólida en React, Node.js y buenas prácticas de producto.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Ver proyectos
          </a>
          <a className="button button-secondary" href="mailto:matias95.alario@gmail.com">
            Escribirme
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Foto profesional de Matias Alario">
        <div className="profile-card">
          <img src={profileImage} alt="Matias Alario" />
        </div>
        <div className="brand-strip">
          <img src={brandImage} alt="Matias Alario full stack developer" />
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      <div className="section-title-row">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        <div />
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <SectionTitle eyebrow="01." title="Perfil" />
      <div className="about-grid">
        <article className="surface-card about-copy">
          <p>
            Mi objetivo es entrar a un equipo donde pueda aportar desde el día uno con orden,
            constancia y ganas reales de aprender. Me interesa el desarrollo full stack porque me
            permite entender el flujo completo: interfaz, datos, APIs y despliegue.
          </p>
          <p>
            Este sitio está armado desde un diseño generado en Stitch, pero convertido a una app
            React mantenible. La idea es mostrar tanto sensibilidad visual como capacidad de
            transformar un diseño en código productivo.
          </p>
        </article>
        <article className="surface-card code-card" aria-label="Resumen técnico">
          <div className="code-line"><span>const</span> perfil = {"{"}</div>
          <div className="code-line indent">rol: <strong>"Full Stack Junior"</strong>,</div>
          <div className="code-line indent">base: <strong>"React + Node.js"</strong>,</div>
          <div className="code-line indent">foco: <strong>"aprender, entregar, mejorar"</strong>,</div>
          <div className="code-line">{"}"}</div>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionTitle
        eyebrow="02."
        title="Skills & herramientas"
        description="Una base honesta de junior, presentada con foco profesional: fundamentos claros, stack actual y criterio para seguir creciendo."
      />
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="surface-card skill-group" key={group.title}>
            <div className="card-heading">
              <Icon name={group.icon} />
              <h3>{group.title}</h3>
            </div>
            <div className="chip-list">
              {group.items.map((skill) => (
                <span className="chip" key={skill}>
                  <i />
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionTitle
        eyebrow="03."
        title="Proyectos"
        description="Proyectos pensados para contar una historia clara en entrevistas: qué problema resuelven, qué stack usan y qué criterio técnico demuestran."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`surface-card project-card project-card-${index + 1}`} key={project.title}>
            <div className="project-icon">
              <Icon name={project.icon} />
            </div>
            <p className="eyebrow">{project.kicker}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionTitle eyebrow="04." title="Experiencia & crecimiento" />
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.title}>
            <div className="timeline-dot" />
            <div className="surface-card">
              <span className="eyebrow">{item.date}</span>
              <h3>{item.title}</h3>
              <p className="muted">{item.place}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "Nuevo contacto desde el portfolio");
    formData.append("_template", "box");
    formData.append("_captcha", "false");

    setFormStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/matias95.alario@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje.");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <section className="section contact" id="contact">
      <SectionTitle
        eyebrow="05."
        title="Contacto"
        description="Actualmente abierto a oportunidades junior, prácticas, colaboraciones y feedback técnico."
      />
      <div className="contact-grid">
        <div className="contact-list">
          <a className="surface-card contact-card" href="mailto:matias95.alario@gmail.com">
            <Icon name="mail" />
            <span>
              <strong>Email</strong>
              matias95.alario@gmail.com
            </span>
          </a>
          <a className="surface-card contact-card" href="https://github.com/Maticode95" target="_blank" rel="noreferrer">
            <Icon name="code" />
            <span>
              <strong>GitHub</strong>
              @Maticode95
            </span>
          </a>
          <div className="surface-card contact-card">
            <Icon name="location_on" />
            <span>
              <strong>Ubicación</strong>
              Viña del Mar, Chile
            </span>
          </div>
        </div>
        <form className="surface-card contact-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input name="name" type="text" placeholder="Tu nombre" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="tu@email.com" required />
          </label>
          <label>
            Mensaje
            <textarea name="message" rows={5} placeholder="Contame cómo puedo ayudar" required />
          </label>
          <button className="button button-primary" type="submit" disabled={formStatus === "sending"}>
            {formStatus === "sending" ? "Enviando..." : "Enviar mensaje"}
            <Icon name="send" />
          </button>
          <p className={`form-status form-status-${formStatus}`} aria-live="polite">
            {formStatus === "success"
              ? "Mensaje enviado. Gracias por escribir, te responderé pronto."
              : null}
            {formStatus === "error"
              ? "No pude enviar el mensaje. Probá de nuevo o escribime directo por email."
              : null}
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Matias Alario - engineered for performance</p>
      <div>
        <a href="mailto:matias95.alario@gmail.com">Email</a>
        <a href="https://github.com/Maticode95" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

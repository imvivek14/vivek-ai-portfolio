import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, BrainCircuit, Check, Code2, Github, Linkedin, Mail, MapPin, MoveUpRight, Sparkles } from "lucide-react";
import AmbientCanvas from "@/components/ambient-canvas";
import Navigation from "@/components/navigation";
import ProjectArt from "@/components/project-art";
import { Reveal } from "@/components/reveal";
import { education, experience, profile, projects, skillGroups } from "@/lib/data";

function SectionHeading({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><div className="section-index"><span>{index}</span><i/></div><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div></div>;
}
export default function Home() {
  return <main id="top"><AmbientCanvas/><div className="ambient-glow glow-a"/><div className="ambient-glow glow-b"/><Navigation/>
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="availability"><span className="pulse-dot"/> ENGINEERING INTELLIGENCE, END TO END</div>
        <p className="hero-kicker">AI / GENERATIVE AI / MACHINE LEARNING</p>
        <h1 id="hero-title">Building systems<br/>that <span className="gradient-word">think</span> in<br/><span className="outline-word">context.</span></h1>
        <p className="hero-intro">I&apos;m <strong>Vivek Surati</strong> — an AI &amp; Machine Learning Engineer building practical intelligence through RAG systems, multi-agent workflows and data-driven applications.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={16}/></a><a className="button button-quiet" href="#contact">Get in touch <ArrowRight size={16}/></a><a className="resume-link" href="/Vivek-Surati-Resume.pdf" download><ArrowDownToLine size={15}/> Resume</a></div>
        <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a><span><MapPin size={14}/> Surat, India</span></div>
      </div>
      <div className="hero-visual" aria-label="Abstract animated representation of connected AI systems"><div className="visual-grid"/><div className="visual-ring ring-outer"/><div className="visual-ring ring-mid"/><div className="visual-ring ring-inner"/><div className="visual-core"><BrainCircuit size={54} strokeWidth={1.1}/><span>INTELLIGENCE<br/>IN MOTION</span></div><div className="orbit-label label-rag"><span/> RETRIEVAL</div><div className="orbit-label label-agents"><span/> AGENTS</div><div className="orbit-label label-data"><span/> DATA</div><div className="visual-coordinate">SYSTEM / 001<br/>LAT 21.1702° N</div><div className="visual-signal"> <i/> LIVE SYSTEMS</div></div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      <div className="hero-side-note">INDEPENDENT BUILDER <span>·</span> AI SYSTEMS</div>
    </section>

    <section className="section container about-section" id="about"><SectionHeading index="01" eyebrow="A LITTLE CONTEXT" title="Engineering with purpose." description="From raw information to useful intelligence — I build across the layers that make AI applications work."/>
      <div className="about-grid"><Reveal><div className="about-lead"><span className="quote-mark">“</span><p>Turning complex workflows into <em>usable intelligence.</em></p></div></Reveal><Reveal delay={.12}><div className="about-body"><p>{profile.summary}</p><p>My work spans the complete application path: collecting and preparing data, building and evaluating models, connecting LLMs to knowledge sources, and exposing capabilities through APIs and user-facing applications.</p><div className="about-facts"><div><span>FOCUS</span><b>Applied AI &amp; GenAI</b></div><div><span>APPROACH</span><b>End-to-end engineering</b></div><div><span>BASED IN</span><b>Surat, India</b></div></div></div></Reveal></div>
    </section>

    <section className="section container expertise-section" id="expertise"><SectionHeading index="02" eyebrow="THE TOOLKIT" title="Capabilities, not buzzwords." description="A practical stack used across my projects and engineering experience."/>
      <div className="skills-grid">{skillGroups.map((group,i)=><Reveal key={group.number} delay={i*.07}><article className="skill-card"><div className="skill-card-top"><span>{group.number} / 04</span><Code2 size={17}/></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div></article></Reveal>)}</div>
      <p className="skills-note"><Sparkles size={14}/> Technologies reflect hands-on use or exposure as listed in my resume; Java is identified as basic.</p>
    </section>

    <section className="section container projects-section" id="projects"><SectionHeading index="03" eyebrow="SELECTED WORK" title="Built to solve real problems." description="A selection of AI applications, intelligent workflows and full-stack tools."/>
      <div className="projects-list">{projects.map((project,i)=><Reveal key={project.id} delay={i*.04}><article className={`project-card ${project.featured ? "project-featured" : ""}`}><div className="project-art-wrap"><ProjectArt type={project.visual}/><span className="project-number">{project.id}</span></div><div className="project-content"><div className="project-meta"><span>{project.category}</span><span className="project-status"><i/> {project.availability.split(" · ")[0]}</span></div><h3>{project.name}</h3><p className="project-summary">{project.summary}</p><p className="project-details">{project.details}</p><div className="project-stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div><div className="project-links">
                    <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={14}/></a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub profile <ArrowUpRight size={14}/></a>
                  </div></div></article></Reveal>)}</div>
    </section>

    <section className="section container experience-section" id="experience"><SectionHeading index="04" eyebrow="WHERE I HAVE WORKED" title="Experience in practice." description="Hands-on engineering experience across the AI/ML workflow."/>
      <Reveal><div className="experience-card"><div className="experience-rail"><span className="rail-dot"/><span className="rail-line"/></div><div className="experience-main"><div className="experience-top"><div><p className="eyebrow">INTERNSHIP · AI / ML</p><h3>{experience.role}</h3><p className="company-name">{experience.company}</p></div><span className="date-pill">{experience.duration}</span></div><div className="experience-divider"/><ul className="experience-points">{experience.points.map(point=><li key={point}><Check size={15}/><span>{point}</span></li>)}</ul><div className="experience-tools"><span>Python</span><span>Pandas</span><span>NumPy</span><span>Scikit-learn</span><span>n8n</span><span>FastAPI</span></div></div></div></Reveal>
    </section>

    <section className="section container education-section" id="education"><SectionHeading index="05" eyebrow="THE FOUNDATION" title="Education." description="A foundation in computer engineering and computer science."/>
      <div className="education-grid">{education.map((item,i)=><Reveal key={item.year} delay={i*.1}><article className="education-card"><div className="education-year">{item.year}<span> / 0{i+1}</span></div><h3>{item.degree}</h3><p className="education-field">{item.field}</p><p className="education-institution">{item.institution}</p><div className="education-result">{item.result}</div></article></Reveal>)}</div>
    </section>

    <section className="contact-section" id="contact"><div className="contact-orb orb-one"/><div className="contact-orb orb-two"/><div className="container contact-inner"><Reveal><p className="eyebrow">06 / OPEN CHANNEL</p><h2>Have a problem<br/>worth <span>solving?</span></h2><p className="contact-copy">Interested in AI engineering, intelligent applications or building something useful? Let&apos;s start a conversation.</p><a className="button button-primary contact-button" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent("Let’s connect")}`} target="_blank" rel="noopener noreferrer">Start a conversation <ArrowUpRight size={17}/></a></Reveal><Reveal delay={.15}><div className="contact-details"><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noopener noreferrer"><span><Mail size={16}/> EMAIL</span><b>{profile.email}<ArrowUpRight size={14}/></b></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={16}/> LINKEDIN</span><b>Connect professionally<ArrowUpRight size={14}/></b></a><a href={profile.github} target="_blank" rel="noreferrer"><span><Github size={16}/> GITHUB</span><b>Explore my code<ArrowUpRight size={14}/></b></a></div></Reveal></div></section>
    <footer className="site-footer"><div className="container footer-inner"><a href="#top" className="footer-brand">V<span>.</span> <small>VIVEK SURATI</small></a><p>Designed with intent. Built with curiosity.</p><div className="footer-right"><span>© {new Date().getFullYear()} Vivek Surati</span><a href="#top">BACK TO TOP <ArrowUpRight size={13}/></a></div></div></footer>
  </main>;
}

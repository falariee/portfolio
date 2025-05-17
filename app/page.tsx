import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ExperienceCard from "@/components/experience-card"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"
import { experiences } from "@/data/experiences"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Valerie Oh
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="rounded-full" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 sm:py-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] -z-10"></div>
          <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Hi, I'm <span className="text-primary">Valerie!</span>
              </h1>
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground">
                  Final year NUS Data Science & Analytics student 
                </p>
                <p className="text-xl text-muted-foreground">
                  I'm currently exploring the fields of data science and analytics, with hands-on experience in projects involving Retrieval-Augmented Generation (RAG), knowledge graphs, OCR, and prompt engineering.
                </p>
                <p className="text-xl text-muted-foreground">
                  Outside of tech, you'll probably find me playing table tennis or figuring out piano chords by ear. 
                </p>
                <p className="text-xl text-muted-foreground">
                  If you're curious about my work or just want to connect, feel free to reach out!
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="rounded-full" asChild>
                  <Link href="#projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="#about">About Me</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_25px_rgba(186,104,200,0.4)]">
                <Image
                  src="/profile_pic.jpeg"
                  alt="Valerie Oh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted py-16 sm:py-24 relative">
          <div className="wave-decoration top-0"></div>
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Technical Experience */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold border-b pb-2">Technical Experience</h3>
                <div className="space-y-4">
                  {experiences
                    .filter((exp) => exp.type === 'technical')
                    .map((experience) => (
                      <ExperienceCard key={experience.id} experience={experience} />
                    ))}
                </div>
              </div>

              {/* Leadership Experience */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold border-b pb-2">Leadership Experience</h3>
                <div className="space-y-4">
                  {experiences
                    .filter((exp) => exp.type === 'leadership')
                    .map((experience) => (
                      <ExperienceCard key={experience.id} experience={experience} />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="wave-decoration bottom-0 transform rotate-180"></div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-16 sm:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted py-16 sm:py-24 relative">
          <div className="wave-decoration top-0"></div>
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <SkillBadge key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
          <div className="wave-decoration bottom-0 transform rotate-180"></div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gradient-to-b from-primary/10 via-accent/10 to-background py-16 sm:py-24 relative"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Connect!</h2>
              <p className="text-xl">
                I'm always excited to discuss data science, analytics, or just have a friendly chat about tech and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 backdrop-blur-sm bg-secondary/80 rounded-full"
                  asChild
                >
                  <Link href="mailto:valerieoh2003@gmail.com">
                    <Mail className="h-5 w-5" />
                    valerieoh2003@gmail.com
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 backdrop-blur-sm bg-secondary/80 rounded-full"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/valerie-oh-3b7559229/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 backdrop-blur-sm bg-secondary/80 rounded-full"
                  asChild
                >
                  <Link href="https://github.com/falariee" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Valerie Oh. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/valerie-oh-3b7559229/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glow-effect"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://github.com/falariee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glow-effect"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link 
              href="mailto:valerieoh2003@gmail.com" 
              aria-label="Email" 
              className="glow-effect"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

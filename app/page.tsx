"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/config/personal-info"
import Link from "next/link"
import { SkillIcon } from "@/components/SkillIcon"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto flex items-center justify-between py-6 px-4">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 overflow-hidden rounded-full border-2 border-primary/50 shadow-lg">
            <Image
              src="/images/Steve.jpg" 
              alt="Photo de profil"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
              onError={(e) => {
                // Fallback en cas d'erreur de chargement
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/150';
              }}
            />
          </div>
          <h1 className="text-2xl font-bold text-center">{personalInfo.name}</h1>
          <p className="text-sm text-muted-foreground">{personalInfo.title}</p>
        </div>
        <ThemeToggle />
      </header>

      {/* Message d'accueil */}
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenue sur mon portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez mes compétences, mes projets et mon parcours en tant que développeur full-stack passionné.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projets" 
              className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Colonne de gauche - Contenu principal */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">À propos de moi</h2>
              <div className="prose dark:prose-invert">
                <p className="text-lg">
                  {personalInfo.description}
                </p>
                <p className="text-lg mt-4">
                  Passionné par l'architecture des logiciels et l'Intelligence Artificielle, je me spécialise dans le développement d'applications web et mobiles performantes et évolutives.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">Formation</h2>
              <div className="space-y-6">
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <p className="mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="projets" className="scroll-mt-20">
              <h2 className="mb-6 text-3xl font-bold">Mes Projets</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { id: 1, name: "Site E-commerce", description: "Développement d'une plateforme e-commerce complète avec panier et paiement en ligne.", technologies: ["Next.js", "Node.js", "Stripe", "MongoDB"] },
                  { id: 2, name: "Application de Gestion", description: "Outil de gestion de projet avec tableau de bord et suivi des tâches en temps réel.", technologies: ["React", "Firebase", "Material-UI"] },
                  { id: 3, name: "Portfolio Personnel", description: "Conception et développement de ce portfolio pour présenter mes compétences et projets.", technologies: ["Next.js", "Tailwind CSS", "TypeScript"] },
                  { id: 4, name: "Réseau Social", description: "Plateforme de mise en relation professionnelle avec messagerie et partage de contenu.", technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"] }
                ].map((project) => (
                  <div 
                    key={project.id} 
                    className="rounded-lg border p-6 transition-colors hover:bg-accent/50"
                  >
                    <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
                    <p className="mb-4 text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      Voir le projet
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Colonne de droite - Compétences et Contact */}
          <div className="space-y-8">
            <section className="sticky top-6">
              <h2 className="mb-6 text-3xl font-bold">Compétences</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-xl font-semibold">Langages</h3>
                  <div className="flex flex-wrap gap-6">
                    {personalInfo.skills.languages.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center space-y-2">
                        <div className="p-3 bg-muted rounded-lg">
                          <SkillIcon icon={skill.icon} className="h-8 w-8" />
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-4 text-xl font-semibold">Frameworks & Bibliothèques</h3>
                  <div className="flex flex-wrap gap-6">
                    {personalInfo.skills.frameworks.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center space-y-2">
                        <div className="p-3 bg-muted rounded-lg">
                          <SkillIcon icon={skill.icon} className="h-8 w-8" />
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-4 text-xl font-semibold">Outils</h3>
                  <div className="flex flex-wrap gap-6">
                    {personalInfo.skills.tools.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center space-y-2">
                        <div className="p-3 bg-muted rounded-lg">
                          <SkillIcon icon={skill.icon} className="h-8 w-8" />
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                </div>

                <div id="contact" className="mt-12 p-6 bg-muted/50 rounded-lg scroll-mt-20">
                  <h2 className="mb-6 text-2xl font-bold">Contact</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Email</h3>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <SkillIcon icon="email" className="h-5 w-5" />
                        <span>{personalInfo.email}</span>
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Réseaux sociaux</h3>
                      <div className="flex space-x-3">
                        {personalInfo.socials.map((social, index) => (
                          <Link
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-background rounded-lg hover:bg-muted transition-colors border border-border"
                            title={social.name}
                          >
                            <SkillIcon icon={social.icon} className="h-5 w-5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

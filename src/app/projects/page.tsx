import { Metadata } from 'next'
import Link from 'next/link'
import { Github, ExternalLink, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAllProjects, getFeaturedProjects, type Project } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects, showcasing modern technologies and innovative solutions.',
}

const projects = getAllProjects()
const featuredProjects = getFeaturedProjects()
const otherProjects = projects.filter(project => !project.featured)

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
          My Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects I&apos;ve worked on, showcasing my skills in modern web development 
          and my passion for creating exceptional user experiences.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <div className="flex items-center mb-8">
          <Star className="h-5 w-5 text-yellow-500 mr-2" />
          <h2 className="text-2xl font-bold">Featured Projects</h2>
        </div>
        
        <div className="grid gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden">
              <div className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="h-64 lg:h-full bg-muted rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <div className="text-8xl opacity-50">🚀</div>
                  </div>
                </div>
                
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{project.year}</Badge>
                      <Badge variant={project.status === 'Completed' ? 'default' : 'outline'}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <Link 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <Card key={project.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-md mb-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <div className="text-6xl opacity-50">💻</div>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">{project.year}</Badge>
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'outline'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <Link 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-2xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Interested in Working Together?
        </h2>
        <p className="text-muted-foreground mb-8">
          I&apos;m always excited to take on new challenges and collaborate on interesting projects.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Let&apos;s Start a Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
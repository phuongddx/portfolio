'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/phuongddx/ecommerce-platform',
    demo: 'https://ecommerce-demo.phuongddx.com',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    image: '/projects/taskmanager.jpg',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    github: 'https://github.com/phuongddx/task-manager',
    demo: 'https://tasks.phuongddx.com',
    featured: true
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location search, forecasts, and responsive design.',
    image: '/projects/weather.jpg',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Weather API'],
    github: 'https://github.com/phuongddx/weather-dashboard',
    demo: 'https://weather.phuongddx.com',
    featured: true
  }
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Some of my recent work that showcases my skills and passion for development
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div 
                    className="w-full h-48 bg-muted rounded-md mb-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center"
                  >
                    <div className="text-6xl opacity-50">🚀</div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
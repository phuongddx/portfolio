import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Download, MapPin, Calendar, Coffee, Code, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Phuong Doan - Full Stack Developer passionate about creating innovative web experiences.',
}

const timeline = [
  {
    year: '2025',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading development of large-scale applications using React, Next.js, and cloud technologies.',
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'Developed multiple client projects using modern web technologies and best practices.',
  },
  {
    year: '2021',
    title: 'Frontend Developer',
    company: 'Startup Inc.',
    description: 'Built responsive web applications and contributed to product development.',
  },
  {
    year: '2020',
    title: 'Computer Science Graduate',
    company: 'University',
    description: 'Graduated with honors, specializing in software engineering and web technologies.',
  },
]

const interests = [
  { name: 'Web Development', icon: Code },
  { name: 'Coffee Brewing', icon: Coffee },
  { name: 'Open Source', icon: Heart },
  { name: 'Tech Blogging', icon: Coffee },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m Phuong Doan, a passionate Full Stack Developer based in Vietnam, 
            dedicated to crafting exceptional digital experiences.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Ho Chi Minh City, Vietnam</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>5+ Years Experience</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/PhuongDoan-Resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">My Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey into web development started during my university years when I 
                discovered the power of code to bring ideas to life. What began as curiosity 
                quickly became a passion that drives me every day.
              </p>
              <p>
                Over the past 5+ years, I&apos;ve had the privilege of working with amazing teams 
                and clients, building everything from small business websites to large-scale 
                applications. I specialize in React, Next.js, and modern web technologies.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing 
                to open source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          My Journey
        </h2>
        
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2"></div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{item.year}</Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-4 w-2 h-2 bg-primary rounded-full md:left-1/2 transform md:-translate-x-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Beyond Code
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {interests.map((interest) => (
            <Card key={interest.name} className="text-center">
              <CardContent className="p-6">
                <interest.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">{interest.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Let&apos;s Create Something Amazing
        </h2>
        <p className="text-muted-foreground mb-8">
          I&apos;m always excited to work on new projects and collaborate with fellow developers and designers.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
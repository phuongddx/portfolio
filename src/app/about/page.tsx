import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, MapPin, Calendar, Coffee, Code, Heart, Users, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  getPersonalInfo,
  getSummary,
  getStory,
  getStats,
  getTimeline,
  getInterests,
  getCTA,
  type Personal,
  type Stat,
  type TimelineItem,
  type Interest
} from '@/lib/about'

const personal = getPersonalInfo()
const summary = getSummary()
const story = getStory()
const stats = getStats()
const timeline = getTimeline()
const interests = getInterests()
const cta = getCTA()

export const metadata: Metadata = {
  title: 'About Me',
  description: `Learn more about ${personal.name} - ${personal.title} passionate about creating innovative mobile experiences.`,
}

const iconMap = {
  Code,
  Users,
  Heart,
  Smartphone,
  Coffee
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            {personal.avatar.startsWith('/') ? (
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-4xl">
                {personal.avatar}
              </div>
            )}
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m {personal.name}, a passionate {personal.title} based in {personal.location.split(',')[0]},
            dedicated to {personal.tagline.toLowerCase()}.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{personal.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{personal.experience}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Button asChild size="lg">
            <Link href={cta.primaryAction.href}>
              {cta.primaryAction.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href={cta.secondaryAction.href} target="_blank">
              <Download className="mr-2 h-4 w-4" />
              {cta.secondaryAction.text}
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
              {story.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className={`text-3xl font-bold mb-2 text-${stat.color}-600`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
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
                          <Badge variant="secondary" className="text-xs">{item.location}</Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">{item.company}</p>
                        <p className="text-xs text-muted-foreground">{item.period}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="space-y-1">
                            <p className="text-xs font-medium text-muted-foreground">Key Highlights:</p>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {item.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
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
          {interests.map((interest) => {
            const IconComponent = iconMap[interest.icon as keyof typeof iconMap] || Code
            return (
              <Card key={interest.name} className="text-center">
                <CardContent className="p-6">
                  <IconComponent className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{interest.name}</h3>
                  <p className="text-xs text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          {cta.headline}
        </h2>
        <p className="text-muted-foreground mb-8">
          {cta.description}
        </p>
        <Button asChild size="lg">
          <Link href={cta.primaryAction.href}>
            {cta.primaryAction.text}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
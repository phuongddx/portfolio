'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getPersonalInfo, getSummary, getStory, getStats } from '@/lib/about'

const personal = getPersonalInfo()
const summary = getSummary()
const story = getStory()
const stats = getStats()

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center max-w-7xl mx-auto"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                About Me
              </h2>
              <p className="text-muted-foreground text-lg">
                {personal.tagline}
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              {story.paragraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <Button asChild>
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className={`text-3xl font-bold text-${stat.color}-600`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
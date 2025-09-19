'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

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
                Building digital experiences with passion and precision
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a Full Stack Developer with expertise in modern web technologies. 
                I love creating efficient, scalable applications that solve real-world problems 
                and provide exceptional user experiences.
              </p>
              
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing my knowledge through 
                blog posts and tutorials.
              </p>
            </div>

            <Button asChild>
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
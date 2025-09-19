'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
      'Tailwind CSS', 'Framer Motion', 'Redux', 'Zustand'
    ]
  },
  {
    title: 'Backend',
    skills: [
      'Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB',
      'Prisma', 'GraphQL', 'REST APIs', 'WebSocket', 'Redis'
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      'Git', 'Docker', 'AWS', 'Vercel', 'Linux', 'Jest', 
      'Cypress', 'Figma', 'VS Code', 'CI/CD'
    ]
  }
]

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
import aboutData from '@/data/about.json'

export interface Personal {
  name: string
  title: string
  tagline: string
  location: string
  experience: string
  email: string
  linkedin: string
  phone: string
  avatar: string
}

export interface Summary {
  headline: string
  description: string
}

export interface Story {
  paragraphs: string[]
}

export interface Stat {
  value: string
  label: string
  color: 'blue' | 'green' | 'purple' | 'orange'
}

export interface TimelineItem {
  year: string
  title: string
  company: string
  location: string
  period: string
  description: string
  highlights: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  description: string
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface Skills {
  categories: SkillCategory[]
}

export interface Interest {
  name: string
  icon: string
  description: string
}

export interface CTAAction {
  text: string
  href: string
}

export interface CTA {
  headline: string
  description: string
  primaryAction: CTAAction
  secondaryAction: CTAAction
}

export interface AboutData {
  personal: Personal
  summary: Summary
  story: Story
  stats: Stat[]
  timeline: TimelineItem[]
  education: Education
  skills: Skills
  interests: Interest[]
  cta: CTA
}

// Current implementation using JSON file
// Easy to migrate to API later by changing these functions

export function getPersonalInfo(): Personal {
  return aboutData.personal as Personal
}

export function getSummary(): Summary {
  return aboutData.summary as Summary
}

export function getStory(): Story {
  return aboutData.story as Story
}

export function getStats(): Stat[] {
  return aboutData.stats as Stat[]
}

export function getTimeline(): TimelineItem[] {
  return aboutData.timeline as TimelineItem[]
}

export function getEducation(): Education {
  return aboutData.education as Education
}

export function getSkills(): Skills {
  return aboutData.skills as Skills
}

export function getInterests(): Interest[] {
  return aboutData.interests as Interest[]
}

export function getCTA(): CTA {
  return aboutData.cta as CTA
}

export function getAllAboutData(): AboutData {
  return aboutData as AboutData
}

// Future API migration helpers
// When ready to switch to API, just change these function implementations

export async function getPersonalInfoAsync(): Promise<Personal> {
  // For now, return static data
  // Later: return fetch('/api/about/personal').then(res => res.json())
  return Promise.resolve(getPersonalInfo())
}

export async function getTimelineAsync(): Promise<TimelineItem[]> {
  // For now, return static data
  // Later: return fetch('/api/about/timeline').then(res => res.json())
  return Promise.resolve(getTimeline())
}

export async function getAllAboutDataAsync(): Promise<AboutData> {
  // For now, return static data
  // Later: return fetch('/api/about').then(res => res.json())
  return Promise.resolve(getAllAboutData())
}
import projectsData from '@/data/projects.json'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo: string
  featured: boolean
  status: 'Completed' | 'In Progress' | 'On Hold'
  year: string
  category: string
  teamSize?: number
  role?: string
}

export interface ProjectsData {
  projects: Project[]
  categories: string[]
  technologies: string[]
}

// Current implementation using JSON file
// Easy to migrate to API later by changing these functions

export function getAllProjects(): Project[] {
  return projectsData.projects as Project[]
}

export function getFeaturedProjects(): Project[] {
  return projectsData.projects.filter(project => project.featured) as Project[]
}

export function getProjectsByCategory(category: string): Project[] {
  return projectsData.projects.filter(project =>
    project.category.toLowerCase() === category.toLowerCase()
  ) as Project[]
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projectsData.projects.filter(project =>
    project.status === status
  ) as Project[]
}

export function getProjectsByYear(year: string): Project[] {
  return projectsData.projects.filter(project =>
    project.year === year
  ) as Project[]
}

export function getProjectById(id: number): Project | undefined {
  return projectsData.projects.find(project =>
    project.id === id
  ) as Project | undefined
}

export function getCategories(): string[] {
  return projectsData.categories
}

export function getTechnologies(): string[] {
  return projectsData.technologies
}

export function getProjectsByTechnology(tech: string): Project[] {
  return projectsData.projects.filter(project =>
    project.tech.some(t => t.toLowerCase() === tech.toLowerCase())
  ) as Project[]
}

// Future API migration helpers
// When ready to switch to API, just change these function implementations

export async function getAllProjectsAsync(): Promise<Project[]> {
  // For now, return static data
  // Later: return fetch('/api/projects').then(res => res.json())
  return Promise.resolve(getAllProjects())
}

export async function getFeaturedProjectsAsync(): Promise<Project[]> {
  // For now, return static data
  // Later: return fetch('/api/projects?featured=true').then(res => res.json())
  return Promise.resolve(getFeaturedProjects())
}
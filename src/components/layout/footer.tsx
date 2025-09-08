import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/phuongddx',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/phuongddx',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/phuongddx',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:hello@phuongddx.com',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 px-8 md:flex-row md:gap-4 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{' '}
              <Link
                href="/about"
                className="font-medium underline underline-offset-4"
              >
                Phuong Doan
              </Link>
              . The source code is available on{' '}
              <Link
                href="https://github.com/phuongddx/portfolio"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center space-x-1">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
              >
                <item.icon className="h-4 w-4" />
                <span className="sr-only">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Phuong Doan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
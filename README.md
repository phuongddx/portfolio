# PhuongDDX Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing my work as a Full Stack Developer with a clean, professional design and smooth animations.

## ✨ Features

- **Modern Design**: Clean, professional UI with dark/light theme toggle
- **Responsive Layout**: Optimized for all device sizes and screen resolutions
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **Accessible**: Follows web accessibility best practices
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) with Radix UI primitives
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Icons**: [Lucide React](https://lucide.dev) & [React Icons](https://react-icons.github.io/react-icons)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- **Font**: [Geist](https://vercel.com/font) optimized with next/font

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Layout components (navigation, footer, theme toggle)
│   ├── sections/          # Page sections (hero, about, skills, projects)
│   ├── ui/                # Reusable UI components (buttons, cards, etc.)
│   └── providers/         # Context providers
└── lib/
    └── utils.ts           # Utility functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/phuongddx/portfolio.git
cd phuongddx
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📄 Pages

- **Home** (`/`) - Hero section, about preview, skills, and featured projects
- **About** (`/about`) - Detailed about section with timeline and interests
- **Projects** (`/projects`) - Complete portfolio of projects and work
- **Contact** (`/contact`) - Contact form and information

## 🎨 Customization

### Theme Colors
The project uses CSS custom properties for theming. Modify the colors in `app/globals.css`:

```css
:root {
  --primary: 222.2 84% 4.9%;
  --secondary: 210 40% 96%;
  /* ... other color variables */
}
```

### Content Updates
- **Personal Info**: Update contact details in `src/components/sections/hero-section.tsx`
- **Skills**: Modify skill categories in `src/components/sections/skills-section.tsx`
- **Projects**: Add your projects in `src/components/sections/featured-projects.tsx`
- **About**: Update your story and timeline in `src/app/about/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Build command `npm run build`, publish directory `.next`
- **AWS/Docker**: Use the included production build `npm run build && npm run start`

## 📊 Performance

- **Core Web Vitals**: Optimized for excellent performance scores
- **Image Optimization**: Automatic optimization with Next.js Image component
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO**: Built-in SEO optimization with meta tags and structured data

## 🤝 Contributing

If you'd like to contribute or suggest improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: [phuongddx.com](https://phuongddx.com)
- **Email**: hello@phuongddx.com
- **GitHub**: [@phuongddx](https://github.com/phuongddx)
- **LinkedIn**: [phuongddx](https://linkedin.com/in/phuongddx)

---

Built with ❤️ by Phuong Doan

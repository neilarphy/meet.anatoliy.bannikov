# Anatoliy Bannikov - Portfolio Website

A stunning animated portfolio/CV website for Anatoliy Bannikov, AI/RPA Lead Engineer at Zentist. Built with Next.js and deployed on GitHub Pages.

## Features

- 🎨 Black background with pastel neon green accents
- ✨ Particle effects and smooth animations
- 💻 Terminal/code aesthetic
- 📱 Fully responsive design
- 🌙 Dark mode optimized
- 🚀 Static site optimized for GitHub Pages

## About Anatoliy

AI/RPA Lead Engineer with 7+ years of experience in intelligent automation. Currently leading RPA department at Zentist (USA), managing 100+ RPA bots processing tens of thousands of insurance documents daily. Specializes in Python, UiPath, LangChain, Playwright, and custom RPA frameworks. Has processed over 8 million files in production automation.

Currently pursuing a Master's degree in Artificial Intelligence at ITMO AI Talent Hub and additional education as an LLM Engineer to further enhance expertise in AI and large language models.

## Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## Deployment to GitHub Pagessd
 
1. **Update Repository Name**: 
   - Open `next.config.mjs`
   - Replace `'your-repo-name'` in the `basePath` with your actual GitHub repository name
   - Example: If your repo is `github.com/username/portfolio`, use `basePath: '/portfolio'`

2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages section
   - Under "Build and deployment", select "GitHub Actions" as the source

3. **Push to GitHub**:
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

4. **Automatic Deployment**:
   - The GitHub Action will automatically build and deploy your site
   - Your site will be available at: `https://username.github.io/your-repo-name/`

## Customization

### Current Information

This portfolio has been customized with Anatoliy Bannikov's professional information:

- Personal information and contact details
- Work experience at Zentist, KPMG, and Fortum
- Skills in AI/RPA, Python, Automation, and more
- Certifications and education from Nazarbayev University

### Update Information

Edit the following components to update information:

- `components/hero.tsx` - Name and title
- `components/about.tsx` - About section
- `components/skills.tsx` - Skills and technologies
- `components/experience.tsx` - Work experience
- `components/projects.tsx` - GitHub projects
- `components/certifications.tsx` - Certifications
- `components/contact.tsx` - Contact information

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (for animations)
- Lucide React (for icons)

## License

MIT

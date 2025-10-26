# Animated CV Website

A stunning animated portfolio/CV website built with Next.js and deployed on GitHub Pages.

## Features

- 🎨 Black background with pastel neon green accents
- ✨ Particle effects and smooth animations
- 💻 Terminal/code aesthetic
- 📱 Fully responsive design
- 🌙 Dark mode optimized
- 🚀 Static site optimized for GitHub Pages

## Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## Deployment to GitHub Pages

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

### Update Your Information

Edit the following components to add your personal information:

- `components/hero.tsx` - Your name and title
- `components/about.tsx` - About section
- `components/skills.tsx` - Your skills
- `components/experience.tsx` - Work experience
- `components/projects.tsx` - GitHub projects (update username)
- `components/certifications.tsx` - Your certifications
- `components/contact.tsx` - Contact information

### GitHub Projects Integration

In `components/projects.tsx`, replace `'your-github-username'` with your actual GitHub username to automatically fetch your repositories.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (for animations)
- Lucide React (for icons)

## License

MIT

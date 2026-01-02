# Shafi's Portfolio

A modern, responsive developer portfolio website showcasing my projects, skills, and experience. Built with Next.js 16 and featuring smooth animations, a clean design, and an intuitive user interface.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean and professional design with animated backgrounds and smooth transitions
- **Interactive Sections**:
  - Hero section with introduction
  - About section with personal background
  - Projects showcase with live GitHub repository links
  - Skills display with visual indicators
  - Contact section for reaching out
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Analytics Integration**: Integrated with Vercel Analytics for visitor tracking

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Fonts**: Geist Sans and Geist Mono (optimized with `next/font`)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Linting**: ESLint with Next.js configuration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 20 or higher)
- npm, yarn, pnpm, or bun package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/shafisma/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 💻 Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-reload as you make changes to the code. You can start editing by modifying files in the `app` directory.

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

After building, you can start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## 🧹 Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## 🚢 Deployment

This portfolio is optimized for deployment on [Vercel](https://vercel.com), the platform created by the makers of Next.js.

### Deploy on Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── components/     # React components
│   │   ├── icons/      # Icon components
│   │   ├── layout/     # Layout components (Navbar, Footer, etc.)
│   │   └── sections/   # Page sections (Hero, About, Projects, etc.)
│   ├── data/           # Data files for projects and skills
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## 🎨 Customization

To customize the portfolio for your own use:

1. Update personal information in `app/layout.tsx` (metadata)
2. Modify projects in `app/data/projects.ts`
3. Update skills in `app/data/skills.ts`
4. Customize styling in `app/globals.css` and component files
5. Replace content in section components (`app/components/sections/`)

## 📫 Contact

- **GitHub**: [@shafisma](https://github.com/shafisma)
- **Portfolio**: [Live Site](https://shafisma-portfolio.vercel.app) *(if deployed)*

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts by [Vercel](https://vercel.com/font)
- Deployed on [Vercel](https://vercel.com)

---

**Note**: This is a personal portfolio project. Feel free to fork and customize it for your own use!

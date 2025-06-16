# Pavani's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and professional experience with interactive animations and a clean design.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme switcher for user preference
- **Interactive UI**: Smooth animations using Framer Motion
- **3D Elements**: Interactive 3D logo using Three.js
- **Particle Effects**: Dynamic background particle system
- **Modern Stack**: Built with React, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading and smooth transitions

## 🛠️ Technologies Used

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Particle Effects**: TSParticles
- **Build Tool**: Vite
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/pavaniimmadisetti/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── 3d/              # 3D components
│   │   ├── layout/          # Layout components
│   │   ├── sections/        # Main section components
│   │   └── ui/             # Reusable UI components
│   ├── contexts/           # React contexts
│   ├── hooks/             # Custom hooks
│   ├── App.tsx           # Main App component
│   └── main.tsx         # Entry point
├── public/              # Static files
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Features by Section

### Hero Section
- Animated introduction
- Particle background effect
- Social media links
- 3D animated logo

### About Section
- Professional summary
- Education and experience
- Download resume option
- Call-to-action buttons

### Projects Section
- Responsive project grid
- Project cards with descriptions
- Technology tags
- GitHub links

### Skills Section
- Technical skills showcase
- Animated skill bars
- Category-based organization

### Contact Section
- Contact form
- Social media links
- Professional email contact

## 🔧 Customization

### Theme Colors
The color scheme can be modified in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: {...},
      // Add your custom colors here
    }
  }
}
```

### Adding Projects
Add new projects in `src/components/sections/Projects.tsx`:
```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/..."
  },
  // Add more projects here
];
```

## 📱 Responsive Design

The portfolio is responsive across multiple breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use. If you make any improvements that could benefit others, consider submitting a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- LinkedIn: [Pavani Immadisetti](https://linkedin.com/in/pavaniimmadisetti)
- GitHub: [@pavaniimmadisetti](https://github.com/pavaniimmadisetti)

---

Made with ❤️ by Pavani Immadisetti

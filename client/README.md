# Pixera by Harsha - Portfolio Website

A modern, responsive portfolio website showcasing creative design and digital marketing services. Built with React, Vite, and Tailwind CSS with smooth animations and a contemporary dark theme design.

## 🌟 Features

- **Modern Design**: Dark theme with neon accent colors (purple, blue, gold)
- **Smooth Animations**: Framer Motion for elegant transitions and motion effects
- **Responsive Layout**: Mobile-first design that works seamlessly on all devices
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Icon System**: Lucide React icons for clean, scalable SVG icons
- **Smooth Scrolling**: Native CSS smooth scroll behavior with scroll-to-top functionality
- **Dynamic Sections**: Multiple pages covering hero, services, portfolio, about, and contact

## 📋 Sections

### Hero Section
- Eye-catching introduction with animated background effects
- Call-to-action buttons for user engagement

### Services Section
- Showcases four main service offerings:
  - Brand Identity Design
  - UI/UX Design
  - Social Media Marketing
  - Content Creation
- Interactive cards with gradient backgrounds and hover effects

### Portfolio Section
- Showcase of past projects and work samples
- Categorized by project type (Branding, UI/UX, Marketing)
- Hover effects with project previews

### About Section
- Personal introduction and background information
- Skills and experience highlights

### Footer
- Contact information and social media links
- Copyright and additional navigation

## 🛠 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.4.21
- **Styling**: 
  - Tailwind CSS 3.3.6
  - PostCSS 8.4.31
  - Autoprefixer 10.4.16
- **Animation**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.263.1
- **HTTP Client**: Axios 1.6.2
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/HarshaHK21/pixerabyharsha.git
   cd pixerabyharsha/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/`

## 🚀 Available Scripts

- **`npm run dev`** - Start Vite development server with hot module replacement
- **`npm run build`** - Create optimized production build in `dist/` directory
- **`npm run preview`** - Preview the production build locally

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── About.jsx          # About section component
│   │   ├── Footer.jsx         # Footer with contact info
│   │   ├── Hero.jsx           # Hero section with introduction
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Portfolio.jsx      # Portfolio showcase
│   │   └── Services.jsx       # Services offering
│   ├── assets/
│   │   └── main.css           # Global styles and Tailwind directives
│   ├── App.jsx                # Main app component
│   └── main.jsx               # React entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## 🎨 Color Scheme

The design uses a modern dark theme with vibrant neon accents:

- **Background**: `#0f0f0f` (Dark Background)
- **Cards**: `#1a1a1a` (Dark Card)
- **Borders**: `#2a2a2a` (Dark Border)
- **Accents**:
  - Neon Purple: `#b624ff`
  - Neon Blue: `#00d9ff`
  - Neon Gold: `#ffd700`

## 🔧 Configuration Files

### Vite Config (`vite.config.js`)
- React plugin enabled for JSX support
- Development server configured at localhost:5173

### Tailwind Config (`tailwind.config.js`)
- Custom dark color palette
- Extended theme with neon accent colors
- Configured for all JSX/TSX files

### PostCSS Config (`postcss.config.js`)
- Tailwind CSS processor
- Autoprefixer for vendor prefixes

## 🌐 Deployment

This project is configured for GitHub Pages deployment:

- **Homepage**: `https://HarshaHK21.github.io/pixerabyharsha/client`
- **Build Command**: `npm run build`
- **Output**: Static files in `dist/` directory

To deploy to GitHub Pages:
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your GitHub Pages branch

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Key Component Features

### Navbar
- Sticky navigation with smooth scrolling to sections
- Responsive mobile menu support

### Hero
- Animated background gradients
- Staggered text animations
- Primary CTA button

### Services
- Four service cards with gradient borders
- Hover animations and transitions
- Icon-based visual design

### Portfolio
- Grid layout of project showcases
- Image previews with hover effects
- Category filtering (Branding, UI/UX, Marketing)

### Smooth Features
- Scroll-to-top button appears after 300px scroll
- Smooth scroll behavior across entire site
- Transition animations on all interactive elements

## 🐛 Known Issues & Solutions

### CSS Import Error
If you encounter `@import must precede all other statements` error:
- Ensure `@import` statements are placed BEFORE `@tailwind` directives in CSS files
- Order: `@import` → `@tailwind base` → `@tailwind components` → `@tailwind utilities`

## 📝 Environment Variables

Currently, no environment variables are required. For future API integration:
1. Create `.env.local` file in the `client/` directory
2. Define your API endpoints: `VITE_API_URL=your_api_url`
3. Access in code: `import.meta.env.VITE_API_URL`

## 🤝 Contributing

For suggestions, bug reports, or contributions:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

For inquiries about services or collaborations:
- **Portfolio**: [Pixera by Harsha](https://HarshaHK21.github.io/pixerabyharsha/client)
- **GitHub**: [@HarshaHK21](https://github.com/HarshaHK21)

## 📄 License

This project is private and maintained by Harsha. Please contact for usage rights.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - JavaScript library for building UIs
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icon library

---

**Last Updated**: April 2026  
**Version**: 1.0.0

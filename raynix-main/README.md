# Raynix - Modern Marketing Landing Page

A stunning, cosmic-themed marketing landing page built with React, Vite, TypeScript, Tailwind CSS, and Supabase authentication.

## ✨ Features

- 🌌 Beautiful particle background with animated effects
- 🎨 Gradient text and neon glow effects
- 🔐 Google OAuth authentication via Supabase
- 📱 Fully responsive design
- ⚡ Lightning-fast performance with Vite
- 🎯 SEO optimized
- ♿ Accessible keyboard navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or 20.x (LTS)
- npm or yarn

### Installation

1. **Clone or download this project**

2. **Install dependencies:**
   ```bash
   npm ci
   ```

3. **Set up environment variables:**
   
   Create a `.env` or `.env.local` file in the root directory and add your Supabase credentials:
   
   ```env
   VITE_SUPABASE_URL=https://xapnynfynigiqwswszzl.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhcG55bmZ5bmlnaXF3c3dzenpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNjExNzAsImV4cCI6MjA3NDYzNzE3MH0.Hi52yiPDMHwJYcZy-lHD94UY11ySpzk3hXbLw8aZv9E
   ```
   
   **Important:** The `.env` file is already listed in `.gitignore` to keep your keys secure.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:8080`

## 🏗️ Building for Production

Build the project:
```bash
npm run build
```

The optimized production build will be created in the `dist/` directory.

Preview the production build locally:
```bash
npm run preview
```

## 🌐 Running in Lovable/Bolt

1. **Upload the project** to Lovable or Bolt
2. **Add environment variables** in the platform's settings:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
3. The project will automatically build and run

## 📦 Deployment

### Static Hosting (Vercel, Netlify, etc.)

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting service
3. Make sure to add your environment variables in the hosting platform's dashboard

### Environment Variables for Production

Don't forget to set these environment variables in your hosting platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 🔧 Project Structure

```
raynix/
├── src/
│   ├── assets/
│   │   └── raynix-logo.png
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── ParticleBackground.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── SignInModal.tsx
│   │   └── SunFlare.tsx
│   ├── lib/
│   │   ├── supabase.ts      # Supabase client setup
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx        # Main landing page
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example             # Example environment file
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Colors & Gradients

Edit `src/index.css` to customize the design system:
- `--gradient-primary`: Main gradient (purple → pink → blue)
- `--glow-primary`: Neon glow effect colors
- All color variables use HSL format

### Services

Edit the `services` array in `src/pages/Index.tsx` to add/modify service cards.

## 🔐 Supabase Setup

To enable Google OAuth:

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Providers**
3. Enable **Google** provider
4. Add your OAuth credentials
5. Add authorized redirect URLs:
   - Development: `http://localhost:8080`
   - Production: Your deployed URL

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🆘 Support

For issues or questions, please check:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Built with ❤️ using React, Vite, and Supabase

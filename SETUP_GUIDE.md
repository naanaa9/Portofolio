# Setup Guide - Portfolio Website

## 📋 Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm atau yarn
- Git
- Code editor (VS Code recommended)

## 🚀 Quick Start

### 1. Clone & Install

```bash
# Clone repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install
```

### 2. Development

```bash
# Start development server
npm run dev

# Server akan berjalan di http://localhost:3000
```

### 3. Build untuk Production

```bash
# Build project
npm run build

# Preview build
npm run preview
```

## 🎨 Customization

### Ganti Informasi Pribadi

#### 1. Hero Section (`src/components/Hero.tsx`)
```typescript
// Ganti nama dan deskripsi
<h1>Hi, I'm <span>Your Name</span></h1>
<h2>Your Title</h2>
<p>Your description...</p>

// Ganti social media links
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourprofile"
href="mailto:your@email.com"
```

#### 2. About Section (`src/components/About.tsx`)
```typescript
// Edit paragraf about
<p>Your story...</p>

// Edit highlights sesuai skill kamu
const highlights = [
  {
    icon: Code2,
    title: "Your Skill",
    description: "Description..."
  }
]
```

#### 3. Projects (`src/components/Projects.tsx`)
```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    image: "image-url",
    tags: ["Tech1", "Tech2"],
    github: "github-url",
    demo: "demo-url"
  }
]
```

#### 4. Skills (`src/components/Skills.tsx`)
```typescript
const skillCategories = [
  {
    title: "Category Name",
    skills: ["Skill1", "Skill2", "Skill3"]
  }
]
```

#### 5. Contact (`src/components/Contact.tsx`)
```typescript
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com"
  }
]
```

### Ganti Warna Tema

Edit `src/styles/globals.css`:

```css
:root {
  --primary: #030213;        /* Warna utama */
  --background: #ffffff;     /* Background */
  --foreground: oklch(0.145 0 0);  /* Text color */
  /* ... */
}

.dark {
  /* Dark mode colors */
}
```

### Ganti Font

Edit `src/styles/globals.css`:

```css
:root {
  --font-sans: 'Your Font', ui-sans-serif, system-ui, sans-serif;
}
```

Import font di `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

## 🖼️ Menambahkan Images

### 1. Project Images
- Upload ke Unsplash, Imgur, atau hosting lain
- Atau simpan di `public/images/`
- Update URL di `src/components/Projects.tsx`

### 2. Profile Image
- Simpan di `public/images/profile.jpg`
- Update di `src/components/About.tsx`:
```typescript
<ImageWithFallback 
  src="/images/profile.jpg"
  alt="Your Name"
/>
```

### 3. PWA Icons
- Buat icon 192x192px dan 512x512px
- Simpan di `public/icon-192.png` dan `public/icon-512.png`
- Tools: [Favicon Generator](https://realfavicongenerator.net/)

## 📱 PWA Setup

File `public/manifest.json` sudah ready. Update:

```json
{
  "name": "Your Name Portfolio",
  "short_name": "Your Portfolio",
  "description": "Your description"
}
```

## 🔧 Troubleshooting

### Port sudah digunakan
```bash
# Ganti port di vite.config.ts
server: {
  port: 3001  // Ganti ke port lain
}
```

### Module not found
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build error
```bash
# Check TypeScript errors
npm run build

# Fix errors yang muncul
```

## 📚 Resources

- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Radix UI](https://www.radix-ui.com/)

## 🆘 Need Help?

1. Check error message di console
2. Search di Stack Overflow
3. Check GitHub Issues
4. Read documentation

## ✅ Checklist Sebelum Deploy

- [ ] Update semua informasi pribadi
- [ ] Ganti semua placeholder images
- [ ] Test di mobile & desktop
- [ ] Run `npm run build` tanpa error
- [ ] Test build dengan `npm run preview`
- [ ] Update README.md
- [ ] Add PWA icons
- [ ] Test di berbagai browser
- [ ] Check Lighthouse score
- [ ] Update meta tags di index.html

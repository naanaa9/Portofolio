# 🚀 Quick Start Guide

## Langkah Cepat

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```
Buka http://localhost:3000

### 3. Build untuk Production
```bash
npm run build
```

### 4. Preview Build
```bash
npm run preview
```

## 📝 Customization Cepat

### Ganti Nama & Info
Edit `src/components/Hero.tsx`:
```typescript
<h1>Hi, I'm <span>NAMA KAMU</span></h1>
```

### Ganti Projects
Edit `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: "Project Kamu",
    description: "Deskripsi...",
    // ...
  }
]
```

### Ganti Skills
Edit `src/components/Skills.tsx`:
```typescript
const skillCategories = [
  {
    title: "Kategori",
    skills: ["Skill1", "Skill2"]
  }
]
```

### Ganti Contact
Edit `src/components/Contact.tsx`:
```typescript
value: "email@kamu.com",
href: "mailto:email@kamu.com"
```

## 🎨 Ganti Warna
Edit `src/styles/globals.css`:
```css
:root {
  --primary: #030213;  /* Warna utama */
}
```

## 🚀 Deploy

### Vercel (Paling Mudah)
1. Push ke GitHub
2. Import di vercel.com
3. Deploy!

### Netlify
1. `npm run build`
2. Upload folder `build/`

## 📱 Test di Mobile

### Android
1. Buka di Chrome Android
2. Menu → "Add to Home screen"
3. App terinstall sebagai PWA!

### Desktop
1. Chrome DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test berbagai ukuran

## ✅ Checklist

- [ ] Install dependencies
- [ ] Ganti nama & info pribadi
- [ ] Ganti projects
- [ ] Ganti skills
- [ ] Ganti contact info
- [ ] Ganti social media links
- [ ] Test di mobile
- [ ] Test di desktop
- [ ] Build tanpa error
- [ ] Deploy!

## 🆘 Troubleshooting

### Port sudah digunakan?
Ganti port di `vite.config.ts`:
```typescript
server: { port: 3001 }
```

### Module not found?
```bash
rm -rf node_modules
npm install
```

### Build error?
Check console untuk error message

## 📚 Dokumentasi Lengkap

- `README.md` - Overview
- `SETUP_GUIDE.md` - Setup detail
- `DEPLOYMENT.md` - Cara deploy
- `MOBILE_OPTIMIZATION.md` - Mobile tips
- `CHANGELOG.md` - Apa yang sudah dilakukan

## 🎉 Selesai!

Website kamu siap digunakan! 🚀

Untuk pertanyaan lebih lanjut, baca dokumentasi lengkap di file-file di atas.

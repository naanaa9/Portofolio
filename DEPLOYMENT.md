# Panduan Deployment

## 🚀 Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Vercel akan otomatis detect Vite project
5. Click Deploy

## 🚀 Deploy ke Netlify

1. Build project:
```bash
npm run build
```

2. Upload folder `build/` ke Netlify
   - Atau connect dengan GitHub untuk auto-deploy

## 🚀 Deploy ke GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Tambahkan di `package.json`:
```json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 📱 Testing di Android

### Via Browser
1. Buka website di Chrome Android
2. Menu → "Add to Home screen"
3. App akan terinstall sebagai PWA

### Via USB Debugging
1. Enable Developer Options di Android
2. Connect ke PC via USB
3. Chrome DevTools → Remote Devices
4. Inspect dan test

## 🖥️ Testing di PC

### Responsive Testing
1. Chrome DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test berbagai ukuran:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1920px

### Browser Testing
- Chrome
- Firefox
- Safari (Mac)
- Edge

## ⚡ Performance Tips

1. Optimize images sebelum upload
2. Enable compression di hosting
3. Use CDN untuk static assets
4. Monitor dengan Lighthouse

## 🔧 Environment Variables

Jika menggunakan API keys, buat file `.env`:
```
VITE_API_KEY=your_key_here
```

Akses di code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

## 📊 Analytics (Optional)

Tambahkan Google Analytics di `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

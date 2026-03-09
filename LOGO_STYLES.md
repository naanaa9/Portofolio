# 🎨 Logo Style Guide

Logo "DK" tersedia dalam 5 style berbeda. Pilih yang paling kamu suka!

## 📋 Cara Ganti Style

Edit file `src/components/Navigation.tsx`, cari baris:

```typescript
<Logo 
  variant="gradient"  // <-- Ganti ini
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
/>
```

## 🎨 Available Styles

### 1. Gradient (Default) ✨
```typescript
variant="gradient"
```
- Gradient background dengan glow effect
- Hover: glow lebih terang
- Modern & eye-catching
- **Recommended untuk portfolio modern**

**Preview:**
```
┌─────────┐
│   DK    │ ← Gradient + glow
└─────────┘
```

---

### 2. Minimal 🎯
```typescript
variant="minimal"
```
- Clean & simple
- D berwarna primary, K abu-abu
- Hover: K berubah jadi primary
- **Recommended untuk portfolio minimalis**

**Preview:**
```
DK  ← D hitam, K abu (hover: hitam)
```

---

### 3. Bordered 📦
```typescript
variant="bordered"
```
- Box dengan border
- Hover: background jadi primary
- Clean & professional
- **Recommended untuk portfolio corporate**

**Preview:**
```
┌─────┐
│ DK  │ ← Border box
└─────┘
```

---

### 4. Circle ⭕
```typescript
variant="circle"
```
- Circular badge
- Gradient background dengan glow
- Hover: scale up + glow lebih terang
- **Recommended untuk portfolio creative**

**Preview:**
```
  ╭───╮
  │ DK │ ← Circle badge
  ╰───╯
```

---

### 5. Modern Split 🔲
```typescript
variant="modern"
```
- Split design (D & K terpisah)
- D: solid primary, K: transparent
- Hover: K jadi solid primary
- **Recommended untuk portfolio tech/startup**

**Preview:**
```
┌──┬──┐
│D │K │ ← Split boxes
└──┴──┘
```

## 🎨 Customization

### Ganti Warna Logo

Edit `src/styles/globals.css`:

```css
:root {
  --primary: #030213;  /* Warna logo */
}
```

### Ganti Ukuran Logo

Edit `src/components/Logo.tsx`, cari class `text-lg md:text-xl` dan ganti:

```typescript
// Lebih kecil
text-base md:text-lg

// Lebih besar
text-xl md:text-2xl

// Extra besar
text-2xl md:text-3xl
```

### Ganti Text Logo

Ganti "DK" dengan inisial kamu di `src/components/Logo.tsx`:

```typescript
// Cari semua "DK" dan ganti dengan inisial kamu
DK → AB  // Contoh: Ahmad Budi
```

## 💡 Tips Memilih Style

### Portfolio Modern/Creative
→ Gunakan **Gradient** atau **Circle**

### Portfolio Minimalis/Clean
→ Gunakan **Minimal** atau **Bordered**

### Portfolio Corporate/Professional
→ Gunakan **Bordered** atau **Modern**

### Portfolio Tech/Startup
→ Gunakan **Modern** atau **Gradient**

## 🎯 Rekomendasi Berdasarkan Industri

| Industri | Style Recommended |
|----------|------------------|
| Web Development | Gradient, Modern |
| Data Science | Minimal, Bordered |
| UI/UX Design | Circle, Gradient |
| Software Engineer | Modern, Bordered |
| Creative/Design | Circle, Gradient |
| Corporate/Business | Bordered, Minimal |

## 🔧 Advanced: Buat Style Sendiri

Tambahkan style baru di `src/components/Logo.tsx`:

```typescript
// Tambahkan di type LogoVariant
type LogoVariant = "gradient" | "minimal" | "bordered" | "circle" | "modern" | "custom";

// Tambahkan di variants object
custom: (
  <button
    onClick={onClick}
    className="your-custom-classes"
    aria-label="Home"
  >
    <div className="your-logo-design">
      DK
    </div>
  </button>
),
```

## 📱 Mobile Responsive

Semua style sudah responsive:
- Mobile: ukuran lebih kecil
- Desktop: ukuran lebih besar
- Touch-friendly (min 44x44px)

## ✨ Animation Options

Tambahkan animasi di logo:

```typescript
// Rotate on hover
className="hover:rotate-12 transition-transform"

// Bounce on hover
className="hover:animate-bounce"

// Pulse effect
className="animate-pulse"
```

## 🎨 Color Combinations

### Dark Theme
```css
--primary: #ffffff;  /* White logo */
--background: #030213;  /* Dark background */
```

### Colorful
```css
--primary: #3b82f6;  /* Blue */
--primary: #8b5cf6;  /* Purple */
--primary: #ec4899;  /* Pink */
--primary: #10b981;  /* Green */
```

### Gradient Custom
```typescript
// Edit di Logo.tsx
className="bg-gradient-to-br from-blue-500 to-purple-600"
```

## 🚀 Quick Switch

Coba semua style dengan cepat:

1. Buka `src/components/Navigation.tsx`
2. Ganti `variant="gradient"` dengan:
   - `variant="minimal"`
   - `variant="bordered"`
   - `variant="circle"`
   - `variant="modern"`
3. Save dan lihat hasilnya!

## 📸 Screenshot Comparison

Jalankan `npm run dev` dan coba semua style untuk melihat mana yang paling cocok dengan design portfolio kamu!

---

**Current Style:** Gradient ✨

Untuk ganti, edit `src/components/Navigation.tsx` line 44.

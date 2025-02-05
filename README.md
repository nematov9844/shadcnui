# Shadcn UI Pro Project

Modern va customizable Next.js UI template, Shadcn UI asosida qurilgan.

🌐 Demo: [shadcnui-bay.vercel.app](https://shadcnui-bay.vercel.app/)

## 🚀 Xususiyatlar

### Asosiy Xususiyatlar
- 🌓 Dark/Light mode almashtirish
- 🎨 Dinamik ranglarni sozlash
- 📱 Responsive dizayn
- ⚡ Optimal ishlash
- ♿ Accessibility qo'llab-quvvatlash

### Integratsiyalar
- 💳 Stripe to'lov tizimi
- 🔐 NextAuth autentifikatsiya
- 🗄️ Supabase ma'lumotlar bazasi
- 📧 Mailgun email xizmati
- ⚡ NextJS framework

### Texnik Xususiyatlar
- 🔄 Server-side rendering
- 📊 Interaktiv grafiklar
- 🎯 TypeScript orqali xavfsizlik
- 🧩 Modulli arxitektura
- 🔍 SEO optimizatsiya

## 🛠 Texnologiyalar

### Asosiy Texnologiyalar
- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)

### Qo'shimcha Kutubxonalar
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark/Light mode
- [lucide-react](https://lucide.dev/) - Ikonlar
- [recharts](https://recharts.org/) - Grafiklar
- [class-variance-authority](https://cva.style/) - Komponent variantlari
- [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge) - CSS klaslarini boshqarish

## 🎯 Asosiy Komponentlar

### 700+ Tailwind CSS Komponentlar
- Responsive dizayn
- Keng komponentlar kutubxonasi
- Moslashuvchan stillar
- Cross-browser moslashish

### Statistika va Grafiklar
- Revenue tracking
- Subscription analytics
- Real-time ma'lumotlar
- Vizual grafiklar

### FAQ va Dokumentatsiya
- Tez-tez so'raladigan savollar
- Batafsil qo'llanma
- API dokumentatsiyasi
- Rivojlantiruvchi resurslari

## 🚀 Boshlash

### O'rnatish

```bash
# Loyihani clone qilish
git clone https://github.com/yourusername/shadcn-ui-pro.git

# Package'larni o'rnatish
npm install

# Development serverni ishga tushirish
npm run dev
```

Development server [http://localhost:3000](http://localhost:3000) portida ishga tushadi.

### Build & Deploy

```bash
# Production build yaratish
npm run build

# Production serverni ishga tushirish
npm start
```

## 📁 Loyiha Strukturasi

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Asosiy sahifa
│   └── globals.css     # Global stillar
├── components/
│   ├── ui/            # Asosiy UI komponentlar
│   ├── theme-provider.tsx
│   ├── theme-buttons.tsx
│   └── ...
└── public/
    └── fonts/         # Lokal shriftlar
```

## ⚙️ Customization

### Theme Sozlash
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Custom ranglar
      }
    }
  }
}
```

### Shrift Integratsiyasi
```css
/* globals.css */
@font-face {
  font-family: 'Inter';
  /* Shrift sozlamalari */
}
```

## 🔧 Development

### State Management
- React Context API - global state uchun
- Local state (useState)
- CSS custom properties - theme uchun

### Optimizatsiya
- Server-side rendering
- Shrift optimizatsiyasi
- Rasm optimizatsiyasi
- Code splitting

### Accessibility
- ARIA attributelari
- Keyboard navigatsiya
- Screen reader qo'llab-quvvatlash

## 📚 Qo'shimcha Ma'lumot

Batafsil ma'lumot uchun quyidagi resurslarni ko'ring:
- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Hissa Qo'shish

Loyihaga hissa qo'shishni istasangiz, Pull Request yuborishingiz mumkin.

## 📝 Litsenziya

Bu loyiha MIT litsenziyasi ostida tarqatiladi - batafsil ma'lumot uchun [LICENSE](LICENSE) faylini ko'ring.

## 👥 Mualliflar

- Nodirbek Ruziev - Dastlabki ishlar

## 🙏 Minnatdorchilik

- [Shadcn](https://twitter.com/shadcn) - Shadcn UI uchun
- [Vercel](https://vercel.com) - Next.js uchun
- [Tailwind Labs](https://tailwindcss.com) - Tailwind CSS uchun

# Axer Company Profile Website

## 🌍 Deskripsi Proyek / Project Description

**ID:**
Axer adalah website **Company Profile** modern berbasis **Next.js 15 (App Router)**. Proyek ini dirancang untuk menampilkan profil perusahaan secara profesional dengan landing page interaktif, halaman about, contact, serta integrasi sistem manajemen konten sederhana melalui halaman admin. Backend menggunakan **Prisma ORM** untuk manajemen database dan **NextAuth** untuk autentikasi. Tampilan dibangun dengan **TailwindCSS** sehingga responsif dan modern.

**EN:**
Axer is a modern **Company Profile Website** built with **Next.js 15 (App Router)**. It is designed to showcase a company’s profile with an interactive landing page, about page, contact page, and a lightweight content management system via the admin dashboard. The backend uses **Prisma ORM** for database management and **NextAuth** for authentication. Styling is powered by **TailwindCSS**, ensuring a responsive and modern UI.

---

## ✨ Fitur Utama / Key Features

- 🏢 **Landing Page** untuk company profile (Landing page for company profile)
- ℹ️ **Halaman About** perusahaan (Company about page)
- ⚙️ **Halaman Service** (Service page)
- 📞 **Halaman Contact** (Contact page)
- 📝 **Manajemen Konten (CRUD)** untuk postingan & berita perusahaan (Content Management for posts & company news)
- 🔐 **Autentikasi Admin** dengan NextAuth (Admin authentication)
- 🎨 **UI Responsif & Modern** menggunakan TailwindCSS (Responsive & modern UI with TailwindCSS)
- ⚡ **Server Actions** untuk interaksi langsung database (Server Actions for direct DB interaction)
- 👨‍💻 **Dashboard Admin** untuk mengelola konten (Admin dashboard to manage content)

---

## 🛠️ Teknologi / Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [NextAuth](https://next-auth.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)
- Database: PostgreSQL / MySQL / SQLite (sesuai konfigurasi Prisma)

---

## 📂 Struktur Proyek / Project Structure

```
axer/
├── prisma/              # Skema Prisma, migrasi, seeding / Prisma schema, migrations, seeding
├── public/              # File publik (ikon, gambar, asset) / Public assets
├── src/app/             # Routing utama / Main application routes
│   ├── page.tsx         # Landing page (company profile)
│   ├── about/           # Halaman about / About page
│   ├── contact/         # Halaman kontak / Contact page
│   ├── admin/           # Halaman admin / Admin dashboard
│   │   └── posts/       # CRUD posting / Post CRUD management
│   └── actions/         # Server actions (backend logic)
├── .env                 # Variabel environment / Environment variables
├── package.json          # Dependency project / Project dependencies
├── next.config.ts        # Konfigurasi Next.js / Next.js configuration
└── tsconfig.json         # Konfigurasi TypeScript / TypeScript configuration
```

---

## ⚙️ Persyaratan Sistem / System Requirements

- Node.js **>= 18** (disarankan versi terbaru untuk Next.js 15 / recommended latest version for Next.js 15)
- npm **>= 9** atau yarn/pnpm (npm is default)
- Database (PostgreSQL/MySQL/SQLite sesuai konfigurasi Prisma)

---

## 🚀 Instalasi / Installation

### 1. Clone repository

```bash
git clone https://github.com/chlasswg26/axer.git
cd axer
```

### 2. Install dependencies

```bash
npm install
# atau / or
yarn install
```

### 3. Konfigurasi Environment / Setup Environment

Buat file `.env` berdasarkan contoh:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/axer"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Migrasi Database / Run Database Migration

```bash
npx prisma migrate dev
```

### 5. Seeding Data (Opsional / Optional)

```bash
node prisma/seed.js
```

---

## ▶️ Menjalankan Proyek / Running the Project

### Development Mode

```bash
npm run dev
```

Akses di: [http://localhost:3000](http://localhost:3000)

### Production Mode

```bash
npm run build
npm start
```

---

## 📦 Deployment

### Vercel (Recommended)

1. Push kode ke repository GitHub.
2. Hubungkan repository dengan [Vercel](https://vercel.com/).
3. Tambahkan variabel environment di dashboard Vercel.
4. Deploy otomatis (CI/CD).

### Alternatif

- Docker Container
- Platform Node.js lainnya (Heroku, Railway, dsb.)

---

## 🔄 Workflow Developer / Developer Workflow

1. **Update Prisma schema** → `npx prisma migrate dev`
2. **Jalankan server dev** → `npm run dev`
3. **Testing fitur** di local → akses `http://localhost:3000`
4. **Commit & Push** ke GitHub → otomatis deploy di Vercel

---

## 📜 Lisensi / License

MIT License – bebas digunakan & dikembangkan lebih lanjut / free to use and extend.

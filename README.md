# Intzar Ali — Cinematic Personal Portfolio

A premium, cinematic, futuristic and fully responsive personal portfolio web application for **Intzar Ali**, BCA Full Stack student at Teerthankar Mahaveer University and aspiring MERN Stack Developer.

---

## 👤 Developer Information

- **Name:** Intzar Ali
- **Role:** Web Developer | MERN Stack Developer
- **Degree:** BCA – Full Stack (Admission Year: 2024)
- **University:** Teerthankar Mahaveer University, Moradabad
- **Semester:** 5th Semester (Section E)
- **Enrollment Number:** TCA2468220
- **Email:** `aliintzar8896@gmail.com`
- **GitHub:** [https://github.com/aliintzar8896-pixel](https://github.com/aliintzar8896-pixel)

---

## 🎬 Narrative & Architecture

The website tells the authentic story: **"From Student to Developer"**:
`2020 (High School) → 2022 (Intermediate) → 2024 (BCA @ TMU) → Present (MERN Stack Developer)`

### Key Features
- **Cinematic Dark Theme:** Rich deep background (`#07090e`), neon accents (`#00f2fe`, `#7928ca`), glassmorphism, and radial glows.
- **Interactive Constellation Canvas:** Background particle connections responding subtly to cursor motion.
- **Top Reading Progress:** Dynamic gradient bar at top of viewport.
- **Hero & Profile:** Dual glowing rings, floating animations, developer tags, and instant navigation CTAs.
- **Vertical Education Timeline:** Illuminated central line connecting 2020, 2022, 2024, and Present milestones.
- **Real Project Showcase:**
  - **Motor Doctor:** 24x7 Roadside Assistance & Service Bill Doctor with actual screenshots and architecture diagrams.
  - **Job Portal:** Recruitment and candidate tracking hub with live preview and tech stack.
- **Backend Contact API:** Express REST endpoint (`POST /api/contact`) with validation and real-time frontend feedback.
- **Centralized Config:** All personal details and links are easily editable in `frontend/src/data/profile.js`.

---

## 📁 Project Structure

```
Intzar portfolio/
├── frontend/                     # React + Vite + Tailwind CSS Frontend
│   ├── public/                   # Favicon and static files
│   ├── src/
│   │   ├── assets/               # Profile placeholder & project screenshots
│   │   │   ├── intzar-profile.jpg
│   │   │   ├── motor-doctor/     # Actual Motor Doctor screenshots & diagrams
│   │   │   └── job-portal/       # Job portal graphics
│   │   ├── components/           # Navbar, Footer, BackgroundCanvas, ScrollProgress, etc.
│   │   ├── sections/             # Hero, About, Journey, Skills, Projects, Vision, Contact
│   │   ├── data/                 # Centralized profile & links (profile.js)
│   │   ├── styles/               # Glassmorphism, glow utilities & index.css
│   │   ├── App.jsx               # Main root app
│   │   └── main.jsx              # DOM entry point
│   ├── index.html                # SEO meta tags, Google Fonts
│   ├── tailwind.config.js        # Theme tokens
│   ├── vite.config.js            # Vite build & API proxy
│   └── package.json
│
├── backend/                      # Node.js + Express REST API Backend
│   ├── config/                   # Environment variables & constants
│   ├── controllers/              # Contact form submission controller
│   ├── routes/                   # API routes (/api/contact, /api/health)
│   ├── server.js                 # Express server entry point
│   ├── .env.example              # Environment template
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Commands Guide

### 1. Frontend Commands

#### Install Frontend Dependencies:
```bash
cd frontend
npm install
```

#### Run Frontend in Development:
```bash
cd frontend
npm run dev
```
> Accessible at: `http://localhost:3000`

#### Production Build:
```bash
cd frontend
npm run build
```
> Build output generated in `frontend/dist/`

---

### 2. Backend Commands

#### Install Backend Dependencies:
```bash
cd backend
npm install
```

#### Run Backend Server:
```bash
cd backend
npm start
```
> Server running on: `http://localhost:5000`  
> Health check: `http://localhost:5000/api/health`

---

## ⚙️ Replacing the Profile Picture
To replace the default developer placeholder with your personal photo, simply copy your photo to:
```
frontend/src/assets/intzar-profile.jpg
```
The circular frame, glowing border, and hover animations will immediately adapt to your new image!

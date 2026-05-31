<div align="center">

# 🧠 LeetCode Help

### **[🌐 Live Demo → leetcode-help.netlify.app](https://leetcode-help.netlify.app/)**

A clean, fast, and beautifully designed web app to help you practice and navigate LeetCode-style DSA problems — organized by patterns and topics.

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0.1-646CFF?style=flat-square&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.13.2-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

Built by [@ajinesh703](https://github.com/ajinesh703)

</div>

---

## ✨ Features

- 📚 **1000+ DSA problems** organized by topic and pattern
- 🎨 **Light & Dark mode** with a clean purple aesthetic UI
- ⚡ **Blazing fast** — powered by Vite with HMR
- 🔍 **Search** across all problems instantly
- 💡 **Solutions** with clean Python code for every problem
- 📱 **Fully responsive** — works on all screen sizes

---

## 🚀 Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| React | ^19.2.4 | UI Framework |
| TypeScript | ~5.9.3 | Type Safety |
| Vite | ^8.0.1 | Build Tool |
| React Router DOM | ^7.13.2 | Client-side Routing |
| Netlify | — | Deployment |

---

## 📁 Project Structure

```
Leetcode-Help/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   ├── context/
│   │   └── ThemeContext.tsx # Light/Dark theme
│   ├── data/
│   │   ├── patterns.ts     # DSA pattern problems
│   │   └── topics.ts       # Topic-wise problems
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── PatternPage.tsx
│   │   ├── TopicPage.tsx
│   │   └── ProblemDetail.tsx
│   ├── index.css           # Global styles
│   └── main.tsx            # Entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ajinesh703/Leetcode-Help.git
cd Leetcode-Help
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## 🛠️ Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | TypeScript check + Vite build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

---

## 📌 Current Status

- ✅ Project scaffolded with React 19 + Vite + TypeScript
- ✅ Routing set up via React Router DOM v7
- ✅ 200+ DSA problems added across multiple topics
- ✅ Light/Dark theme with aesthetic purple UI
- ✅ Deployed on Netlify
- 🔧 More features under active development

---

## 🌐 Deployment

This project is deployed on **Netlify** with automatic deployments on every push to `main`.

🔗 **[https://leetcode-help.netlify.app/](https://leetcode-help.netlify.app/)**

---

## 📄 License

This project is for personal and educational use. Feel free to fork and build on it!

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/ajinesh703">@ajinesh703</a>
</div>

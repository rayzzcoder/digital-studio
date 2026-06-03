# Raja Abdul Rafay | Digital Architect

> A high-performance digital portfolio and agency showroom built for fluid user experiences and uncompromising technical precision.

![Live Status](https://img.shields.io/badge/Status-Live-00ff00?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

**Live Deployment:** [\[Vercel URL\]](https://digital-studio-portfolio.vercel.app/)

---

## 🏗 The Architecture

This repository serves as my primary digital studio. It is engineered with a strict focus on 60FPS fluid animations, seamless cross-device responsiveness, and a high-conversion sales funnel for international clients. 

The architecture bridges the gap between secure, complex system design and high-end visual aesthetics.

### Key Features
*   **Cinematic Preloader:** Custom Framer Motion entrance screen establishing brand authority.
*   **Fluid Typography & Layout:** Built entirely with a mobile-first Tailwind CSS approach.
*   **Hardware-Accelerated Animations:** Zero-lag scroll reveals and magnetic button interactions using Framer Motion.
*   **Custom Smooth Scrolling:** Overridden native browser scroll using Studio Freight's Lenis for an editorial feel.
*   **Zero-Friction Conversion:** Automated `mailto:` protocols with pre-filled subject lines and body copy to capture lead intent immediately.

## 💻 The Tech Stack

*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS (Custom Zinc-950 Dark Mode Theme)
*   **Animation:** Framer Motion
*   **Scroll Hijacking:** React Lenis (`@studio-freight/react-lenis`)
*   **Deployment:** Vercel (CI/CD Automated)

---

## ⚙️ Local Development

To run this studio locally, follow these steps. 

**Note on Dependencies:** This project utilizes bleeding-edge Next.js/React versions alongside stable animation libraries. A custom `.npmrc` file is included in this repository to bypass strict peer-dependency checks (`legacy-peer-deps=true`).

```bash
# 1. Clone the repository
git clone [https://github.com/rayzzcoder/digital-studio.git](https://github.com/rayzzcoder/digital-studio.git)

# 2. Navigate into the directory
cd digital-studio

# 3. Install dependencies 
# (The .npmrc file will automatically handle the legacy-peer-deps flag)
npm install

# 4. Start the development server
npm run dev
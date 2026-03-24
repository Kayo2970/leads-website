# LEADS Next Gen Centre - Official Website (v1.0.0)

A bespoke, high-performance digital platform for **LEADS Next Gen Centre (MSRUAS)**. Built with Next.js 16 and React 19, this site represents the pinnacle of modern web design with a custom "Liquid Glass" aesthetic, deep-space animations, and a fully responsive interface.

---

## 💎 Design Philosophy: "Liquid Glass"
The website features an exclusive design system called **Liquid Glass**, characterized by:
- **Frosted Translucency**: High-intensity backdrop blurs (20px+) with ice-blue tints.
- **Dynamic Backgrounds**: 18-second "Pearl Pulse" and "Prism Aurora" gradient animations that create a living, breathing interface.
- **Micro-Interactions**: Recursive card-lift effects, smooth Y-axis logo rotations, and GPU-accelerated state transitions.
- **Smart Theming**: Native dark mode that preserves the premium frosted aesthetic while reducing eye strain.

## 🚀 Key Features

### 1. Animated Preloader
- **Immersive Entry**: A high-impact loading sequence with a spinning 640x640px LEADS logo.
- **Optimization**: GPU-accelerated Y-axis rotation (1080°) over a dynamic gradient field.
- **Smart Exit**: Instant transition to the main interface once hydration is complete.

### 2. Admin Infrastructure
- **Secure Dashboard**: A dedicated administrative portal for managing form submissions and site metrics.
- **Real-time Enquiries**: Live feed of user messages with status tracking (New, Read, Replied).
- **Responsive Admin**: A unique sidebar-to-stack transition that makes management possible from any mobile device.

### 3. Smart Navigation
- **Top Bar**: Sticky frosted-glass bar with a fixed centered logo for brand consistency.
- **Bottom Dock**: An iOS-style floating navigation pill (8px from edge) for optimal thumb-reach on mobile.
- **Adaptive Links**: intelligent link handling that hides/shows elements based on the current page and device.

### 4. Interactive Components
- **Stats Counting**: Smooth numeric animations on desktop; instant stable values on mobile for better UX.
- **Governance Grid**: A multi-tiered council display featuring 30+ leadership members across three organizational levels.
- **Content Blocks**: Responsive masonry galleries and grid-based program showcases.

## 🛠️ Technical Stack
- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router & Turbopack)
- **Engine**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Native CSS Modules
- **Database**: [SQLite](https://www.sqlite.org/) with [Prisma ORM](https://www.prisma.io/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & CSS Keyframes
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure
```text
src/
├── app/                  # Main Application Pages (App Router)
│   ├── admin/            # Admin Logic & Dashboard
│   ├── contact/          # Interactive Contact Portal
│   ├── events/           # Program & Event Showcases
│   ├── terms/            # Legal & IP Documents
│   └── globals.css       # Core Design System & Tokens
├── components/           # Reusable UI Architecture
│   ├── Navbar.tsx        # Hybrid Navigation System
│   ├── StatsSection.tsx  # Optimized Animation Engine
│   └── ContactForm.tsx   # Server-Action Powered Forms
├── lib/                  # Backend & Utility Layer
│   └── prisma.ts         # Singleton DB Connection Manager
```

## 📋 Maintenance & Operations
Detailed documentation for maintainers is located in the `/docs` directory:
- **[Strategic PRD](file:///Users/kayo/Sites/LEADS/docs/strategic/PRD-LEADS.docx)**: Product vision and core requirements.
- **[Technical Spec](file:///Users/kayo/Sites/LEADS/docs/technical/TechSpec-LEADS.docx)**: Architecture and database schema.
- **[Maintenance Guide](file:///Users/kayo/Sites/LEADS/docs/operational/Maintenance-LEADS.docx)**: Routine update procedures and security protocols.
- **[Launch Checklist](file:///Users/kayo/Sites/LEADS/docs/operational/LaunchChecklist-LEADS.docx)**: Steps for final production deployment.

## ⚖️ Intellectual Property
All property on this website, including text, graphics, logos, code, and design tokens, belongs exclusively to **LEADS Next Gen Centre**. Unauthorized reproduction or distribution is strictly prohibited as per the **[Terms & Conditions](file:///Users/kayo/Sites/LEADS/src/app/terms/page.tsx)**.

## 📧 Contact
**Official Email**: [leads.ngc@msruas.ac.in](mailto:leads.ngc@msruas.ac.in)
**Address**: University House, New BEL Rd, M S R Nagar, Mathikere, Bengaluru, Karnataka 560054

---
© 2026 LEADS Next Gen Centre. All rights reserved.

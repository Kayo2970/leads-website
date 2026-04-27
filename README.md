# LEADS Next Gen Centre - Official Digital Platform (v1.2.0)

> **Strategic Vision**: To bridge the gap between academic theory and leadership practice through a high-performance, immersive digital experience.

This repository contains the source code and technical documentation for the official **LEADS Next Gen Centre (MSRUAS)** digital platform. Engineered for the next generation of leaders, this platform leverages state-of-the-art web technologies to deliver a "Liquid Glass" interface that is as functionally robust as it is aesthetically groundbreaking.

---

## 🏛️ Architectural Overview

The platform is architected using a **Modern Monolith** pattern via **Next.js 16 (App Router)**, ensuring strict type-safety, high-performance server-side rendering (SSR), and seamless client-side interactivity.

### 🛠️ Development Methodology: The "Blueprint-to-Build" Workflow
This project was executed through an intensive, two-phase development lifecycle designed to move from raw vision to a polished institutional grade product. It began with the deployment of a custom **Site Documentation Kit** — a specialized intelligence layer designed to bridge the gap between business requirements and technical execution. This kit processed years of LEADS institutional data, brochures, and summit materials to generate a complete, agency-grade foundation of ten professional documents, ranging from PRDs and Sitemaps to Tech Specs and Post-Launch manuals. This allowed every technical and design decision to be made silently and strategically before a single line of code was written. Once this roadmap was solidified, the project transitioned into an active coding engine where thousands of iterative refinements — CSS logic, animation tuning, and wireframe evolution — converged into the final **Liquid Glass** design language that now defines the LEADS digital identity.

### Core Philosophy: The "Liquid Glass" Design System
Designed to withstand academic scrutiny and aesthetic critique, the UI is based on a proprietary design language:
- **Refractive Aesthetics**: Utilizing `backdrop-filter` with variable saturation (180%) and blur (20px–32px) to simulate physical glass panes.
- **Micro-Chronography**: Precision-timed animations (18s–24s cycles) using CSS Keyframes for GPU-accelerated gradient shifts, ensuring 60FPS fluid motion on any modern display.
- **Ergonomic Docking**: A hybrid navigation system featuring a fixed top-bar for desktop visibility and a viewport-relative bottom dock for mobile accessibility (optimized for the 95th percentile of thumb-reach zones).

---

## ✍️ Credits & Creative Direction
This digital experience was envisioned and meticulously crafted by:
**Kayomarz M Pavri** — *Head of Design and Social Media, LEADS Next Gen Centre*.

---

## 🔬 Technical Specifications

### 📱 Frontend Engineering
- **React 19 Core**: Utilizing the latest concurrent rendering features for non-blocking UI updates.
- **Tailwind CSS 4**: A utility-first approach for responsive scaling, utilizing custom design tokens for brand-consistent spacing and typography.
- **Client-Side Hydraulics**: Custom-built `CountUp` and `StatCard` engines utilizing `IntersectionObserver` + `setInterval` loops, reducing the JS bundle size and increasing cross-browser stability.
- **Cloudflare Insights**: Integration of privacy-first, real-time analytics for performance monitoring and diagnostic oversight.

### ⚙️ Backend & Data Layer
- **Persistent Storage**: [SQLite](https://www.sqlite.org/) implementation for high-speed, local data persistence, managed via [Prisma ORM](https://www.prisma.io/).
- **LibSQL Adapter**: Configured with a robust singleton pattern to resolve engine initialization conflicts in Turbopack/Next.js environments.
- **Server Actions**: Secure, typed form handling for Enquiries and Memberships, bypassing the need for redundant API endpoints and reducing latency.

### 🛡️ Administrative Portal
A secure, high-performance cockpit designed for leadership oversight:
- **Enquiry Management**: Real-time status tracking (`New`, `Read`, `Replied`) with atomic updates.
- **Executive Data Visualization**: Integrated Recharts for monitoring traffic trends, device demographics, and top content.
- **Persistent Sessions**: 7-day cookie-based authentication ensuring administrators remain logged in across browser sessions.
- **Data Portability**: Integrated CSV export for all form submissions to facilitate offline auditing and archival.

---

## 🗂️ Project Repository Map

```text
├── src/
│   ├── app/                          # Application Layer (App Router)
│   │   ├── admin/                    # Secure Leadership Dashboard
│   │   ├── about/                    # Institutional overview & mission
│   │   ├── contact/                  # High-conversion communication portal
│   │   ├── events/
│   │   │   ├── page.tsx              # Events listing with filter
│   │   │   └── bharat-lead-summit/   # Full BLS 2026 immersive page
│   │   ├── join/                     # Delegate & membership registration
│   │   ├── team/                     # Executive Council, Executive Committee & Core Committee
│   │   ├── terms/                    # Legal & Intellectual Property framework
│   │   └── globals.css               # Design System: Tokens, Keyframes & Utilities
│   ├── components/                   # Atomic UI Component Architecture
│   │   ├── Preloader.tsx             # GPU-Accelerated Y-axis bounce sequence
│   │   ├── Navbar.tsx                # Viewport-aware hybrid navigation (Pill-dock)
│   │   ├── StatsSection.tsx          # High-precision numeric animation engine
│   │   ├── TeamCard.tsx              # Grayscale-to-colour portrait card
│   │   ├── TestimonialCarousel.tsx   # Auto-advancing testimonial slider
│   │   └── CountUp.tsx               # IntersectionObserver count-up component
│   └── lib/                          # Middleware & Core Utility Layer
│       └── prisma.ts                 # Singleton Database Connection Manager
├── public/
│   ├── bls-hero-bg.png               # BLS 2026 cinematic hero background
│   └── team-photos/                  # Optimised WebP team portraits
└── docs/                             # Institutional Archive (Ph.D. Review Ready)
    ├── strategic/                    # Business Case & Product Requirements
    ├── technical/                    # Backend Architecture & Design Spec
    └── operational/                  # Maintenance Protocols & Security Manuals
```

---

## 📅 Version Control & Release History

### **v1.2.0 - "Bharat Lead Summit & Committee Restructure" (Latest)**
- ✅ **BLS Page Full Redesign**: `/events/bharat-lead-summit` rebuilt as a full-fidelity clone of [bharatleadsummit.com](https://bharatleadsummit.com), matching the official summit website's structure and brand language.
  - Cinematic hero with live countdown timer to August 10, 2026.
  - Animated stat cards with `IntersectionObserver`-triggered count-up.
  - About & theme section with tag chips and organised-by card.
  - Interactive tabbed 3-day agenda (Day 1 / Day 2 / Day 3).
  - Gallery grid pulling official BLS media with graceful fallback placeholders.
  - Full sponsorship matrix — Platinum, Gold, Silver, Associate tiers.
  - Bharat Innovation Challenge CTA section with prize pool & eligibility.
  - FAQ accordion component.
  - Final dark-gradient register CTA with early bird badge.
- ✅ **Committee Rebranding** (Team page):
  - *Senior Organizing Committee* → **Executive Committee**
  - *Organizing Committee Members* → **Core Committee**
  - All 18 member `org` labels updated to reflect the new structure.
- ✅ **Hero Background Asset**: `bls-hero-bg.png` added to `/public`.

### **v1.1.0 - "Intelligence & Persistence Update"**
- ✅ **Custom Analytics System**: Full-stack tracking for views, unique visitors, and device metrics.
- ✅ **Persistent Admin Sessions**: 7-day secure cookie implementation for the leadership portal.
- ✅ **Recharts Visualization**: High-fidelity line and pie charts for real-time site intelligence.
- ✅ **Improved Data Management**: Global search, sorting, and CSV exports for all form submissions.
- ✅ **Legal Compliance**: Updated Terms & Conditions with a comprehensive Cookie Policy.
- ✅ **Direct Admin Access**: Integrated 'Admin' link in the desktop navigation for streamlined workflow.

### **v1.0.0 - "Foundation Release"**
- ✅ Initial platform launch with Liquid Glass design system.
- ✅ Core pages: Home, About, Team, Events, Contact, Join, Terms.
- ✅ Admin portal with enquiry management.
- ✅ Prisma + SQLite persistent storage layer.
- ✅ Hybrid Navbar + mobile bottom-dock navigation.

---

## ⚖️ Intellectual Property & Compliance
This software and all contained digital assets (UX patterns, custom graphics, source code) are the **proprietary Intellectual Property** of the **LEADS Next Gen Centre**. Unauthorized use, replication, or distribution without explicit written consent from the department head is strictly prohibited. Refer to the **[Terms & Conditions](/terms)** for full legal context.

## 👥 Institutional Support
For technical inquiries, departmental review, or maintenance support:
- **Email**: [leads.ngc@msruas.ac.in](mailto:leads.ngc@msruas.ac.in)
- **Website**: [bharatleadsummit.com](https://bharatleadsummit.com)
- **Location**: University House, New BEL Rd, M S R Nagar, Mathikere, Bengaluru, Karnataka 560054

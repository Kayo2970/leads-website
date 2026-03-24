# LEADS - Next Generation Centre Website

A modern, high-performance Next.js website for LEADS, featuring a stunning animated preloader and responsive design.

## Features

- **Dynamic Preloader**: Animated loading screen with spinning LEADS logo (640×640px)
  - White animated gradient background
  - Smooth Y-axis rotation animation (1080°)
  - 2-second animation duration
  - Responsive loading line indicator
  
- **Responsive Design**: Fully mobile-optimized with Tailwind CSS
- **Modern Branding**: LEADS logo integration across navbar and footer
- **Performance Optimized**: Fast loading, GPU-accelerated animations
- **Contact Information**: Updated BLS contact details and multiple phone numbers
- **Events Section**: Dedicated events page with Bharat Lead Summit info

## Tech Stack

- **Framework**: Next.js 16.2.1
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4
- **Font**: Inter (via next/font)
- **Icons**: Custom favicon and apple-icon

## Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Home page
│   ├── about/                # About page
│   ├── contact/              # Contact page with form
│   ├── events/               # Events listing
│   └── join/                 # Join form page
├── components/
│   ├── Preloader.tsx         # Animated loading screen
│   ├── Navbar.tsx            # Navigation with logo
│   ├── Footer.tsx            # Footer with branding
│   ├── ContactForm.tsx       # Contact submission form
│   ├── JoinForm.tsx          # Join submission form
│   ├── ThemeProvider.tsx     # Dark/light theme
│   └── [other components]
public/
├── leads-logo.png            # Main logo (500×500px)
├── icon.png                  # Favicon (64×64px)
└── apple-icon.png            # Apple icon (180×180px)
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm run start
```

## Preloader Animation Details

The preloader (`src/components/Preloader.tsx`) features:

- **Logo**: 640×640px spinning LEADS logo
- **Animation Speed**: 2 seconds per rotation cycle
- **Rotation**: Y-axis rotation (1080° = 3 full rotations)
- **Background**: White with dynamic animated gradient
- **Display Duration**: 3 seconds total loading time
- **Effects**: 
  - Teal glow/drop-shadow on logo
  - Animated gradient line below logo
  - Loading text: "Loading..."

### Animation Keyframes

```css
@keyframes spinAndBounce {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(1080deg); }
}

@keyframes dynamicBg {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

## Contact Information

**LEADS Next Generation Centre**
- Email: info@bharatleadsummit.com
- Phone: 
  - +91 91106 73919
  - +91 80183 75553
  - +91 78992 93097
- Address: University House, New BEL Rd, M S R Nagar, Mathikere, Bengaluru, Karnataka 560054

## Recent Updates

- ✅ Animated preloader with spinning logo
- ✅ White dynamic background gradient
- ✅ Logo sizing optimization (500×500px web-ready)
- ✅ Navbar and footer branding
- ✅ Contact information integration
- ✅ Performance optimization
- ✅ Git workflow automation

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

Deploy on Vercel (recommended):

```bash
vercel
```

Or use any Node.js hosting platform supporting Next.js.

## License

© 2026 LEADS Next Generation Centre. All rights reserved.

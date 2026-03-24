# LEADS Website Documentation Changelog

## Version History & Changes Tracking

### [2026-03-24] - Structural, Pearl Theme, Database & Fan Interactive Cards

#### Visual & Structure Update
- Added `@prisma/client` and `better-sqlite3` for local forms backing.
- Converted standard green themes into a dynamic luxurious Pearl/Purple gradient base.
- Created `InteractiveCards.tsx` a right-to-left semicircular D-Shape fan layout for the Hero section.
- Added realistic physics bounce + shadow tracking for the preloader.

#### Files Updated
- `src/app/page.tsx`, `src/app/globals.css`, `src/components/InteractiveCards.tsx`
- `prisma/schema.prisma`
- `src/app/api/join/route.ts`
- `src/app/dashboard/page.tsx`


### [2026-03-24] - Mobile Navigation Drawer (Left Side)

#### Navigation UX Update
- Reworked mobile navigation so it opens as a left-side drawer instead of occupying the full screen.
- Added a dimmed backdrop layer behind the drawer that closes the menu when tapped.
- Updated drawer spacing and typography for better one-hand navigation on phones.

#### Files Updated
- `src/app/globals.css`
- `src/components/Navbar.tsx`

#### Impact
- Mobile users can keep context of the current page while navigating.
- Side-menu interaction feels lighter and less intrusive than the previous full-screen overlay.

### [2026-03-24] - Route Transition Content Loading Fix

#### Navigation & Reveal Stability
- Fixed hidden/unfinished content issue after page transitions on mobile and desktop.
- Updated `src/components/ScrollReveal.tsx` to reinitialize observer logic on every route change using pathname.
- Added immediate in-viewport visibility handling so above-the-fold elements are shown without waiting for delayed observer callbacks.
- Updated `src/components/Navbar.tsx` to scope mobile menu open state to the current pathname, so route changes automatically close the overlay and prevent blocked pages.
- Removed duplicate mobile dark mode button (`theme-toggle-mobile`) to reduce UI conflicts during navigation transitions.

#### Impact
- Route transitions now render visible content consistently across pages.
- Mobile overlay no longer persists across navigation and hide page content.

### [2026-03-24] - Corrupted Team Images Repaired

#### Image Repair Work
- Detected 8 corrupted files in `public/team-photos/FIX/` and missing/broken counterparts in `public/team-photos/`
- Corruption type was HTML 404 content saved with `.webp` filenames (not valid image binaries)
- Replaced affected files with valid 512x512 PNG portrait placeholders downloaded reliably for:
  - `sudev-mitra.webp`
  - `jyotsna-karn.webp`
  - `pranav-pj.webp`
  - `shravya-t.webp`
  - `shriram-sg.webp`
  - `shwetha-s.webp`
  - `nimisha-km.webp`
  - `arvind-manashetti.webp`
- Synced repaired files to both folders:
  - `public/team-photos/`
  - `public/team-photos/FIX/`
- Validation completed with `file` command confirming all 8 are real image binaries

#### Reliability Note
- Original photo source links used previously are not recoverable from the corrupted files/history
- Current replacements are valid temporary portraits so website rendering is fixed immediately

### [2026-03-24] - Reliable HTML Archive Created

#### HTML Reliability Folder
- Created `docs/html-archive/` to provide browser-friendly re-readable records of completed work
- Generated HTML archive pages:
  - `docs/html-archive/index.html`
  - `docs/html-archive/README.html`
  - `docs/html-archive/CHANGELOG.html`
  - `docs/html-archive/DEVELOPMENT_GUIDE.html`
  - `docs/html-archive/TEAM_PHOTOS_INVENTORY.html`
- Added source generator script: `scripts/generate-html-archive.js`
- Archive index includes links to original source docs in `docs/strategic/`, `docs/technical/`, `docs/content/`, and `docs/operational/`
- Archive index includes recent git work summary for quick auditability

### [2026-03-24] - Team Page Reorganization & Structure Optimization

#### Documentation Structure Updates
- **Reorganized file structure** from flat "site doc/" folder to categorized `/docs/` directory
- Created 4 strategic categories:
  - `docs/strategic/` - Business & strategy documents (PRD, Competitor Analysis, Analytics)
  - `docs/technical/` - Technical specifications & design (TechSpec, Design Documents)
  - `docs/content/` - Content & marketing assets (Content plans, Social Kit, Sitemap)
  - `docs/operational/` - Operations & maintenance (Launch Checklist, Maintenance guides)

#### Team Page Changes (`src/app/team/page.tsx`)
- **Removed**: "Collaborative Partners" section (Sahana Mahadev, Anurag Pandey)
- **Reorganized team hierarchy** into three distinct groups:
  1. Executive Council (7 members)
  2. Senior Organizing Committee (8 members)
  3. Organizing Committee Members (17 members)
- **Updated**: Syed Furqaan Ahmed moved from Senior level to Organizing Committee members
- **Fixed**: Removed duplicate "Mr." prefix from Syed Furqaan Ahmed's name
- **Updated hero text**: Changed from "collaborative partners" to "talented organizers"

#### Team Card Component Updates (`src/components/TeamCard.tsx`)
- Added hover effects: image zoom (1.08x), brightness increase, card elevation
- Enhanced role text color transition on hover (teal → primary)
- Added image load state indicators with fallback placeholders
- Improved responsive layout with better vertical alignment

### [2026-03-XX] - Initial Project Setup
- Website launch with initial team structure
- Original documentation created (TechSpec, Design Documents, Content Plans, etc.)
- Initial team roster with Executive Council, Committee, and Partners

---

## Document Reference Guide

### Strategic Documents (`docs/strategic/`)
| Document | Purpose | Last Updated |
|----------|---------|--------------|
| PRD-LEADS.docx | Product Requirements & Roadmap | TBD |
| CompetitorBrief-LEADS.docx | Competitive Analysis | TBD |
| Analytics-LEADS.docx | Analytics & Metrics Framework | TBD |

### Technical Documents (`docs/technical/`)
| Document | Purpose | Last Updated |
|----------|---------|--------------|
| TechSpec-LEADS.docx | Technical Specifications | TBD |
| TechSpec-LEADS.txt | Text version of TechSpec | TBD |
| DesignDocument-LEADS.html | UI/UX Design System | TBD |

### Content Documents (`docs/content/`)
| Document | Purpose | Last Updated |
|----------|---------|--------------|
| Content-LEADS.docx | Website Content & Copy | TBD |
| Content-LEADS.txt | Text version of Content | TBD |
| SocialKit-LEADS.docx | Social Media Kit & Guidelines | TBD |
| Sitemap-LEADS.docx | Information Architecture | TBD |
| Sitemap-LEADS.txt | Text version of Sitemap | TBD |

### Operational Documents (`docs/operational/`)
| Document | Purpose | Last Updated |
|----------|---------|--------------|
| LaunchChecklist-LEADS.docx | Pre-Launch Checklist | TBD |
| Maintenance-LEADS.docx | Ongoing Maintenance Guide | TBD |

---

## Team Structure Changes

### Current Team Hierarchy (Post 2026-03-24)

#### Executive Council (7 members)
- Prof. Kuldeep Kumar Raina - Patron
- Dr. K. M. Sharath Kumar - Chief Adviser
- Dr. Subhadeep Mukherjee - Centre Head
- Mr. Ajay R - Finance Head & Auditor
- Dr. Kiran Kumar B M - Head Event & Campus Coordination (RT Campus)
- Dr. Pallabi Mund - Head Event & Campus Coordination (GG Campus)
- Ms. Sujata Bijwe - Head Industry Connect

#### Senior Organizing Committee (8 members)
- Mr. Gurutejas C - Sr. President
- Mr. Abhijit Arya - Sr. Vice President
- Mr. Laksh Soorya Singh - Sr. Events & Operations Head
- Mr. Bhawen Maroo - Sr. Events & Operations Head
- Ms. Shreesha S.N - Sr. Social Media & Design Head
- Ms. Bharvi A Padia - Sr. PR Head
- Mr. Arvind Rakshith G - Sr. Finance & Sponsorship Head

#### Organizing Committee Members (17 members)
- Nuthan H - President
- Kunal Bhadauria - Vice President
- Sudev Mitra - Chief Coordinator
- Jyotsna Karn - Chief Coordinator
- Pranav P J - Chief Coordinator
- Shravya T - Chief Coordinator
- Shriram SG - General Secretary
- S Bhavya Shree - General Secretary
- Manoj Petakamsetty - General Secretary
- Yash Chandak - Head-Operations & Logistics
- Kayomarz Pavri - Head-Design & Social Media
- Shwetha S - Head-Design & Social Media
- Niyati Chawra - Head-Leadership & Development
- Sadiya Sawood - Head-Leadership & Development
- Nimisha K M - Head-Sustainability & Innovation
- Kishan KP - Head-Marketing & Branding
- Syed Furqaan Ahmed - Head-Research & Development

---

## UI/Component Changes Tracking

### TeamCard Component
| Date | Change | Status |
|------|--------|--------|
| 2026-03-24 | Added hover zoom effect | ✅ Deployed |
| 2026-03-24 | Added image load state indicator | ✅ Deployed |
| 2026-03-24 | Enhanced role text color transitions | ✅ Deployed |
| 2026-03-24 | Improved card elevation on hover | ✅ Deployed |

---

## 📋 Development Workflow Policy

**CRITICAL**: All code changes must be documented in CHANGELOG.md immediately after implementation.

**Update Checklist for Every Change:**
- [ ] Code implemented and tested locally
- [ ] CHANGELOG.md updated with:
  - Date of change
  - File(s) modified
  - What changed and why
  - Impact on user/team
- [ ] Changes committed to git with descriptive message
- [ ] Changes pushed to remote repository

---

## ⏳ Pending Implementation Tasks

### High Priority - In Progress

#### 1. Team Card Visual Enhancements
- **Status**: In Progress
- **Files**: `src/components/TeamCard.tsx`
- **Tasks**:
  - [ ] Add gradient Play button overlay (center, hover visible)
  - [ ] Implement dual-tone color scanning effect on hover
  - [ ] Enhance image saturation/vibrancy on hover
  - [ ] Add smooth transition animations
- **Dependencies**: None
- **Estimated Impact**: Visual polish, improved user engagement

#### 2. Navigation Dark Mode Button Duplication
- **Status**: Pending
- **Files**: `src/components/Navbar.tsx`
- **Issue**: Dark mode button appears twice (desktop + mobile)
- **Solution**: Single theme toggle for responsive navigation
- **Tasks**:
  - [ ] Remove duplicate `theme-toggle-mobile` button
  - [ ] Keep single theme toggle in desktop nav
  - [ ] Ensure mobile hamburger menu works correctly
- **Dependencies**: None
- **Estimated Impact**: Cleaner UI, better UX

#### 3. Remove "Mr." Title from Syed Furqaan Ahmed
- **Status**: Pending
- **Files**: `src/app/team/page.tsx`
- **Change**: "Mr. Syed Furqaan Ahmed" → "Syed Furqaan Ahmed"
- **Location**: Line 234 (organizingCommittee array)
- **Dependencies**: None
- **Estimated Impact**: Consistency with other team member naming

### Medium Priority - On Hold


#### 4. Team Member Photographs (✅ COMPLETE)
- **Status**: ✅ Downloaded & Ready
- **Location**: `/public/team-photos/`
- **Coverage**: 32 active team members + 2 legacy partners
- **Total Files**: 34 WebP images (14 MB total)
- **All 15 Previously Missing Profiles Now Downloaded**: ✅
  - ✅ Sudev Mitra
  - ✅ Jyotsna Karn
  - ✅ Pranav P J
  - ✅ Shravya T
  - ✅ Shriram SG
  - ✅ S Bhavya Shree
  - ✅ Manoj Petakamsetty
  - ✅ Yash Chandak
  - ✅ Kayomarz Pavri
  - ✅ Shwetha S
  - ✅ Niyati Chawra
  - ✅ Sadiya Sawood
  - ✅ Nimisha K M
  - ✅ Kishan KP
  - ✅ Syed Furqaan Ahmed
  - **Plus all Executive Council and Senior Committee (15 more members)**
- **Format**: WebP (optimized for web)
- **Next Step**: Apply visual enhancements (gradient Play overlay, dual-tone effect)
- **Dependencies**: None - photos ready for component development
- **Estimated Impact**: Complete team roster, professional appearance
### Lower Priority

- [ ] Update all document "Last Updated" dates in `/docs/`
- [ ] Review and update PRD with latest feature changes
- [ ] Create component library documentation
- [ ] Add performance optimization audit

---

## Implementation Schedule


| Task | Priority | Status | Target Date | Owner |
|------|----------|--------|-------------|-------|
| Team Card Enhancements | High | In Progress | 2026-03-25 | - |
| Dark Mode Button Fix | High | Pending | 2026-03-25 | - |
| Remove "Mr." from Syed | High | Pending | 2026-03-25 | - |
| Download Missing Photos | Medium | ✅ Complete | 2026-03-24 | ✅ |
| Documentation Updates | Ongoing | Active | Daily | - |
---

## Git Commit History

### Recent Commits
```
c633115 - Remove Collaborative Partners section and update team page structure
```

---

**Last Updated**: 2026-03-24  
**Document Version**: 1.0

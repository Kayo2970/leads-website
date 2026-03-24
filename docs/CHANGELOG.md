# LEADS Website Documentation Changelog

## Version History & Changes Tracking

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

## Pending Tasks

- [ ] Download missing team member photos
  - Sudev Mitra
  - Jyotsna Karn
  - Pranav P J
  - Shravya T
  - Shriram SG
  - S Bhavya Shree
  - Manoj Petakamsetty
  - Yash Chandak
  - Kayomarz Pavri
  - Shwetha S
  - Niyati Chawra
  - Sadiya Sawood
  - Nimisha K M
  - Kishan KP
  - Syed Furqaan Ahmed
- [ ] Implement Play button overlay with gradient effect on team photos
- [ ] Implement dual-tone color enhancement effect on hover
- [ ] Fix duplicate dark mode button in navigation
- [ ] Update all document "Last Updated" dates
- [ ] Review and update PRD with latest business changes

---

## Git Commit History

### Recent Commits
```
c633115 - Remove Collaborative Partners section and update team page structure
```

---

**Last Updated**: 2026-03-24  
**Document Version**: 1.0

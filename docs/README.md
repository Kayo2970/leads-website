\n[2026-03-24] Architecture Update: 
- Optimized loading speeds drastically by eliminating artificial timeouts (3s to 800ms) and refining Preloader DOM handling.
- Enabled full Dark Mode environment for all site elements (Preloader now includes natively shifting deep-space gradients) and implemented System Time Auto-Trigger context. Device automatically detects if it is past 6PM and renders dark mode natively.
- Completed conversion for interactive menu fan shapes to convex leftward arc (`InteractiveCards.tsx`), scaling the experience cleanly on all devices.\n# Documentation Structure

This directory contains all project documentation organized by category for easy navigation and maintenance.

## 📁 Directory Structure

```
docs/
├── strategic/          # Business & strategic documents
│   ├── PRD-LEADS.docx                    # Product Requirements Document
│   ├── CompetitorBrief-LEADS.docx        # Competitive Analysis
│   └── Analytics-LEADS.docx              # Analytics & Metrics Framework
│
├── technical/         # Technical specifications & design
│   ├── TechSpec-LEADS.docx               # Technical Specifications
│   ├── TechSpec-LEADS.txt                # Text version
│   └── DesignDocument-LEADS.html         # UI/UX Design System
│
├── content/           # Content & marketing assets
│   ├── Content-LEADS.docx                # Website Content & Copy
│   ├── Content-LEADS.txt                 # Text version
│   ├── SocialKit-LEADS.docx              # Social Media Kit
│   ├── Sitemap-LEADS.docx                # Information Architecture
│   └── Sitemap-LEADS.txt                 # Text version
│
├── operational/       # Operations & maintenance
│   ├── LaunchChecklist-LEADS.docx        # Pre-Launch Checklist
│   └── Maintenance-LEADS.docx            # Ongoing Maintenance Guide
│
└── CHANGELOG.md       # Complete change history & version tracking
```

## 📋 Document Guide

### Strategic (`/strategic`)
Business-critical documents for stakeholders and planning.

| Document | Updated | Purpose |
|----------|---------|---------|
| PRD-LEADS.docx | - | Core product vision and requirements |
| CompetitorBrief-LEADS.docx | - | Market positioning & competition analysis |
| Analytics-LEADS.docx | - | KPIs, metrics, and analytics framework |

### Technical (`/technical`)
Technical specifications and design systems for developers.

| Document | Updated | Purpose |
|----------|---------|---------|
| TechSpec-LEADS.docx | - | Architecture, stack, and technical requirements |
| DesignDocument-LEADS.html | - | Component library and design tokens |

### Content (`/content`)
Copy, messaging, and information structure.

| Document | Updated | Purpose |
|----------|---------|---------|
| Content-LEADS.docx | - | All website copy and messaging |
| SocialKit-LEADS.docx | - | Social media templates and guidelines |
| Sitemap-LEADS.docx | - | Information architecture and navigation |

### Operational (`/operational`)
Checklists and guides for daily operations and deployment.

| Document | Updated | Purpose |
|----------|---------|---------|
| LaunchChecklist-LEADS.docx | - | Go-live checklist and pre-launch tasks |
| Maintenance-LEADS.docx | - | Routine maintenance, updates, monitoring |

## 📝 Change Tracking

All changes to documents and code are tracked in **CHANGELOG.md**, including:
- Date of change
- What was changed
- Why it was changed
- Team member changes
- Component/UI updates

## 🔄 Usage Guidelines

1. **Before updating a document**: Check CHANGELOG.md for previous changes
2. **After updating a document**: Update the corresponding section in CHANGELOG.md
3. **For version control**: All .docx files are tracked in Git
4. **For accessibility**: .txt versions provided for all key documents

## 📱 Team Structure Reference

Current team is organized in three tiers:
1. **Executive Council** (7 members) - Strategic leadership and oversight
2. **Senior Organizing Committee** (8 members) - Senior management and coordination
3. **Organizing Committee Members** (17 members) - Committee execution and specialized functions

See CHANGELOG.md for current roster and recent team changes.

---

**Last Updated**: 2026-03-24

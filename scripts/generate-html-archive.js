const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const root = path.resolve(__dirname, '..')
const docsDir = path.join(root, 'docs')
const outDir = path.join(docsDir, 'html-archive')

const sourcePages = [
  { file: 'README.md', title: 'Documentation Structure' },
  { file: 'CHANGELOG.md', title: 'Project Changelog' },
  { file: 'DEVELOPMENT_GUIDE.md', title: 'Development Guide' },
  { file: 'TEAM_PHOTOS_INVENTORY.md', title: 'Team Photos Inventory' },
]

const sourceDocs = [
  'strategic/PRD-LEADS.docx',
  'strategic/CompetitorBrief-LEADS.docx',
  'strategic/Analytics-LEADS.docx',
  'technical/TechSpec-LEADS.docx',
  'technical/TechSpec-LEADS.txt',
  'technical/DesignDocument-LEADS.html',
  'content/Content-LEADS.docx',
  'content/Content-LEADS.txt',
  'content/SocialKit-LEADS.docx',
  'content/Sitemap-LEADS.docx',
  'content/Sitemap-LEADS.txt',
  'operational/LaunchChecklist-LEADS.docx',
  'operational/Maintenance-LEADS.docx',
]

const css = `
:root {
  --bg: #f5f7fb;
  --card: #ffffff;
  --text: #16243b;
  --muted: #516075;
  --accent: #0b6a8b;
  --border: #d6dfeb;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Arial, sans-serif;
  color: var(--text);
  background: radial-gradient(circle at top right, #eef6fb 0%, #f5f7fb 42%, #edf2f7 100%);
}
main { max-width: 1100px; margin: 0 auto; padding: 28px 20px 40px; }
h1 { margin: 0 0 8px; }
h2 { margin: 0 0 12px; }
p { color: var(--muted); }
.nav { margin: 14px 0 24px; }
.nav a {
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 9px 12px;
  text-decoration: none;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--card);
  color: var(--accent);
  font-weight: 600;
}
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 8px 20px rgba(10, 35, 66, 0.06);
}
.card + .card { margin-top: 14px; }
pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.55;
}
ul { line-height: 1.6; }
table { width: 100%; border-collapse: collapse; }
th, td { border-bottom: 1px solid var(--border); padding: 8px; text-align: left; }
.footer { margin-top: 24px; font-size: 13px; color: var(--muted); }
`

const escapeHtml = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const htmlShell = (title, body) => `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(title)} | LEADS HTML Archive</title>
<style>${css}</style>
</head>
<body>
<main>
  <h1>${escapeHtml(title)}</h1>
  <p>Reliable browser view generated from current project docs.</p>
  <div class="nav"><a href="index.html">Back to Index</a></div>
  ${body}
  <div class="footer">Generated: ${new Date().toISOString().slice(0, 19).replace('T', ' ')}</div>
</main>
</body>
</html>`

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

for (const page of sourcePages) {
  const fullPath = path.join(docsDir, page.file)
  if (!fs.existsSync(fullPath)) continue
  const raw = fs.readFileSync(fullPath, 'utf8')
  const body = `<section class="card"><pre>${escapeHtml(raw)}</pre></section>`
  fs.writeFileSync(path.join(outDir, page.file.replace('.md', '.html')), htmlShell(page.title, body), 'utf8')
}

let gitLog = 'Unavailable'
try {
  gitLog = execSync('git --no-pager log --oneline -n 12', { cwd: root, encoding: 'utf8' })
} catch (error) {
  gitLog = 'Unavailable'
}

const docsRows = sourceDocs
  .map((doc) => `<tr><td>${escapeHtml(doc)}</td><td><a href="../${escapeHtml(doc)}">Open</a></td></tr>`)
  .join('')

const indexBody = `
<section class="card">
  <h2>HTML Pages</h2>
  <ul>
    <li><a href="README.html">README.html</a></li>
    <li><a href="CHANGELOG.html">CHANGELOG.html</a></li>
    <li><a href="DEVELOPMENT_GUIDE.html">DEVELOPMENT_GUIDE.html</a></li>
    <li><a href="TEAM_PHOTOS_INVENTORY.html">TEAM_PHOTOS_INVENTORY.html</a></li>
  </ul>
</section>
<section class="card">
  <h2>Primary Source Documents</h2>
  <table>
    <thead><tr><th>Document</th><th>Link</th></tr></thead>
    <tbody>${docsRows}</tbody>
  </table>
</section>
<section class="card">
  <h2>Recent Work (Git)</h2>
  <pre>${escapeHtml(gitLog)}</pre>
</section>
`

fs.writeFileSync(path.join(outDir, 'index.html'), htmlShell('LEADS Project HTML Archive', indexBody), 'utf8')
console.log('Created HTML archive in docs/html-archive')

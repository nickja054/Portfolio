const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public');
const dataFile = path.join(repoRoot, 'src', 'data', 'projects.js');

const fileContent = fs.readFileSync(dataFile, 'utf8');
const matches = fileContent.match(/\"\/images[^\"]*\"|\'\/images[^\']*\'/g) || [];

const unique = [...new Set(matches.map(s => s.replace(/^['\"]|['\"]$/g, '')) )];

console.log('Found', unique.length, 'image paths in projects.js');

let missing = [];
for (const imgPath of unique) {
  const rel = imgPath.replace(/^\//, '');
  const full = path.join(publicDir, rel.split('/').join(path.sep));
  if (!fs.existsSync(full)) {
    missing.push({imgPath, full});
  }
}

if (missing.length === 0) {
  console.log('All referenced images exist in public/');
} else {
  console.log('Missing images:');
  missing.forEach(m => console.log('-', m.imgPath, '->', m.full));
}

// Also scan About/Education/Internship components for image src
const otherFiles = [
  path.join(repoRoot, 'src', 'components', 'AboutPage.jsx'),
  path.join(repoRoot, 'src', 'components', 'EducationPage.jsx'),
  path.join(repoRoot, 'src', 'components', 'InternshipPage.jsx')
];
for (const f of otherFiles) {
  if (!fs.existsSync(f)) continue;
  const c = fs.readFileSync(f, 'utf8');
  const ms = c.match(/\"\/images[^\"]*\"|\'\/images[^\']*\'/g) || [];
  const u = [...new Set(ms.map(s => s.replace(/^['\"]|['\"]$/g, '')) )];
  for (const imgPath of u) {
    const rel = imgPath.replace(/^\//, '');
    const full = path.join(publicDir, rel.split('/').join(path.sep));
    if (!fs.existsSync(full)) {
      missing.push({imgPath, full, in: path.basename(f)});
    }
  }
}

if (missing.length > 0) process.exitCode = 2;

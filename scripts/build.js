// scripts/build.js
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const out = path.join(projectRoot, 'dist');

// remove old dist
if (fs.existsSync(out)) {
  fs.rmSync(out, { recursive: true, force: true });
}
fs.mkdirSync(out, { recursive: true });

// copy package.json
fs.copyFileSync(path.join(projectRoot, 'package.json'), path.join(out, 'package.json'));

// copy app.js, index.html, and public folder
const copy = (src, dest) => {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isFile()) {
    fs.copyFileSync(src, dest);
  } else if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const f of fs.readdirSync(src)) {
      copy(path.join(src, f), path.join(dest, f));
    }
  }
};

copy(path.join(projectRoot, 'app.js'), path.join(out, 'app.js'));
copy(path.join(projectRoot, 'index.html'), path.join(out, 'index.html'));
copy(path.join(projectRoot, 'public'), path.join(out, 'public'));

console.log('Build finished — dist/ created');

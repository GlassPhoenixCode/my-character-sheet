const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const indexPath = path.join(outDir, 'index.html');

let html = fs.readFileSync(indexPath, 'utf8');
const stylesheetPattern = /<link\b(?=[^>]*\brel="stylesheet")(?=[^>]*\bhref="([^"]+)")[^>]*\/?>/g;
const preloadPattern = /<link\b(?=[^>]*\brel="preload")(?=[^>]*\bas="style")[^>]*\/?>/g;

let inlined = '';
html = html.replace(stylesheetPattern, (_, href) => {
  const cssPath = path.join(outDir, href.replace(/^\.\//, ''));
  const css = fs.readFileSync(cssPath, 'utf8');
  inlined += `<style data-inline-export-css="${href}">${css}</style>`;
  return '';
});

html = html.replace(preloadPattern, '');

if (!inlined) {
  throw new Error('No exported CSS stylesheet was found to inline.');
}

html = html.replace('</head>', `${inlined}</head>`);
fs.writeFileSync(indexPath, html);

console.log('Inlined exported CSS into out/index.html');

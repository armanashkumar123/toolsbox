const fs = require('fs');
const path = require('path');
const root = 'c:/Users/Public/Downloads/chrome downloads/Web 4.0';

const window = {};
eval(fs.readFileSync(path.join(root, 'tools-data.js'), 'utf8'));

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
sitemap += '  <url>\n    <loc>https://toolsbox.qd.je/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n';
sitemap += '  <url>\n    <loc>https://toolsbox.qd.je/api.html</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n';
sitemap += '  <url>\n    <loc>https://toolsbox.qd.je/privacy.html</loc>\n    <changefreq>yearly</changefreq>\n    <priority>0.3</priority>\n  </url>\n';
sitemap += '  <url>\n    <loc>https://toolsbox.qd.je/terms.html</loc>\n    <changefreq>yearly</changefreq>\n    <priority>0.3</priority>\n  </url>\n';
sitemap += '  <url>\n    <loc>https://toolsbox.qd.je/copyright.html</loc>\n    <changefreq>yearly</changefreq>\n    <priority>0.3</priority>\n  </url>\n';

window.ALL_TOOLS.forEach(t => {
  if (t.isNative) {
    sitemap += `  <url>\n    <loc>https://toolsbox.qd.je/${t.url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }
});

sitemap += '</urlset>';

fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap);
console.log('Updated sitemap.xml with ' + window.ALL_TOOLS.filter(t => t.isNative).length + ' native tool URLs!');

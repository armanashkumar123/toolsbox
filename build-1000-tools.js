const fs = require('fs');
const path = require('path');

const root = 'c:/Users/Public/Downloads/chrome downloads/Web 4.0';
const toolsDir = path.join(root, 'tools');

if (!fs.existsSync(toolsDir)) {
    fs.mkdirSync(toolsDir, { recursive: true });
}

// HTML Template function
function generateToolHTML(title, category, icon, description, inputFields, calcLogic) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} — Free In-Browser Tool | ToolsHub</title>
    <meta name="description" content="${description} 100% free, fast, and client-side privacy.">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --bg: #070714;
            --bg-card: rgba(15, 15, 35, 0.85);
            --primary: #7C3AED;
            --primary-glow: rgba(124, 58, 237, 0.35);
            --accent: #00F2FE;
            --accent-glow: rgba(0, 242, 254, 0.35);
            --text: #F3F4F6;
            --text-muted: #9CA3AF;
            --border: rgba(124, 58, 237, 0.2);
            --radius: 18px;
        }
        body { font-family: 'Plus Jakarta Sans', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; line-height: 1.6; }
        .bg-grid { position: fixed; inset: 0; background-image: radial-gradient(rgba(124, 58, 237, 0.12) 1px, transparent 1px); background-size: 36px 36px; pointer-events: none; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 0 2rem; height: 72px; display: flex; align-items: center; justify-content: space-between; background: rgba(7, 7, 20, 0.85); backdrop-filter: blur(24px); border-bottom: 1px solid var(--border); }
        nav a { color: var(--text); text-decoration: none; display: flex; align-items: center; gap: 10px; font-weight: 700; }
        .nav-logo { width: 38px; height: 38px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: white; }
        
        .container { max-width: 900px; margin: 0 auto; padding: 120px 2rem 60px; position: relative; z-index: 1; }
        .hero-title { font-size: 2.2rem; font-weight: 800; margin-bottom: 10px; background: linear-gradient(135deg, #FFF, var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-desc { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 30px; }
        
        .card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 30px; backdrop-filter: blur(20px); margin-bottom: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.4); }
        .form-group { margin-bottom: 20px; }
        label { display: block; font-size: 0.9rem; font-weight: 600; color: var(--text); margin-bottom: 8px; }
        input, select, textarea { width: 100%; padding: 14px 18px; background: rgba(10, 10, 25, 0.8); border: 1px solid var(--border); border-radius: 12px; color: var(--text); font-family: inherit; font-size: 1rem; outline: none; transition: all 0.3s ease; }
        textarea { font-family: 'JetBrains Mono', monospace; min-height: 120px; resize: vertical; }
        input:focus, select:focus, textarea:focus { border-color: var(--accent); box-shadow: 0 0 20px var(--accent-glow); }
        
        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 14px 24px; background: linear-gradient(135deg, var(--primary), #4338CA); border: none; border-radius: 12px; color: white; font-family: inherit; font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 20px var(--primary-glow); }
        .btn:hover { opacity: 0.95; transform: translateY(-2px); box-shadow: 0 6px 25px var(--primary-glow); }
        .btn-secondary { background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--text); }
        
        .result-box { margin-top: 24px; padding: 20px; background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 14px; }
        .result-title { font-size: 0.85rem; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
        .result-val { font-size: 1.6rem; font-weight: 800; color: #FFF; word-break: break-all; font-family: 'JetBrains Mono', monospace; white-space: pre-wrap; }
        
        .privacy-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: rgba(0, 242, 254, 0.1); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 100px; font-size: 0.78rem; color: var(--accent); font-weight: 600; margin-bottom: 20px; }
        footer { text-align: center; padding: 40px 2rem; border-top: 1px solid var(--border); color: var(--text-muted); font-size: 0.88rem; }
        footer a { color: var(--accent); text-decoration: none; }
    </style>
</head>
<body>
    <div class="bg-grid"></div>
    <nav>
        <a href="../../index.html">
            <div class="nav-logo">${icon}</div>
            <span>ToolsHub</span>
        </a>
    </nav>
    <div class="container">
        <div class="privacy-badge">🔒 100% In-Browser Privacy — Zero Server Uploads</div>
        <h1 class="hero-title">${title}</h1>
        <p class="hero-desc">${description}</p>
        
        <div class="card">
            ${inputFields}
            <button class="btn" onclick="runCalc()">Calculate / Process</button>
            
            <div class="result-box" id="resultContainer" style="display:none;">
                <div class="result-title">Output Result</div>
                <div class="result-val" id="resultVal">---</div>
                <button class="btn btn-secondary" style="margin-top:12px;padding:8px 16px;width:auto;" onclick="copyRes()">Copy Result</button>
            </div>
        </div>
    </div>

    <footer>
        <p>© 2026 ToolsHub · 100% Free Client-Side Tool</p>
        <p style="margin-top:8px;"><a href="../../index.html">← Back to Master Tool Portal</a></p>
    </footer>

    <script>
        function runCalc() {
            try {
                ${calcLogic}
                document.getElementById('resultContainer').style.display = 'block';
            } catch(err) {
                document.getElementById('resultVal').innerText = 'Error: ' + err.message;
                document.getElementById('resultContainer').style.display = 'block';
            }
        }
        function copyRes() {
            const val = document.getElementById('resultVal').innerText;
            navigator.clipboard.writeText(val);
            alert('Copied to clipboard!');
        }
    </script>
</body>
</html>`;
}

// Define tool category specs to generate 1,000 tools
const categories = ['finance', 'development', 'text', 'math', 'converters', 'design', 'productivity', 'security', 'health', 'education'];
const categoryNames = {
  finance: 'Finance & Money',
  development: 'Developer & Code',
  text: 'Text & Strings',
  math: 'Math & Geometry',
  converters: 'Unit Converters',
  design: 'Design & Graphics',
  productivity: 'Date & Productivity',
  security: 'Security & Crypto',
  health: 'Health & Fitness',
  education: 'Education & Science'
};

const categoryIcons = {
  finance: '🏦', development: '💻', text: '🔤', math: '📐', converters: '📏',
  design: '🎨', productivity: '⚡', security: '🔒', health: '🩺', education: '🎓'
};

// Removed the 1000 fake tool generator loop based on user feedback.

// Combine existing native 23 tools + 228 curated open-source tools
const noSignups = JSON.parse(fs.readFileSync('nosignups-tools.json', 'utf8')).tools;
const curatedTools = noSignups.map(t => ({
    name: t.name,
    desc: t.description || 'Open source in-browser tool.',
    icon: categoryIcons[t.category] || '⚡',
    bg: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
    tag: t.category,
    url: t.url,
    isNative: false,
    stars: t.stars ? (t.stars > 1000 ? (t.stars/1000).toFixed(1) + 'k★' : t.stars + '★') : '',
    keywords: (t.tags || []).concat([t.name.toLowerCase(), t.category])
}));

// Core 23 tools
const coreNativeTools = [
  { name: 'EasyConv - YouTube to MP3 & MP4 Converter', desc: 'Convert YouTube videos to 320kbps MP3 audio or 4K MP4 video. Built-in audio trimmer, quality selection, 100% free.', icon: '🎵', bg: 'linear-gradient(135deg, #FF007F, #7C3AED)', tag: 'media', url: 'tools/easyconv/index.html', isNative: true, keywords: ['youtube', 'mp3', 'mp4', 'easyconv', 'converter', 'downloader', 'trimmer', '320kbps', '4k'] },
  { name: 'Audio Trimmer & Cutter', desc: 'Crop and trim MP3, WAV, OGG audio files with live waveform visualizer & fade effects.', icon: '✂️', bg: 'linear-gradient(135deg, #00F2FE, #7C3AED)', tag: 'media', url: 'tools/audio-trimmer/index.html', isNative: true, keywords: ['audio', 'trimmer', 'cutter', 'mp3', 'crop', 'fade', 'waveform'] },
  { name: 'Favicon & App Icon Generator', desc: 'Generate complete ICO & PNG favicon packages for iOS, Android, and Web with manifest file generator.', icon: '🎨', bg: 'linear-gradient(135deg, #EC4899, #8B5CF6)', tag: 'design', url: 'tools/icon-generator/index.html', isNative: true, keywords: ['favicon', 'ico', 'icon', 'generator', 'app icon', 'apple touch', 'android', 'manifest'] },
  { name: 'Indian SIP & Mutual Fund Calculator', desc: 'Calculate mutual fund SIP & Lumpsum returns with inflation adjustments, step-up SIP & wealth growth charts.', icon: '📈', bg: 'linear-gradient(135deg, #10B981, #059669)', tag: 'finance', url: 'tools/sip-calculator/index.html', isNative: true, keywords: ['sip', 'mutual fund', 'calculator', 'india', 'wealth', 'investment', 'returns', 'lumpsum'] },
  { name: 'PDF to Image Converter & Text Extractor', desc: 'Render PDF pages as high-res PNG/JPEG images or extract raw text 100% locally in browser.', icon: '📑', bg: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', tag: 'productivity', url: 'tools/pdf-to-image/index.html', isNative: true, keywords: ['pdf', 'pdf to image', 'png', 'text extractor', 'ocr', 'convert'] },
  { name: 'YouTube to MP3 & MP4 Downloader', desc: 'Convert & download YouTube, Twitter, TikTok, Instagram videos to MP3/MP4.', icon: '🎬', bg: 'linear-gradient(135deg, #FF007F, #7C3AED)', tag: 'media', url: 'tools/media-downloader/index.html', isNative: true, keywords: ['youtube', 'mp3', 'mp4', 'downloader', 'video', 'music', 'convert'] },
  { name: 'All-in-One PDF Tools Hub', desc: 'Merge, Split, Rotate & Compress PDF files 100% in your browser with zero server uploads.', icon: '📄', bg: 'linear-gradient(135deg, #00F2FE, #4FACFE)', tag: 'productivity', url: 'tools/pdf-tools/index.html', isNative: true, keywords: ['pdf', 'merge', 'split', 'compress', 'rotate', 'document', 'convert'] },
  { name: 'Image Editor & Background Remover', desc: 'Crop, resize, apply filters, and erase backgrounds 100% locally with Canvas API.', icon: '🖼️', bg: 'linear-gradient(135deg, #EC4899, #8B5CF6)', tag: 'media', url: 'tools/image-editor/index.html', isNative: true, keywords: ['image', 'editor', 'background remover', 'crop', 'resize', 'filter'] },
  { name: 'Markdown Editor & Live Preview', desc: 'Split-pane real-time markdown editor with HTML export, scroll sync & live word counts.', icon: '✍️', bg: 'linear-gradient(135deg, #7C3AED, #6366F1)', tag: 'writing', url: 'tools/markdown-editor/index.html', isNative: true, keywords: ['markdown', 'editor', 'md', 'html', 'preview', 'writing', 'docs'] },
  { name: 'Regex Tester & Debugger', desc: 'Test regular expressions with real-time match highlighting, regex cheatsheet & replacement mode.', icon: '🔍', bg: 'linear-gradient(135deg, #00F2FE, #4FACFE)', tag: 'development', url: 'tools/regex-tester/index.html', isNative: true, keywords: ['regex', 'regexp', 'test', 'match', 'pattern', 'expression', 'debug'] },
  { name: 'Base64 Encoder / Decoder', desc: 'Convert text and binary files (images, PDFs) to/from Base64 strings with live previews.', icon: '🔐', bg: 'linear-gradient(135deg, #EC4899, #8B5CF6)', tag: 'development', url: 'tools/base64-encoder/index.html', isNative: true, keywords: ['base64', 'encode', 'decode', 'text', 'file', 'binary', 'convert'] },
  { name: 'Meta Tag & Open Graph Generator', desc: 'Generate complete HTML meta tags with live social media card previews for Twitter & Facebook.', icon: '🌐', bg: 'linear-gradient(135deg, #10B981, #059669)', tag: 'development', url: 'tools/meta-tag-generator/index.html', isNative: true, keywords: ['meta', 'tag', 'seo', 'opengraph', 'og', 'twitter', 'card', 'social'] },
  { name: 'Dummy Data & Lorem Ipsum Generator', desc: 'Generate fake Indian personas, mock JSON datasets, and custom Lorem Ipsum text.', icon: '📊', bg: 'linear-gradient(135deg, #F59E0B, #D97706)', tag: 'development', url: 'tools/dummy-data-generator/index.html', isNative: true, keywords: ['dummy', 'fake', 'lorem', 'ipsum', 'json', 'data', 'user', 'persona'] },
  { name: 'EMI Calculator', desc: 'Calculate loan EMIs for Home, Car & Personal loans. Includes interactive pie chart & amortization schedule.', icon: '🏦', bg: 'linear-gradient(135deg, #7C3AED, #4338CA)', tag: 'finance', url: 'tools/emi-calculator/index.html', isNative: true, keywords: ['emi', 'loan', 'home loan', 'car loan', 'personal loan', 'interest', 'india', 'bank'] },
  { name: 'GST Calculator India', desc: 'Calculate GST inclusive & exclusive values across all Indian slabs (5%, 12%, 18%, 28%) with CGST/SGST split.', icon: '🧾', bg: 'linear-gradient(135deg, #059669, #10B981)', tag: 'finance', url: 'tools/gst-calculator/index.html', isNative: true, keywords: ['gst', 'tax', 'cgst', 'sgst', 'igst', 'india', 'calculator', 'amount'] },
  { name: 'Image Compressor', desc: 'Compress JPEG, PNG & WebP images 100% in your browser. Side-by-side comparison & batch ZIP export.', icon: '⚡', bg: 'linear-gradient(135deg, #EF4444, #DC2626)', tag: 'media', url: 'tools/image-compressor/index.html', isNative: true, keywords: ['image', 'compress', 'photo', 'resize', 'jpeg', 'png', 'webp', 'shrink'] },
  { name: 'JSON Formatter & Validator', desc: 'Beautify, format, minify, and validate JSON data with collapsible tree view & line error detection.', icon: '{ }', bg: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', tag: 'development', url: 'tools/json-formatter/index.html', isNative: true, keywords: ['json', 'format', 'validator', 'beautify', 'minify', 'tree', 'code'] },
  { name: 'Color Palette Generator', desc: 'Generate 5-color aesthetic palettes with spacebar. Includes harmony modes, contrast checker & CSS export.', icon: '🎨', bg: 'linear-gradient(135deg, #EC4899, #F43F5E)', tag: 'design', url: 'tools/color-palette/index.html', isNative: true, keywords: ['color', 'palette', 'hex', 'rgb', 'design', 'scheme', 'picker'] },
  { name: 'QR Code Generator', desc: 'Create custom QR codes for URLs, text, WiFi credentials, and phone calls. Instant PNG download.', icon: '📱', bg: 'linear-gradient(135deg, #8B5CF6, #6D28D9)', tag: 'utilities', url: 'tools/qr-code-generator/index.html', isNative: true, keywords: ['qr', 'code', 'wifi', 'url', 'barcode', 'generate', 'scan'] },
  { name: 'Unit Converter Hub', desc: 'Convert 100+ units across 10 categories (Length, Weight, Temp, Speed, Data, Area, Volume).', icon: '📏', bg: 'linear-gradient(135deg, #F59E0B, #B45309)', tag: 'utilities', url: 'tools/unit-converter/index.html', isNative: true, keywords: ['unit', 'converter', 'length', 'weight', 'temperature', 'speed', 'kg', 'miles'] },
  { name: 'Age Calculator & Milestones', desc: 'Calculate exact age in years, months & days. Zodiac sign, solar system ages & lifetime milestone tracker.', icon: '🎂', bg: 'linear-gradient(135deg, #EC4899, #BE185D)', tag: 'utilities', url: 'tools/age-calculator/index.html', isNative: true, keywords: ['age', 'birthday', 'zodiac', 'days', 'date', 'milestone', 'calculator'] },
  { name: 'Password Generator', desc: 'Generate cryptographically strong passwords with custom length, bulk generation & strength indicator.', icon: '🔑', bg: 'linear-gradient(135deg, #10B981, #047857)', tag: 'utilities', url: 'tools/password-generator/index.html', isNative: true, keywords: ['password', 'generator', 'strong', 'security', 'random', 'hash'] },
  { name: 'Text Case Converter', desc: 'Convert text between 12+ case formats (UPPER, lower, Title, camelCase, snake_case, mock case).', icon: '🔤', bg: 'linear-gradient(135deg, #6366F1, #4338CA)', tag: 'writing', url: 'tools/text-case-converter/index.html', isNative: true, keywords: ['text', 'case', 'upper', 'lower', 'title', 'camel', 'snake', 'convert'] }
];

const masterList = coreNativeTools.concat(curatedTools);
console.log('Total Master Tools Count:', masterList.length);

fs.writeFileSync(path.join(root, 'tools-data.js'), 'window.ALL_TOOLS = ' + JSON.stringify(masterList, null, 2) + ';');
console.log('Successfully saved tools-data.js!');

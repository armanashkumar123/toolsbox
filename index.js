// AcroVault JavaScript Portal Engine - Enhanced Multi-Page SPA with Full 148+ Tools Dataset

// 1. Icon Assets Mapping for 34 Categories
const CAT_ASSET_ICONS = {
  'crime-evidence': 'assets/security_document.png',
  'osint': 'assets/fingerprint.png',
  'roadmap': 'assets/folder.png',
  'hardware-hacking': 'assets/cube.png',
  'ai-research': 'assets/ai_badge.png',
  'vapt': 'assets/acrovault_shield.png',
  'ai-hacking': 'assets/holographic_globe.png',
  'account-tools': 'assets/security_ui_icons.png',
  'ai-attack': 'assets/cloud_security.png',
  'malware-analysis': 'assets/security_status.png',
  'url-scanning': 'assets/magnifier.png',
  'social-engineering': 'assets/hacker.png',
  'exploit-directory': 'assets/database.png',
  'malware-courses': 'assets/laptop.png',
  'digital-forensics': 'assets/security_document.png',
  'port-scanners': 'assets/network_map.png',
  'detection-tools': 'assets/network_nodes.png',
  'api-gateway': 'assets/server_stack.png',
  'ethical-hacking': 'assets/laptop.png',
  'security-learning': 'assets/cube.png',
  'ai-vuln-scanner': 'assets/ai_badge.png',
  'pentest-reports': 'assets/security_document.png',
  'jailbreak-ai': 'assets/ai_badge.png',
  'api-key-scanning': 'assets/server_stack.png',
  'photo-forensics': 'assets/magnifier.png',
  'person-osint': 'assets/fingerprint.png',
  'dark-web-search': 'assets/hacker.png',
  'red-team': 'assets/acrovault_shield.png',
  'geo-osint': 'assets/holographic_globe.png',
  'ai-infra-attack': 'assets/cloud_security.png',
  'dark-web-osint': 'assets/hacker.png',
  'esp32-offensive': 'assets/cube.png',
  'image-video-osint': 'assets/magnifier.png',
  'breach-lookup': 'assets/database.png'
};

// 2. Core State
const state = {
  theme: localStorage.getItem('theme') || 'dark',
  currentPage: 'home',
  currentToolId: null,
  heroMode: 'vault', // 'vault' or 'assistant'
  billingCycle: 'monthly', // 'monthly' or 'yearly'
  avaChatOpen: false,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  adminStats: {
    totalTools: 148,
    activeAdmins: 28,
    totalUsers: 10247,
    premiumUsers: 1234
  },
  recentActivity: [
    { type: 'green', text: 'New tool indexed: AcroStrike v2.0', time: '2 min ago' },
    { type: 'purple', text: 'Category updated: Advanced OSINT', time: '15 min ago' },
    { type: 'green', text: 'Verified feed: Bellingcat Investigation Engine', time: '1 hour ago' },
    { type: 'yellow', text: 'Premium subscription registered', time: '2 hours ago' },
    { type: 'purple', text: 'Database audit: Volatility & Autopsy updated', time: '3 hours ago' }
  ],
  tools: []
};

// Load full dataset from window.ACROVAULT_TOOLS if present
function initToolsData() {
  if (typeof window !== 'undefined' && window.ACROVAULT_TOOLS && window.ACROVAULT_TOOLS.length > 0) {
    state.tools = window.ACROVAULT_TOOLS.map(t => {
      const catKey = (t.category || '').toLowerCase().trim();
      const iconPath = CAT_ASSET_ICONS[catKey] || 'assets/vault.png';
      const cleanId = (t.id || t.name || '').toString().trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
      
      return {
        id: cleanId,
        name: t.name || 'Unnamed Tool',
        subtitle: t.categoryName || t.category || 'Cybersecurity Resource',
        description: t.desc || 'Comprehensive cybersecurity resource and utility for security research and operations.',
        category: t.categoryName || t.category || 'General Security',
        categoryId: t.category || 'general',
        type: (t.tags && t.tags[0]) ? t.tags[0].toUpperCase() : 'SCANNER',
        platform: 'Web / Multiplatform',
        pricing: t.isPremium ? 'Premium' : 'Free',
        status: 'Active',
        added: '2026',
        icon: iconPath,
        url: (t.url || '').trim(),
        tags: Array.isArray(t.tags) && t.tags.length ? t.tags : [t.category || 'security'],
        features: [
          `Verified direct resource URL: ${t.url || 'Online repository'}`,
          `Domain: ${t.categoryName || t.category}`,
          `Instant-search index with zero bloat`,
          `Curated for penetration testers and researchers`
        ]
      };
    });
  } else {
    // Fallback baseline
    state.tools = [
      {
        id: 'nmap',
        name: 'Nmap',
        subtitle: 'Network Scanner',
        description: 'Nmap (Network Mapper) is a free and open-source network scanner used for network discovery and security auditing.',
        category: 'Port Scanners',
        categoryId: 'port-scanners',
        type: 'SCANNER',
        platform: 'Web / CLI',
        pricing: 'Free',
        status: 'Active',
        added: '2026',
        icon: 'assets/network_map.png',
        url: 'https://nmap.org',
        tags: ['network', 'scanner', 'free'],
        features: ['Network discovery and host detection', 'Port scanning and service detection', 'OS fingerprinting']
      }
    ];
  }
  state.adminStats.totalTools = state.tools.length;
}

// 3. Chatbot Intelligent Responses
const getAvaResponse = (userText) => {
  const query = userText.toLowerCase().trim();
  
  if (query.includes('nmap') || query.includes('port scan') || query.includes('scanner')) {
    return `Nmap and RustScan are our top network auditing and port scanner tools. On the detail view, you can check key features, metadata attributes, and launch the platform directly!`;
  }
  if (query.includes('osint') || query.includes('recon') || query.includes('intelligence') || query.includes('bellingcat')) {
    return `We catalog 40+ OSINT tools including Bellingcat, SmartImage, Tookie-OSINT, Skopenow, and Netryx Astra. Head over to the Categories section to filter all OSINT resources.`;
  }
  if (query.includes('forensics') || query.includes('memory') || query.includes('autopsy') || query.includes('volatility')) {
    return `For Digital Forensics and Incident Response, we catalog Autopsy, Volatility Framework, SIFT Workstation, CAINE Live, and FTK Imager.`;
  }
  if (query.includes('vapt') || query.includes('penetration') || query.includes('exploit') || query.includes('metasploit')) {
    return `AcroVault features VAPT tools, Exploitarium, CVE2PoC, and AcroStrike v2.0 for 20-phase vulnerability assessment and OWASP Top 10 mapping.`;
  }
  if (query.includes('premium') || query.includes('price') || query.includes('pricing') || query.includes('cost') || query.includes('plan')) {
    return `AcroVault provides three pricing tiers: 
    1. **Basic** ($9/mo) with full search access.
    2. **Pro** ($19/mo) with priority feeds, API access, and private intelligence.
    3. **Enterprise** ($49/mo) for red teams and organizations.
    Check the Premium tab for full plan details!`;
  }
  if (query.includes('admin') || query.includes('dashboard') || query.includes('chart') || query.includes('vault')) {
    return `To access the administrative console, click the 'Login / Admin' button in the upper right. You can inspect live metric charts and link directly to the restricted Firebase AV-CMD panel!`;
  }
  if (query.includes('about') || query.includes('who are you') || query.includes('mission')) {
    return `AcroVault is a premium security and OSINT tools database dashboard designed for penetration testers, security architects, and researchers. Our mission is to democratize security utilities globally with zero fluff.`;
  }
  if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
    return `Hello! I'm AVA, your cybersecurity AI assistant. Ask me about tools like Nmap, OSINT techniques, pricing tiers, or how to access our admin console!`;
  }
  
  return `That's a great question about "${userText}". As your AI security assistant, I recommend browsing our repository of ${state.tools.length}+ tools or filtering by category to discover verified tools for this workflow.`;
};

// 4. UI Template Generators
const templates = {
  home: () => {
    const heroImageHtml = state.heroMode === 'vault' 
      ? `<img src="assets/vault.png" alt="AcroVault Safe" class="hero-image">`
      : `<div class="hero-assistant-container" style="position:relative; width:100%; display:flex; flex-direction:column; align-items:center; gap:1.5rem; justify-content:center;">
          <div class="hero-assistant-box" style="position:relative; z-index:5; width:100%;">
            <div class="hero-assistant-header">
              <img src="assets/ava_floating_happy.png" alt="AVA Assistant" class="hero-assistant-img">
              <div class="hero-assistant-info">
                <h4>Hello! I'm AVA</h4>
                <p>Your AI security assistant. How can I help you?</p>
              </div>
            </div>
            <div class="hero-assistant-suggestions">
              <button class="suggestion-btn" data-query="Find a tool for network scanning">Find a tool for network scanning <span>&rarr;</span></button>
              <button class="suggestion-btn" data-query="Show OSINT tools">Show OSINT tools <span>&rarr;</span></button>
              <button class="suggestion-btn" data-query="What tools are for digital forensics?">Show Forensics tools <span>&rarr;</span></button>
            </div>
            <div class="hero-assistant-input-container">
              <input type="text" placeholder="Ask me anything..." id="hero-ava-input" class="hero-assistant-input">
              <button class="hero-assistant-send-btn" id="hero-ava-send">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </div>
          <img src="assets/ava_waving.png" alt="AVA Waving" class="hero-image" style="width:240px; height:auto; margin-top:-10px; filter:drop-shadow(0 15px 30px var(--primary-glow));">
         </div>`;

    const toggleText = state.heroMode === 'vault' ? 'Switch to AI Assistant' : 'Switch to Vault Graphic';
    
    // Tools filtering options
    const categoryOptions = ['All Categories', ...new Set(state.tools.map(t => t.category))];
    const typeOptions = ['All Types', ...new Set(state.tools.map(t => t.type))];

    return `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <div class="hero-badge-container">
            <span class="hero-badge">
              <img src="assets/ai_badge.png" alt="AI Icon" style="width:14px;height:14px;">
              All-in-One Security Toolkit
            </span>
          </div>
          <h1 class="hero-title">AcroVault</h1>
          <h2 class="hero-subtitle">Your Complete Collection of Security & OSINT Tools</h2>
          <p class="hero-desc">Access ${state.tools.length}+ verified security tools, vulnerability scanners, OSINT resources, and cybersecurity utilities in one powerful glassmorphism platform.</p>
          <div class="hero-actions-row">
            <button class="primary-btn" id="hero-browse-btn">Browse All Tools</button>
            <button class="outlined-btn" id="hero-categories-btn">View Categories</button>
          </div>
        </div>
        
        <div class="hero-image-container">
          ${heroImageHtml}
          <div class="assistant-toggle-overlay" id="hero-toggle-btn">
            <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12a10 10 0 0 1 10-10z"></path></svg>
            <span>${toggleText}</span>
          </div>
        </div>
      </section>

      <!-- Stats counter -->
      <div class="stats-banner">
        <div class="stat-item">
          <div class="stat-number">${state.tools.length}+</div>
          <div class="stat-label">Verified Tools</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">34</div>
          <div class="stat-label">Categories</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">10K+</div>
          <div class="stat-label">Daily Users</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">99.9%</div>
          <div class="stat-label">Uptime</div>
        </div>
      </div>

      <!-- Popular Categories -->
      <section class="categories-section" id="popular-categories-section">
        <div class="section-header">
          <div class="section-title-wrapper">
            <h2>Popular Categories</h2>
            <p>Explore tools grouped by security discipline and workflows</p>
          </div>
          <a href="#" class="view-all-link" id="cat-view-all">View All 34 Categories &rarr;</a>
        </div>
        
        <div class="categories-grid">
          <div class="category-card" data-cat="Advanced OSINT Tools">
            <div class="category-icon-wrapper" style="background-color: rgba(16, 185, 129, 0.08);">
              <img src="assets/fingerprint.png" alt="OSINT" style="width:32px;height:32px;object-fit:contain;">
            </div>
            <h3>Advanced OSINT</h3>
            <span class="category-count">Recon & Intelligence</span>
          </div>
          <div class="category-card" data-cat="Crime & Evidence Databases">
            <div class="category-icon-wrapper" style="background-color: rgba(59, 130, 246, 0.08);">
              <img src="assets/security_document.png" alt="Crime & Evidence" style="width:32px;height:32px;object-fit:contain;">
            </div>
            <h3>Crime & Evidence</h3>
            <span class="category-count">Databases & Registries</span>
          </div>
          <div class="category-card" data-cat="Digital Forensics">
            <div class="category-icon-wrapper" style="background-color: rgba(168, 85, 247, 0.08);">
              <img src="assets/security_status.png" alt="Forensics" style="width:32px;height:32px;object-fit:contain;">
            </div>
            <h3>Digital Forensics</h3>
            <span class="category-count">DFIR & Memory Analysis</span>
          </div>
          <div class="category-card" data-cat="Malware Analysis">
            <div class="category-icon-wrapper" style="background-color: rgba(239, 68, 68, 0.08);">
              <img src="assets/cloud_security.png" alt="Malware" style="width:32px;height:32px;object-fit:contain;">
            </div>
            <h3>Malware Analysis</h3>
            <span class="category-count">Sandboxes & Reverse Eng</span>
          </div>
          <div class="category-card" data-cat="VAPT Tools">
            <div class="category-icon-wrapper" style="background-color: rgba(99, 102, 241, 0.08);">
              <img src="assets/acrovault_shield.png" alt="VAPT" style="width:32px;height:32px;object-fit:contain;">
            </div>
            <h3>VAPT & Red Team</h3>
            <span class="category-count">Offensive Security</span>
          </div>
          <div class="category-card" data-cat="Breach & Leak Lookup">
            <div class="category-icon-wrapper" style="background-color: rgba(6, 182, 212, 0.08);">
              <img src="assets/database.png" alt="Breach" style="width:32px;height:32px;object-fit:contain;">
            </div>
            <h3>Breach & Leaks</h3>
            <span class="category-count">Credential Archives</span>
          </div>
        </div>
      </section>

      <!-- Featured Tools -->
      <section class="tools-section" id="tools-showcase-section">
        <div class="section-header">
          <div class="section-title-wrapper">
            <h2>Security Tools Showcase</h2>
            <p>Access ready-to-run penetration testing and metadata mining engines</p>
          </div>
          <a href="#" class="view-all-link" id="tools-view-all">Scroll to Showcase &rarr;</a>
        </div>
        
        <div class="tools-filters">
          <select id="filter-category" class="filter-select">
            ${categoryOptions.map(cat => `<option value="${cat === 'All Categories' ? '' : cat}">${cat}</option>`).join('')}
          </select>
          <select id="filter-type" class="filter-select">
            ${typeOptions.map(t => `<option value="${t === 'All Types' ? '' : t}">${t}</option>`).join('')}
          </select>
        </div>

        <div class="tools-grid" id="tools-grid-list">
          <!-- Rendered dynamically -->
        </div>
      </section>
    `;
  },

  categories: () => {
    const cats = (typeof window !== 'undefined' && window.ACROVAULT_CATEGORIES) ? window.ACROVAULT_CATEGORIES : [];
    
    return `
      <div class="categories-wrapper" style="max-width:1200px; margin:2rem auto; padding:0 1.5rem;">
        <div class="section-header" style="text-align:center; margin-bottom:3rem;">
          <div class="section-title-wrapper" style="margin:0 auto;">
            <h1 style="font-size:2.5rem; font-weight:800; margin-bottom:0.5rem;">All Security Categories</h1>
            <p style="color:var(--text-muted); font-size:1.1rem;">Browse 34 specialized cybersecurity disciplines, OSINT databases, and tools repositories</p>
          </div>
        </div>

        <div class="categories-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:1.5rem;">
          ${cats.map(c => {
            const iconPath = CAT_ASSET_ICONS[c.id] || 'assets/vault.png';
            return `
              <div class="category-card" data-cat="${c.name}" style="cursor:pointer; display:flex; flex-direction:column; align-items:flex-start; text-align:left; padding:1.5rem;">
                <div class="category-icon-wrapper" style="background-color: rgba(99, 102, 241, 0.08); margin-bottom:1rem;">
                  <img src="${iconPath}" alt="${c.name}" style="width:32px;height:32px;object-fit:contain;">
                </div>
                <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:0.35rem;">${c.name}</h3>
                <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.4; margin-bottom:0.75rem;">${c.desc || 'Specialized cybersecurity utility category.'}</p>
                <span class="category-count" style="margin-top:auto;">${c.count || 1}+ tools &rarr;</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },
  
  tool: (toolId) => {
    const tool = state.tools.find(t => t.id === toolId) || state.tools[0];
    const isFav = state.favorites.includes(tool.id);
    const favText = isFav ? 'Remove from Favorites' : 'Add to Favorites';
    const favIconColor = isFav ? 'fill="currentColor" color="var(--primary-color)"' : 'fill="none"';
    
    // Find related tools (matching categories, ignoring self)
    const related = state.tools
      .filter(t => t.category === tool.category && t.id !== tool.id)
      .slice(0, 4);
    
    return `
      <div class="tool-details-wrapper">
        <div class="breadcrumbs">
          <a href="#" data-page="home">Home</a> &gt; 
          <a href="#" data-page="categories">Categories</a> &gt; 
          <span>${tool.name}</span>
        </div>
        
        <div class="tool-detail-grid">
          <div class="tool-detail-main">
            <a href="#" class="back-to-tools-btn" id="detail-back-btn">
              <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Tools
            </a>
            
            <div class="tool-header-block">
              <img src="${tool.icon}" alt="${tool.name}" class="tool-large-icon">
              <div class="tool-header-info">
                <h1>${tool.name}</h1>
                <span class="tool-subtitle">${tool.subtitle}</span>
                <div class="tool-badges-row">
                  <span class="badge-tag network">${tool.category}</span>
                  <span class="badge-tag scanner">${tool.type}</span>
                  <span class="badge-tag free">${tool.pricing} Tool</span>
                </div>
                <div class="tool-action-buttons">
                  <button class="primary-btn" id="launch-platform-btn">Launch Platform &rarr;</button>
                  <button class="outlined-btn" id="favorite-toggle-btn">
                    <svg style="width:18px;height:18px;" viewBox="0 0 24 24" ${favIconColor} stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span>${favText}</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="tool-section-content">
              <h2>Overview & Capabilities</h2>
              <p style="font-size:1.1rem; color:var(--text-secondary); line-height:1.7;">${tool.description}</p>
            </div>
            
            <div class="tool-section-content">
              <h2>Key Features</h2>
              <ul>
                ${tool.features ? tool.features.map(f => `<li>${f}</li>`).join('') : '<li>Advanced auditing engine</li>'}
              </ul>
            </div>
            
            <div class="tool-section-content">
              <h2>Tags & Index Keys</h2>
              <div class="tags-container">
                ${tool.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
              </div>
            </div>

            <div class="tool-section-content">
              <h2>Related Tools in ${tool.category}</h2>
              <div class="related-tools-grid">
                ${related.length > 0 ? related.map(r => `
                  <div class="related-tool-card" data-tool="${r.id}">
                    <img src="${r.icon}" class="related-tool-img" alt="${r.name}">
                    <div class="related-tool-info">
                      <h4>${r.name}</h4>
                      <p>${r.subtitle}</p>
                    </div>
                  </div>
                `).join('') : '<p style="color:var(--text-muted)">No other related tools in this category.</p>'}
              </div>
            </div>
          </div>
          
          <div class="tool-detail-sidebar">
            <div class="tool-info-meta-card">
              <h3>Tool Information</h3>
              <div class="meta-row">
                <span class="meta-label">Category</span>
                <span class="meta-value">${tool.category}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Direct Target</span>
                <span class="meta-value" style="word-break:break-all;"><a href="${tool.url}" target="_blank" rel="noopener noreferrer" style="color:var(--primary-color);">${tool.url ? new URL(tool.url).hostname : 'Official Link'}</a></span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Platform</span>
                <span class="meta-value">${tool.platform}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Pricing</span>
                <span class="meta-value">${tool.pricing}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Status</span>
                <span class="meta-value" style="color:var(--success-color)">${tool.status}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Audit Verified</span>
                <span class="meta-value">${tool.added}</span>
              </div>
            </div>
            
            <div class="tool-ava-card">
              <div class="tool-ava-header">
                <img src="assets/ava_small_thumbsup.png" alt="AVA Logo" class="tool-ava-img">
                <div>
                  <h4>AVA AI Assistant</h4>
                  <span class="online-indicator">Online</span>
                </div>
              </div>
              <p class="tool-ava-desc">I can help you understand tool syntax parameters, command usages, or find custom script files.</p>
              <div class="tool-ava-actions">
                <button class="tool-ava-btn" data-query="Explain how to use ${tool.name}">Explain ${tool.name} usage</button>
                <button class="tool-ava-btn" data-query="What is the pricing model for ${tool.name}?">Check license terms</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  admin: () => {
    return `
      <div class="admin-workspace">
        <aside class="admin-sidebar">
          <div class="admin-console-header">
            <h3>AcroVault Admin</h3>
            <p>Secure Admin Console</p>
          </div>
          
          <nav class="admin-menu-group">
            <h4>Tools Management</h4>
            <ul class="admin-menu-list">
              <li class="admin-menu-item active"><a href="#" id="admin-dash-menu"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg> Dashboard</a></li>
              <li class="admin-menu-item"><a href="admin-vault.html"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Firebase 2FA Terminal &rarr;</a></li>
              <li class="admin-menu-item"><a href="#" id="admin-tools-menu"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg> All Tools</a></li>
              <li class="admin-menu-item"><a href="#" id="admin-add-menu"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Add New Tool</a></li>
            </ul>
          </nav>

          <nav class="admin-menu-group">
            <h4>User Management</h4>
            <ul class="admin-menu-list">
              <li class="admin-menu-item"><a href="#"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg> Active Admins</a></li>
              <li class="admin-menu-item"><a href="#"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon></svg> Premium Members</a></li>
            </ul>
          </nav>
        </aside>
        
        <main class="admin-main-panel">
          <div class="admin-top-bar">
            <h2>Dashboard Overview</h2>
            <div style="display:flex; gap:10px;">
              <a href="admin-vault.html" class="primary-btn" style="text-decoration:none; padding:8px 16px; font-size:0.85rem;">🔒 AV-CMD Terminal</a>
              <button class="outlined-btn" id="admin-logout-btn">
                <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                Exit
              </button>
            </div>
          </div>

          <!-- Firebase Notice Banner -->
          <div class="admin-card" style="margin-bottom:1.5rem; background:linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15)); border:1px solid var(--primary-color);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
              <div>
                <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:0.25rem;">🔒 Restricted AV-CMD Backend</h3>
                <p style="color:var(--text-muted); font-size:0.85rem;">For full database CRUD, TOTP 2FA configuration, and Firestore tools synchronization, open the dedicated admin vault terminal.</p>
              </div>
              <a href="admin-vault.html" class="primary-btn" style="text-decoration:none; font-size:0.85rem;">Open AV-CMD &rarr;</a>
            </div>
          </div>
          
          <!-- Metrics Stats cards -->
          <div class="admin-stats-grid">
            <div class="admin-stat-card">
              <div class="admin-stat-header">
                <span>Total Tools</span>
                <svg class="admin-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <div class="admin-stat-number" id="stat-tools-count">${state.tools.length}</div>
              <div class="admin-stat-trend up">
                <span>&uarr; Verified in Catalog</span>
              </div>
            </div>
            
            <div class="admin-stat-card">
              <div class="admin-stat-header">
                <span>Active Admins</span>
                <svg class="admin-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
              </div>
              <div class="admin-stat-number">${state.adminStats.activeAdmins}</div>
              <div class="admin-stat-trend up">
                <span>&uarr; 2FA Protected</span>
              </div>
            </div>
            
            <div class="admin-stat-card">
              <div class="admin-stat-header">
                <span>Total Users</span>
                <svg class="admin-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path></svg>
              </div>
              <div class="admin-stat-number">${state.adminStats.totalUsers.toLocaleString()}</div>
              <div class="admin-stat-trend up">
                <span>&uarr; +18% this month</span>
              </div>
            </div>
            
            <div class="admin-stat-card">
              <div class="admin-stat-header">
                <span>Premium Members</span>
                <svg class="admin-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon></svg>
              </div>
              <div class="admin-stat-number">${state.adminStats.premiumUsers.toLocaleString()}</div>
              <div class="admin-stat-trend up">
                <span>&uarr; +4.2% active</span>
              </div>
            </div>
          </div>

          <!-- Charts layout -->
          <div class="admin-charts-grid">
            <div class="admin-card">
              <div class="admin-card-header">
                <h3>System Telemetry & Activity</h3>
              </div>
              <div class="chart-container" style="position:relative; height:240px; width:100%;">
                <canvas id="systemOverviewChart"></canvas>
              </div>
            </div>

            <div class="admin-card">
              <div class="admin-card-header">
                <h3>Category Distribution</h3>
              </div>
              <div class="chart-container" style="position:relative; height:240px; width:100%;">
                <canvas id="categoryDistChart"></canvas>
              </div>
            </div>
          </div>
          
          <!-- Recent Activity & Quick Actions -->
          <div class="admin-card" style="margin-top:1.5rem;">
            <div class="admin-card-header">
              <h3>Quick Actions</h3>
            </div>
            <div class="quick-actions-grid">
              <button class="primary-btn" id="action-add-tool-btn">Add Tool (Mock)</button>
              <button class="outlined-btn" id="action-add-cat-btn">Add Category</button>
              <button class="outlined-btn" id="action-export-btn">Export Data</button>
              <a href="admin-vault.html" class="outlined-btn" style="text-decoration:none; text-align:center;">Launch AV-CMD</a>
            </div>
          </div>
        </main>
      </div>
    `;
  },
  
  about: () => {
    return `
      <div class="about-wrapper">
        <section class="about-hero">
          <div class="about-text">
            <h1>About AcroVault</h1>
            <p>AcroVault is the ultimate catalog platform for cybersecurity professionals, penetration testers, security architects, and digital forensics investigators. We bring together state-of-the-art tools and resources to safeguard enterprise information systems.</p>
            
            <div class="values-grid">
              <div class="value-item">
                <div class="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div class="value-text">
                  <h3>Our Mission</h3>
                  <p>To provide easy and secure access to the best cybersecurity utilities and OSINT repositories worldwide.</p>
                </div>
              </div>
              <div class="value-item">
                <div class="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10c0 5.523-1.79 10-4 10s-4-4.477-4-10 1.79-10 4-10z"></path></svg>
                </div>
                <div class="value-text">
                  <h3>Our Vision</h3>
                  <p>To become the world's most trusted, open, and comprehensive cybersecurity platform.</p>
                </div>
              </div>
              <div class="value-item">
                <div class="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon></svg>
                </div>
                <div class="value-text">
                  <h3>Our Values</h3>
                  <p>Uncompromising Security, Universal Accessibility, Strong Community Focus, and Operational Excellence.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-graphic-wrapper">
            <img src="assets/acrovault_shield.png" alt="AcroVault Core Shield" class="about-shield-img">
          </div>
        </section>

        <!-- About Stats banner -->
        <div class="stats-banner" style="margin-top:0;">
          <div class="stat-item">
            <div class="stat-number">${state.tools.length}+</div>
            <div class="stat-label">Tools Available</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10K+</div>
            <div class="stat-label">Happy Users</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Support availability</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Secure Platform</div>
          </div>
        </div>
      </div>
    `;
  },
  
  premium: () => {
    const isYearly = state.billingCycle === 'yearly';
    const basicPrice = isYearly ? '$7.20' : '$9';
    const proPrice = isYearly ? '$15.20' : '$19';
    const entPrice = isYearly ? '$39.20' : '$49';
    const periodText = isYearly ? '/ month (billed yearly)' : '/ month';
    
    return `
      <div class="premium-wrapper">
        <div class="premium-header">
          <h1>Premium Plans</h1>
          <p>Unlock the full potential of AcroVault with our premium intelligence plans</p>
        </div>
        
        <div class="billing-switch-container">
          <button class="billing-btn ${!isYearly ? 'active' : ''}" id="billing-monthly-btn">Monthly</button>
          <button class="billing-btn ${isYearly ? 'active' : ''}" id="billing-yearly-btn">Yearly (Save 20%)</button>
        </div>
        
        <div class="pricing-grid">
          <!-- Basic Plan -->
          <div class="pricing-card">
            <div class="pricing-header">
              <h2>Basic</h2>
              <p class="pricing-desc">Perfect for researchers</p>
            </div>
            <div class="pricing-price">
              <span class="price-number">${basicPrice}</span>
              <span class="price-period">${periodText}</span>
            </div>
            <ul class="pricing-features">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Access to all 148+ tools</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Basic support</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Regular updates</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Community access</li>
            </ul>
            <button class="outlined-btn trial-action-btn">Start Free Trial</button>
          </div>
          
          <!-- Pro Plan (Popular) -->
          <div class="pricing-card popular">
            <div class="pricing-header">
              <h2>Pro</h2>
              <p class="pricing-desc">Most popular plan</p>
            </div>
            <div class="pricing-price">
              <span class="price-number">${proPrice}</span>
              <span class="price-period">${periodText}</span>
            </div>
            <ul class="pricing-features">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Full tools catalog access</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Priority threat intelligence</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Zero-day exploit archives</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> API access</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Export data in CSV / JSON</li>
            </ul>
            <button class="primary-btn trial-action-btn">Start Free Trial</button>
          </div>
          
          <!-- Enterprise Plan -->
          <div class="pricing-card">
            <div class="pricing-header">
              <h2>Enterprise</h2>
              <p class="pricing-desc">For organizations & Red Teams</p>
            </div>
            <div class="pricing-price">
              <span class="price-number">${entPrice}</span>
              <span class="price-period">${periodText}</span>
            </div>
            <ul class="pricing-features">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Everything in Pro</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom tools integration</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Team management</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Dedicated support engineer</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> SLA guarantee (99.99%)</li>
            </ul>
            <button class="outlined-btn trial-action-btn">Start Free Trial</button>
          </div>
        </div>
        
        <p class="pricing-footer-note">All plans include a 7-day free trial. Cancel anytime. 30-day money-back guarantee.</p>
      </div>
    `;
  },
  
  privacy: () => {
    return `
      <div class="legal-wrapper">
        <aside class="legal-sidebar">
          <ul class="legal-nav-list">
            <li class="legal-nav-item active"><a href="#intro">1. Introduction</a></li>
            <li class="legal-nav-item"><a href="#collect">2. Information We Collect</a></li>
            <li class="legal-nav-item"><a href="#use">3. How We Use</a></li>
            <li class="legal-nav-item"><a href="#share">4. Information Sharing</a></li>
            <li class="legal-nav-item"><a href="#security">5. Data Security</a></li>
            <li class="legal-nav-item"><a href="#rights">6. Your Rights</a></li>
            <li class="legal-nav-item"><a href="#cookies">7. Cookies</a></li>
            <li class="legal-nav-item"><a href="#contact">8. Contact Us</a></li>
          </ul>
        </aside>
        
        <div class="legal-content">
          <h1>Privacy Policy</h1>
          <p class="legal-updated">Last updated: 2026</p>
          
          <section id="intro" class="legal-section">
            <h2>1. Introduction</h2>
            <p>At AcroVault, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, process, and protect your information when you access our tools registry platform.</p>
          </section>
          
          <section id="collect" class="legal-section">
            <h2>2. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>Personal information (name, email address, password, billing credentials)</li>
              <li>Usage information (specific security tools accessed, duration of runs, logs generated)</li>
              <li>Technical information (IP address, browser user-agent, operating system parameters, devices used)</li>
            </ul>
          </section>

          <section id="use" class="legal-section">
            <h2>3. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our diagnostic services</li>
              <li>Improve platform performance and optimize the user interface</li>
              <li>Send critical security notifications, invoices, and newsletter updates</li>
              <li>Ensure platform safety and block abusive exploit scanner queries</li>
            </ul>
          </section>

          <section id="share" class="legal-section">
            <h2>4. Information Sharing</h2>
            <p>We do not sell, rent, or trade your personal usage logs. We may share information with trusted third-party service providers who assist in operating our platform, provided they agree to maintain standard confidentiality agreements.</p>
          </section>
          
          <section id="security" class="legal-section">
            <h2>5. Data Security</h2>
            <p>We utilize enterprise-grade encryption layers and audit protocols to secure your metadata. However, no data transmission over the internet can be guaranteed as 100% secure.</p>
          </section>
          
          <section id="rights" class="legal-section">
            <h2>6. Your Rights</h2>
            <p>Depending on your jurisdiction, you have the right to request access, correction, deletion, or portability of your personal telemetry database records stored in our servers.</p>
          </section>
          
          <section id="cookies" class="legal-section">
            <h2>7. Cookies</h2>
            <p>We use cookies to maintain your dashboard session tokens, remember settings like dark/light theme options, and gather aggregate site statistics.</p>
          </section>

          <section id="contact" class="legal-section">
            <h2>8. Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy, please reach out to us at: <code>support@acrovault.net</code></p>
          </section>
        </div>
      </div>
    `;
  },
  
  terms: () => {
    return `
      <div class="legal-wrapper">
        <aside class="legal-sidebar">
          <ul class="legal-nav-list">
            <li class="legal-nav-item active"><a href="#intro">1. Introduction</a></li>
            <li class="legal-nav-item"><a href="#accept">2. Acceptance of Terms</a></li>
            <li class="legal-nav-item"><a href="#use">3. Use of Services</a></li>
            <li class="legal-nav-item"><a href="#responsibilities">4. User Responsibilities</a></li>
            <li class="legal-nav-item"><a href="#liability">5. Limitation of Liability</a></li>
            <li class="legal-nav-item"><a href="#termination">6. Termination</a></li>
            <li class="legal-nav-item"><a href="#governing">7. Governing Law</a></li>
            <li class="legal-nav-item"><a href="#contact">8. Contact Us</a></li>
          </ul>
        </aside>
        
        <div class="legal-content">
          <h1>Terms of Service</h1>
          <p class="legal-updated">Last updated: 2026</p>
          
          <section id="intro" class="legal-section">
            <h2>1. Introduction</h2>
            <p>Welcome to AcroVault. These Terms of Service govern your use of our platform, application registry, and simulated AI diagnostics services.</p>
          </section>
          
          <section id="accept" class="legal-section">
            <h2>2. Acceptance of Terms</h2>
            <p>By accessing and using AcroVault, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you must immediately cease platform access.</p>
          </section>

          <section id="use" class="legal-section">
            <h2>3. Use of Services</h2>
            <p>You agree to use AcroVault only for lawful purposes and in accordance with these Terms. Specifically:</p>
            <ul>
              <li>No illegal penetration testing activities on unauthorized targets</li>
              <li>No unauthorized access to AcroVault admin endpoints or server structures</li>
              <li>Respect all copyrights and trademarks associated with our proprietary codes</li>
              <li>No harmful software injection or denial-of-service attempts</li>
            </ul>
          </section>

          <section id="responsibilities" class="legal-section">
            <h2>4. User Responsibilities</h2>
            <p>You are responsible for maintaining the security of your account and API tokens, and you are fully liable for all activities that occur under your credential profiles.</p>
          </section>

          <section id="liability" class="legal-section">
            <h2>5. Limitation of Liability</h2>
            <p>AcroVault and its developers shall not be liable for any indirect, incidental, or consequential damages resulting from the misuse of these diagnostic utilities.</p>
          </section>

          <section id="termination" class="legal-section">
            <h2>6. Termination</h2>
            <p>We reserve the right to terminate or suspend access to our platform immediately, without prior notice or liability, for any breach of these Terms.</p>
          </section>

          <section id="governing" class="legal-section">
            <h2>7. Governing Law</h2>
            <p>These terms shall be governed and construed in accordance with the laws of the local jurisdiction, without regard to conflict of law provisions.</p>
          </section>

          <section id="contact" class="legal-section">
            <h2>8. Contact Us</h2>
            <p>For support and inquiries concerning our Terms of Service, please contact us at: <code>support@acrovault.net</code></p>
          </section>
        </div>
      </div>
    `;
  }
};

// 5. View Router & Renderer
const renderView = (pageName, params = {}) => {
  state.currentPage = pageName;
  state.currentToolId = params.toolId || null;
  const contentDiv = document.getElementById('app-content');
  
  // Update nav active link
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Render template
  if (templates[pageName]) {
    contentDiv.innerHTML = templates[pageName](params.toolId);
    window.scrollTo(0, 0);
    bindPageEvents(pageName);
  } else {
    // default to home
    contentDiv.innerHTML = templates.home();
    bindPageEvents('home');
  }
};

// 6. Page Event Binding
const bindPageEvents = (pageName) => {
  // Global search input handling
  const globalSearch = document.getElementById('global-search-input');
  if (globalSearch) {
    globalSearch.onkeyup = (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (state.currentPage !== 'home') {
        renderView('home');
        const homeSearch = document.getElementById('global-search-input');
        if (homeSearch) {
          homeSearch.value = q;
          homeSearch.focus();
        }
        filterAndRenderToolsList(q);
      } else {
        filterAndRenderToolsList(q);
      }
    };
  }

  if (pageName === 'home') {
    // Render initial tools grid list
    filterAndRenderToolsList('');

    // Hero Browse button
    const browseBtn = document.getElementById('hero-browse-btn');
    if (browseBtn) {
      browseBtn.onclick = () => {
        const sec = document.getElementById('tools-showcase-section');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      };
    }

    // Hero Categories button
    const categoriesBtn = document.getElementById('hero-categories-btn');
    if (categoriesBtn) {
      categoriesBtn.onclick = () => {
        const sec = document.getElementById('popular-categories-section');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      };
    }

    // Hero graphics / AVA toggle
    const toggleHero = document.getElementById('hero-toggle-btn');
    if (toggleHero) {
      toggleHero.onclick = () => {
        state.heroMode = state.heroMode === 'vault' ? 'assistant' : 'vault';
        renderView('home');
      };
    }

    // Bind Hero Assistant box events if visible
    if (state.heroMode === 'assistant') {
      const heroSend = document.getElementById('hero-ava-send');
      const heroInput = document.getElementById('hero-ava-input');
      
      const triggerHeroMessage = (text) => {
        if (!text) return;
        openFloatingAvaChat();
        appendChatMessage('user', text);
        if (heroInput) heroInput.value = '';
        
        setTimeout(() => {
          const response = getAvaResponse(text);
          appendChatMessage('bot', response);
        }, 600);
      };
      
      if (heroSend && heroInput) {
        heroSend.onclick = () => {
          triggerHeroMessage(heroInput.value.trim());
        };
        heroInput.onkeydown = (e) => {
          if (e.key === 'Enter') triggerHeroMessage(heroInput.value.trim());
        };
      }
      
      document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.onclick = () => {
          triggerHeroMessage(btn.getAttribute('data-query'));
        };
      });
    }

    // Category card clicks (filters tools)
    document.querySelectorAll('.category-card').forEach(card => {
      card.onclick = () => {
        const cat = card.getAttribute('data-cat');
        const filterCatSelect = document.getElementById('filter-category');
        if (filterCatSelect) {
          filterCatSelect.value = cat;
          const sec = document.getElementById('tools-showcase-section');
          if (sec) sec.scrollIntoView({ behavior: 'smooth' });
          filterAndRenderToolsList('', cat);
        }
      };
    });

    // View All links
    const viewAllCats = document.getElementById('cat-view-all');
    if (viewAllCats) {
      viewAllCats.onclick = (e) => {
        e.preventDefault();
        renderView('categories');
      };
    }

    const viewAllTools = document.getElementById('tools-view-all');
    if (viewAllTools) {
      viewAllTools.onclick = (e) => {
        e.preventDefault();
        const sec = document.getElementById('tools-showcase-section');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      };
    }

    // Filter selector changes
    const filterCat = document.getElementById('filter-category');
    const filterType = document.getElementById('filter-type');
    
    const applyFilters = () => {
      const cat = filterCat ? filterCat.value : '';
      const type = filterType ? filterType.value : '';
      const searchVal = document.getElementById('global-search-input') ? document.getElementById('global-search-input').value : '';
      filterAndRenderToolsList(searchVal, cat, type);
    };

    if (filterCat) filterCat.onchange = applyFilters;
    if (filterType) filterType.onchange = applyFilters;

  } else if (pageName === 'categories') {
    document.querySelectorAll('.category-card').forEach(card => {
      card.onclick = () => {
        const cat = card.getAttribute('data-cat');
        renderView('home');
        setTimeout(() => {
          const filterCatSelect = document.getElementById('filter-category');
          if (filterCatSelect) {
            filterCatSelect.value = cat;
            const sec = document.getElementById('tools-showcase-section');
            if (sec) sec.scrollIntoView({ behavior: 'smooth' });
            filterAndRenderToolsList('', cat);
          }
        }, 100);
      };
    });

  } else if (pageName === 'tool') {
    // Back to tools list
    const backBtn = document.getElementById('detail-back-btn');
    if (backBtn) {
      backBtn.onclick = (e) => {
        e.preventDefault();
        renderView('home');
      };
    }

    // Related tool card clicks
    document.querySelectorAll('.related-tool-card').forEach(card => {
      card.onclick = () => {
        const toolId = card.getAttribute('data-tool');
        renderView('tool', { toolId });
      };
    });

    // Add to favorites toggle
    const favBtn = document.getElementById('favorite-toggle-btn');
    if (favBtn) {
      favBtn.onclick = () => {
        const toolId = state.currentToolId || state.tools[0].id;
        const index = state.favorites.indexOf(toolId);
        if (index > -1) {
          state.favorites.splice(index, 1);
        } else {
          state.favorites.push(toolId);
        }
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
        renderView('tool', { toolId });
      };
    }

    // Detail page Launch platform button (opens target tool URL)
    const launchBtn = document.getElementById('launch-platform-btn');
    if (launchBtn) {
      launchBtn.onclick = () => {
        const activeTool = state.tools.find(t => t.id === state.currentToolId) || state.tools[0];
        if (activeTool && activeTool.url) {
          window.open(activeTool.url, '_blank', 'noopener,noreferrer');
        } else {
          alert('Opening resource...');
        }
      };
    }

    // Inner details AVA actions
    document.querySelectorAll('.tool-ava-btn').forEach(btn => {
      btn.onclick = () => {
        const q = btn.getAttribute('data-query');
        openFloatingAvaChat();
        appendChatMessage('user', q);
        setTimeout(() => {
          appendChatMessage('bot', getAvaResponse(q));
        }, 600);
      };
    });

  } else if (pageName === 'admin') {
    // Chart Drawing using CDN Chart.js
    drawAdminCharts();

    // Logout / Exit
    const logoutBtn = document.getElementById('admin-logout-btn');
    if (logoutBtn) {
      logoutBtn.onclick = () => {
        renderView('home');
      };
    }

    // Quick Action buttons
    const addToolBtn = document.getElementById('action-add-tool-btn');
    if (addToolBtn) {
      addToolBtn.onclick = () => {
        openAddToolModal();
      };
    }

    const addCatBtn = document.getElementById('action-add-cat-btn');
    if (addCatBtn) {
      addCatBtn.onclick = () => {
        const newCat = prompt('Enter name of new security category:');
        if (newCat) {
          alert(`Successfully registered category "${newCat}" into system indexes.`);
        }
      };
    }

    const exportBtn = document.getElementById('action-export-btn');
    if (exportBtn) {
      exportBtn.onclick = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.tools, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute("href", dataStr);
        dlAnchor.setAttribute("download", "acrovault-tools-export.json");
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
      };
    }

    const allToolsMenu = document.getElementById('admin-tools-menu');
    if (allToolsMenu) {
      allToolsMenu.onclick = (e) => {
        e.preventDefault();
        alert(`Listing all catalog items: Total ${state.tools.length} verified cybersecurity tools registered.`);
      };
    }

    const addMenuLink = document.getElementById('admin-add-menu');
    if (addMenuLink) {
      addMenuLink.onclick = (e) => {
        e.preventDefault();
        openAddToolModal();
      };
    }

  } else if (pageName === 'premium') {
    // Monthly/Yearly toggle
    const monthlyBtn = document.getElementById('billing-monthly-btn');
    const yearlyBtn = document.getElementById('billing-yearly-btn');
    
    if (monthlyBtn && yearlyBtn) {
      monthlyBtn.onclick = () => {
        state.billingCycle = 'monthly';
        renderView('premium');
      };
      yearlyBtn.onclick = () => {
        state.billingCycle = 'yearly';
        renderView('premium');
      };
    }

    // Trial button actions
    document.querySelectorAll('.trial-action-btn').forEach(btn => {
      btn.onclick = () => {
        alert('Redirecting to secure gateway to start 7-day Premium trial...');
      };
    });

  } else if (pageName === 'privacy' || pageName === 'terms') {
    // Subnav scroll actions
    const subLinks = document.querySelectorAll('.legal-nav-item a');
    subLinks.forEach(link => {
      link.onclick = (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
        
        // Update active class
        subLinks.forEach(l => l.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');
      };
    });
  }
};

// 7. Tools Filter and Grid renderer
const filterAndRenderToolsList = (searchQuery = '', categoryFilter = '', typeFilter = '') => {
  const grid = document.getElementById('tools-grid-list');
  if (!grid) return;
  
  const q = (searchQuery || '').toLowerCase().trim();
  const filtered = state.tools.filter(tool => {
    const matchesSearch = !q || 
                          tool.name.toLowerCase().includes(q) ||
                          tool.subtitle.toLowerCase().includes(q) ||
                          tool.description.toLowerCase().includes(q) ||
                          tool.tags.some(t => t.toLowerCase().includes(q));
    
    const matchesCategory = !categoryFilter || categoryFilter === 'All Categories' || tool.category === categoryFilter;
    const matchesType = !typeFilter || typeFilter === 'All Types' || tool.type === typeFilter;
    
    return matchesSearch && matchesCategory && matchesType;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; padding: 4rem 1rem; text-align: center; color: var(--text-muted);">
      <svg style="width:48px;height:48px;margin-bottom:1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <p style="font-size:1.1rem;font-weight:600;">No tools found matching "${searchQuery}".</p>
      <p style="font-size:0.9rem; margin-top:0.5rem;">Try clearing your filters or searching for another keyword.</p>
    </div>`;
    return;
  }
  
  grid.innerHTML = filtered.map(tool => {
    const isPremium = tool.pricing.toLowerCase() === 'premium';
    const tagsHtml = tool.tags.slice(0, 3).map(t => `<span class="badge-tag ${t}">${t}</span>`).join('');
    const premiumRibbon = isPremium ? `<div class="tool-card-premium-ribbon">Pro</div>` : '';
    
    return `
      <div class="tool-card" data-id="${tool.id}">
        ${premiumRibbon}
        <div class="tool-card-header">
          <img src="${tool.icon}" alt="${tool.name} Icon" class="tool-card-icon">
          <div class="tool-card-title-group">
            <h3>${tool.name}</h3>
            <p>${tool.subtitle}</p>
          </div>
        </div>
        <p style="font-size:0.875rem; color:var(--text-muted); display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;height:60px;">${tool.description}</p>
        <div class="tool-card-tags">
          ${tagsHtml}
        </div>
      </div>
    `;
  }).join('');
  
  // Bind clicks on cards
  grid.querySelectorAll('.tool-card').forEach(card => {
    card.onclick = () => {
      const toolId = card.getAttribute('data-id');
      renderView('tool', { toolId });
    };
  });
};

// 8. Admin Chart Drawing Handler
const drawAdminCharts = () => {
  if (typeof Chart === 'undefined') return;

  // Overview line chart
  const ctxOverview = document.getElementById('systemOverviewChart');
  if (ctxOverview) {
    const isDark = state.theme === 'dark';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    const textColor = isDark ? '#94a3b8' : '#64748b';
    
    new Chart(ctxOverview.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Platform Queries (K)',
          data: [65, 78, 90, 81, 110, 135, 160],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor } }
        }
      }
    });
  }

  // Category distribution doughnut chart
  const ctxDist = document.getElementById('categoryDistChart');
  if (ctxDist) {
    new Chart(ctxDist.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['OSINT', 'Crime & Evidence', 'Digital Forensics', 'Malware', 'VAPT', 'Other'],
        datasets: [{
          data: [35, 30, 25, 20, 15, 23],
          backgroundColor: ['#6366f1', '#a855f7', '#3b82f6', '#ef4444', '#10b981', '#f59e0b'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, color: state.theme === 'dark' ? '#94a3b8' : '#64748b' } }
        }
      }
    });
  }
};

// 9. Floating AVA AI Chat Controller
const openFloatingAvaChat = () => {
  state.avaChatOpen = true;
  const panel = document.getElementById('ava-chat-panel');
  if (panel) panel.classList.add('active');
};

const closeFloatingAvaChat = () => {
  state.avaChatOpen = false;
  const panel = document.getElementById('ava-chat-panel');
  if (panel) panel.classList.remove('active');
};

const appendChatMessage = (sender, text) => {
  const container = document.getElementById('ava-chat-messages');
  if (!container) return;
  
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-message ${sender}`;
  msgDiv.innerHTML = `<div class="message-content">${text.replace(/\n/g, '<br>')}</div>`;
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
};

const bindFloatingAvaChatEvents = () => {
  const triggerBtn = document.getElementById('ava-trigger-btn');
  const closeBtn = document.getElementById('ava-close-btn');
  const sendBtn = document.getElementById('ava-chat-send');
  const input = document.getElementById('ava-chat-input');
  
  if (triggerBtn) {
    triggerBtn.onclick = () => {
      if (state.avaChatOpen) closeFloatingAvaChat();
      else openFloatingAvaChat();
    };
  }
  
  if (closeBtn) closeBtn.onclick = closeFloatingAvaChat;
  
  const handleSend = () => {
    if (!input) return;
    const val = input.value.trim();
    if (!val) return;
    
    appendChatMessage('user', val);
    input.value = '';
    
    setTimeout(() => {
      const reply = getAvaResponse(val);
      appendChatMessage('bot', reply);
    }, 600);
  };
  
  if (sendBtn && input) {
    sendBtn.onclick = handleSend;
    input.onkeydown = (e) => {
      if (e.key === 'Enter') handleSend();
    };
  }
  
  // Suggestion chips inside chat panel
  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.onclick = () => {
      const q = chip.textContent;
      appendChatMessage('user', q);
      setTimeout(() => {
        appendChatMessage('bot', getAvaResponse(q));
      }, 600);
    };
  });
};

// 10. Add Tool Modal (Client-side helper)
const openAddToolModal = () => {
  const name = prompt('Tool Name:');
  if (!name) return;
  const category = prompt('Category (e.g., Advanced OSINT Tools, VAPT Tools, Digital Forensics):', 'Advanced OSINT Tools');
  const url = prompt('Tool Target URL:', 'https://');
  const desc = prompt('Description:');
  
  if (name && url) {
    const newTool = {
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: name,
      subtitle: category || 'Security Resource',
      description: desc || 'Newly added cybersecurity utility.',
      category: category || 'Custom Category',
      categoryId: (category || 'custom').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      type: 'UTILITY',
      platform: 'Web / Multiplatform',
      pricing: 'Free',
      status: 'Active',
      added: '2026',
      icon: 'assets/acrovault_shield.png',
      url: url,
      tags: ['custom', 'new'],
      features: [`Direct link: ${url}`, `Category: ${category}`]
    };
    state.tools.unshift(newTool);
    state.adminStats.totalTools = state.tools.length;
    alert(`Tool "${name}" registered successfully!`);
    renderView(state.currentPage);
  }
};

// 11. Initialization Setup
document.addEventListener('DOMContentLoaded', () => {
  // Load full dataset
  initToolsData();

  // Theme initialization
  document.documentElement.setAttribute('data-theme', state.theme);
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    const sunIcon = toggleBtn.querySelector('.sun-icon');
    const moonIcon = toggleBtn.querySelector('.moon-icon');
    
    if (state.theme === 'dark') {
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    } else {
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    }

    toggleBtn.onclick = () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
      document.documentElement.setAttribute('data-theme', state.theme);
      
      if (state.theme === 'dark') {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
      } else {
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
      }

      // If on admin view, re-draw charts with updated colors
      if (state.currentPage === 'admin') {
        renderView('admin');
      }
    };
  }

  // Nav Router clicks
  document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      renderView(page);
    };
  });

  // Logo link click
  const logoLink = document.getElementById('nav-logo');
  if (logoLink) {
    logoLink.onclick = (e) => {
      e.preventDefault();
      renderView('home');
    };
  }

  // Footer navigation links routing
  document.querySelectorAll('.footer-column a[data-page], .footer-column a[data-cat]').forEach(link => {
    link.onclick = (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      const cat = link.getAttribute('data-cat');
      
      if (page) {
        renderView(page);
      } else if (cat) {
        renderView('home');
        setTimeout(() => {
          const filterCatSelect = document.getElementById('filter-category');
          if (filterCatSelect) {
            filterCatSelect.value = cat;
            const sec = document.getElementById('tools-showcase-section');
            if (sec) sec.scrollIntoView({ behavior: 'smooth' });
            filterAndRenderToolsList('', cat);
          }
        }, 100);
      }
    };
  });

  // Login / Admin Header Action button
  const adminBtn = document.getElementById('login-admin-btn');
  if (adminBtn) {
    adminBtn.onclick = () => {
      if (state.currentPage === 'admin') {
        renderView('home');
      } else {
        renderView('admin');
      }
    };
  }

  // Scroll to Top action
  const scrollBtn = document.getElementById('scroll-top-btn');
  if (scrollBtn) {
    scrollBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // Floating Chat init
  bindFloatingAvaChatEvents();

  // Initial page view render
  renderView('home');
});

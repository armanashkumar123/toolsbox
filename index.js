const getStoredFavorites = () => {
  try {
    const raw = localStorage.getItem('favorites');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

// 1. Core State
const state = {
  theme: localStorage.getItem('theme') || 'light',
  currentPage: 'home',
  heroMode: 'vault', // 'vault', 'assistant', or 'robot'
  categoriesExpanded: false, // false = horizontal carousel, true = full grid
  billingCycle: 'monthly', // 'monthly' or 'yearly'
  avaChatOpen: false,
  favorites: getStoredFavorites(),
  adminStats: {
    totalTools: 523,
    activeAdmins: 28,
    totalUsers: 10247,
    premiumUsers: 1234
  },
  recentActivity: [
    { type: 'green', text: 'New tool added: Subfinder', time: '2 min ago' },
    { type: 'purple', text: 'Category updated: OSINT', time: '15 min ago' },
    { type: 'green', text: 'New user registered', time: '1 hour ago' },
    { type: 'yellow', text: 'Premium subscription purchased', time: '2 hours ago' },
    { type: 'purple', text: 'Tool updated: Nmap', time: '3 hours ago' }
  ],
  tools: []
};

const CAT_ASSET_MAP = {
  'crime-evidence': 'assets/security_document.png',
  'osint': 'assets/fingerprint.png',
  'roadmap': 'assets/folder.png',
  'hardware-hacking': 'assets/laptop.png',
  'ai-research': 'assets/holographic_globe.png',
  'vapt': 'assets/acrovault_shield.png',
  'ai-hacking': 'assets/hacker.png',
  'account-tools': 'assets/phone.png',
  'ai-attack': 'assets/security_status.png',
  'malware-analysis': 'assets/security_ui_icons.png',
  'url-scanning': 'assets/magnifier.png',
  'social-engineering': 'assets/hacker.png',
  'exploit-directory': 'assets/server_stack.png',
  'malware-courses': 'assets/folder.png',
  'digital-forensics': 'assets/security_document.png',
  'port-scanners': 'assets/network_nodes.png',
  'detection-tools': 'assets/magnifier.png',
  'api-gateway': 'assets/cloud_security.png',
  'ethical-hacking': 'assets/hacker.png',
  'security-learning': 'assets/laptop.png',
  'ai-vuln-scanner': 'assets/security_status.png',
  'pentest-reports': 'assets/security_document.png',
  'jailbreak-ai': 'assets/holographic_globe.png',
  'api-key-scanning': 'assets/magnifier.png',
  'photo-forensics': 'assets/magnifier.png',
  'person-osint': 'assets/fingerprint.png',
  'dark-web-search': 'assets/network_nodes.png',
  'red-team': 'assets/acrovault_shield.png',
  'geo-osint': 'assets/holographic_globe.png',
  'ai-infra-attack': 'assets/server_stack.png',
  'dark-web-osint': 'assets/network_nodes.png',
  'esp32-offensive': 'assets/laptop.png',
  'image-video-osint': 'assets/magnifier.png',
  'breach-lookup': 'assets/database.png'
};

const initToolsData = () => {
  if (window.ACROVAULT_TOOLS && window.ACROVAULT_TOOLS.length > 0) {
    state.tools = window.ACROVAULT_TOOLS.map(t => ({
      id: t.id,
      name: t.name,
      subtitle: t.categoryName || t.desc.substring(0, 40),
      description: t.desc,
      category: t.categoryName || t.category,
      type: t.categoryName || 'Security Tool',
      platform: 'Web-based',
      pricing: t.isPremium ? 'Premium' : 'Free',
      status: 'Active',
      added: '2026',
      icon: CAT_ASSET_MAP[t.category] || 'assets/security_status.png',
      tags: t.tags || [],
      features: [
        t.desc,
        'Security auditing capabilities',
        'Active community support'
      ],
      url: t.url || '#'
    }));
    state.adminStats.totalTools = state.tools.length;
  }
};

// 2. Chatbot Intelligent Responses with Real Dataset Integration
const getAvaResponse = (userText) => {
  const rawQuery = (userText || '').trim();
  const query = rawQuery.toLowerCase();
  
  if (!query) return "How can I assist you with AcroVault's security tools today?";

  // 1. Dynamic search across the real 148+ tools dataset
  if (state.tools && state.tools.length > 0 && query.length >= 3) {
    const matchedTools = state.tools.filter(t => 
      t.name.toLowerCase().includes(query) || 
      t.category.toLowerCase().includes(query) || 
      t.description.toLowerCase().includes(query) ||
      (t.tags && t.tags.some(tag => tag.toLowerCase().includes(query)))
    );

    if (matchedTools.length > 0 && !['hello', 'hi', 'hey', 'help', 'what', 'who', 'about', 'admin', 'plan', 'plans', 'price', 'pricing'].includes(query)) {
      const topMatches = matchedTools.slice(0, 3);
      const toolList = topMatches.map(t => `• **${t.name}** [${t.category}] — ${t.description}`).join('<br>');
      const moreCount = matchedTools.length > 3 ? `<br><em>...and ${matchedTools.length - 3} more matching tools in the vault!</em>` : '';
      return `I found **${matchedTools.length} security tool${matchedTools.length > 1 ? 's' : ''}** for **"${rawQuery}"**:<br><br>${toolList}${moreCount}<br><br>💡 <em>Tip: You can search "${rawQuery}" in the search bar to inspect all of them!</em>`;
    }
  }

  // 2. Specific domain intelligence
  if (query.includes('nmap') || query.includes('port scan') || query.includes('scanner') || query.includes('rustscan')) {
    return `**Network Scanners & Recon:**<br>Explore **RustScan** (fastest port scanner) and our network auditing collection. Filter by "Port Scanners" in the directory to launch them directly!`;
  }
  if (query.includes('osint') || query.includes('recon') || query.includes('intelligence') || query.includes('person') || query.includes('phone') || query.includes('dox')) {
    return `**OSINT Intelligence Suite:**<br>AcroVault catalogs 75+ OSINT engines covering Social Media analysis (tookie-osint, SmartImage, bbot), Dark Web OSINT (Robin, VoidAccess), and Person lookups (IDCrawl, Skopenow).`;
  }
  if (query.includes('forensic') || query.includes('evidence') || query.includes('memory') || query.includes('autopsy') || query.includes('volatility')) {
    return `**Digital Forensics:**<br>Explore industry standards like **Autopsy**, **Volatility Framework**, **Sleuth Kit (TSK)**, and **SIFT Workstation** for disk, memory, and mobile evidence analysis.`;
  }
  if (query.includes('malware') || query.includes('reverse') || query.includes('disassembler') || query.includes('ida') || query.includes('ghidra') || query.includes('sandbox')) {
    return `**Malware Analysis & Reversing:**<br>Check out **Hybrid Analysis**, **VirusTotal**, **Malware Unicorn RE101/102**, and **Exploit Reversing** tutorials for binary reversing and payload detection.`;
  }
  if (query.includes('crime') || query.includes('police') || query.includes('murder') || query.includes('case')) {
    return `**Crime & Evidence Databases:**<br>Access archives like **Gun Violence Archive**, **Murderpedia**, **Bellingcat**, and **The Doe Network** for investigative research and evidence tracking.`;
  }
  if (query.includes('premium') || query.includes('price') || query.includes('pricing') || query.includes('cost') || query.includes('plan')) {
    return `**AcroVault Pricing Plans:**<br>• **Basic ($9/mo)**: 200+ Tools & Standard Filters<br>• **Pro ($19/mo)**: 500+ Advanced Tools, API Access & Live Reports (Most Popular)<br>• **Enterprise ($49/mo)**: Unlimited API, Dedicated Vault & Priority Support<br><br>All tiers include a 7-day free trial. Head to the **Premium** tab to compare!`;
  }
  if (query.includes('admin') || query.includes('dashboard') || query.includes('metric') || query.includes('analytics')) {
    return `**Admin Intelligence Console:**<br>Click **Login / Admin** in the header to view real-time database metric charts, category distribution analytics, and audit logs!`;
  }
  if (query.includes('about') || query.includes('who are you') || query.includes('mission')) {
    return `**About AcroVault:**<br>AcroVault is a premier cybersecurity directory and OSINT intelligence dashboard built for penetration testers, security architects, investigators, and ethical hackers worldwide.`;
  }
  if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('greetings')) {
    return `Hello! I'm **AVA**, your AI cyber security assistant. Ask me about any tool (e.g. *RustScan*, *Bellingcat*, *Autopsy*), OSINT techniques, or pricing plans!`;
  }
  
  return `I analyzed your query: **"${rawQuery}"**. You can explore our catalog of 148+ tools across 34 categories, or ask me about *OSINT*, *Forensics*, *Scanners*, or *Malware* for instant intelligence!`;
};

// Markdown & Rich Text Formatter
const renderMarkdown = (text) => {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^[•\-\*]\s+(.*)$/gm, '<li class="chat-bullet">$1</li>')
    .replace(/(<li.*<\/li>)+/s, '<ul class="chat-list">$&</ul>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
};

// 3. UI Template Generators
const templates = {
  home: () => {
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
          <p class="hero-desc">Access 500+ premium security tools, vulnerability scanners, OSINT resources, and cybersecurity utilities in one powerful platform.</p>
          <div class="hero-actions-row">
            <button class="primary-btn" id="hero-browse-btn">Browse All Tools</button>
            <button class="outlined-btn" id="hero-categories-btn">View Categories</button>
          </div>
        </div>
        
        <div class="hero-image-container">
          <img src="assets/vault.png" alt="AcroVault 3D Vault" class="hero-image">
        </div>
      </section>

      <!-- Stats counter -->
      <div class="stats-banner" id="stats-banner">
        <div class="stat-item">
          <div class="stat-number" data-target="${state.tools.length}" data-suffix="+">0+</div>
          <div class="stat-label">Premium Tools</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" data-target="${window.ACROVAULT_CATEGORIES ? window.ACROVAULT_CATEGORIES.length : 34}" data-suffix="+">0+</div>
          <div class="stat-label">Categories</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" data-target="10" data-suffix="K+">0K+</div>
          <div class="stat-label">Daily Users</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" data-target="99.9" data-suffix="%" data-decimal="true">0.0%</div>
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
          <button class="view-all-link categories-toggle-btn" id="cat-view-all">
            <span>${state.categoriesExpanded ? 'Show Carousel ◂' : `View All Categories (${window.ACROVAULT_CATEGORIES ? window.ACROVAULT_CATEGORIES.length : 34}) →`}</span>
          </button>
        </div>
        
        <div class="categories-wrapper">
          <!-- Left & Right Flank Floating Long Arrow Buttons -->
          <button class="carousel-flank-btn prev-btn is-hidden" id="cat-prev-btn" title="Slide Left" aria-label="Previous Categories" style="${state.categoriesExpanded ? 'display: none;' : ''}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          
          <button class="carousel-flank-btn next-btn" id="cat-next-btn" title="Slide Right" aria-label="Next Categories" style="${state.categoriesExpanded ? 'display: none;' : ''}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <div class="categories-container ${state.categoriesExpanded ? 'grid-view' : 'carousel-view'}" id="categories-track">
            ${(window.ACROVAULT_CATEGORIES || []).map(cat => {
              const count = state.tools.filter(t => t.category === cat.name || t.category === cat.id).length;
              const iconPath = CAT_ASSET_MAP[cat.id] || 'assets/security_status.png';
              return `
              <div class="category-card" data-cat="${cat.name}">
                <div class="category-icon-wrapper" style="background-color: rgba(59, 130, 246, 0.08);">
                  <img src="${iconPath}" alt="${cat.name}" style="width:32px;height:32px;object-fit:contain;">
                </div>
                <h3>${cat.name}</h3>
                <span class="category-count">${count} tools</span>
              </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- Featured Tools -->
      <section class="tools-section" id="tools-showcase-section">
        <div class="section-header">
          <div class="section-title-wrapper">
            <h2>Featured Tools</h2>
            <p>Access ready-to-run penetration testing and metadata mining engines</p>
          </div>
          <a href="#" class="view-all-link" id="tools-view-all">View All Tools &rarr;</a>
        </div>
        
        <div class="tools-filters">
          <div class="tools-search-box" id="tools-search-box-wrap">
            <svg class="tools-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search tools, OSINT, categories, tags..." id="tools-search-input" class="tools-search-input" value="${state.searchQuery || ''}" autocomplete="off">
            <button class="tools-search-clear" id="tools-search-clear" style="${state.searchQuery ? 'display:flex;' : 'display:none;'}" title="Clear search">✕</button>
            <div class="search-suggestions-dropdown" id="tools-search-dropdown" style="display: none;"></div>
          </div>
          <div class="tools-dropdowns">
            <select id="filter-category" class="filter-select" aria-label="Filter by category">
              ${categoryOptions.map(cat => `<option value="${cat === 'All Categories' ? '' : cat}">${cat}</option>`).join('')}
            </select>
            <select id="filter-type" class="filter-select" aria-label="Filter by type">
              ${typeOptions.map(t => `<option value="${t === 'All Types' ? '' : t}">${t}</option>`).join('')}
            </select>
          </div>
        </div>

        <div class="tools-grid" id="tools-grid-list">
          <!-- Rendered dynamically -->
        </div>
      </section>
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
          <a href="#" class="breadcrumb-link" data-action="home">Home</a> &gt; 
          <a href="#" class="breadcrumb-link" data-action="tools">Tools</a> &gt; 
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
                  <span class="badge-tag">${tool.category}</span>
                  <span class="badge-tag">${tool.pricing || 'Free'} Tool</span>
                  ${tool.tags && tool.tags.length > 0 ? `<span class="badge-tag">${tool.tags[0]}</span>` : ''}
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
              <p style="font-size:1.1rem; color:var(--text-secondary); line-height:1.7;">${tool.description}</p>
            </div>
            
            <div class="tool-section-content">
              <h2>Key Features</h2>
              <ul>
                ${tool.features ? tool.features.map(f => `<li>${f}</li>`).join('') : '<li>Advanced auditing engine</li>'}
              </ul>
            </div>
            
            <div class="tool-section-content">
              <h2>Tags</h2>
              <div class="tags-container">
                ${tool.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
              </div>
            </div>

            <div class="tool-section-content">
              <h2>Related Tools</h2>
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
                <span class="meta-label">Type</span>
                <span class="meta-value">${tool.type}</span>
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
                <span class="meta-label">Added</span>
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
                <button class="tool-ava-btn" data-query="Explain how to run basic scan with ${tool.name}">Explain basic scan structure</button>
                <button class="tool-ava-btn" data-query="What is the pricing model for ${tool.name}?">Check license parameters</button>
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
              <li class="admin-menu-item"><a href="#" id="admin-tools-menu"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg> All Tools</a></li>
              <li class="admin-menu-item"><a href="#" id="admin-add-menu"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Add New Tool</a></li>
              <li class="admin-menu-item"><a href="#"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> Categories</a></li>
              <li class="admin-menu-item"><a href="#"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> Tags</a></li>
            </ul>
          </nav>

          <nav class="admin-menu-group">
            <h4>User Management</h4>
            <ul class="admin-menu-list">
              <li class="admin-menu-item"><a href="#"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Users</a></li>
              <li class="admin-menu-item"><a href="#"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> Premium Users</a></li>
              <li class="admin-menu-item"><a href="#"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg> Activity Logs</a></li>
            </ul>
          </nav>

          <nav class="admin-menu-group">
            <h4>System</h4>
            <ul class="admin-menu-list">
              <li class="admin-menu-item"><a href="#"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Settings</a></li>
              <li class="admin-menu-item"><a href="#"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> Analytics</a></li>
              <li class="admin-menu-item"><a href="#"><svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Backup</a></li>
            </ul>
          </nav>
        </aside>
        
        <main class="admin-main-panel">
          <div class="admin-top-bar">
            <h2>Dashboard Overview</h2>
            <button class="outlined-btn" id="admin-logout-btn">
              <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              Logout
            </button>
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
                <span>&uarr; +12 this week</span>
              </div>
            </div>
            
            <div class="admin-stat-card">
              <div class="admin-stat-header">
                <span>Active Admins</span>
                <svg class="admin-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
              </div>
              <div class="admin-stat-number">${state.adminStats.activeAdmins}</div>
              <div class="admin-stat-trend up">
                <span>&uarr; +2 this week</span>
              </div>
            </div>

            <div class="admin-stat-card">
              <div class="admin-stat-header">
                <span>Total Users</span>
                <svg class="admin-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div class="admin-stat-number">10,247</div>
              <div class="admin-stat-trend up">
                <span>&uarr; +226 this week</span>
              </div>
            </div>

            <div class="admin-stat-card">
              <div class="admin-stat-header">
                <span>Premium Users</span>
                <svg class="admin-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon></svg>
              </div>
              <div class="admin-stat-number">1,234</div>
              <div class="admin-stat-trend up">
                <span>&uarr; +89 this week</span>
              </div>
            </div>
          </div>
          
          <!-- Middle Charts section -->
          <div class="admin-charts-grid">
            <div class="admin-card">
              <div class="admin-card-header">
                <h3>System Overview</h3>
              </div>
              <div class="chart-wrapper">
                <canvas id="systemOverviewChart"></canvas>
              </div>
            </div>
            
            <div class="admin-card">
              <div class="admin-card-header">
                <h3>Recent Activity</h3>
              </div>
              <div class="recent-activity-list" id="activity-logs-container">
                ${state.recentActivity.map(act => `
                  <div class="activity-item">
                    <div class="activity-dot ${act.type}"></div>
                    <div class="activity-content">
                      <p>${act.text}</p>
                      <span class="activity-time">${act.time}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
          <!-- Bottom breakdown list -->
          <div class="admin-bottom-grid">
            <div class="admin-card">
              <div class="admin-card-header">
                <h3>Tools by Category</h3>
              </div>
              <div class="chart-wrapper" style="height:220px;">
                <canvas id="categoryChart"></canvas>
              </div>
            </div>
            
            <div class="admin-card">
              <div class="admin-card-header">
                <h3>Top Tools</h3>
              </div>
              <div class="ranked-list">
                <div class="rank-item">
                  <div class="rank-name-group">
                    <span class="rank-number">1</span>
                    <span class="rank-name">Nmap</span>
                  </div>
                  <span class="rank-value">2.5K uses</span>
                </div>
                <div class="rank-item">
                  <div class="rank-name-group">
                    <span class="rank-number">2</span>
                    <span class="rank-name">Burp Suite</span>
                  </div>
                  <span class="rank-value">2.1K uses</span>
                </div>
                <div class="rank-item">
                  <div class="rank-name-group">
                    <span class="rank-number">3</span>
                    <span class="rank-name">Metasploit</span>
                  </div>
                  <span class="rank-value">1.8K uses</span>
                </div>
                <div class="rank-item">
                  <div class="rank-name-group">
                    <span class="rank-number">4</span>
                    <span class="rank-name">Wireshark</span>
                  </div>
                  <span class="rank-value">1.5K uses</span>
                </div>
                <div class="rank-item">
                  <div class="rank-name-group">
                    <span class="rank-number">5</span>
                    <span class="rank-name">SQLMap</span>
                  </div>
                  <span class="rank-value">1.2K uses</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Quick actions card -->
          <div class="admin-card">
            <div class="admin-card-header">
              <h3>Quick Actions</h3>
            </div>
            <div class="quick-actions-grid">
              <button class="primary-btn" id="action-add-tool-btn">Add New Tool</button>
              <button class="outlined-btn" id="action-add-cat-btn">Add Category</button>
              <button class="outlined-btn" id="action-export-btn">Export Data</button>
              <button class="outlined-btn" id="action-backup-btn">System Backup</button>
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
            <div class="stat-number">500+</div>
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
          <p>Unlock the full potential of AcroVault with our premium plans</p>
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
              <p class="pricing-desc">Perfect for beginners</p>
            </div>
            <div class="pricing-price">
              <span class="price-number">${basicPrice}</span>
              <span class="price-period">${periodText}</span>
            </div>
            <ul class="pricing-features">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Access to 200+ tools</li>
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
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Access to 500+ tools</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Priority support</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced features</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> API access</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Export data</li>
            </ul>
            <button class="primary-btn trial-action-btn">Start Free Trial</button>
          </div>
          
          <!-- Enterprise Plan -->
          <div class="pricing-card">
            <div class="pricing-header">
              <h2>Enterprise</h2>
              <p class="pricing-desc">For organizations</p>
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
          <p class="legal-updated">Last updated: January 15, 2024</p>
          
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
          <p class="legal-updated">Last updated: January 15, 2024</p>
          
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

// 4. View Router & Renderer
const renderView = (pageName, params = {}) => {
  state.currentPage = pageName;
  if (params.toolId) state.currentToolId = params.toolId;
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

// Helpers for search suggestions
const escapeHtml = (str) => {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

const highlightMatch = (text, query) => {
  if (!query || !text) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
};

// 5. Page Event Binding
const bindPageEvents = (pageName) => {
  // Global search input handling
  const globalSearch = document.getElementById('global-search-input');
  if (globalSearch) {
    globalSearch.onkeyup = (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (state.currentPage !== 'home') {
        renderView('home');
        const homeSearch = document.getElementById('global-search-input');
        homeSearch.value = q;
        homeSearch.focus();
        filterAndRenderToolsList(q);
      } else {
        filterAndRenderToolsList(q);
      }
    };
  }

  if (pageName === 'home') {
    // Render initial tools grid list
    filterAndRenderToolsList('');

    // Animated Stats Counter with smooth cubic easing
    const animateCountNumbers = () => {
      const statElements = document.querySelectorAll('.stat-number[data-target]');
      if (!statElements || statElements.length === 0) return;

      statElements.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const isDecimal = el.getAttribute('data-decimal') === 'true';
        const duration = 1600;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = target * easeOut;

          if (isDecimal) {
            el.textContent = currentVal.toFixed(1) + suffix;
          } else {
            el.textContent = Math.floor(currentVal) + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            if (isDecimal) {
              el.textContent = target.toFixed(1) + suffix;
            } else {
              el.textContent = target + suffix;
            }
          }
        };

        requestAnimationFrame(updateCount);
      });
    };

    const statsBanner = document.getElementById('stats-banner');
    if (statsBanner) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateCountNumbers();
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        observer.observe(statsBanner);
      } else {
        animateCountNumbers();
      }
    }

    // Hero Browse button
    const browseBtn = document.getElementById('hero-browse-btn');
    if (browseBtn) {
      browseBtn.onclick = () => {
        document.getElementById('tools-showcase-section').scrollIntoView({ behavior: 'smooth' });
      };
    }

    // Hero Categories button
    const categoriesBtn = document.getElementById('hero-categories-btn');
    if (categoriesBtn) {
      categoriesBtn.onclick = () => {
        state.categoriesExpanded = true;
        renderView('home');
        setTimeout(() => {
          const catSect = document.getElementById('popular-categories-section');
          if (catSect) catSect.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      };
    }

    // Categories Carousel left/right navigation arrows with dynamic start/end visibility
    const catPrev = document.getElementById('cat-prev-btn');
    const catNext = document.getElementById('cat-next-btn');
    const catTrack = document.getElementById('categories-track');
    
    const updateCarouselArrows = () => {
      if (!catTrack) return;
      const isAtStart = catTrack.scrollLeft <= 10;
      const isAtEnd = catTrack.scrollLeft + catTrack.clientWidth >= catTrack.scrollWidth - 15;
      
      if (catPrev) {
        if (isAtStart) {
          catPrev.classList.add('is-hidden');
        } else {
          catPrev.classList.remove('is-hidden');
        }
      }
      
      if (catNext) {
        if (isAtEnd) {
          catNext.classList.add('is-hidden');
        } else {
          catNext.classList.remove('is-hidden');
        }
      }
    };

    if (catTrack) {
      catTrack.addEventListener('scroll', updateCarouselArrows, { passive: true });
      setTimeout(updateCarouselArrows, 50);
    }
    
    if (catPrev && catTrack) {
      catPrev.onclick = () => {
        const scrollAmount = Math.max(catTrack.clientWidth * 0.75, 240);
        catTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      };
    }
    
    if (catNext && catTrack) {
      catNext.onclick = () => {
        const scrollAmount = Math.max(catTrack.clientWidth * 0.75, 240);
        catTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      };
    }

    // Toggle between Carousel & Full Grid View
    const viewAllCats = document.getElementById('cat-view-all');
    if (viewAllCats) {
      viewAllCats.onclick = (e) => {
        e.preventDefault();
        state.categoriesExpanded = !state.categoriesExpanded;
        renderView('home');
        setTimeout(() => {
          const catSect = document.getElementById('popular-categories-section');
          if (catSect) catSect.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      };
    }

    // Category card clicks (filters tools)
    document.querySelectorAll('.category-card').forEach(card => {
      card.onclick = () => {
        const cat = card.getAttribute('data-cat');
        const filterCatSelect = document.getElementById('filter-category');
        if (filterCatSelect) {
          filterCatSelect.value = cat;
          document.getElementById('tools-showcase-section').scrollIntoView({ behavior: 'smooth' });
          filterAndRenderToolsList('', cat);
        }
      };
    });

    const viewAllTools = document.getElementById('tools-view-all');
    if (viewAllTools) {
      viewAllTools.onclick = (e) => {
        e.preventDefault();
        document.getElementById('tools-showcase-section').scrollIntoView({ behavior: 'smooth' });
      };
    }

    // Featured Tools Search Box & Filter Dropdowns
    const toolsSearchInput = document.getElementById('tools-search-input');
    const toolsSearchClear = document.getElementById('tools-search-clear');
    const toolsSearchDropdown = document.getElementById('tools-search-dropdown');
    const globalSearchInput = document.getElementById('global-search-input');
    const filterCat = document.getElementById('filter-category');
    const filterType = document.getElementById('filter-type');
    
    const applyFilters = () => {
      const cat = filterCat ? filterCat.value : '';
      const type = filterType ? filterType.value : '';
      const searchVal = (toolsSearchInput ? toolsSearchInput.value : (globalSearchInput ? globalSearchInput.value : '')).trim();
      
      if (toolsSearchClear) {
        toolsSearchClear.style.display = searchVal ? 'flex' : 'none';
      }
      
      filterAndRenderToolsList(searchVal.toLowerCase(), cat, type);
    };

    // YouTube-style guided suggestions renderer
    const renderSuggestions = (query = '') => {
      if (!toolsSearchDropdown) return;
      const q = query.toLowerCase().trim();

      if (!q) {
        // Quick Trending Chips
        const popularTags = ['OSINT', 'Nmap', 'Port Scanners', 'Malware Analysis', 'Wireshark', 'Forensics', 'Exploit', 'Network'];
        toolsSearchDropdown.innerHTML = `
          <div class="suggestions-header">Quick Category & Trending Searches</div>
          <div class="suggestions-chips-grid">
            ${popularTags.map(tag => `
              <button type="button" class="suggestion-chip-btn" data-query="${tag}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span>${tag}</span>
              </button>
            `).join('')}
          </div>
        `;
        toolsSearchDropdown.style.display = 'block';
        bindSuggestionItemEvents();
        return;
      }

      // Matching tools
      const matchingTools = state.tools.filter(t => {
        const tagsStr = (t.tags || []).join(' ').toLowerCase();
        const catStr = (t.category || '').toLowerCase();
        return t.name.toLowerCase().includes(q) ||
               t.subtitle.toLowerCase().includes(q) ||
               catStr.includes(q) ||
               tagsStr.includes(q);
      }).slice(0, 6);

      // Matching categories
      const matchingCats = (window.ACROVAULT_CATEGORIES || []).filter(c => c.name.toLowerCase().includes(q)).slice(0, 3);

      if (matchingTools.length === 0 && matchingCats.length === 0) {
        toolsSearchDropdown.innerHTML = `
          <div class="suggestions-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <span>No tools matching "<strong>${escapeHtml(query)}</strong>"</span>
          </div>
        `;
        toolsSearchDropdown.style.display = 'block';
        return;
      }

      let html = '';

      if (matchingCats.length > 0) {
        html += `
          <div class="suggestions-section-title">Matching Categories</div>
          <div class="suggestions-cats-list">
            ${matchingCats.map(c => `
              <div class="suggestion-cat-item" data-cat="${escapeHtml(c.name)}">
                <span class="suggestion-cat-icon">📁</span>
                <span class="suggestion-cat-name">${highlightMatch(c.name, query)}</span>
                <span class="suggestion-arrow">→</span>
              </div>
            `).join('')}
          </div>
        `;
      }

      if (matchingTools.length > 0) {
        html += `
          <div class="suggestions-section-title">Matching Tools (${matchingTools.length})</div>
          <div class="suggestions-tools-list">
            ${matchingTools.map(tool => `
              <div class="suggestion-tool-item" data-id="${tool.id}">
                <img src="${tool.icon}" alt="" class="suggestion-tool-icon">
                <div class="suggestion-tool-info">
                  <span class="suggestion-tool-name">${highlightMatch(tool.name, query)}</span>
                  <span class="suggestion-tool-cat">${tool.category}</span>
                </div>
                <span class="suggestion-jump-btn">Open ↗</span>
              </div>
            `).join('')}
          </div>
        `;
      }

      toolsSearchDropdown.innerHTML = html;
      toolsSearchDropdown.style.display = 'block';
      bindSuggestionItemEvents();
    };

    const bindSuggestionItemEvents = () => {
      if (!toolsSearchDropdown) return;

      toolsSearchDropdown.querySelectorAll('.suggestion-tool-item').forEach(item => {
        item.onclick = (e) => {
          e.stopPropagation();
          const toolId = item.getAttribute('data-id');
          toolsSearchDropdown.style.display = 'none';
          renderView('tool', { toolId });
        };
      });

      toolsSearchDropdown.querySelectorAll('.suggestion-cat-item').forEach(item => {
        item.onclick = (e) => {
          e.stopPropagation();
          const cat = item.getAttribute('data-cat');
          if (filterCat) filterCat.value = cat;
          if (toolsSearchInput) toolsSearchInput.value = '';
          if (globalSearchInput) globalSearchInput.value = '';
          toolsSearchDropdown.style.display = 'none';
          applyFilters();
        };
      });

      toolsSearchDropdown.querySelectorAll('.suggestion-chip-btn').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const q = btn.getAttribute('data-query');
          if (toolsSearchInput) toolsSearchInput.value = q;
          if (globalSearchInput) globalSearchInput.value = q;
          toolsSearchDropdown.style.display = 'none';
          applyFilters();
        };
      });
    };

    if (toolsSearchInput) {
      toolsSearchInput.addEventListener('input', (e) => {
        if (globalSearchInput) globalSearchInput.value = e.target.value;
        applyFilters();
        renderSuggestions(e.target.value);
      });

      toolsSearchInput.addEventListener('focus', () => {
        renderSuggestions(toolsSearchInput.value);
      });
    }

    if (globalSearchInput) {
      globalSearchInput.addEventListener('input', (e) => {
        if (toolsSearchInput) toolsSearchInput.value = e.target.value;
        applyFilters();
      });
    }

    if (toolsSearchClear) {
      toolsSearchClear.onclick = () => {
        if (toolsSearchInput) toolsSearchInput.value = '';
        if (globalSearchInput) globalSearchInput.value = '';
        if (toolsSearchDropdown) toolsSearchDropdown.style.display = 'none';
        toolsSearchInput.focus();
        applyFilters();
      };
    }

    // Hide dropdown on outside click
    document.addEventListener('click', (e) => {
      const wrap = document.getElementById('tools-search-box-wrap');
      if (wrap && !wrap.contains(e.target)) {
        if (toolsSearchDropdown) toolsSearchDropdown.style.display = 'none';
      }
    });

    if (filterCat) filterCat.onchange = applyFilters;
    if (filterType) filterType.onchange = applyFilters;

  } else if (pageName === 'tool') {
    // 1. Back to tools button
    const backBtn = document.getElementById('detail-back-btn');
    if (backBtn) {
      backBtn.onclick = (e) => {
        e.preventDefault();
        renderView('home');
        setTimeout(() => {
          const toolsSect = document.getElementById('tools-showcase-section');
          if (toolsSect) toolsSect.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      };
    }

    // 2. Breadcrumb links
    document.querySelectorAll('.breadcrumb-link').forEach(link => {
      link.onclick = (e) => {
        e.preventDefault();
        const action = link.getAttribute('data-action');
        renderView('home');
        if (action === 'tools') {
          setTimeout(() => {
            const toolsSect = document.getElementById('tools-showcase-section');
            if (toolsSect) toolsSect.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      };
    });

    // 3. Add to favorites toggle
    const favBtn = document.getElementById('favorite-toggle-btn');
    if (favBtn) {
      favBtn.onclick = () => {
        const toolId = favBtn.getAttribute('data-id') || paramsToId();
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

    // 4. Detail page Launch platform button
    const launchBtn = document.getElementById('launch-platform-btn');
    if (launchBtn) {
      launchBtn.onclick = () => {
        const toolId = paramsToId();
        const tool = state.tools.find(t => t.id === toolId);
        if (tool && tool.url && tool.url !== '#') {
          window.open(tool.url, '_blank', 'noopener,noreferrer');
        }
      };
    }

    // 5. Related tool card clicks
    document.querySelectorAll('.related-tool-card').forEach(card => {
      card.onclick = () => {
        const toolId = card.getAttribute('data-tool');
        if (toolId) renderView('tool', { toolId });
      };
    });

    // 6. Inner details AVA actions
    document.querySelectorAll('.tool-ava-btn').forEach(btn => {
      btn.onclick = () => {
        const q = btn.getAttribute('data-query');
        openFloatingAvaChat();
        appendChatMessage('user', q);
        setTimeout(() => {
          appendChatMessage('bot', getAvaResponse(q));
        }, 800);
      };
    });

  } else if (pageName === 'admin') {
    // Chart Drawing using CDN Chart.js
    drawAdminCharts();

    // Logout
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
        alert('Compiling database audit reports. XML/JSON payload ready for download.');
      };
    }

    const backupBtn = document.getElementById('action-backup-btn');
    if (backupBtn) {
      backupBtn.onclick = () => {
        alert('Initiating AcroVault system backup. Cloning sandbox states to hot storage.');
      };
    }

    // Sidebar navigation mock items
    const allToolsMenu = document.getElementById('admin-tools-menu');
    if (allToolsMenu) {
      allToolsMenu.onclick = (e) => {
        e.preventDefault();
        alert('Listing all system database items: Active logs count ' + state.tools.length + ' tools registered.');
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
    const navItems = document.querySelectorAll('.legal-nav-item');
    const sections = document.querySelectorAll('.legal-section');
    
    // 1. Smooth click scrolling with proper header offset
    navItems.forEach(item => {
      const link = item.querySelector('a');
      if (link) {
        link.onclick = (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').replace('#', '');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            const headerOffset = 90;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            navItems.forEach(ni => ni.classList.remove('active'));
            item.classList.add('active');
          }
        };
      }
    });

    // 2. Real-time ScrollSpy on scroll
    const onScrollSpy = () => {
      if (state.currentPage !== 'privacy' && state.currentPage !== 'terms') {
        window.removeEventListener('scroll', onScrollSpy);
        return;
      }
      
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      const headerOffset = 130;
      
      let currentSectionId = '';
      sections.forEach(section => {
        const top = section.offsetTop - headerOffset;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });
      
      // If user scrolled to near bottom of page, highlight the last item
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 60) {
        if (sections.length > 0) {
          currentSectionId = sections[sections.length - 1].getAttribute('id');
        }
      }
      
      if (currentSectionId) {
        navItems.forEach(item => {
          const link = item.querySelector('a');
          const href = link ? link.getAttribute('href').replace('#', '') : '';
          if (href === currentSectionId) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    };

    window.addEventListener('scroll', onScrollSpy, { passive: true });
    setTimeout(onScrollSpy, 100);
  }
};

// Helper to determine active tool id on details page
const paramsToId = () => {
  // Inside dynamic layout, state tracks detail parameter
  return state.currentToolId || 'nmap';
};

// 6. Tools Filter and Grid renderer
const filterAndRenderToolsList = (searchQuery = '', categoryFilter = '', typeFilter = '') => {
  const grid = document.getElementById('tools-grid-list');
  if (!grid) return;
  
  const searchClean = (searchQuery || '').toLowerCase().trim();
  
  const filtered = state.tools.filter(tool => {
    const searchString = tool.tags ? tool.tags.join(' ').toLowerCase() : '';
    const categoryString = (tool.category || '').toLowerCase();
    const typeString = (tool.type || '').toLowerCase();
    
    const matchesSearch = !searchClean ||
                          tool.name.toLowerCase().includes(searchClean) ||
                          tool.subtitle.toLowerCase().includes(searchClean) ||
                          tool.description.toLowerCase().includes(searchClean) ||
                          categoryString.includes(searchClean) ||
                          typeString.includes(searchClean) ||
                          searchString.includes(searchClean);
    
    const matchesCategory = categoryFilter === '' || tool.category === categoryFilter;
    const matchesType = typeFilter === '' || tool.type === typeFilter;
    
    return matchesSearch && matchesCategory && matchesType;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; padding: 4rem 1rem; text-align: center; color: var(--text-muted);">
      <svg style="width:48px;height:48px;margin-bottom:1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <p style="font-size:1.1rem;font-weight:600;">No tools found matching your parameters.</p>
    </div>`;
    return;
  }
  
  grid.innerHTML = filtered.map(tool => {
    const isPremium = (tool.pricing || '').toLowerCase() === 'premium';
    const tagsHtml = (tool.tags || []).map(t => `<span class="badge-tag">${t}</span>`).join('');
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

// 7. Admin Chart Drawing Handler
const drawAdminCharts = () => {
  // Overview line chart
  const ctxOverview = document.getElementById('systemOverviewChart');
  if (ctxOverview) {
    new Chart(ctxOverview.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Tools Added',
            data: [150, 220, 180, 270, 390, 310, 420],
            borderColor: '#818cf8',
            backgroundColor: 'rgba(129, 140, 248, 0.1)',
            tension: 0.4,
            fill: true,
            borderWidth: 3
          },
          {
            label: 'Users',
            data: [250, 300, 380, 420, 510, 470, 580],
            borderColor: '#a855f7',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            tension: 0.4,
            fill: true,
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: state.theme === 'dark' ? '#94a3b8' : '#475569',
              font: { family: 'Outfit', weight: 600 }
            }
          }
        },
        scales: {
          x: {
            grid: { color: state.theme === 'dark' ? 'rgba(99, 102, 241, 0.08)' : 'rgba(0,0,0,0.03)' },
            ticks: { color: state.theme === 'dark' ? '#94a3b8' : '#475569' }
          },
          y: {
            grid: { color: state.theme === 'dark' ? 'rgba(99, 102, 241, 0.08)' : 'rgba(0,0,0,0.03)' },
            ticks: { color: state.theme === 'dark' ? '#94a3b8' : '#475569' }
          }
        }
      }
    });
  }

  // Category donut chart
  const ctxCategory = document.getElementById('categoryChart');
  if (ctxCategory) {
    const categories = window.ACROVAULT_CATEGORIES || [];
    const catLabels = categories.slice(0, 6).map(c => c.name);
    catLabels.push('Others');
    const catData = categories.slice(0, 6).map(cat => state.tools.filter(t => t.category === cat.name || t.category === cat.id).length);
    const otherCount = state.tools.filter(t => !categories.slice(0, 6).find(c => c.name === t.category || c.id === t.category)).length;
    catData.push(otherCount);

    new Chart(ctxCategory.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: catLabels,
        datasets: [{
          data: catData,
          backgroundColor: [
            '#6366f1',
            '#ef4444',
            '#3b82f6',
            '#f59e0b',
            '#a855f7',
            '#10b981',
            '#64748b'
          ],
          borderColor: state.theme === 'dark' ? '#0b0f1e' : '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: state.theme === 'dark' ? '#94a3b8' : '#475569',
              font: { family: 'Inter', size: 11 }
            }
          }
        }
      }
    });
  }
};

// 8. Admin Add Tool Modal System
const openAddToolModal = () => {
  // Create Modal element
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.id = 'add-tool-modal';
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Register New Utility</h3>
        <button class="modal-close-btn" id="modal-close-btn">&times;</button>
      </div>
      <form id="add-tool-form">
        <div class="form-group">
          <label for="tool-name">Tool Name</label>
          <input type="text" id="tool-name" required placeholder="e.g. Subfinder">
        </div>
        <div class="form-group">
          <label for="tool-subtitle">Subtitle</label>
          <input type="text" id="tool-subtitle" required placeholder="e.g. Subdomain Discovery">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="tool-category">Category</label>
            <select id="tool-category">
              <option value="Reconnaissance">Reconnaissance</option>
              <option value="Vulnerability">Vulnerability</option>
              <option value="Web Security">Web Security</option>
              <option value="Forensics">Forensics</option>
              <option value="OSINT">OSINT</option>
              <option value="Network">Network</option>
            </select>
          </div>
          <div class="form-group">
            <label for="tool-pricing">Pricing</label>
            <select id="tool-pricing">
              <option value="Free">Free</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="tool-desc">Description</label>
          <textarea id="tool-desc" required placeholder="Outline features, target types..." rows="3"></textarea>
        </div>
        <div class="form-group">
          <label for="tool-tags">Tags (comma-separated)</label>
          <input type="text" id="tool-tags" placeholder="e.g. recon, scanner, free">
        </div>
        <button type="submit" class="primary-btn" style="width:100%; margin-top:1rem;">Add to Database</button>
      </form>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close handler
  const closeBtn = document.getElementById('modal-close-btn');
  closeBtn.onclick = () => {
    document.body.removeChild(modal);
  };
  
  // Form submission handler
  const form = document.getElementById('add-tool-form');
  form.onsubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('tool-name').value.trim();
    const subtitle = document.getElementById('tool-subtitle').value.trim();
    const cat = document.getElementById('tool-category').value;
    const price = document.getElementById('tool-pricing').value;
    const desc = document.getElementById('tool-desc').value.trim();
    const rawTags = document.getElementById('tool-tags').value;
    
    const tags = rawTags ? rawTags.split(',').map(t => t.trim().toLowerCase()) : ['custom'];
    
    const newId = name.toLowerCase().replace(/\s+/g, '');
    
    const newToolObj = {
      id: newId,
      name,
      subtitle,
      description: desc,
      category: cat,
      type: 'Scanner',
      platform: 'Web-based',
      pricing: price,
      status: 'Active',
      added: 'Aug 2026',
      icon: 'assets/security_status.png',
      tags: [...tags, price.toLowerCase()],
      features: [
        'Automated query generation',
        'Custom configuration inputs support',
        'Real-time output stream log rendering'
      ]
    };
    
    // Push state
    state.tools.unshift(newToolObj);
    state.recentActivity.unshift({
      type: 'green',
      text: `New tool added: ${name}`,
      time: 'Just now'
    });
    
    alert(`Tool "${name}" successfully registered in database schema.`);
    document.body.removeChild(modal);
    
    // Re-render admin view to update metrics list
    renderView('admin');
  };
};

// 9. Floating AVA Chat system
const openFloatingAvaChat = () => {
  const panel = document.getElementById('ava-chat-panel');
  if (panel) {
    panel.classList.add('open');
    state.avaChatOpen = true;
  }
};

const closeFloatingAvaChat = () => {
  const panel = document.getElementById('ava-chat-panel');
  if (panel) {
    panel.classList.remove('open');
    state.avaChatOpen = false;
  }
};

const appendChatMessage = (sender, text) => {
  const msgBox = document.getElementById('ava-chat-messages');
  if (!msgBox) return;
  
  // Remove suggestions chip if user started typing/clicking
  const suggestions = msgBox.querySelector('.chat-suggestions');
  if (suggestions) suggestions.remove();
  
  const msg = document.createElement('div');
  msg.className = `chat-message ${sender}`;
  const formattedContent = sender === 'bot' ? renderMarkdown(text) : text;
  msg.innerHTML = `<div class="message-content">${formattedContent}</div>`;
  msg.style.opacity = '0';
  msg.style.transform = 'translateY(10px)';
  msg.style.transition = 'all 0.3s ease';
  
  msgBox.appendChild(msg);
  
  // Scroll to bottom
  msgBox.scrollTop = msgBox.scrollHeight;
  
  // Animate slide-in
  setTimeout(() => {
    msg.style.opacity = '1';
    msg.style.transform = 'translateY(0)';
  }, 50);
};

const bindFloatingAvaChatEvents = () => {
  const trigger = document.getElementById('ava-trigger-btn');
  const close = document.getElementById('ava-close-btn');
  const send = document.getElementById('ava-chat-send');
  const input = document.getElementById('ava-chat-input');
  
  if (trigger) {
    trigger.onclick = () => {
      if (state.avaChatOpen) {
        closeFloatingAvaChat();
      } else {
        openFloatingAvaChat();
      }
    };
  }
  
  if (close) {
    close.onclick = () => {
      closeFloatingAvaChat();
    };
  }
  
  const processMessage = () => {
    const text = input.value.trim();
    if (!text) return;
    
    appendChatMessage('user', text);
    input.value = '';
    
    // Simulate AI loading state
    setTimeout(() => {
      const response = getAvaResponse(text);
      appendChatMessage('bot', response);
    }, 850);
  };
  
  if (send) {
    send.onclick = processMessage;
  }
  
  if (input) {
    input.onkeydown = (e) => {
      if (e.key === 'Enter') processMessage();
    };
  }
  
  // Suggestions chips
  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.onclick = () => {
      const q = chip.textContent;
      appendChatMessage('user', q);
      setTimeout(() => {
        appendChatMessage('bot', getAvaResponse(q));
      }, 700);
    };
  });
};

// 10. Initialization Setup
document.addEventListener('DOMContentLoaded', () => {
  initToolsData();
  
  // Theme initialization
  document.documentElement.setAttribute('data-theme', state.theme);
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = toggleBtn.querySelector('.sun-icon');
  const moonIcon = toggleBtn.querySelector('.moon-icon');
  
  if (state.theme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }

  toggleBtn.onclick = () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', state.theme);
    document.documentElement.setAttribute('data-theme', state.theme);
    
    if (state.theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }

    // If on admin view, re-draw charts with updated dark colors
    if (state.currentPage === 'admin') {
      renderView('admin');
    }
  };

  // Nav Router clicks
  document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      
      // Special logic for Categories menu: expand & scroll to categories on home
      if (page === 'categories') {
        state.categoriesExpanded = true;
        renderView('home');
        setTimeout(() => {
          const catSect = document.getElementById('popular-categories-section');
          if (catSect) catSect.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        renderView(page);
      }
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
        if (state.currentPage !== 'home') {
          renderView('home');
        }
        setTimeout(() => {
          const filterCatSelect = document.getElementById('filter-category');
          if (filterCatSelect) {
            filterCatSelect.value = cat;
            document.getElementById('tools-showcase-section').scrollIntoView({ behavior: 'smooth' });
            filterAndRenderToolsList('', cat);
          }
        }, 150);
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

  const footerTools = document.getElementById('footer-tool-count');
  if (footerTools) footerTools.textContent = `${state.tools.length}+ Tools`;
  const footerCats = document.getElementById('footer-cat-count');
  if (footerCats) footerCats.textContent = `${window.ACROVAULT_CATEGORIES ? window.ACROVAULT_CATEGORIES.length : 25}+ Categories`;

  // Mobile hamburger menu
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const mobileClose = document.getElementById('mobile-nav-close');

  const openMobileNav = () => {
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeMobileNav = () => {
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) hamburgerBtn.onclick = openMobileNav;
  if (mobileClose) mobileClose.onclick = closeMobileNav;
  if (mobileOverlay) {
    mobileOverlay.onclick = (e) => {
      if (e.target === mobileOverlay) closeMobileNav();
    };
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.onclick = (e) => {
      e.preventDefault();
      closeMobileNav();
      const page = link.getAttribute('data-page');
      if (page === 'categories') {
        if (state.currentPage !== 'home') renderView('home');
        setTimeout(() => {
          const catSect = document.getElementById('popular-categories-section');
          if (catSect) catSect.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        renderView(page);
      }
      // Update active state
      document.querySelectorAll('.mobile-nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    };
  });
});

window.ACROVAULT_CATEGORIES = [
    { id: "crime-evidence", name: "Crime & Evidence Databases", icon: "⚖️", desc: "Databases and maps for tracking crime, violence, and forensic evidence", count: 30 },
    { id: "osint", name: "Advanced OSINT Tools", icon: "🕵️", desc: "Open-source intelligence gathering and analysis tools", count: 9 },
    { id: "roadmap", name: "Cybersecurity Roadmap & Resources", icon: "🗺️", desc: "Learning paths and study materials for cybersecurity", count: 2 },
    { id: "hardware-hacking", name: "Hardware Hacking", icon: "🔌", desc: "Tools and firmware for physical device and hardware exploitation", count: 1 },
    { id: "ai-research", name: "AI Vision-Language Models", icon: "🧠", desc: "Research and tools for frontier vision-language models", count: 1 },
    { id: "vapt", name: "VAPT Tools", icon: "🛡️", desc: "Vulnerability Assessment and Penetration Testing tools", count: 1 },
    { id: "ai-hacking", name: "AI-Assisted Hacking", icon: "🤖", desc: "AI assistants for security training and simulations", count: 1 },
    { id: "account-tools", name: "Account Creation Tools", icon: "👤", desc: "Tools for generating and managing accounts", count: 2 },
    { id: "ai-attack", name: "Agentic AI Attack + Report Generation", icon: "⚔️", desc: "Automated AI-driven attack and reporting toolchains", count: 1 },
    { id: "malware-analysis", name: "Malware Analysis", icon: "🦠", desc: "Sandboxes and tools for analyzing malicious software", count: 2 },
    { id: "url-scanning", name: "URL Scanning", icon: "🔗", desc: "Tools for detecting malicious links and phishing", count: 1 },
    { id: "social-engineering", name: "Social Engineering", icon: "🎣", desc: "Frameworks and tools for social engineering testing", count: 1 },
    { id: "exploit-directory", name: "Exploit Directory", icon: "💣", desc: "Archives and databases of public exploits and PoCs", count: 2 },
    { id: "malware-courses", name: "Malware Analysis Courses", icon: "🎓", desc: "Educational resources and courses on malware reverse engineering", count: 15 },
    { id: "digital-forensics", name: "Digital Forensics", icon: "🔍", desc: "Tools and frameworks for digital forensics and incident response", count: 25 },
    { id: "port-scanners", name: "Port Scanners", icon: "🚪", desc: "Tools for scanning network ports and services", count: 1 },
    { id: "detection-tools", name: "Number Plate Detection", icon: "🚗", desc: "Tools for Automatic License Plate Recognition", count: 1 },
    { id: "api-gateway", name: "API Gateway", icon: "🌉", desc: "Tools for routing and managing API requests", count: 1 },
    { id: "ethical-hacking", name: "Ethical Hacking Courses", icon: "📘", desc: "Courses and resources for learning ethical hacking", count: 2 },
    { id: "security-learning", name: "Interactive Security Learning", icon: "🎮", desc: "Interactive platforms for practicing security concepts", count: 1 },
    { id: "ai-vuln-scanner", name: "AI Vulnerability Scanner", icon: "👁️", desc: "AI-powered scanners for vulnerability detection", count: 1 },
    { id: "pentest-reports", name: "Pentesting Reports", icon: "📄", desc: "Collections of public penetration testing reports and templates", count: 4 },
    { id: "jailbreak-ai", name: "Jailbreak AI", icon: "🔓", desc: "Uncensored and jailbroken AI chat interfaces", count: 1 },
    { id: "api-key-scanning", name: "API Key Scanning", icon: "🔑", desc: "Scanners for finding leaked API keys and secrets", count: 1 },
    { id: "photo-forensics", name: "Photo Forensics", icon: "📸", desc: "Tools for forensic analysis of images and metadata", count: 2 },
    { id: "person-osint", name: "Person OSINT", icon: "🧑", desc: "Tools for finding information about individuals", count: 1 },
    { id: "dark-web-search", name: "Dark Web Search", icon: "🕸️", desc: "Search engines and directories for the dark web", count: 1 },
    { id: "red-team", name: "Red Team Tools", icon: "🔴", desc: "Offensive tools and resources for red team operations", count: 1 },
    { id: "geo-osint", name: "Geo Location OSINT", icon: "🌍", desc: "Tools for finding geographical locations from data", count: 1 },
    { id: "ai-infra-attack", name: "AI Infrastructure Attack", icon: "💥", desc: "Tools for security testing AI endpoints and infrastructure", count: 1 },
    { id: "dark-web-osint", name: "Dark Web OSINT", icon: "🦇", desc: "Platforms for automated threat intelligence on the dark web", count: 1 },
    { id: "esp32-offensive", name: "ESP32 Offensive", icon: "📟", desc: "Offensive firmware and tools for ESP32 devices", count: 1 },
    { id: "image-video-osint", name: "Image & Video OSINT", icon: "🎞️", desc: "Tools for analyzing and downloading images and videos", count: 17 },
    { id: "breach-lookup", name: "Breach & Leak Lookup", icon: "🚨", desc: "Databases for searching exposed credentials and data breaches", count: 15 }
];

window.ACROVAULT_TOOLS = [
    // Category: Crime & Evidence Databases
    { id: "gun-violence-archive", name: "Gun Violence Archive", desc: "Track gun incidents with reliable data", url: "https://www.gunviolencearchive.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["crime", "gun violence", "data"], isPremium: false },
    { id: "fatal-encounters", name: "Fatal Encounters", desc: "Police-related deaths from reports", url: "https://fatalencounters.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["police", "deaths", "reports"], isPremium: false },
    { id: "forensic-magazine", name: "Forensic Magazine", desc: "Articles explaining forensic science techniques", url: "https://www.forensicmag.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["forensics", "science", "articles"], isPremium: false },
    { id: "radioreference", name: "RadioReference", desc: "Find different radio systems and frequencies", url: "https://www.radioreference.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["radio", "frequencies", "scanner"], isPremium: false },
    { id: "murderpedia", name: "Murderpedia", desc: "Massive archive of murder cases and offenders", url: "https://murderpedia.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["murder", "cases", "archive"], isPremium: false },
    { id: "mapping-police-violence", name: "Mapping Police Violence", desc: "Patterns in police violence data", url: "https://mappingpoliceviolence.us", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["police", "violence", "mapping"], isPremium: false },
    { id: "cityprotect", name: "CityProtect", desc: "Map local crime using reliable data", url: "https://www.cityprotect.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["local", "crime", "map"], isPremium: false },
    { id: "panama-papers", name: "Panama Papers (ICIJ)", desc: "Offshore entities linked to scandals", url: "https://offshoreleaks.icij.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["offshore", "leaks", "scandals"], isPremium: false },
    { id: "spotcrime", name: "SpotCrime", desc: "View nearby crime incidents on maps", url: "https://spotcrime.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["nearby", "crime", "map"], isPremium: false },
    { id: "killer-cloud", name: "Killer.Cloud", desc: "Database of different homicide cases", url: "https://killer.cloud", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["homicide", "database", "cases"], isPremium: false },
    { id: "broadcastify", name: "Broadcastify", desc: "Live police scanner audio feeds", url: "https://www.broadcastify.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["police", "scanner", "audio"], isPremium: false },
    { id: "skopenow", name: "Skopenow", desc: "Investigate people using OSINT", url: "https://www.skopenow.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["investigate", "people", "osint"], isPremium: false },
    { id: "crimeometer", name: "Crimeometer", desc: "Stream real-time crime data updates", url: "https://www.crimeometer.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["real-time", "crime", "data"], isPremium: false },
    { id: "ncmec", name: "National Center for Missing & Exploited Children", desc: "Search missing children cases", url: "https://www.missingkids.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["missing", "children", "cases"], isPremium: false },
    { id: "doe-network", name: "The Doe Network", desc: "Identify unknown persons through case records", url: "https://www.doenetwork.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["unknown", "persons", "records"], isPremium: false },
    { id: "uncovered", name: "Uncovered", desc: "Explore cold cases with evidence timelines", url: "https://uncovered.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["cold cases", "evidence", "timeline"], isPremium: false },
    { id: "serial-killers-info", name: "Serial Killers Info", desc: "Study serial killers and crime patterns", url: "https://serialkillersinfo.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["serial killers", "patterns", "study"], isPremium: false },
    { id: "openmhz", name: "OpenMHz", desc: "Listen to archived police radio traffic", url: "https://openmhz.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["police", "radio", "archive"], isPremium: false },
    { id: "bellingcat", name: "Bellingcat", desc: "Investigate events using open source evidence", url: "https://www.bellingcat.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["investigation", "open source", "evidence"], isPremium: false },
    { id: "citizen", name: "Citizen", desc: "Get alerts on nearby reported incidents", url: "https://citizen.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["alerts", "nearby", "incidents"], isPremium: false },
    { id: "the-trace", name: "The Trace", desc: "Examine gun violence trends and data", url: "https://www.thetrace.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["gun violence", "trends", "data"], isPremium: false },
    { id: "wikileaks", name: "WikiLeaks", desc: "Leaked documents exposing hidden activities", url: "https://wikileaks.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["leaks", "documents", "whistleblower"], isPremium: false },
    { id: "offshore-leaks", name: "Offshore Leaks (ICIJ)", desc: "Search hidden offshore financial records", url: "https://offshoreleaks.icij.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["offshore", "financial", "records"], isPremium: false },
    { id: "copblock", name: "CopBlock", desc: "Browse reports of police misconduct incidents", url: "https://www.copblock.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["police", "misconduct", "reports"], isPremium: false },
    { id: "police-scorecard", name: "Police Scorecard", desc: "Compare policing data across departments", url: "https://policescorecard.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["police", "scorecard", "data"], isPremium: false },
    { id: "forensic-files-now", name: "Forensic Files Now", desc: "Forensic breakdowns of real cases", url: "https://forensicfilesnow.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["forensics", "cases", "breakdown"], isPremium: false },
    { id: "casefile-podcast", name: "Casefile Podcast", desc: "Documented crime cases with narratives", url: "https://casefilepodcast.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["crime", "podcast", "cases"], isPremium: false },
    { id: "the-unredacted", name: "The Unredacted", desc: "Declassified intelligence and documents archive", url: "https://unredacted.com", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["declassified", "intelligence", "archive"], isPremium: false },
    { id: "documentcloud", name: "DocumentCloud Documents", desc: "Investigative data used in journalism", url: "https://www.documentcloud.org", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["documents", "investigation", "journalism"], isPremium: false },
    { id: "crime-scene-investigator-edu", name: "Crime Scene Investigator EDU", desc: "Learn evidence collection and analysis", url: "https://www.crime-scene-investigator.net", category: "crime-evidence", categoryName: "Crime & Evidence Databases", icon: "⚖️", tags: ["education", "investigation", "evidence"], isPremium: false },

    // Category: Advanced OSINT Tools
    { id: "tookie-osint", name: "tookie-osint", desc: "Advanced OSINT info-gathering, finds social media accounts", url: "https://github.com/tookie-osint/tookie-osint", category: "osint", categoryName: "Advanced OSINT Tools", icon: "🕵️", tags: ["osint", "social media", "recon"], isPremium: false },
    { id: "smartimage", name: "SmartImage", desc: "Reverse image search across multiple engines", url: "https://github.com/Decimation/SmartImage", category: "osint", categoryName: "Advanced OSINT Tools", icon: "🕵️", tags: ["image", "reverse search", "osint"], isPremium: false },
    { id: "bbot", name: "bbot", desc: "Multipurpose recon scanner for bug bounties and ASM", url: "https://github.com/blacklanternsecurity/bbot", category: "osint", categoryName: "Advanced OSINT Tools", icon: "🕵️", tags: ["recon", "scanner", "asm"], isPremium: false },
    { id: "ironsight", name: "IRONSIGHT", desc: "Real-time OSINT command center for Middle East conflict", url: "https://github.com/IRONSIGHT", category: "osint", categoryName: "Advanced OSINT Tools", icon: "🕵️", tags: ["osint", "real-time", "command center"], isPremium: false },
    { id: "robin", name: "Robin", desc: "AI-powered dark web OSINT investigation tool", url: "https://github.com/robin-osint", category: "osint", categoryName: "Advanced OSINT Tools", icon: "🕵️", tags: ["ai", "dark web", "osint"], isPremium: false },
    { id: "whatsapp-osint", name: "WhatsApp OSINT", desc: "OSINT gathering on WhatsApp accounts", url: "https://hackers-arise.com/open-source-intelligence-osint-gathering-information-on-a-whatsapp-account/", category: "osint", categoryName: "Advanced OSINT Tools", icon: "🕵️", tags: ["whatsapp", "osint", "recon"], isPremium: false },
    { id: "ai-in-osint", name: "AI in OSINT Investigation", desc: "OpenOSINT AI cybersecurity", url: "https://hackers-arise.com/ai-in-cybersecurity-openosint/", category: "osint", categoryName: "Advanced OSINT Tools", icon: "🕵️", tags: ["ai", "osint", "cybersecurity"], isPremium: false },
    { id: "telegram-osint", name: "Telegram OSINT", desc: "Custom Telegram OSINT toolkit", url: "https://hackers-arise.com/python-for-hackers-building-a-custom-telegram-osint-toolkit-for-automated-intelligence-gathering/", category: "osint", categoryName: "Advanced OSINT Tools", icon: "🕵️", tags: ["telegram", "osint", "toolkit"], isPremium: false },
    { id: "intel-base", name: "Intel Base", desc: "Email OSINT tool", url: "https://intelbase.is", category: "osint", categoryName: "Advanced OSINT Tools", icon: "🕵️", tags: ["email", "osint", "recon"], isPremium: false },

    // Category: Cybersecurity Roadmap & Resources
    { id: "cybersecurity-framework", name: "Cybersecurity Competency Framework", desc: "Research-driven roadmap for deep cybersecurity mastery", url: "https://github.com/cybersecurity-competency-framework", category: "roadmap", categoryName: "Cybersecurity Roadmap & Resources", icon: "🗺️", tags: ["roadmap", "framework", "learning"], isPremium: false },
    { id: "comptia-security-notes", name: "CompTIA Security+ Study Notes", desc: "Concise Security+ resources covering core fundamentals", url: "https://drive.google.com", category: "roadmap", categoryName: "Cybersecurity Roadmap & Resources", icon: "🗺️", tags: ["comptia", "security+", "notes"], isPremium: false },

    // Category: Hardware Hacking
    { id: "esp32-bit-pirate", name: "ESP32 Bit Pirate", desc: "Open-source multi-protocol hacking firmware for I2C/UART/SPI/Wi-Fi/Bluetooth/RFID", url: "https://github.com/esp32-bit-pirate", category: "hardware-hacking", categoryName: "Hardware Hacking", icon: "🔌", tags: ["hardware", "esp32", "firmware"], isPremium: false },

    // Category: AI Vision-Language Models
    { id: "eagle-frontier-vlm", name: "Eagle: Frontier VLM", desc: "NVIDIA research for frontier vision-language models", url: "https://github.com/nvidia/eagle", category: "ai-research", categoryName: "AI Vision-Language Models", icon: "🧠", tags: ["ai", "vlm", "nvidia"], isPremium: false },

    // Category: VAPT Tools
    { id: "acrostrike-v2", name: "AcroStrike v2.0", desc: "PowerShell-based 20-phase VAPT scanner with OWASP Top 10 mapping", url: "https://github.com/acrostrike", category: "vapt", categoryName: "VAPT Tools", icon: "🛡️", tags: ["vapt", "scanner", "powershell"], isPremium: false },

    // Category: AI-Assisted Hacking
    { id: "mr7-ai", name: "mr7.ai", desc: "AI assistant for authorized security training & simulations", url: "https://mr7.ai", category: "ai-hacking", categoryName: "AI-Assisted Hacking", icon: "🤖", tags: ["ai", "assistant", "training"], isPremium: false },

    // Category: Account Creation Tools
    { id: "gmail-account-creator", name: "gmail-account-creator", desc: "Creates Gmail accounts with anti-detection and phone verification bypass", url: "https://github.com/gmail-account-creator", category: "account-tools", categoryName: "Account Creation Tools", icon: "👤", tags: ["gmail", "account", "creator"], isPremium: false },
    { id: "mailwave", name: "Mailwave", desc: "Free and fake edu mail generator", url: "https://mailwave.io", category: "account-tools", categoryName: "Account Creation Tools", icon: "👤", tags: ["email", "edu", "generator"], isPremium: false },

    // Category: Agentic AI Attack + Report Generation
    { id: "vulnclaw", name: "VulnClaw", desc: "LLM Agent + MCP Toolchain automated recon to reporting", url: "https://github.com/vulnclaw", category: "ai-attack", categoryName: "Agentic AI Attack + Report Generation", icon: "⚔️", tags: ["ai", "agent", "recon", "reporting"], isPremium: false },

    // Category: Malware Analysis
    { id: "hybrid-analysis", name: "Hybrid Analysis", desc: "Sandbox environment and malware analysis", url: "https://www.hybrid-analysis.com", category: "malware-analysis", categoryName: "Malware Analysis", icon: "🦠", tags: ["malware", "sandbox", "analysis"], isPremium: false },
    { id: "virustotal", name: "VirusTotal", desc: "Malware type and name detection", url: "https://www.virustotal.com", category: "malware-analysis", categoryName: "Malware Analysis", icon: "🦠", tags: ["malware", "detection", "scanner"], isPremium: false },

    // Category: URL Scanning
    { id: "urlscan-io", name: "URLScan.io", desc: "URL detection, malicious link and phishing detection", url: "https://urlscan.io", category: "url-scanning", categoryName: "URL Scanning", icon: "🔗", tags: ["url", "scanner", "phishing"], isPremium: false },

    // Category: Social Engineering
    { id: "set", name: "Social Engineering Toolkit (SET)", desc: "Open-source penetration testing framework for social engineering", url: "https://github.com/trustedsec/social-engineer-toolkit", category: "social-engineering", categoryName: "Social Engineering", icon: "🎣", tags: ["social engineering", "framework", "pentesting"], isPremium: false },

    // Category: Exploit Directory
    { id: "exploitarium", name: "Exploitarium", desc: "Archive of public exploit PoCs and vulnerability research", url: "https://github.com/exploitarium", category: "exploit-directory", categoryName: "Exploit Directory", icon: "💣", tags: ["exploit", "poc", "archive"], isPremium: false },
    { id: "cve2poc", name: "CVE2PoC", desc: "Find public exploits and PoCs by CVE ID", url: "https://github.com/cve2poc", category: "exploit-directory", categoryName: "Exploit Directory", icon: "💣", tags: ["cve", "poc", "search"], isPremium: false },

    // Category: Malware Analysis Courses
    { id: "malware-analysis-uc", name: "Malware Analysis by University of Cincinnati", desc: "Basic to advanced malware analysis with assignments", url: "https://github.com/uc-malware-analysis", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["course", "malware", "analysis"], isPremium: false },
    { id: "exploit-reversing", name: "Exploit Reversing", desc: "700+ pages covering malware analysis, exploit dev, Windows internals", url: "https://exploitreversing.com", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["course", "exploit", "reversing"], isPremium: false },
    { id: "malware-unicorn", name: "Malware Unicorn", desc: "RE101, RE102, macOS reverse engineering, PE injection", url: "https://malwareunicorn.org", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["course", "reverse engineering", "malware"], isPremium: false },
    { id: "azeria-labs", name: "Azeria Labs", desc: "ARM assembly, shellcode development, heap exploitation", url: "https://azeria-labs.com", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["arm", "shellcode", "exploitation"], isPremium: false },
    { id: "revers-engineering", name: "Reverse Engineering", desc: "Applied reverse engineering and hypervisor development", url: "https://revers.engineering", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["reverse engineering", "hypervisor"], isPremium: false },
    { id: "pwncollege", name: "pwncollege", desc: "Hands-on labs: buffer overflows, binary exploitation, kernel exploitation", url: "https://pwn.college", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["labs", "binary", "exploitation"], isPremium: false },
    { id: "post2", name: "p.ost2", desc: "30+ courses on WinDbg, IDA Pro, Ghidra, UEFI, Windows internals", url: "https://p.ost2.fyi", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["courses", "windows", "internals"], isPremium: false },
    { id: "corelan", name: "Corelan", desc: "41 in-depth tutorials spanning 17+ years of exploit development", url: "https://www.corelan.be", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["tutorials", "exploit", "development"], isPremium: false },
    { id: "windows-internals", name: "Windows Internals", desc: "Windows internals, Secure Kernel, VBS, KDP, dynamic analysis", url: "https://windows-internals.com", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["windows", "internals", "analysis"], isPremium: false },
    { id: "fuzzysecurity", name: "FuzzySecurity Tutorials", desc: "19-part series: Windows exploitation from user mode to kernel mode", url: "https://fuzzysecurity.com/tutorials.html", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["tutorials", "windows", "exploitation"], isPremium: false },
    { id: "john-hammond-yt", name: "John Hammond YouTube", desc: "YouTube channel for malware analysis", url: "https://youtube.com/@_JohnHammond", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["youtube", "malware", "analysis"], isPremium: false },
    { id: "liveoverflow-yt", name: "LiveOverflow YouTube", desc: "YouTube channel for security research", url: "https://youtube.com/@LiveOverflow", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["youtube", "security", "research"], isPremium: false },
    { id: "lauriewired-yt", name: "LaurieWired YouTube", desc: "YouTube channel for malware analysis", url: "https://youtube.com/@lauriewired", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["youtube", "malware", "analysis"], isPremium: false },
    { id: "allthingsida-yt", name: "All Things IDA YouTube", desc: "YouTube channel for IDA Pro", url: "https://youtube.com/@allthingsida", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["youtube", "ida", "pro"], isPremium: false },
    { id: "opensecuritytraining-yt", name: "OpenSecurityTraining YouTube", desc: "YouTube channel for security training", url: "https://youtube.com/@OpenSecurityTraining", category: "malware-courses", categoryName: "Malware Analysis Courses", icon: "🎓", tags: ["youtube", "security", "training"], isPremium: false },

    // Category: Digital Forensics
    { id: "digital-forensics-guide", name: "Digital-Forensics-Guide", desc: "Complete guide: Computer, Mobile, Network, Database Forensics", url: "https://github.com/digital-forensics-guide", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["guide", "forensics", "mobile", "network"], isPremium: false },
    { id: "dfir", name: "DFIR", desc: "List of free and open source forensics analysis tools", url: "https://github.com/dfir", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["dfir", "tools", "list"], isPremium: false },
    { id: "cfreds-nist", name: "CFREDS NIST", desc: "Datasets for learning forensics", url: "https://cfreds.nist.gov/all", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["datasets", "learning", "forensics"], isPremium: false },
    { id: "autopsy", name: "Autopsy", desc: "Open-source digital forensics platform", url: "https://www.autopsy.com", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["platform", "open-source", "forensics"], isPremium: false },
    { id: "dff", name: "DFF", desc: "Open-source digital forensics framework", url: "https://github.com/arxsys/dff", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["framework", "forensics"], isPremium: false },
    { id: "deft-linux", name: "DEFT Linux", desc: "Linux distribution for digital forensics and incident response", url: "https://www.deftlinux.net", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["linux", "distro", "forensics"], isPremium: false },
    { id: "volatility-framework", name: "Volatility Framework", desc: "Industry-standard memory forensics framework", url: "https://volatilityfoundation.org", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["memory", "forensics", "framework"], isPremium: false },
    { id: "sift-workstation", name: "SIFT Workstation (SANS)", desc: "Ubuntu-based forensic workstation", url: "https://www.sans.org/tools/sift-workstation", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["workstation", "ubuntu", "forensics"], isPremium: false },
    { id: "caine-live", name: "CAINE Live", desc: "Bootable forensic environment", url: "https://www.caine-live.net", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["bootable", "environment", "forensics"], isPremium: false },
    { id: "rekall", name: "Rekall", desc: "Advanced memory forensics framework", url: "https://github.com/google/rekall", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["memory", "forensics", "framework"], isPremium: false },
    { id: "encase", name: "EnCase", desc: "Commercial digital forensics solution", url: "https://www.opentext.com/products/encase-forensic", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["commercial", "solution", "forensics"], isPremium: false },
    { id: "ftk", name: "FTK (Forensic Toolkit)", desc: "Commercial forensic investigation platform", url: "https://www.exterro.com/ftk", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["commercial", "toolkit", "forensics"], isPremium: false },
    { id: "x-ways-forensics", name: "X-Ways Forensics", desc: "Professional computer forensics software", url: "https://www.x-ways.net/forensics", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["software", "professional", "forensics"], isPremium: false },
    { id: "the-sleuth-kit", name: "The Sleuth Kit (TSK)", desc: "Open-source file system and disk image analysis", url: "https://www.sleuthkit.org", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["file system", "disk", "analysis"], isPremium: false },
    { id: "pyflag", name: "PyFlag", desc: "Legacy forensic and log analysis platform", url: "http://www.pyflag.net", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["legacy", "log", "analysis"], isPremium: false },
    { id: "xry", name: "XRY (XAMN)", desc: "Commercial mobile device forensics", url: "https://www.msab.com/products/xry", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["commercial", "mobile", "forensics"], isPremium: false },
    { id: "blacklight", name: "BlackLight", desc: "Digital forensics for Windows/macOS/iOS/Linux", url: "https://www.cellebrite.com/en/blacklight", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["cross-platform", "forensics"], isPremium: false },
    { id: "winhex", name: "WinHex", desc: "Hex editor for disk, memory, and data analysis", url: "https://www.x-ways.net/winhex", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["hex editor", "disk", "analysis"], isPremium: false },
    { id: "ftk-imager", name: "FTK Imager", desc: "Free tool for forensic disk images", url: "https://www.exterro.com/ftk-imager", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["disk image", "free", "forensics"], isPremium: false },
    { id: "dc3dd", name: "DC3DD", desc: "Enhanced dd for forensic disk imaging", url: "https://github.com/idiom/dc3dd", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["dd", "disk imaging", "forensics"], isPremium: false },
    { id: "raptor", name: "Raptor", desc: "Validate integrity of forensic copies", url: "https://github.com/raptor-dfi", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["integrity", "validation", "forensics"], isPremium: false },
    { id: "guymager", name: "Guymager", desc: "Open-source forensic disk imaging", url: "https://guymager.sourceforge.io", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["open-source", "disk imaging", "forensics"], isPremium: false },
    { id: "live-view", name: "Live View", desc: "Convert disk images to VMs for analysis", url: "https://liveview.sourceforge.net", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["vm", "disk image", "forensics"], isPremium: false },
    { id: "voldiff", name: "VolDiff", desc: "Compare memory images during investigations", url: "https://github.com/volatilityfoundation", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["memory", "compare", "forensics"], isPremium: false },
    { id: "memoryze", name: "Memoryze", desc: "Windows memory acquisition and analysis", url: "https://www.fireeye.com/services/freeware/memoryze.html", category: "digital-forensics", categoryName: "Digital Forensics", icon: "🔍", tags: ["windows", "memory", "forensics"], isPremium: false },

    // Category: Port Scanners
    { id: "rustscan", name: "RustScan", desc: "Modern port scanner, find ports in 3 seconds", url: "https://github.com/RustScan/RustScan", category: "port-scanners", categoryName: "Port Scanners", icon: "🚪", tags: ["scanner", "port", "network"], isPremium: false },

    // Category: Number Plate Detection
    { id: "fast-alpr", name: "Fast-ALPR", desc: "Fast Automatic License Plate Recognition framework", url: "https://github.com/fast-alpr", category: "detection-tools", categoryName: "Number Plate Detection", icon: "🚗", tags: ["alpr", "license plate", "recognition"], isPremium: false },

    // Category: API Gateway
    { id: "omniroute", name: "Omniroute", desc: "Free AI gateway: one endpoint, 160+ providers", url: "https://github.com/omniroute", category: "api-gateway", categoryName: "API Gateway", icon: "🌉", tags: ["api", "gateway", "ai"], isPremium: false },

    // Category: Ethical Hacking Courses
    { id: "ethical-kali", name: "Ethical Kali", desc: "Kali Linux Networking, Pentesting, Web Security course", url: "https://github.com/ethical-kali", category: "ethical-hacking", categoryName: "Ethical Hacking Courses", icon: "📘", tags: ["kali", "networking", "course"], isPremium: false },
    { id: "hacksplaining-course", name: "Hacksplaining", desc: "Interactive lessons on common web security vulnerabilities", url: "https://www.hacksplaining.com", category: "ethical-hacking", categoryName: "Ethical Hacking Courses", icon: "📘", tags: ["interactive", "web security", "lessons"], isPremium: false },

    // Category: Interactive Security Learning
    { id: "hacksplaining-learning", name: "Hacksplaining", desc: "Interactive lessons covering most common web security vulnerabilities", url: "https://www.hacksplaining.com", category: "security-learning", categoryName: "Interactive Security Learning", icon: "🎮", tags: ["interactive", "learning", "security"], isPremium: false },

    // Category: AI Vulnerability Scanner
    { id: "deep-eye", name: "Deep-Eye", desc: "Multi-AI provider vulnerability scanner, 45+ vuln types, compliance reports", url: "https://github.com/deep-eye", category: "ai-vuln-scanner", categoryName: "AI Vulnerability Scanner", icon: "👁️", tags: ["ai", "scanner", "vulnerability"], isPremium: false },

    // Category: Pentesting Reports
    { id: "public-pentest-reports", name: "Public Pentesting Reports (juliocesarfort)", desc: "Collection of public pentesting reports", url: "https://github.com/juliocesarfort/public-pentesting-reports", category: "pentest-reports", categoryName: "Pentesting Reports", icon: "📄", tags: ["reports", "pentest", "public"], isPremium: false },
    { id: "tcm-security-report", name: "TCM Security Sample Report", desc: "Sample pentest report template", url: "https://github.com/hmaverickadams/TCM-Security-Sample-Pentest-Report", category: "pentest-reports", categoryName: "Pentesting Reports", icon: "📄", tags: ["template", "pentest", "report"], isPremium: false },
    { id: "awesome-pentest-reports", name: "Awesome Public Pentesting Reports", desc: "Curated list of public pentest reports", url: "https://github.com/Sector443/awesome-list-of-public-pentesting-reports", category: "pentest-reports", categoryName: "Pentesting Reports", icon: "📄", tags: ["curated", "reports", "pentest"], isPremium: false },
    { id: "reconmap-reports", name: "Reconmap Pentest Reports", desc: "Pentest report templates", url: "https://github.com/reconmap/pentest-reports", category: "pentest-reports", categoryName: "Pentesting Reports", icon: "📄", tags: ["templates", "reports", "reconmap"], isPremium: false },

    // Category: Jailbreak AI
    { id: "godmod", name: "Godmod", desc: "Uncensored + jailbroken AI chat via OpenRouter", url: "https://godmod.ai", category: "jailbreak-ai", categoryName: "Jailbreak AI", icon: "🔓", tags: ["jailbreak", "ai", "uncensored"], isPremium: false },

    // Category: API Key Scanning
    { id: "keyhunter", name: "KeyHunter", desc: "Fast Rust scanner for leaked API keys on GitHub", url: "https://github.com/keyhunter", category: "api-key-scanning", categoryName: "API Key Scanning", icon: "🔑", tags: ["scanner", "api keys", "rust"], isPremium: false },

    // Category: Photo Forensics
    { id: "fotoforensics", name: "FotoForensics", desc: "Detecting images forensically", url: "https://fotoforensics.com", category: "photo-forensics", categoryName: "Photo Forensics", icon: "📸", tags: ["photo", "forensics", "image"], isPremium: false },
    { id: "forensically", name: "Forensically", desc: "Browser-based toolkit for ELA, clone detection, metadata inspection", url: "https://29a.ch/photo-forensics", category: "photo-forensics", categoryName: "Photo Forensics", icon: "📸", tags: ["toolkit", "metadata", "forensics"], isPremium: false },

    // Category: Person OSINT
    { id: "idcrawl", name: "IDCrawl", desc: "OSINT lookup by person name", url: "https://www.idcrawl.com", category: "person-osint", categoryName: "Person OSINT", icon: "🧑", tags: ["osint", "person", "lookup"], isPremium: false },

    // Category: Dark Web Search
    { id: "eyedex", name: "Eyedex", desc: "Search engine indexing open web directories, petabytes of exposed files", url: "https://www.eyedex.org", category: "dark-web-search", categoryName: "Dark Web Search", icon: "🕸️", tags: ["dark web", "search", "directories"], isPremium: false },

    // Category: Red Team Tools
    { id: "redteam-tools", name: "RedTeam-Tools", desc: "All type of offensive and red team tools", url: "https://github.com/A-poc/RedTeam-Tools", category: "red-team", categoryName: "Red Team Tools", icon: "🔴", tags: ["offensive", "red team", "tools"], isPremium: false },

    // Category: Geo Location OSINT
    { id: "netryx-astra", name: "Netryx Astra V2", desc: "Geolocation finding from photo", url: "https://github.com/sparkyniner/Netryx-Astra-V2-Geolocation-Tool", category: "geo-osint", categoryName: "Geo Location OSINT", icon: "🌍", tags: ["geolocation", "photo", "osint"], isPremium: false },

    // Category: AI Infrastructure Attack
    { id: "aimap", name: "AIMap", desc: "Finds and security-tests exposed AI endpoints (MCP servers, Ollama, vLLM, etc.)", url: "https://github.com/BishopFox/aimap", category: "ai-infra-attack", categoryName: "AI Infrastructure Attack", icon: "💥", tags: ["ai", "endpoints", "security"], isPremium: false },

    // Category: Dark Web OSINT
    { id: "voidaccess", name: "VoidAccess", desc: "Self-hosted dark web OSINT platform, automated threat intelligence", url: "https://github.com/KatrielMoses/voidaccess", category: "dark-web-osint", categoryName: "Dark Web OSINT", icon: "🦇", tags: ["dark web", "osint", "platform"], isPremium: false },

    // Category: ESP32 Offensive
    { id: "bruce-firmware", name: "Bruce Firmware", desc: "ESP32 firmware for offensive features, Red Team operations", url: "https://github.com/BruceDevices/firmware", category: "esp32-offensive", categoryName: "ESP32 Offensive", icon: "📟", tags: ["esp32", "firmware", "offensive"], isPremium: false },

    // Category: Image & Video OSINT
    { id: "google-images", name: "Google Images", desc: "Reverse image search", url: "https://images.google.com", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["image", "search", "google"], isPremium: false },
    { id: "google-lens", name: "Google Lens", desc: "Visual search: identify objects, landmarks, text", url: "https://lens.google.com", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["visual search", "objects", "google"], isPremium: false },
    { id: "yandex-images", name: "Yandex Images", desc: "Powerful reverse image search for faces and locations", url: "https://yandex.com/images", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["reverse search", "faces", "yandex"], isPremium: false },
    { id: "tineye", name: "TinEye", desc: "Find image origin, duplicates, earliest indexed version", url: "https://tineye.com", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["image origin", "duplicates", "search"], isPremium: false },
    { id: "reveye", name: "RevEye", desc: "Search image across multiple reverse search engines", url: "https://github.com/StefanAsafti/RevEye", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["multiple engines", "reverse search", "image"], isPremium: false },
    { id: "facecheck-id", name: "FaceCheck ID", desc: "Search publicly available images matching a face", url: "https://facecheck.id", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["face", "search", "images"], isPremium: false },
    { id: "pimeyes", name: "PimEyes", desc: "AI-powered facial image search", url: "https://pimeyes.com", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["ai", "facial", "search"], isPremium: false },
    { id: "repost-sleuth", name: "Repost Sleuth", desc: "Detect reposted images on Reddit", url: "https://repostsleuth.com", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["reddit", "repost", "images"], isPremium: false },
    { id: "flickr", name: "Flickr", desc: "Publicly shared images with location and metadata", url: "https://www.flickr.com", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["public", "images", "metadata"], isPremium: false },
    { id: "facesearch-arrests", name: "Facesearch.arrests", desc: "Search arrest photos using facial similarity", url: "https://facesearch.arrests.org", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["arrest", "photos", "facial similarity"], isPremium: false },
    { id: "exifinfo", name: "ExifInfo", desc: "Extract and inspect EXIF metadata from images", url: "https://exifinfo.org", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["exif", "metadata", "extract"], isPremium: false },
    { id: "carnet", name: "CarNet", desc: "Identify vehicle make, model, year from images", url: "https://carnet.ai", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["vehicle", "identification", "images"], isPremium: false },
    { id: "yt-dlp", name: "yt-dlp", desc: "Download videos, audio, subtitles, metadata", url: "https://github.com/yt-dlp/yt-dlp", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["download", "video", "audio"], isPremium: false },
    { id: "downsub", name: "DownSub", desc: "Download subtitles from online videos", url: "https://downsub.com", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["download", "subtitles", "videos"], isPremium: false },
    { id: "turbo-downloader", name: "Turbo Downloader", desc: "Download videos from platforms", url: "https://turbodownloader.com", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["download", "videos", "platforms"], isPremium: false },
    { id: "instaloader", name: "Instaloader", desc: "Download Instagram posts, reels, stories, metadata", url: "https://instaloader.github.io", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["instagram", "download", "metadata"], isPremium: false },
    { id: "bravedown", name: "BraveDown", desc: "Download videos for research and archival", url: "https://bravedown.com", category: "image-video-osint", categoryName: "Image & Video OSINT", icon: "🎞️", tags: ["download", "research", "archival"], isPremium: false },

    // Category: Breach & Leak Lookup
    { id: "spycloud", name: "SpyCloud", desc: "750 Billion records", url: "https://spycloud.com", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "tracked", name: "Tracked", desc: "500 Billion+ records", url: "https://tracked.sh", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "intelbase-breach", name: "IntelBase", desc: "516.7 Billion records", url: "https://intelbase.is", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "dehashed", name: "Dehashed", desc: "22 Billion records", url: "https://dehashed.com", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "snusbase", name: "Snusbase", desc: "16.7 Billion records", url: "https://snusbase.com", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "hackcheck", name: "HackCheck", desc: "16 Billion records", url: "https://hackcheck.io", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "cybernews", name: "CyberNews", desc: "15.5 Billion records", url: "https://cybernews.com/personal-data-leak-check/", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "leakosint", name: "LeakOSINT", desc: "85 Billion records", url: "https://leakosint.com/en", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "flare", name: "Flare", desc: "36 Billion records", url: "https://flare.io", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "leak-checker", name: "Leak Checker (Uni Bonn)", desc: "30 Billion records", url: "https://leakchecker.uni-bonn.de/en/index", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "breachdirectory", name: "BreachDirectory", desc: "18 Billion records", url: "https://breachdirectory.org", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "leak-lookup", name: "leak-lookup", desc: "28 Billion records", url: "https://leak-lookup.com", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "databreach", name: "DataBreach", desc: "25.7 Billion records", url: "https://databreach.com", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "amibreached", name: "AmIBreached", desc: "188.7 Billion records", url: "https://amibreached.com", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false },
    { id: "breachcheck", name: "BreachCheck", desc: "20 Billion records", url: "https://breachcheck.io", category: "breach-lookup", categoryName: "Breach & Leak Lookup", icon: "🚨", tags: ["breach", "records", "lookup"], isPremium: false }
];
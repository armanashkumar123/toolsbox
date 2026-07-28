const fs = require('fs');
const file = 'c:\\\\Users\\\\Public\\\\Downloads\\\\chrome downloads\\\\Web 4.0\\\\tools-data.js';

let content = fs.readFileSync(file, 'utf8');

const mapping = {
  'gun-violence-archive': 'https://www.gunviolencearchive.org/',
  'fatal-encounters': 'https://fatalencounters.org/',
  'forensic-magazine': 'https://www.forensicmag.com/',
  'radioreference': 'https://www.radioreference.com/',
  'murderpedia': 'https://murderpedia.org/',
  'mapping-police-violence': 'https://mappingpoliceviolence.org/',
  'cityprotect': 'https://cityprotect.com/',
  'panama-papers': 'https://panamapapers.icij.org/', 
  'spotcrime': 'https://spotcrime.com/',
  'killer-cloud': 'http://Killer.Cloud',
  'broadcastify': 'https://www.broadcastify.com/',
  'skopenow': 'https://www.skopenow.com/',
  'crimeometer': 'https://www.crimeometer.com/',
  'ncmec': 'https://www.missingkids.org/', 
  'doe-network': 'https://www.doenetwork.org/', 
  'uncovered': 'https://www.uncovered.com/',
  'serial-killers-info': 'https://serialkillersinfo.com/',
  'openmhz': 'https://www.openmhz.com/',
  'bellingcat': 'https://www.bellingcat.com/',
  'citizen': 'https://citizen.com/',
  'the-trace': 'https://www.thetrace.org/',
  'wikileaks': 'https://wikileaks.org/',
  'offshore-leaks': 'https://offshoreleaks.icij.org/', 
  'copblock': 'https://copblock.org/',
  'police-scorecard': 'https://policescorecard.org/',
  'forensic-files-now': 'https://forensicfilesnow.com/',
  'casefile-podcast': 'https://casefilepodcast.com/',
  'the-unredacted': 'https://theunredacted.com/',
  'documentcloud': 'https://www.documentcloud.org/documents/', 
  'crime-scene-investigator-edu': 'https://www.crimesceneinvestigatoredu.org/',

  'tookie-osint': 'https://github.com/Alfredredbird/tookie-osint',
  'smartimage': 'https://github.com/Decimation/SmartImage',
  'bbot': 'https://github.com/blacklanternsecurity/bbot',
  'ironsight': 'https://github.com/NoblerWorks-HQ/IRONSIGHT',
  'robin': 'https://github.com/apurvsinghgautam/robin',
  'whatsapp-osint': 'https://hackers-arise.com/open-source-intelligence-osint-gathering-information-on-a-whatsapp-account/',
  'ai-in-osint': 'https://hackers-arise.com/ai-in-cybersecurity-openosint/',
  'telegram-osint': 'https://hackers-arise.com/python-for-hackers-building-a-custom-telegram-osint-toolkit-for-automated-intelligence-gathering/',
  'intel-base': 'https://intelbase.is/',

  'cybersecurity-framework': 'https://github.com/vivek-threatintel/cybersecurity-competency-framework', 
  'comptia-security-notes': 'https://drive.google.com/drive/folders/106Oo8yist33rLkFaDxgxkUk9HcRPvacW', 

  'esp32-bit-pirate': 'https://github.com/geo-tp/ESP32-Bit-Pirate',

  'eagle-frontier-vlm': 'https://github.com/NVlabs/Eagle',

  'acrostrike-v2': 'https://github.com/acro777x/AcroStrike',

  'mr7-ai': 'https://hackeraicln-dxi92nff.manus.space/',

  'gmail-account-creator': 'https://github.com/ShadowHackrs/gmail-account-creator',
  'mailwave': 'https://mailwave.dev',

  'vulnclaw': 'https://github.com/Unclecheng-li/VulnClaw/blob/main/README_EN.md',

  'hybrid-analysis': 'https://hybrid-analysis.com/',
  'virustotal': 'https://www.virustotal.com/gui/home/upload',

  'urlscan-io': 'https://urlscan.io/',

  'set': 'https://github.com/trustedsec/social-engineer-toolkit',

  'exploitarium': 'https://github.com/bikini/exploitarium',
  'cve2poc': 'https://github.com/0liverFlow/CVE2PoC',

  'malware-analysis-uc': 'https://class.malware.re/', 
  'exploit-reversing': 'https://exploitreversing.com',
  'malware-unicorn': 'https://malwareunicorn.org',
  'azeria-labs': 'https://azeria-labs.com',
  'revers-engineering': 'https://revers.engineering', 
  'pwncollege': 'https://pwn.college',
  'post2': 'https://p.ost2.fyi',
  'corelan': 'https://www.corelan.be',
  'windows-internals': 'https://windows-internals.com',
  'fuzzysecurity': 'https://fuzzysecurity.com/tutorials.html', 
  'john-hammond-yt': 'https://youtube.com/@_JohnHammond',
  'liveoverflow-yt': 'https://youtube.com/@LiveOverflow',
  'lauriewired-yt': 'https://youtube.com/@lauriewired',
  'allthingsida-yt': 'https://youtube.com/@allthingsida', 
  'opensecuritytraining-yt': 'https://youtube.com/@OpenSecurityTraining',

  'digital-forensics-guide': 'https://github.com/mikeroyal/Digital-Forensics-Guide',
  'dfir': 'https://github.com/mesquidar/ForensicsTools#imageing',
  'cfreds-nist': 'https://cfreds.nist.gov/all',
  'autopsy': 'https://www.autopsy.com/',
  'dff': 'https://github.com/arxsys/dff',
  'deft-linux': 'https://www.deftlinux.net/',
  'volatility-framework': 'https://volatilityfoundation.org/',
  'sift-workstation': 'https://www.sans.org/tools/sift-workstation',
  'caine-live': 'https://www.caine-live.net/',
  'rekall': 'https://github.com/google/rekall',
  'encase': 'https://www.opentext.com/products/encase-forensic',
  'ftk': 'https://www.exterro.com/ftk',
  'x-ways-forensics': 'https://www.x-ways.net/forensics',
  'the-sleuth-kit': 'https://www.sleuthkit.org/',
  'pyflag': 'http://www.pyflag.net/',
  'xry': 'https://www.msab.com/products/xry',
  'blacklight': 'https://www.cellebrite.com/en/blacklight',
  'winhex': 'https://www.x-ways.net/winhex',
  'ftk-imager': 'https://www.exterro.com/ftk-imager',
  'dc3dd': 'https://github.com/idiom/dc3dd',
  'raptor': 'https://github.com/raptor-dfi',
  'guymager': 'https://guymager.sourceforge.io/',
  'live-view': 'https://liveview.sourceforge.net/',
  'voldiff': 'https://github.com/volatilityfoundation',
  'memoryze': 'https://www.fireeye.com/services/freeware/memoryze.html',

  'rustscan': 'https://github.com/bee-san/RustScan',

  'fast-alpr': 'https://github.com/ankandrew/fast-alpr',

  'omniroute': 'https://github.com/diegosouzapw/OmniRoute?tab=readme-ov-file',

  'ethical-kali': 'https://mega.nz/folder/GzhlULjb#J2jHHd3_jc2SIOnQ4ouiDA',
  'hacksplaining-course': 'https://www.hacksplaining.com/', 
  'hacksplaining-learning': 'https://www.hacksplaining.com/', 

  'deep-eye': 'https://github.com/zakirkun/deep-eye',

  'public-pentest-reports': 'https://github.com/juliocesarfort/public-pentesting-reports',
  'tcm-security-report': 'https://github.com/hmaverickadams/TCM-Security-Sample-Pentest-Report',
  'awesome-pentest-reports': 'https://github.com/Sector443/awesome-list-of-public-pentesting-reports',
  'reconmap-reports': 'https://github.com/reconmap/pentest-reports', 

  'godmod': 'https://godmod3.ai/',

  'keyhunter': 'https://github.com/fadidevv/keyhunter',

  'fotoforensics': 'https://fotoforensics.com/',
  'forensically': 'https://29a.ch/photo-forensics/#error-level-analysi',

  'idcrawl': 'https://www.idcrawl.com/',

  'eyedex': 'https://www.eyedex.org/',

  'redteam-tools': 'https://github.com/A-poc/RedTeam-Tools',

  'netryx-astra': 'https://github.com/sparkyniner/Netryx-Astra-V2-Geolocation-Tool', 

  'aimap': 'https://github.com/BishopFox/aimap',

  'voidaccess': 'https://github.com/KatrielMoses/voidaccess',

  'bruce-firmware': 'https://github.com/BruceDevices/firmware',

  'google-images': 'https://images.google.com/',
  'google-lens': 'https://lens.google.com/',
  'yandex-images': 'https://yandex.com/images',
  'tineye': 'https://tineye.com/',
  'reveye': 'https://github.com/StefanAsafti/RevEye',
  'facecheck-id': 'https://facecheck.id/',
  'pimeyes': 'https://pimeyes.com/',
  'repost-sleuth': 'https://repostsleuth.com/',
  'flickr': 'https://www.flickr.com/',
  'facesearch-arrests': 'https://facesearch.arrests.org/',
  'exifinfo': 'https://exifinfo.org/',
  'carnet': 'https://carnet.ai/',
  'yt-dlp': 'https://github.com/yt-dlp/yt-dlp',
  'downsub': 'https://downsub.com/',
  'turbo-downloader': 'https://turbodownloader.com/',
  'instaloader': 'https://instaloader.github.io/',
  'bravedown': 'https://bravedown.com/',

  'spycloud': 'https://spycloud.com/',
  'tracked': 'https://tracked.sh/',
  'intelbase-breach': 'https://intelbase.is/', 
  'dehashed': 'https://dehashed.com/',
  'snusbase': 'https://snusbase.com/',
  'hackcheck': 'https://hackcheck.io/',
  'cybernews': 'https://cybernews.com/personal-data-leak-check/',
  'leakosint': 'https://leakosint.com/en',
  'flare': 'https://flare.io/',
  'leak-checker': 'https://leakchecker.uni-bonn.de/en/index',
  'breachdirectory': 'https://breachdirectory.org/',
  'leak-lookup': 'https://leak-lookup.com/',
  'databreach': 'https://databreach.com/',
  'amibreached': 'https://amibreached.com/',
  'breachcheck': 'https://breachcheck.io/'
};

let missing = [];

const regex = /{ id: "([^"]+)",([^}]+)url: "([^"]+)"([^}]+)}/g;
let updatedContent = content.replace(regex, (match, id, beforeUrl, url, afterUrl) => {
    if (mapping[id]) {
        return '{ id: "' + id + '",' + beforeUrl + 'url: "' + mapping[id] + '"' + afterUrl + '}';
    } else {
        missing.push(id);
        return match;
    }
});

fs.writeFileSync(file, updatedContent, 'utf8');
console.log("Updated. Missing keys in mapping:", missing);

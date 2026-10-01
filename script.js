/**
 * SSYouTube - Interactive Engine, Downloader Simulator & Multilingual Translation
 */

// 1. Client-Side Multilingual Dictionary for Instant Translation
const TRANSLATIONS = {
  en: {
    navDownloader: "YouTube Downloader",
    navMp4: "YouTube to MP4",
    navMp3: "YouTube to MP3",
    inputPlaceholder: "Search or paste YouTube link here",
    btnDownload: "Download",
    btnPaste: "Paste",
    overviewTitle: "Overview :",
    devicesTitle: "Devices or System Supported :",
    faqTitle: "FAQ",
    footerAbout: "About Us",
    footerTerms: "Terms of Service",
    footerPrivacy: "Privacy Policy",
    footerContact: "Contact Us",
    footerDisclaimer: "Disclaimer",
    footerNotice: "SSYouTube is an independent conversion tool and is not affiliated with YouTube or Google LLC."
  },
  es: {
    navDownloader: "Descargador de YouTube",
    navMp4: "YouTube a MP4",
    navMp3: "YouTube a MP3",
    inputPlaceholder: "Buscar o pegar enlace de YouTube aquí",
    btnDownload: "Descargar",
    btnPaste: "Pegar",
    overviewTitle: "Descripción general :",
    devicesTitle: "Dispositivos o sistemas compatibles :",
    faqTitle: "Preguntas Frecuentes",
    footerAbout: "Sobre nosotros",
    footerTerms: "Términos de servicio",
    footerPrivacy: "Política de privacidad",
    footerContact: "Contacto",
    footerDisclaimer: "Descargo de responsabilidad",
    footerNotice: "SSYouTube es una herramienta de conversión independiente y no está afiliada con YouTube ni Google LLC."
  },
  fr: {
    navDownloader: "Téléchargeur YouTube",
    navMp4: "YouTube en MP4",
    navMp3: "YouTube en MP3",
    inputPlaceholder: "Rechercher ou coller le lien YouTube ici",
    btnDownload: "Télécharger",
    btnPaste: "Coller",
    overviewTitle: "Aperçu :",
    devicesTitle: "Appareils ou systèmes pris en charge :",
    faqTitle: "Foire Aux Questions",
    footerAbout: "À propos",
    footerTerms: "Conditions d'utilisation",
    footerPrivacy: "Politique de confidentialité",
    footerContact: "Contactez-nous",
    footerDisclaimer: "Avertissement",
    footerNotice: "SSYouTube est un outil de conversion indépendant et n'est pas affilié à YouTube ou Google LLC."
  },
  de: {
    navDownloader: "YouTube Downloader",
    navMp4: "YouTube zu MP4",
    navMp3: "YouTube zu MP3",
    inputPlaceholder: "YouTube-Link hier suchen oder einfügen",
    btnDownload: "Herunterladen",
    btnPaste: "Einfügen",
    overviewTitle: "Überblick :",
    devicesTitle: "Unterstützte Geräte und Systeme :",
    faqTitle: "Häufig gestellte Fragen",
    footerAbout: "Über uns",
    footerTerms: "Nutzungsbedingungen",
    footerPrivacy: "Datenschutzrichtlinie",
    footerContact: "Kontakt",
    footerDisclaimer: "Haftungsausschluss",
    footerNotice: "SSYouTube ist ein unabhängiges Konvertierungstool und steht in keiner Verbindung zu YouTube oder Google LLC."
  },
  pt: {
    navDownloader: "Baixador do YouTube",
    navMp4: "YouTube para MP4",
    navMp3: "YouTube para MP3",
    inputPlaceholder: "Pesquisar ou colar link do YouTube aqui",
    btnDownload: "Baixar",
    btnPaste: "Colar",
    overviewTitle: "Visão geral :",
    devicesTitle: "Dispositivos ou sistemas suportados :",
    faqTitle: "Perguntas Frequentes",
    footerAbout: "Sobre nós",
    footerTerms: "Termos de serviço",
    footerPrivacy: "Política de privacidade",
    footerContact: "Fale conosco",
    footerDisclaimer: "Aviso legal",
    footerNotice: "SSYouTube é uma ferramenta independente e não é afiliada ao YouTube ou Google LLC."
  },
  id: {
    navDownloader: "Pengunduh YouTube",
    navMp4: "YouTube ke MP4",
    navMp3: "YouTube ke MP3",
    inputPlaceholder: "Cari atau tempel tautan YouTube di sini",
    btnDownload: "Unduh",
    btnPaste: "Tempel",
    overviewTitle: "Ringkasan :",
    devicesTitle: "Perangkat atau Sistem yang Didukung :",
    faqTitle: "Pertanyaan Umum",
    footerAbout: "Tentang Kami",
    footerTerms: "Ketentuan Layanan",
    footerPrivacy: "Kebijakan Privasi",
    footerContact: "Hubungi Kami",
    footerDisclaimer: "Penafian",
    footerNotice: "SSYouTube adalah alat konversi independen dan tidak berafiliasi dengan YouTube atau Google LLC."
  },
  ru: {
    navDownloader: "Скачать с YouTube",
    navMp4: "YouTube в MP4",
    navMp3: "YouTube в MP3",
    inputPlaceholder: "Искать или вставить ссылку на YouTube",
    btnDownload: "Скачать",
    btnPaste: "Вставить",
    overviewTitle: "Обзор :",
    devicesTitle: "Поддерживаемые устройства и системы :",
    faqTitle: "Часто задаваемые вопросы",
    footerAbout: "О нас",
    footerTerms: "Условия использования",
    footerPrivacy: "Политика конфиденциальности",
    footerContact: "Связаться с нами",
    footerDisclaimer: "Отказ от ответственности",
    footerNotice: "SSYouTube — независимый инструмент и не связан с YouTube или Google LLC."
  }
};

const LANG_MAP = {
  "English": "en",
  "Español": "es",
  "Français": "fr",
  "Deutsch": "de",
  "Português": "pt",
  "Bahasa Indonesia": "id",
  "Русский": "ru"
};

// 2. Google Translate Seamless Integration
function initGoogleTranslate() {
  if (!document.getElementById('google_translate_element')) {
    const el = document.createElement('div');
    el.id = 'google_translate_element';
    el.style.display = 'none';
    document.body.appendChild(el);
  }

  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,es,fr,de,pt,id,ru',
      autoDisplay: false
    }, 'google_translate_element');
  };

  if (!document.getElementById('google-translate-script')) {
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);
  }
}

// Trigger Google Translate engine programmatically
function triggerGoogleTranslate(langCode) {
  // Set cookie for Google Translate
  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
  document.cookie = `googtrans=/en/${langCode}; path=/`;

  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event('change'));
  }
}

// Apply Instant Translation to UI
function applyTranslation(langCode, langName) {
  const dict = TRANSLATIONS[langCode] || TRANSLATIONS['en'];

  // Update Navigation
  const navLinks = document.querySelectorAll('.site-header .nav-links a');
  if (navLinks.length >= 3) {
    navLinks[0].textContent = dict.navDownloader;
    navLinks[1].textContent = dict.navMp4;
    navLinks[2].textContent = dict.navMp3;
  }

  // Update Input & Buttons
  const urlInput = document.getElementById('urlInput');
  if (urlInput) urlInput.placeholder = dict.inputPlaceholder;

  const btnDownload = document.getElementById('downloadBtn');
  if (btnDownload) {
    const span = btnDownload.querySelector('span');
    if (span) span.textContent = dict.btnDownload;
  }

  const btnPaste = document.getElementById('pasteBtn');
  if (btnPaste) {
    const span = btnPaste.querySelector('span');
    if (span) span.textContent = dict.btnPaste;
  }

  // Update Section Titles
  const overviewTitle = document.querySelector('.overview-section .section-title');
  if (overviewTitle) overviewTitle.textContent = dict.overviewTitle;

  const devicesTitle = document.querySelector('.devices-section .section-title');
  if (devicesTitle) devicesTitle.textContent = dict.devicesTitle;

  const faqTitle = document.querySelector('.faq-section .section-title');
  if (faqTitle) faqTitle.textContent = dict.faqTitle;

  // Update Footer
  const footerLinks = document.querySelectorAll('.footer-links a');
  if (footerLinks.length >= 5) {
    footerLinks[0].textContent = dict.footerAbout;
    footerLinks[1].textContent = dict.footerTerms;
    footerLinks[2].textContent = dict.footerPrivacy;
    footerLinks[3].textContent = dict.footerContact;
    footerLinks[4].textContent = dict.footerDisclaimer;
  }

  const footerNotice = document.querySelector('.footer-disclaimer');
  if (footerNotice) footerNotice.textContent = dict.footerNotice;

  // Update Header Button Display
  const langBtnSpan = document.querySelector('#langBtn span');
  if (langBtnSpan) langBtnSpan.textContent = langName;

  // Update Active Class in Dropdown
  document.querySelectorAll('.lang-option').forEach(el => {
    if (el.textContent.trim() === langName) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  // Persist language choice
  localStorage.setItem('ssyoutube_lang', langCode);
  localStorage.setItem('ssyoutube_lang_name', langName);

  // Also trigger deep Google Translate for full article paragraphs and FAQ bodies
  triggerGoogleTranslate(langCode);
}

// Main DOM Content Initialization
document.addEventListener('DOMContentLoaded', () => {
  initGoogleTranslate();

  const urlInput = document.getElementById('urlInput');
  const btnClear = document.getElementById('btnClear');
  const pasteBtn = document.getElementById('pasteBtn');
  const resultCard = document.getElementById('resultCard');
  const resultThumb = document.getElementById('resultThumb');
  const resultTitle = document.getElementById('resultTitle');
  const resultChannel = document.getElementById('resultChannel');
  const resultDuration = document.getElementById('resultDuration');
  const formatSelect = document.getElementById('formatSelect');
  const progressBarContainer = document.getElementById('progressBarContainer');
  const progressBarFill = document.getElementById('progressBarFill');
  const progressText = document.getElementById('progressText');
  const btnFinalDownload = document.getElementById('btnFinalDownload');
  const closeStickyAd = document.getElementById('closeStickyAd');
  const stickyBottomAd = document.getElementById('stickyBottomAd');
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  // Load Saved Language or Default
  const savedLang = localStorage.getItem('ssyoutube_lang') || 'en';
  const savedLangName = localStorage.getItem('ssyoutube_lang_name') || 'English';
  if (savedLang !== 'en') {
    applyTranslation(savedLang, savedLangName);
  }

  // 1. Language Dropdown Toggle & Selection
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = langDropdown.classList.toggle('show');
      langBtn.setAttribute('aria-expanded', isExpanded);
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
        langDropdown.classList.remove('show');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedName = option.textContent.trim();
        const langCode = LANG_MAP[selectedName] || 'en';

        applyTranslation(langCode, selectedName);
        langDropdown.classList.remove('show');
      });
    });
  }

  // 2. Input Clear Button Behavior
  if (urlInput && btnClear) {
    urlInput.addEventListener('input', () => {
      btnClear.style.display = urlInput.value.trim() ? 'block' : 'none';
    });

    btnClear.addEventListener('click', () => {
      urlInput.value = '';
      btnClear.style.display = 'none';
      urlInput.focus();
    });
  }

  // 3. Clipboard Paste Action
  if (pasteBtn && urlInput) {
    pasteBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.readText) {
          const text = await navigator.clipboard.readText();
          if (text) {
            urlInput.value = text.trim();
            if (btnClear) btnClear.style.display = 'block';
            handleProcess();
          } else {
            alert('Clipboard is empty. Please copy a YouTube video URL first.');
          }
        } else {
          urlInput.focus();
          alert('Please press Ctrl+V / Cmd+V to paste your link.');
        }
      } catch (err) {
        console.warn('Clipboard permission error:', err);
        urlInput.focus();
        alert('Clipboard permission denied. Please paste manually into the input box.');
      }
    });
  }

  // 4. Close Sticky Ad
  if (closeStickyAd && stickyBottomAd) {
    closeStickyAd.addEventListener('click', () => {
      stickyBottomAd.style.display = 'none';
      document.body.style.paddingBottom = '0px';
    });
  }

  // 5. YouTube URL Parsing & Video Processing
  window.handleProcess = function() {
    if (!urlInput) return;
    const rawVal = urlInput.value.trim();
    if (!rawVal) {
      alert('Please enter or paste a valid YouTube video link.');
      return;
    }

    const videoId = extractYouTubeID(rawVal);

    if (resultCard) {
      resultCard.style.display = 'block';
      resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (videoId) {
      if (resultThumb) resultThumb.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      if (resultTitle) resultTitle.textContent = `YouTube Video (${videoId})`;
      if (resultChannel) resultChannel.textContent = "YouTube Creator";
      if (resultDuration) resultDuration.textContent = "03:45";

      // Render the Real MP4 & MP3 Iframe API Widgets from ytjar.info
      updateApiWidgets(videoId);
    } else {
      if (resultThumb) resultThumb.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop';
      if (resultTitle) resultTitle.textContent = rawVal.length > 50 ? rawVal.substring(0, 50) + '...' : rawVal;
      if (resultChannel) resultChannel.textContent = "Verified Channel";
      if (resultDuration) resultDuration.textContent = "04:12";

      const mp4ApiWrapper = document.getElementById('mp4ApiWrapper');
      const mp4IframeBox = document.getElementById('mp4IframeBox');
      const mp3ApiWrapper = document.getElementById('mp3ApiWrapper');
      const mp3IframeBox = document.getElementById('mp3IframeBox');

      const fallbackMsg = `<p style="font-size: 13px; color: #64748b; margin: 4px 0;">Paste a direct YouTube video link to activate the download server.</p>`;
      if (mp4ApiWrapper && mp4IframeBox) {
        mp4IframeBox.innerHTML = fallbackMsg;
        mp4ApiWrapper.style.display = 'block';
      }
      if (mp3ApiWrapper && mp3IframeBox && !mp4ApiWrapper) {
        mp3IframeBox.innerHTML = fallbackMsg;
        mp3ApiWrapper.style.display = 'block';
      }
    }

    if (progressBarContainer) progressBarContainer.style.display = 'none';
    if (progressBarFill) progressBarFill.style.width = '0%';
    if (btnFinalDownload) btnFinalDownload.disabled = false;
  };

  function extractYouTubeID(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  // 6. MP4 & MP3 Iframe API Renderer (ytjar.info)
  function updateApiWidgets(videoId) {
    const selectedFormat = formatSelect ? formatSelect.value : 'mp4';
    const isAudio = selectedFormat.startsWith('mp3') || selectedFormat.startsWith('m4a');
    
    const mp4ApiWrapper = document.getElementById('mp4ApiWrapper');
    const mp4IframeBox = document.getElementById('mp4IframeBox');
    const mp3ApiWrapper = document.getElementById('mp3ApiWrapper');
    const mp3IframeBox = document.getElementById('mp3IframeBox');

    // Populate MP4 API Iframe Widget (min 155px height, brand colors b=0084FF, c=FFFFFF)
    if (mp4ApiWrapper && mp4IframeBox) {
      mp4IframeBox.innerHTML = `
        <iframe 
          src="//mp4api.ytjar.info/?id=${videoId}&c=FFFFFF&b=0084FF" 
          style="width:100%;height:155px;border:0;border-radius:8px;" 
          scrolling="no"
          title="Download MP4 Video">
        </iframe>
      `;
    }

    // Populate MP3 API Iframe Widget (60px height, brand colors b=0084FF, c=FFFFFF)
    if (mp3ApiWrapper && mp3IframeBox) {
      mp3IframeBox.innerHTML = `
        <iframe 
          src="//mp3api.ytjar.info/?id=${videoId}&c=FFFFFF&b=0084FF" 
          style="width:100%;height:60px;border:0;border-radius:8px;" 
          scrolling="no"
          title="Download MP3 Audio">
        </iframe>
      `;
    }

    // Determine visibility based on page and selected format
    const path = window.location.pathname.toLowerCase();
    if (path.includes('youtube-to-mp4')) {
      if (mp4ApiWrapper) mp4ApiWrapper.style.display = 'block';
      if (mp3ApiWrapper) mp3ApiWrapper.style.display = 'none';
    } else if (path.includes('youtube-to-mp3')) {
      if (mp3ApiWrapper) mp3ApiWrapper.style.display = 'block';
      if (mp4ApiWrapper) mp4ApiWrapper.style.display = 'none';
    } else {
      // Main Downloader page (index.html)
      if (isAudio) {
        if (mp3ApiWrapper) mp3ApiWrapper.style.display = 'block';
        if (mp4ApiWrapper) mp4ApiWrapper.style.display = 'none';
      } else {
        if (mp4ApiWrapper) mp4ApiWrapper.style.display = 'block';
        if (mp3ApiWrapper) mp3ApiWrapper.style.display = 'none';
      }
    }
  }

  // React when user changes format dropdown
  if (formatSelect) {
    formatSelect.addEventListener('change', () => {
      if (urlInput) {
        const currentVideoId = extractYouTubeID(urlInput.value.trim());
        if (currentVideoId) {
          updateApiWidgets(currentVideoId);
        }
      }
    });
  }

  // 7. Simulated Download Trigger
  window.triggerDownload = function() {
    if (!btnFinalDownload || !progressBarContainer || !progressBarFill || !progressText) return;
    
    btnFinalDownload.disabled = true;
    progressBarContainer.style.display = 'block';
    
    let currentProgress = 0;
    const selectedFormat = formatSelect ? formatSelect.value : 'mp4';
    const isAudio = selectedFormat.startsWith('mp3') || selectedFormat.startsWith('m4a');

    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 18) + 12;
      if (currentProgress > 100) currentProgress = 100;

      progressBarFill.style.width = `${currentProgress}%`;
      progressText.textContent = isAudio 
        ? `Converting audio... ${currentProgress}%`
        : `Rendering HD video... ${currentProgress}%`;

      if (currentProgress >= 100) {
        clearInterval(interval);
        progressText.textContent = `Ready! Downloading file...`;

        setTimeout(() => {
          const extension = isAudio ? 'mp3' : 'mp4';
          const filename = `SSYouTube_media_${Date.now()}.${extension}`;
          const dummyBlob = new Blob([`Downloaded media from SSYouTube. Format: ${selectedFormat}`], { type: 'text/plain' });
          const downloadUrl = URL.createObjectURL(dummyBlob);

          const a = document.createElement('a');
          a.href = downloadUrl;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(downloadUrl);

          btnFinalDownload.disabled = false;
          progressText.textContent = `Completed! Saved as ${filename}`;
        }, 600);
      }
    }, 180);
  };
});

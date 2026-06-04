/**
 * Inoue Museum - Navigation & i18n
 * Shared across all pages
 */

// --- Language State ---
let currentLang = 'zh';
let hideTimeout;

// --- Navigation Menu (Desktop) ---
function showLanguageMenu() {
    clearTimeout(hideTimeout);
    document.querySelector('.language-switcher').classList.add('active');
}

function hideLanguageMenu() {
    hideTimeout = setTimeout(() => {
        const switcher = document.querySelector('.language-switcher');
        if (switcher) switcher.classList.remove('active');
    }, 200);
}

function keepLanguageMenu() {
    clearTimeout(hideTimeout);
}

// --- Mobile Menu ---
function openMobileMenu() {
    const overlay = document.getElementById('navOverlay');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    const overlay = document.getElementById('navOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// --- Language Switching ---
function switchLanguage(lang) {
    currentLang = lang;

    // Close dropdown
    const switcher = document.querySelector('.language-switcher');
    if (switcher) switcher.classList.remove('active');

    // Update dropdown selected state
    document.querySelectorAll('.language-option').forEach(opt => {
        opt.classList.toggle('selected', opt.dataset.lang === lang);
    });

    // Update mobile overlay selected state
    document.querySelectorAll('.nav-overlay-lang button').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    if (typeof translations !== 'undefined') {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    // Update document language attribute
    const langMap = { zh: 'zh-CN', en: 'en', ja: 'ja' };
    document.documentElement.lang = langMap[lang] || lang;

    // Dispatch custom event for other scripts to react
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

// --- Init ---
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('inoue-lang');
    if (savedLang && ['zh', 'en', 'ja'].includes(savedLang)) {
        switchLanguage(savedLang);
    }

    // Save language preference on change
    window.addEventListener('langchange', function(e) {
        localStorage.setItem('inoue-lang', e.detail.lang);
    });
});

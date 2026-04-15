// 语言切换相关
let hideTimeout;

function showLanguageMenu() {
    clearTimeout(hideTimeout);
    document.querySelector('.language-switcher').classList.add('active');
}

function hideLanguageMenu() {
    hideTimeout = setTimeout(() => {
        document.querySelector('.language-switcher').classList.remove('active');
    }, 200);
}

function keepLanguageMenu() {
    clearTimeout(hideTimeout);
}

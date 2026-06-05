/**
 * Inoue Museum - Carousel
 * Lightweight fade carousel driven by carouselConfig
 */
(function () {
    'use strict';

    var autoplayTimer = null;
    var currentIndex = 0;
    var slides = [];
    var dots = [];
    var totalSlides = 0;

    // Get current language (fallback to 'zh')
    function getLang() {
        return window.currentLang || 'zh';
    }

    // Build carousel DOM from config
    function buildCarousel() {
        if (typeof carouselConfig === 'undefined') return;

        var container = document.getElementById('carousel');
        if (!container) return;

        slides = carouselConfig.slides;
        totalSlides = slides.length;
        if (totalSlides === 0) return;

        // Track
        var track = document.createElement('div');
        track.className = 'carousel-track';

        slides.forEach(function (slide, i) {
            var div = document.createElement('div');
            div.className = 'carousel-slide' + (i === 0 ? ' active' : '');
            div.dataset.index = i;

            var a = document.createElement('a');
            a.href = slide.link || '#';

            var img = document.createElement('img');
            img.src = slide.image;
            img.alt = slide.title ? (slide.title[getLang()] || '') : '';
            img.loading = i === 0 ? 'eager' : 'lazy';
            a.appendChild(img);

            if (slide.title) {
                var caption = document.createElement('div');
                caption.className = 'carousel-caption';
                var titleEl = document.createElement('div');
                titleEl.className = 'carousel-caption-title';
                titleEl.dataset.i18n = 'carousel-title-' + i;
                titleEl.textContent = slide.title[getLang()] || '';
                caption.appendChild(titleEl);
                a.appendChild(caption);
            }

            div.appendChild(a);
            track.appendChild(div);
        });

        container.appendChild(track);

        // Arrows
        if (totalSlides > 1) {
            var prevBtn = document.createElement('button');
            prevBtn.className = 'carousel-arrow carousel-arrow-prev';
            prevBtn.innerHTML = '&#8249;';
            prevBtn.setAttribute('aria-label', 'Previous');
            prevBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                goTo(currentIndex - 1);
                resetAutoplay();
            });
            container.appendChild(prevBtn);

            var nextBtn = document.createElement('button');
            nextBtn.className = 'carousel-arrow carousel-arrow-next';
            nextBtn.innerHTML = '&#8250;';
            nextBtn.setAttribute('aria-label', 'Next');
            nextBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                goTo(currentIndex + 1);
                resetAutoplay();
            });
            container.appendChild(nextBtn);
        }

        // Dots
        if (totalSlides > 1) {
            var dotsWrap = document.createElement('div');
            dotsWrap.className = 'carousel-dots';

            slides.forEach(function (_, i) {
                var dot = document.createElement('button');
                dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', 'Slide ' + (i + 1));
                dot.addEventListener('click', function () {
                    goTo(i);
                    resetAutoplay();
                });
                dotsWrap.appendChild(dot);
                dots.push(dot);
            });

            container.appendChild(dotsWrap);
        }

        // Autoplay
        startAutoplay();

        // Pause on hover
        container.addEventListener('mouseenter', stopAutoplay);
        container.addEventListener('mouseleave', startAutoplay);

        // Touch swipe
        var touchStartX = 0;
        container.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].clientX;
            stopAutoplay();
        }, { passive: true });

        container.addEventListener('touchend', function (e) {
            var diff = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(diff) > 40) {
                if (diff < 0) goTo(currentIndex + 1);
                else goTo(currentIndex - 1);
            }
            startAutoplay();
        }, { passive: true });
    }

    function goTo(index) {
        if (totalSlides === 0) return;
        // Wrap around
        index = ((index % totalSlides) + totalSlides) % totalSlides;

        var allSlides = document.querySelectorAll('.carousel-slide');
        allSlides.forEach(function (s) { s.classList.remove('active'); });
        allSlides[index].classList.add('active');

        dots.forEach(function (d) { d.classList.remove('active'); });
        if (dots[index]) dots[index].classList.add('active');

        currentIndex = index;
    }

    function startAutoplay() {
        stopAutoplay();
        if (totalSlides <= 1) return;
        autoplayTimer = setInterval(function () {
            goTo(currentIndex + 1);
        }, carouselConfig.autoplayInterval || 5000);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Update captions on language change
    function updateCaptions() {
        if (typeof carouselConfig === 'undefined') return;
        var lang = getLang();
        carouselConfig.slides.forEach(function (slide, i) {
            var el = document.querySelector('[data-i18n="carousel-title-' + i + '"]');
            if (el && slide.title) {
                el.textContent = slide.title[lang] || slide.title['zh'] || '';
            }
        });
    }

    // Init — poll for config availability (handles async script loading)
    function tryBuild() {
        if (typeof carouselConfig !== 'undefined') {
            buildCarousel();
        } else {
            var attempts = 0;
            var timer = setInterval(function () {
                attempts++;
                if (typeof carouselConfig !== 'undefined') {
                    clearInterval(timer);
                    buildCarousel();
                } else if (attempts > 100) {
                    clearInterval(timer);
                }
            }, 50);
        }
    }

    document.addEventListener('DOMContentLoaded', tryBuild);

    window.addEventListener('langchange', function () {
        updateCaptions();
    });
})();

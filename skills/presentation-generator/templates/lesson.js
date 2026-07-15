/*
 * Lesson JS — fade-in animations, smooth scroll, copy prompts, table wrapping
 */

// Fade-in animation
var fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function(el) { el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; });

try {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    fadeEls.forEach(function(el) { observer.observe(el); });
} catch(e) {
    fadeEls.forEach(function(el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
}

// Fallback: show all after 1.5s
setTimeout(function() {
    fadeEls.forEach(function(el) {
        if (el.style.opacity !== '1') { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }
    });
}, 1500);

// Smooth scroll for TOC links
document.querySelectorAll('.bonus-toc-item').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.getElementById(link.getAttribute('href').substring(1));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Table responsive wrapper
document.querySelectorAll('.data-table').forEach(function(table) {
    var wrapper = document.createElement('div');
    wrapper.style.overflowX = 'auto';
    wrapper.style.webkitOverflowScrolling = 'touch';
    wrapper.style.margin = '20px 0';
    table.style.margin = '0';
    table.style.minWidth = '400px';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
});

// Copy prompt to clipboard
function copyPrompt(btn) {
    var promptText = btn.closest('.prompt-block').querySelector('.prompt-text').textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(promptText).then(function() {
            showCopied(btn);
        }).catch(function() {
            fallbackCopy(promptText, btn);
        });
    } else {
        fallbackCopy(promptText, btn);
    }
}

function fallbackCopy(text, btn) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
        document.execCommand('copy');
        showCopied(btn);
    } catch(e) {
        btn.textContent = 'Ошибка';
        setTimeout(function() { btn.textContent = 'Скопировать'; }, 2000);
    }
    document.body.removeChild(textarea);
}

function showCopied(btn) {
    btn.textContent = 'Скопировано!';
    btn.classList.add('copied');
    setTimeout(function() {
        btn.textContent = 'Скопировать';
        btn.classList.remove('copied');
    }, 2000);
}
/*
 * Bonus JS — fade-in with CSS class toggle, smooth scroll, copy prompts
 */

// Fade-in animation via CSS class
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scroll for TOC links
document.querySelectorAll('.bonus-toc-item').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(link.getAttribute('href').substring(1));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Copy prompt to clipboard (if prompt-blocks are used)
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
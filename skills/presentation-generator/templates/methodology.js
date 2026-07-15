// Methodology Interactive Components
// Tabs, Copy buttons, Expandable cards

// Tab Switching
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Find and activate the clicked tab button
    event.target.classList.add('active');
}

// Toggle Expandable Card
function toggleExpand(header) {
    const card = header.parentElement;
    card.classList.toggle('expanded');
}

// Copy Prompt to Clipboard
function copyPrompt(button) {
    const promptBlock = button.closest('.prompt-block');
    const promptText = promptBlock.querySelector('.prompt-text');
    const text = promptText.textContent;

    navigator.clipboard.writeText(text).then(() => {
        // Change button appearance
        const originalText = button.textContent;
        button.textContent = '✅ Скопировано';
        button.classList.add('copied');

        // Reset after 2 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        button.textContent = '❌ Ошибка';
        setTimeout(() => {
            button.textContent = '📋 Скопировать';
        }, 2000);
    });
}

// Copy Code Block
function copyCode(button) {
    const codeBlock = button.nextElementSibling;
    const code = codeBlock.textContent;

    navigator.clipboard.writeText(code).then(() => {
        button.textContent = '✅';
        setTimeout(() => {
            button.textContent = '📋';
        }, 2000);
    });
}

// Open Tool Link in New Tab
function openTool(url) {
    window.open(url, '_blank');
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Fade in animation for all sections
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Make first tab active by default
    const firstTab = document.querySelector('.tab');
    const firstTabContent = document.querySelector('.tab-content');
    if (firstTab && firstTabContent) {
        firstTab.classList.add('active');
        firstTabContent.classList.add('active');
    }
});

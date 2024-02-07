// dark-mode.js

const darkModeToggle = document.getElementById('dark-mode-toggle');
const lightModeIcon = document.getElementById('light-mode-icon');
const darkModeIcon = document.getElementById('dark-mode-icon');

const isDarkModePreferred = localStorage.getItem('dark-mode-preference') === 'true';

if (isDarkModePreferred) {
    document.body.classList.add('dark-mode');
}

toggleIcons();

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleIcons();

    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode-preference', isDarkMode.toString());
});

function toggleIcons() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    lightModeIcon.style.display = isDarkMode ? 'block' : 'none';
    darkModeIcon.style.display = isDarkMode ? 'none' : 'block';
}

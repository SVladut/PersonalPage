const darkModeToggle = document.getElementById('dark-mode-toggle');
const lightModeIcon = document.getElementById('light-mode-icon');
const darkModeIcon = document.getElementById('dark-mode-icon');
const headerElement = document.querySelector('header'); // Select the header element

const isDarkModePreferred = localStorage.getItem('dark-mode-preference') === 'true';

if (isDarkModePreferred) {
    document.body.classList.add('dark-mode');
    headerElement.classList.add('dark-mode'); // Add 'dark-mode' class to the header
}

toggleIcons();

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    headerElement.classList.toggle('dark-mode'); // Toggle 'dark-mode' class on the header
    toggleIcons();

    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode-preference', isDarkMode.toString());
});

function toggleIcons() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    lightModeIcon.style.display = isDarkMode ? 'block' : 'none';
    darkModeIcon.style.display = isDarkMode ? 'none' : 'block';
}

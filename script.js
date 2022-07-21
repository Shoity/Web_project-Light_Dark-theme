const toogleSwitch = document.querySelector('input[type="checkbox"]');
const toogleIcon = document.getElementById('toogle-icon');
const textBox = document.getElementById('text-box')

const darkTheme = 'dark'
const lightTheme = 'light'

function backgroundChange(id, color) {
    let element = document.getElementById(id)
    element.style.backgroundColor
}

// Change images
function imageMode(color) {
    img1.src = `img/undraw_proud_coder_${color}.svg`;
    img2.src = `img/undraw_feeling_proud_${color}.svg`;
    img3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
function toogleDarkLightMode(isDark) {
    nav.style.backgroundColor = (isDark === 'dark') ? 'rgb(0 0 0 / 50%)' : 'rgb(0 0 0 / 50 %)';
    textBox.style.backgroundColor = (isDark === 'dark') ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toogleIcon.children[0].textContent = (isDark === 'dark') ? 'Dark Mode' : 'Light Mode';
    (isDark === 'dark') ? toogleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : ('fa-sun', 'fa-moon');
    (isDark === 'dark') ? imageMode('dark') : imageMode('light')
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toogleDarkLightMode(darkTheme);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toogleDarkLightMode(lightTheme)
    }
}

// event listener
toogleSwitch.addEventListener('change', switchTheme)

// Check local stor for theme
const curentTheme = localStorage.getItem('theme');
if (curentTheme) {
    document.documentElement.setAttribute('data-theme', curentTheme);

    if (curentTheme === 'dark') {
        toogleSwitch.checked = true;
        toogleDarkLightMode(darkTheme)
    }
}

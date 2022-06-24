let theme = 0;

function toggleOverlay(passImage) {
    if (passImage) {
        document.getElementById("overlay-img").src = passImage;
    }
    let overlay = document.getElementById("image-overlay");
    let toggle = document.getElementById("bottom-theme-toggle");
    overlay.classList.toggle("disable-overlay");
    toggle.classList.toggle("disable-overlay");
}

function toggleTheme() {
    theme = (theme == 1) ? 0 : 1;
    loadTheme();
}

function loadTheme() {
    if (theme == 1) {
        document.body.classList.add("theme-dark");
    } else {
        document.body.classList.remove("theme-dark");
    }

    localStorage.setItem("theme", theme);
}

function loadLocalStorage() {
    let savedTheme = localStorage.getItem("theme");
    theme = (savedTheme == null) ? 0 : savedTheme;
    loadTheme();
}

loadLocalStorage();
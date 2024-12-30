function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu && icon) { // Check if both elements exist
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
}
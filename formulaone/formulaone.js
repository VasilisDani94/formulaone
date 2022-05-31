function toggleButtonHandler() {

    let toggleMenu = document.querySelector('.toggle.menu');
    let toggleMenuDisplayStatus = window.getComputedStyle(toggleMenu).getPropertyValue('display');

    if (toggleMenuDisplayStatus == "none") {
        toggleMenu.style.display = "block";
    } else {
        toggleMenu.style.display = "none";
    }
}


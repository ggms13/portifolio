function mostraMenuBtn() {
    let navMenu = document.querySelector('.mobile-menu-nav-ul');

    if(navMenu.classList.contains('showMenu')) {
        navMenu.classList.remove('showMenu');
        document.querySelector('.icone-menu-dropdown').src = "src/assets/images/menu-icon.svg";
    } else {
        navMenu.classList.add('showMenu');
        document.querySelector('.icone-menu-dropdown').src = "src/assets/images/close-icon.svg";
    }
}
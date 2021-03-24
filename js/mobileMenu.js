// Propiedades del menu movil
let propMenu = {

    burgerMenu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menuActive: false,
    elementMenu: document.querySelectorAll('#slideMenu .main-menu a')

}

// Propiedades del menu movil
const metMenu = {

    start: function () {
        propMenu.burgerMenu.addEventListener('click', metMenu.toggleMenu );
        for (var element of propMenu.elementMenu) {
            element.addEventListener( 'click', metMenu.hideMenu );
        }
    },

    toggleMenu: function () {
        if ( !propMenu.menuActive ) {
            propMenu.menuActive = true;
            propMenu.slideMenu.className += ' active';
        } else {
            propMenu.menuActive = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
        }
    },

    hideMenu: function () {
        propMenu.menuActive = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
    }

}

metMenu.start();

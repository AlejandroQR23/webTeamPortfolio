
let propScroll = {

    position: window.pageYOffset,
    softScroll: document.querySelectorAll('.softScroll'),
    goUp: document.querySelector('.goUp'),
    destiny: null,
    sectionDistance: null,
    interval: null

}

const metScroll = {

    start: function () {
        for ( var soft of propScroll.softScroll ) {
            soft.addEventListener('click', metScroll.move);
        }
        propScroll.goUp.addEventListener('click', metScroll.up);
    },

    move: function ( e ) {
        e.preventDefault();
        clearInterval( propScroll.interval );
        propScroll.destiny = this.getAttribute('href');
        propScroll.sectionDistance = document.querySelector( propScroll.destiny ).offsetTop - 150;

        propScroll.position = window.pageYOffset;
        propScroll.interval = setInterval( function () {

            if ( propScroll.position < propScroll.sectionDistance ) {
                propScroll.position += 30;                                      // el 30 representa la velocidad del scroll
                if ( propScroll.position >= propScroll.sectionDistance ) {
                    clearInterval( propScroll.interval );
                }
            } else {
                propScroll.position -= 30;
                if ( propScroll.position <= propScroll.sectionDistance ) {
                    clearInterval( propScroll.interval );
                }
            }

            window.scrollTo( 0, propScroll.position );

        }, 15);
    },

    up: function ( e ) {
        e.preventDefault();
        clearInterval( propScroll.interval );
        propScroll.position = window.pageYOffset;

        propScroll.interval = setInterval( function() {
            if ( propScroll.position > 0 ) {
                propScroll.position -= 30;
                if ( propScroll.position <= 0 ) {
                    clearInterval( propScroll.interval );
                }
            } else {
                return;
            }
            window.scrollTo( 0, propScroll.position );
        }, 15 );

    }

}

metScroll.start();

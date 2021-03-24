
let propForm = {

    form: document.formulario_contacto,
    elements: document.formulario_contacto.elements,
    error: null,
    textError: null

}

const metForm = {

    start: function () {
        for ( var element of propForm.elements ) {
            if ( element.type == 'text' || element.type == 'email' || element.type == 'number' || element.type == 'tel' || element.nodeName.toLowerCase() == 'textarea') {
                element.addEventListener( 'focus', metForm.focusInput );
                element.addEventListener( 'blur', metForm.blurInput );
            }
        }
        propForm.form.addEventListener( 'submit', metForm.validate );
    },

    focusInput: function () {
        this.parentElement.children[1].className = 'label active';
    },

    blurInput: function () {
        if ( this.value == '' ) {
            this.parentElement.children[1].className = 'label';
        }
    },

    validate: function ( e ) {
        for (var i = 0; i < propForm.elements.length; i++) {

            if ( propForm.elements[i].value == '' ) {
                e.preventDefault();

                if ( propForm.elements[i].parentElement.children.length < 3 ) {
                    propForm.error = document.createElement('p');
                    propForm.errorText = document.createTextNode( ` Please, fill ${propForm.elements[i].name} field ` );
                    propForm.error.appendChild( propForm.errorText );
                    propForm.error.className = 'error';

                    propForm.elements[i].parentElement.appendChild( propForm.error );
                }
            } else {
                if ( propForm.elements[i].parentElement.children.length >= 3 ) {
                    propForm.error = propForm.elements[i].parentElement.getElementsByTagName('p')[0];
                    propForm.elements[i].parentElement.removeChild( propForm.error );
                }
            }

        }
    }

}

metForm.start();

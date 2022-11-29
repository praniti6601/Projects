

  const toggler = document.querySelector( '.main-menu-toggler' );

toggler.addEventListener( 'click', function() {
    // querySelectorAll returns an array of objects (DOM nodes)
    const navs = document.querySelectorAll( '.navigator' );

    for( let i = 0; i < navs.length; i++ ) {
        navs[i].classList.toggle( '.display-none' );
    }
} );
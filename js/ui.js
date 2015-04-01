"use strict";

var overlayUi = {
    
    // Toggle the different overlays
    toggleOverlayNav: function () {
        navbar.classList.toggle('is-close');
        navbar.classList.toggle('is-open');

        navbarOpen.classList.toggle('is-visible');
        navbarOpen.classList.toggle('is-hidden');

        navbarClose.classList.toggle('is-visible');
        navbarClose.classList.toggle('is-hidden');
    }
    
};
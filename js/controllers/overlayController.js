"use strict";


//------------------------------------------------------------------
// Selectors
//------------------------------------------------------------------


var overlayOpen = document.getElementsByClassName('overlay-open'),
    overlayClose = document.getElementsByClassName('overlay-close'),
    navbar = document.getElementById('js-navbar'),
    navbarOpen = document.querySelector('.navbar-trigger.overlay-open'),
    navbarClose = document.querySelector('.navbar-trigger.overlay-close');


//------------------------------------------------------------------
// Events & functions
//------------------------------------------------------------------


//Open the different overlays switch clicked target

if (overlayOpen.length !== 0) {
    for (var i = 0; i < overlayOpen.length; i++) {
        overlayOpen[i].addEventListener('click', function(e){
            e.preventDefault();
            switch (e.currentTarget.getAttribute("data-context")){
                case "nav": 
                    overlayUi.toggleOverlayNav();
                    break;
                default : 
                    overlayUi.toggleOverlayNav();
            }
        }, false);
    }   
}

//Close the different overlays switch clicked target

if (overlayClose.length != 0) {
    for(var i = 0; i < overlayClose.length; i++) {
        overlayClose[i].addEventListener('click', function(e){
            e.preventDefault();
            switch (e.currentTarget.getAttribute("data-context")){
                case "nav": 
                    overlayUi.toggleOverlayNav();
                    break;
                default : 
                    overlayUi.toggleOverlayNav();
            }
        }, false);
    }   
}

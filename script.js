document.addEventListener('DOMContentLoaded', () => {

    const navIcon = document.getElementById('nav-icon');

    const showMenu = () => {
        $("nav").animate({left: '0'}, 200);
        $('#nav-icon').addClass('open');
    }

    const hideMenu = () => {
        $("nav").animate({left: '-50%'}, 200);
        $('#nav-icon').removeClass('open');
    }

    navIcon.addEventListener('click', () => {        
        if (navIcon.classList.contains('open')) {
            hideMenu();
        } else {
            showMenu();
            navIcon.classList.add('open');
        }
    });

    $(window).resize(function() {
        if(navIcon.classList.contains('open')) {
            hideMenu();         
            $("#menuRes").animate({left: '0'}, 200);            
            navIcon.classList.remove('open');
        }        
    });  
});
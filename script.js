$(document).ready(function() {

    const showMenu = () => {
        $("nav").animate({left: '0'}, 200);
        $('#nav-icon').addClass('open');
    }

    const hideMenu = () => {
        $("nav").animate({left: '-50%'}, 200);
        $('#nav-icon').removeClass('open');
    }

    $('#nav-icon').click(function() {

        if ($(this).hasClass('open')) {
            hideMenu();
        } else {
            showMenu();
            $(this).addClass('open')
        }       
    });

    $(window).resize(function() {
        
        if ($('#nav-icon').hasClass('open')) {
            hideMenu();         
            $("#menuRes").animate({left: '0'}, 200);            
            $('#nav-icon').removeClass('open');
        }
    });    
});

$(document).ready(function () {
    $('.humberger-menu').click(function(){
        $('.mobile-menu').addClass('open');
        $('body').addClass('slide')
    });
    $('.menu-close').click(function(){
        $('.mobile-menu').removeClass('open');
        $('body').removeClass('slide')
    })
    $('header .bottom-back .right-details .navigation li').click(function(){
        $('.mobile-menu').removeClass('open');
        $('body').removeClass('slide')
    });


   
    $("header .bottom-back .right-details .navigation li:first").addClass("current_menu_items").show(); //Activate first tab
    //On Click Event
    $("header .bottom-back .right-details .navigation li").click(function () {
        $("header .bottom-back .right-details .navigation li").removeClass("current_menu_items"); 
        $(this).addClass("current_menu_items"); 
        
    });   
	

});





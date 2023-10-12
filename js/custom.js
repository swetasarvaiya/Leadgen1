
$(document).ready(function(){

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
   });
   
    $("#slider_1").owlCarousel({
        loop:true,
        margin:10   ,
        nav:true,
        items:1,
        dots:true,
        // autoplay:true,
        // autoplayTimeout:1000,
        navText: ['<i class="fa-solid fa-left-long"></i>', '<i class="fa-solid fa-right-long"></i>'],

    })

    
    $('#slider_2').owlCarousel({
        items: 3,
        margin: 25,
        loop: true,
        nav: true,
        dots:false,
        center:true,
        autoplay:true,
        autoplayTimeout:1000,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    
    });
    
});
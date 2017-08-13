$(window).scroll(function(){
    if($(window).scrollTop() != 0){
        $('.navbar-fixed-top').addClass('colorNav');
        $('.navbar-fixed-top').removeClass('navbar');
    }else{
        $('.navbar-fixed-top').removeClass('colorNav');
        $('.navbar-fixed-top').addClass('navbar');}
})



$("#caret").click(function() {
    $('html,body').animate({
        scrollTop: $(".aboutUs").offset().top - 50},
        1500);
});
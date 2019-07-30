$(window).scroll(()=>{
    var top = $(window).scrollTop();
    var w = $(window).width();
    var first = $('#intro').height();
    var value = top/(first-130);
    $("#main-nav-container").css('background','rgba(245,245,245,'+value+')');
    if(w <=426)
        $(".nav-ul li").css('background','rgba(245,245,245,'+value+')');
})
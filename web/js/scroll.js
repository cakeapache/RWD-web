$(window).scroll(()=>{
    var top = $(window).scrollTop();
    var w = $(window).width();
    var first = $('#intro').height();
    var value = top/(first-130);
    $("#main-nav-container").css('background','rgba(245,245,245,'+value+')');
    if(value<1)
        $("#nav-intro").css('color','#FF5511');
    else
    $("#nav-intro").css('color','black');
})
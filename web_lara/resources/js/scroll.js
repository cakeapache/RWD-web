$(window).scroll(()=>{
    var top = $(window).scrollTop();
    var first = $('#intro').height()-100;
    var value1 = top/first;

    $("#main-nav-container").css('background','rgba(245,245,245,'+value1+')');

    if(value1<1)
        $("#nav-intro").css('color','#FF5511');
    else
        $("#nav-intro").css('color','black');

    var second = first+$('#about').height();
    if(top>first &&top<second)
        $("#nav-about").css('color','#FF5511');
    else
        $("#nav-about").css('color','black');
    var third = second+$('#works').height();
    if(top>second &&top<third)
        $('#nav-works').css('color','#FF5511');
    else
        $('#nav-works').css('color','black');
    
    if(top>third)
        $('#nav-links').css('color','#FF5511');
    else
        $('#nav-links').css('color','black');
})
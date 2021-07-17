$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else
    {
        $('nav').removeClass('black');
    }
})



$(".btn-primary").on("click", function(){
    $(".btn-primary").css("box-shadow","none");
    $(".btn-primary").css("border-color","transparent");
})

$(".btn").on("click", function(){
    $(".btn").css("box-shadow","none");
    $(".btn").css("border-color","transparent");
})
$(".btn-success").on("mouseover", function(){
    $(".btn-success").css("background-color","#19ccb3")
})





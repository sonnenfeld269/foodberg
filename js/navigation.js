$(".icon").click(function () {
    if ($(".links").css("display") == "flex") {
        $(".links").slideUp();
        $(".open").css("display", "block");
        $(".close").css("display", "none");
    } else {
        $(".links").slideDown();
        $(".links").css("display", "flex");
        $(".open").css("display", "none");
        $(".close").css("display", "block");
    }
});

$(window).scroll(function () {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 100) {

        $('.navigation').addClass('show');

    } else {

        $('.navigation').removeClass('show');

    };
});

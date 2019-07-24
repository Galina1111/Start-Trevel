jQuery(function ($) {
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        adaptiveHeight: true
    });
    // $(".datepicker").datepicker();


    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })


    $("#to").datepicker({
        firstDay: 2,
        showButtonPanel: true,
        currentDay: "Today",
        closeText: "Close",
    });
    $("#from").datepicker({
        firstDay: 2,
        showButtonPanel: true,
        currentDay: "Today",
        closeText: "Close",

    });

    $("#navbarSupportedContent a.nav-link").click(function () {
        $(this).parents("ul").find("li.active").removeClass("active");
        $(this).parent().addClass("active");
        $('#navbarSupportedContent').collapse('hide');
    });

    $(".nav a.nav-link").click(function () {
        $(this).parents("ul").find("li.active").removeClass("active");
        $(this).parent().addClass("active");
    });
});

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
        firstDay:2,
        showButtonPanel: true,
        currentDay: "Today",
        closeText: "Close",
    });
    $("#from").datepicker({
        firstDay:2,
        showButtonPanel: true,
        currentDay: "Today",
        closeText: "Close",

    });

    $(".navbar-nav a").click(function(event) {
        $(".navbar-nav a").removeClass("active");
        $(this).addClass("active");
        // $('.navbar-toggler').toggle()
        // $('.navbar-toggler').toggle()
    });

    $(".navbar li").click(function(event) {
        $(".navbar li").removeClass("active");
        $(this).addClass("active");
    });
});

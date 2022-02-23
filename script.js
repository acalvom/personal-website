$(document).ready(function () {
    var isPaused = true, state;

    $("#carouselVideosBackground").carousel({
        interval: 10000,
        pause: true
    });

    // To change .active navbar class when the carousel slides.
    $("#carouselVideosBackground").on("slid.bs.carousel", function () {
        $(".navbar-nav .nav-item").find("a.active").removeClass("active");
        let id = $(".carousel-item.active section").attr("id");
        $('.navbar-nav .nav-item a[href="#' + id + '"]').addClass("active");
    });

    // Automatically pauses carousel when contact tab is .active
    $("#carouselVideosBackground").on("slid.bs.carousel", function () {
        if ($(".carousel-item.active section").attr("id") === 'contact') {
            $('#carouselVideosBackground').carousel('pause');
            $('#toggleCarousel').find('span').addClass('fa-play');
        }
    });

    /* Play trigger */
    $('#toggleCarousel').click(function () {
        state = (isPaused) ? 'cycle' : 'pause';
        isPaused = (isPaused) ? false : true;
        $('#carouselVideosBackground').carousel(state);
        $(this).find('span').toggleClass('fa-pause fa-play');
    });

    $('#btnContactForm').click(function () {
        var bootstrapToast = new bootstrap.Toast($('#toastContactForm'));
        bootstrapToast.show();
    });
});
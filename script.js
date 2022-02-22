$(document).ready(function () {
    var paused = false;

    $("#carouselVideosBackground").carousel({
        interval: 15000,
        pause: false
    });
    // To change .active navbar class when the carousel slides.
    $("#carouselVideosBackground").on("slid.bs.carousel", function () {
        $(".navbar-nav .nav-item").find("a.active").removeClass("active");
        let id = $(".carousel-item.active section").attr("id");
        $('.navbar-nav .nav-item a[href="#' + id + '"]').addClass("active");
    });

    /* Play trigger */
    $('#toggleCarousel').click(function () {
        var state = (paused) ? 'cycle' : 'pause';
        paused = (paused) ? false : true;
        $('#carouselVideosBackground').carousel(state);
        $(this).find('span').toggleClass('fa-play fa-pause');
    });

    $('#btnContactForm').click(function () {
        var bootstrapToast = new bootstrap.Toast($('#toastContactForm'));
        bootstrapToast.show();
    });
});
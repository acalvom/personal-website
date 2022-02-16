$(document).ready(function () {
    $("#carouselVideosBackground").carousel({
        interval: 5000,
    });
    // To change .active navbar class when the carousel slides.
    $("#carouselVideosBackground").on("slid.bs.carousel", function () {
        $(".navbar-nav .nav-item").find("a.active").removeClass("active");
        let id = $(".carousel-item.active section").attr("id");
        $('.navbar-nav .nav-item a[href="#' + id + '"]').addClass("active");
    });
});
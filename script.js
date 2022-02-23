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


    const videosBackground = $(".video-background-holder video");
    const screenWidth = screen.width;
    const SCREEN_MEDIUM = 768, MBPS_MIN = 20.4;

    [...videosBackground].forEach((video) => {
        video.autoplay = false;
        video.preload = "none"
    });

    setTimeout(() => playVideos(), 100); // Calculate Internet speed after 100ms

    function playVideos() {
        const downloadImage = "https://via.placeholder.com/1280x720.jpg";
        let init = new Date().getTime();
        let end;
        let imageWeight = 114490 * 8; // Image weight in bits
        calculateInternetSpeed((speedMbps) => {
            if (screenWidth >= SCREEN_MEDIUM && speedMbps >= MBPS_MIN) {
                [...videosBackground].forEach((video) => {
                    video.autoplay = true;
                    video.preload = "metadata";
                    video.load();
                });
            }
        });

        function calculateInternetSpeed(callback) {
            let imageObject = new Image();
            imageObject.src = downloadImage;
            imageObject.onload = function () {
                end = new Date().getTime();
                let downloadDuration = (end - init) / 1000;
                let speedKbps = (imageWeight / downloadDuration / 1024).toFixed(2);
                let speedMbps = (speedKbps / 1024).toFixed(2);
                callback(speedMbps);
            };
        }
    }
});
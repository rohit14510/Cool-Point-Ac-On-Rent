$(document).ready(function(){
    $(".mobile-menuicon").click(function(){
        $(".mobile-menu").css("left", "0");  // Menu को दिखाने के लिए
    });

    $(".close-menu").click(function(){
        $(".mobile-menu").css("left", "-100%");  // Menu को छुपाने के लिए
    });

    // Menu के बाहर क्लिक करने पर भी बंद करने का ऑप्शन
    $(document).click(function(event) {
        if (!$(event.target).closest('.mobile-menu, .mobile-menuicon').length) {
            $(".mobile-menu").css("left", "-100%");
        }
    });
});
// Hero Section Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 2000,
        arrows: true,
        pagination: false,
    }).mount();
});
// Counter
$(document).ready(function () {
    // Check if the counter-section is in view
    $(window).on('scroll', function () {
        $('.counter-section').each(function () {
            var counterSection = $(this);
            var counter = counterSection.find('.counter');
            var offsetTop = counterSection.offset().top;
            var windowHeight = $(window).height();
            var windowScrollTop = $(window).scrollTop();

            if (windowScrollTop + windowHeight >= offsetTop && !counter.hasClass('counted')) {
                var target = counter.data('target');
                counter.addClass('counted');
                counter.prop('Counter', 0).animate(
                    { Counter: target },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            counter.text(Math.ceil(now) + '+');
                        }
                    }
                );
            }
        });
    });
});
//Testimonials
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Testimonials_splide', {
        type: 'loop',
        perPage: 1, // डेस्कटॉप पर 3 आइटम
        autoplay: true,
        arrows: false,
        pagination: false,
        breakpoints: {
            768: {
                perPage: 1, // मोबाइल स्क्रीन पर 1 आइटम
            }
        }
    }).mount();
});
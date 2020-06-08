/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */

$(window).on('load', function () {
    $('#preloader').delay(250).fadeOut('slow');


    /**
     *Our Team Section
     **/
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ["<i class='lni-chevron-left-circle'></i>", "<i class='lni-chevron-right-circle'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            }
        }
    });

    $('#progress-elements').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + "%"
            }, 800)
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });

    //OUR WORK SECTION

    $('#isotope-container').isotope({});

    $('#isotope-filters').on('click', 'button', function (e) {
        var filterValue = $(this).attr('data-filter');
        $('#isotope-container').isotope({
            filter: filterValue
        });

        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', //child item selector by clicking on it popup will appear 
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true
        }
    });

    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ["<i class='lni-chevron-left-circle'></i>", "<i class='lni-chevron-right-circle'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 6,
            }
        }
    });
    $('#testimonial-carousel').owlCarousel({
        items: 1,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ["<i class='lni-chevron-left-circle'></i>", "<i class='lni-chevron-right-circle'></i>"]
    });

    //STATS SECTION
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('a.smooth-scroll').click(function (e) {
        e.preventDefault();
        var section_id = $(this).attr('href');
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 71
        }, 1250, 'easeInOutExpo');
    })
});

$(window).on('load', function () {
    //MAP VARIABLES
    var myLatLng = {
        lat: 19.249020,
        lng: 73.178547
    };
    var addressString = "<h5>Address</h5><p>Tharwani Solitaire,Varap</p><h5>Contact:</h5><p>8369531054</p>"
    //1.Render The Map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 13
    });
    //2.Add Map Marker
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Click to see Address'
    });
    //3. Add InfoWindow To Map
    var infoWindow = new google.maps.InfoWindow({
        content: addressString
    });
    //4. Show InfoWindow when user clicks map marker
    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
});


//HEADER
$(function () {
    showHideNav();
    $(window).scroll(function () {
        showHideNav();
    })

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled-navbar green-nav-top');
            $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');
        } else {
            $('.navbar').removeClass('scrolled-navbar green-nav-top');
            $('.navbar-brand img').attr('src', 'img/logo/logo.png');
        }
    }
    $('#mobile-nav-open-btn').click(function () {
        $('#mobile-nav').css('height', '100%');
    });
    $('#mobile-nav-close-btn').click(function () {
        $('#mobile-nav').css('height', '0%');
    });
})

var indexPage = $('#index_page').length;
var contactPage = $('#contact_page').length;

//====================================functions====================================
var transferHeight = function (source, destination) {
    var sourceH = $(source).outerHeight();
    $(destination).outerHeight(sourceH);
}
var equalHeight = function (target) {
    var setHeight = 0;
    $(target).each(function () {
        var getH = $(this).outerHeight();
        if (setHeight < getH) {
            setHeight = getH;
        }
    });
    $(target).outerHeight(setHeight);
}
var inTransit = false;
var inTransitTime = 1000;
var ccNext = function () {
    inTransit = true;
    $('.text_wrap .slick-current').next().trigger('click');
    setTimeout(function () {
        inTransit = false;
    }, inTransitTime);
}
var ccPrev = function () {
    inTransit = true;
    $('.text_wrap .slick-current').prev().trigger('click');
    setTimeout(function () {
        inTransit = false;
    }, inTransitTime);
}
//function to check hidden radio buttons in project filter section
var checkHiddenRadio = function (targetParent, clickedElement) {
    $(targetParent).find('.hidden_inputs').prop('checked', false);
    $(clickedElement).find('.hidden_inputs').prop('checked', true);
}

//==========get current year===============
var getCurrentYear = function () {
    var date = new Date();
    var yearVal = date.getFullYear();
    $('.current_year').text(yearVal);
}

//====================================functions ends====================================

//==============global variables=================
var winW = $(window).outerWidth();
var winH = $(window).outerHeight();

//################################### document ready function ###########################################

$(document).ready(function (evt) {

    //==============displaying current year==============
    getCurrentYear();

    //========= wow initialization ==============
    //	new WOW().init();

    //========toggle sidebar============
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
        $('.sidebar_wrap').toggleClass('open');
    });

    //=====================================index page script========================================
    if (indexPage == 1) {

        //pixi canvas js starts here

        var spriteImages = document.querySelectorAll('.slide-item__image');
        var spriteImagesSrc = [];
        var texts = [];

        for (var i = 0; i < spriteImages.length; i++) {

            var img = spriteImages[i];

            // Set the texts you want to display to each slide 
            // in a sibling element of your image and edit accordingly
            if (img.nextElementSibling) {
                texts.push(img.nextElementSibling.innerHTML);
            } else {
                texts.push('');
            }

            spriteImagesSrc.push(img.getAttribute('src'));
        }

        var initCanvasSlideshow = new CanvasSlideshow({
            sprites: spriteImagesSrc,
            displacementImage: 'dist/img/home/dmaps/512x512/clouds.jpg',
            autoPlay: false,
            autoPlaySpeed: [0.3, 0.3],
            displaceScale: [200, 120],
            displaceAutoFit: true,
            displacementCenter: false,
            interactive: false,
            interactionEvent: 'click'
        });

        //pixi canvas js ends here

        //slick initialization
        $('.text_wrap').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            focusOnSelect: true
        });

        //        $('.text_wrap').on('beforeChange', function (event, slick, currentSlide, direction) {
        //            if (currentSlide == 0 && direction == 1) {
        //                $('.logo_big_img').fadeOut();
        //            }
        //            if (currentSlide == 1 && direction == 0) {
        //                $('.logo_big_img').fadeIn();
        //            }
        //        });

        //change canvas on text click
        $('.text_wrap .texts').on('click', function () {
            var getAttr = $(this).attr('data-click');
            $(getAttr).trigger('click');
        });

        //effect on text hover
        $('.catText text').on('mouseover', function () {
            $(this).parents('.texts').css({
                transform: 'scale(1.2)'
            });
            $('#slider_content').css({
                transform: 'scale(1.03)'
            });
        });
        $('.catText text').on('mouseout', function () {
            $(this).parents('.texts').css({
                transform: 'scale(1)'
            });
            $('#slider_content').css({
                transform: 'scale(1)'
            });
        });

    }

    //=====================================contact page script========================================
    if (contactPage == 1) {

    }
});

//################################### window load function ##############################################
$(window).on('load', function () {
    setTimeout(function () {
        $('.loader_overlay').fadeOut(500);
    }, 300);
    $('.show_progress .fill').css({
        width: '100%'
    });
    setTimeout(function () {
        $('.intro_sec_with_logo').addClass('moveUp');
        $('.text_wrap').addClass('text_wrap_fadeIn');
    }, 3000);

    if (winW > 767) {

    }

    if (winW > 1024) {

    }

    if (indexPage == 1) {
        $('.texts .outlineText').each(function () {
            var outlineTextW = $(this).outerWidth();
            $(this).siblings('.fill_area_text').outerWidth(outlineTextW);
        });
    }

    //======slider movement using keys======
    $(document).keydown(function (e) {
        if (e.which == 39) {
            //call function here
            //            ccNext();
        } else if (e.which == 37) {
            //call function here
            //            ccPrev();
        }
    });

    //======slider movement using mouse wheel======
    var elem = document.getElementById('index_page');
    elem.addEventListener('wheel', wheel);

    function wheel(e) {
        e = e || window.event;
        delta = e.deltaY || e.detail || e.wheelDelta;
        if (delta > 0) {
            direction = 'up';
            //call function here
            if (!inTransit) {
                ccNext();
            }
        } else {
            direction = 'down';
            //call function here
            if (!inTransit) {
                ccPrev();
            }
        }
    }

    //        $("#index_page").on("swipeleft", functionName);
    //        $("#index_page").on("swiperight", functionName);


});

//################################### window scroll function ###########################################
$(window).on('scroll', function (e) {
    var scrollTopPos = $(window).scrollTop();

});

//################################### window resize function ###########################################
$(window).on('resize', function () {});

//################### window orientation change function ############################
window.addEventListener("orientationchange", function () {
    location.reload();
});

var FadeTransition = Barba.BaseTransition.extend({
	start: function () {
		/**
		 * This function is automatically called as soon the Transition starts
		 * this.newContainerLoading is a Promise for the loading of the new container
		 * (Barba.js also comes with an handy Promise polyfill!)
		 */

		// As soon the loading is finished and the old page is faded out, let's fade the new page
		Promise
			.all([this.newContainerLoading, this.fadeOut()])
			.then(this.fadeIn.bind(this));
	},

	fadeOut: function () {
		/**
		 * this.oldContainer is the HTMLElement of the old Container
		 */

		//        return $(this.oldContainer).animate({
		//            opacity: 0
		//        }).promise();
		var pageOutPromise = new Promise(function (resolve) {

			var pageOutTransition = new TimelineMax();
			pageOutTransition.to('.slick-current .catText a', 1, {
				y: '-50px',
				onComplete: function () {
					resolve();
				}
			});
		});

		return pageOutPromise;
	},

	fadeIn: function () {
		/**
		 * this.newContainer is the HTMLElement of the new Container
		 * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
		 * Please note, newContainer is available just after newContainerLoading is resolved!
		 */

		var _this = this;
		var $el = $(this.newContainer);

		$(this.oldContainer).hide();

		$el.css({
			//            visibility: 'visible',
			//            opacity: 0
			display: 'block'
		});

		$el.animate({
			//            opacity: 1
			//            display: 'block'
		}, 400, function () {
			/**
			 * Do not forget to call .done() as soon your transition is finished!
			 * .done() will automatically remove from the DOM the old Container
			 */

			var pageInTransition = new TimelineMax();
			pageInTransition.to('.inside_page_content', 1, {
				y: '-100px'
			});

			_this.done();
		});
	}
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function () {
	/**
	 * Here you can use your own logic!
	 * For example you can use different Transition based on the current page or link...
	 */

	return FadeTransition;
};


Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
	if (currentStatus.namespace == 'homepage') {
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
			displacementCenter: true,
			interactive: true,
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
			focusOnSelect: true,
			asNavFor: '#slider_content_back .slide_wrapper_back',
			swipe: false
		});

		$('.text_wrap').on('afterChange', function (event, slick, currentSlide, nextSlide) {
			var getHref = $('.text_wrap .texts').eq(currentSlide).find('.catText a').attr('data-href');
			$('.text_wrap .texts .catText a').attr('href', 'javascript:void(0)');
			$('.text_wrap .texts').eq(currentSlide).find('.catText a').attr('href', getHref);
		});

		$('#slider_content_back .slide_wrapper_back').slick({
			dots: false,
			arrows: false,
			infinite: false,
			fade: true,
			speed: 500,
			asNavFor: '.text_wrap'
		});

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

		//load js
		$('.logo_anim_2').css({
			transform: 'translate(-50%, -50%)'
		});
		$('.show_progress .fill').css({
			width: '100%'
		});
		setTimeout(function () {
			$('.intro_sec_with_logo').addClass('moveUp');
			$('.text_wrap').addClass('text_wrap_fadeIn');
		}, 3000);

		$('.texts .outlineText').each(function () {
			var outlineTextW = $(this).outerWidth();
			$(this).siblings('.fill_area_text').outerWidth(outlineTextW);
		});

		//======slider movement using keys======
		$(document).keydown(function (e) {
			if (e.which == 39) {
				//call function here
				if (!inTransit) {
					ccNext();
				}
			} else if (e.which == 37) {
				//call function here
				if (!inTransit) {
					ccPrev();
				}
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

	}
});

Barba.Pjax.start();

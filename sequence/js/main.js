$('document').ready(function () {


	//fade transition---------------------------------------------------------------
	var FadeTransition = Barba.BaseTransition.extend({
		start: function () {
			/**
			 * This function is automatically called as soon the Transition starts
			 * this.newContainerLoading is a Promise for the loading of the new container
			 * (Barba.js also comes with an handy Promise polyfill!)
			 */

			// As soon the loading is finished and the old page is faded out, let's fade the new page
			Promise
				.all([this.newContainerLoading, this.pageOutTranition()])
				.then(this.pageInTranition.bind(this));
		},

		pageOutTranition: function () {
			/**
			 * this.oldContainer is the HTMLElement of the old Container
			 */
			//
			//			return $(this.oldContainer).animate({
			//				opacity: 0
			//			}).promise();




			var pageOutPromise = new Promise(function (resolve) {
				var tl = new TimelineMax();
				tl.to('.section_title h2', 0.5, {
						autoAlpha: 0,
						y: '-100%'
					})
					.set('.dividers', {
						y: '0%',
						display: 'block'
					})
					.staggerFromTo('.dividers', 0.5, {
						y: '0%'
					}, {
						y: '-100%',
						//					ease: Expo.easeOut,
						onComplete: function () {
							setTimeout(function () {
								resolve();
							}, 400)
						}
					}, 0.2)
					.staggerFromTo('.dividers', 0.5, {
						y: '-100%'
					}, {
						y: '-200%',
						//					ease: Expo.easeOut
					}, 0.2)
					.set('.dividers', {
						y: '0%',
						display: 'none'
					})
			})

			return pageOutPromise;

		},

		pageInTranition: function () {
			/**
			 * this.newContainer is the HTMLElement of the new Container
			 * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
			 * Please note, newContainer is available just after newContainerLoading is resolved!
			 */



			var _this = this;
			var $el = $(this.newContainer);

			$(this.oldContainer).hide();
			TweenMax.set('.section_title h2', {
				autoAlpha: 0,
				y: 50
			})
			setTimeout(function () {
				TweenMax.fromTo('.section_title h2', 0.5, {
					autoAlpha: 0,
					y: 50
				}, {
					autoAlpha: 1,
					y: 0
				})
			}, 2000)


			$el.css({
				visibility: 'visible',
				opacity: 0
			});

			$el.animate({
				opacity: 1
			}, 400, function () {
				/**
				 * Do not forget to call .done() as soon your transition is finished!
				 * .done() will automatically remove from the DOM the old Container
				 */

				_this.done();
			});
		}
	});

	Barba.Pjax.getTransition = function () {
		//		var tl = new TimelineMax();
		//		tl
		//			.to('.wipe_down', 0.5, {
		//				"y": '60%',
		//				repeat: 1,
		//				yoyo: true,
		//				ease: Power3.easeInOut,
		//			})
		//			.to('.wipe_up', 0.5, {
		//				"y": '-60%',
		//				repeat: 1,
		//				yoyo: true,
		//				ease: Power3.easeInOut,
		//			}, "-=1")

		return FadeTransition;
	}
	Barba.Pjax.start();
});

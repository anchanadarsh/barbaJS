$('document').ready(function () {


	//fade  transition---------------------------------------------------------------
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

			return $(this.oldContainer).animate({
				opacity: 0
			}).promise();
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

	//fadein effect------------------------------------------------------------------

	var transEffect = Barba.BaseTransition.extend({
		start: function () {
			this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
		},
		fadeInNewcontent: function (nc) {
			nc.hide();
			var _this = this;
			$(this.oldContainer).fadeOut(1000).promise().done(() => {
				nc.css('visibility', 'visible');
				nc.fadeIn(1000, function () {
					_this.done();
				})
			});
		}
	});

	//slide_up_down effect---------------------------------------------------------------

	var slideToggleEffect = Barba.BaseTransition.extend({
		start: function () {
			this.newContainerLoading.then(val => this.slideInNewcontent($(this.newContainer)));
		},
		slideInNewcontent: function (nc) {
			nc.hide();
			var _this = this;
			$(this.oldContainer).slideDown(1000).promise().done(() => {
				nc.css('visibility', 'visible');
				nc.slideDown(1000, function () {
					_this.done();
				})
			});
		}
	});

	//slide_down effect---------------------------------------------------------------

	var slidedownEffect = Barba.BaseTransition.extend({
		start: function () {
			this.newContainerLoading.then(val => this.slidedownNewcontent($(this.newContainer)));
		},
		slidedownNewcontent: function (nc) {
			nc.hide();
			var _this = this;
			$(this.oldContainer).fadeOut().promise().done(() => {
				nc.css('visibility', 'visible');
				nc.slideDown(1000, function () {
					_this.done();
				})
			});
		}
	});

	//slide_left_Right effect---------------------------------------------------------------

	var slidelrEffect = Barba.BaseTransition.extend({
		start: function () {
			this.newContainerLoading.then(val => this.slidelrNewcontent($(this.newContainer)));
		},
		slidelrNewcontent: function (nc) {
			nc.css('left', '100%');
			var _this = this;
			$(this.oldContainer).css('left', '-100%').promise().done(() => {
				//                nc.css('visibility', 'visible');
				nc.animate({
					left: '0'
				}, function () {
					_this.done();
				})
			});
		}
	});



	Barba.Pjax.getTransition = function () {
		return FadeTransition;
	}
	Barba.Pjax.start();
});

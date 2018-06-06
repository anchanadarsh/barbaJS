$('document').ready(function () {

    //fadein effect-----------------------------------------------------------------------------

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

    //slide_up_down effect-----------------------------------------------------------------------------

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

    //slide_down effect-----------------------------------------------------------------------------

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

    //slide_left_Right effect-----------------------------------------------------------------------------

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
        return slidelrEffect;
    }
    Barba.Pjax.start();
});

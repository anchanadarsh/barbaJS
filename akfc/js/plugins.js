// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



//function wheel(event) {
//    var delta = 0;
//    console.log('wheelDelta' + event.wheelDelta);
//    console.log('detail' + event.detail);
//    if (event.wheelDelta) {
//        (delta = event.wheelDelta / 120);
//    } else if (event.detail) {
//        (delta = -event.detail / 3);
//    }
//
//    handle(delta);
//    if (event.preventDefault) {
//        (event.preventDefault());
//    }
//    event.returnValue = false;
//}
//
//function handle(delta) {
//    var time = 1000;
//    var distance = 400;
//
//    $('html, body').stop().animate({
//        scrollTop: $(window).scrollTop() - (distance * delta)
//    }, time);
//}
//
//if (window.addEventListener) {
//    window.addEventListener('DOMMouseScroll', wheel, false);
//}
//window.onmousewheel = document.onmousewheel = wheel;

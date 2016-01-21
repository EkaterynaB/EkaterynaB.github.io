// (function($) {
//     $.fn.autoscrollCarousel = function() {
//         var widthPict = $(".carousel-element").outerWidth();
//         var elementsList = $(".carousel-list");
//         var leftValue = 0;
//
//         var widthAllLi = $('.carousel-element').length;
//         var maxLeftOffset = -((widthAllLi - 4) * widthPict);
//         var minLeftOffset = 0;
//
//         function rotate() {
//             leftValue -= widthPict;
//         elementsList.animate({ left : leftValue + "px"}, 2000, function() {
//             $(".carousel-element li:last").after($(".carousel-element li:first"));
//             if ( leftValue <= maxLeftOffset) {
//                 leftValue = minLeftOffset;
//             }
//         });
//     }
//
//         var run = setInterval(rotate, 2000);
//
//         return this;
//
//     }
// })(jQuery);

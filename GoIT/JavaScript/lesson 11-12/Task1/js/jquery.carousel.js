(function($) {

    $.fn.carousel = function(options) {
        var defaults = {
            countPict: 1,
            elementsOnPage: 3,
            autoRun: false,
            speed: 1500
        };

        var settings = $.extend(defaults, options);
        var leftButton = $(".carousel-arrow-left");
        var rightButton = $(".carousel-arrow-right");
        var elementHider = $('.carousel-hider');
        var elementsList = $(".carousel-list");
        var widthPict = $(".carousel-element").outerWidth();
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minOffset = - ((elementsCount - settings.elementsOnPage) * widthPict);
        var maxOffset = 0;
        var widthHider = elementHider.width(settings.elementsOnPage * widthPict);
        var $link = $(this);
        var offsetPicWidth;
        var run;

        leftButton.click(function() {
            if (settings.countPict * currentLeftValue < maxOffset) {
                currentLeftValue += widthPict;
            } else {
                currentLeftValue = minOffset/settings.countPict;
            }
            elementsList.animate({ left : (settings.countPict * currentLeftValue) + "px"}, 300);
        });

        rightButton.click(function() {
            if (settings.countPict * currentLeftValue > minOffset) {
                currentLeftValue -= widthPict;
            } else {
                currentLeftValue = maxOffset;
            }
            elementsList.animate({ left : (settings.countPict * currentLeftValue) + "px"}, 300);
        });

        function rightOffset() {
            rightButton.click();
        }

        function stopOffset() {
            clearTimeout(run);
        }

        function startOffset() {
          run = setTimeout(function tic() {
            rightOffset();
            run = setTimeout(tic, settings.speed);
          }, settings.speed);
        }

        if (settings.autoRun) {

            startOffset()

            $('div[class^=carousel-arrow]').hover(
              function() {
                stopOffset()
            }, function() {
                startOffset()
            });

        } else {
            stopOffset()
        }


        return this;
    };

})(jQuery);

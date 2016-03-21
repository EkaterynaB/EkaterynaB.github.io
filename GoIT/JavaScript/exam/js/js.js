$(function() {

    function getImagesByRequest(phrase) {

        $.ajax({
            url: 'http://api.pixplorer.co.uk/image?word='+ phrase +'&amount=7&size=l',
            type: "GET",
            dataType: "json",
            cache: false,
            success: function(data){
                $(".grid").empty();
                var piclist = tmpl($('#activity__template').html(), {data: data});
                $('.activity__wrapper').append(piclist);

                $('.grid').isotope({
                    itemSelector: '.grid-item',
                    layoutMode: 'packery',
                    packery: {
                        gutter: 20
                    }
                });

            }
        });

    }

    getImagesByRequest();
    var buttonSearch = $('.search__button');

    $('.search__button').click(function(e) {
        e.preventDefault();
        var searchField = $(".input__form").val();
        getImagesByRequest(searchField);
})

            $('.jcarousel').jcarousel({
    			animation: 'slow',
    			wrap: 'circular'
    		})

		    $('.jcarousel-prev')
                .jcarouselControl({
				target: '-=1'
			});

		    $('.jcarousel-next')
                .jcarouselControl({
				target: '+=1'
			});

            function init() {
                getImagesByRequest();
                //formActivity.addEventListener('submit', getUserQuery);
            }
init();
            // document.addEventListener('DOMContentLoaded', init);
})

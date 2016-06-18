$(function() {

    function getImagesByRequest(phrase) {

        $.ajax({
            url: 'http://api.pixplorer.co.uk/image?word='+ phrase +'&amount=7&size=tb',
            type: "GET",
            dataType: "json",
            cache: false,
            success: function(data){

                $(".grid").remove();
                var piclist = tmpl($('#activity__template').html(), {data: data.images});
                $('.activity .wrapper').append(piclist);

                $('.grid').isotope({
                    itemSelector: '.grid-item',
                    layoutMode: 'packery',
                    packery: {
                        gutter: 0
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
    });

    $('.jcarousel').jcarousel({
    	animation: 'slow',
    	wrap: 'circular'
    });

    $('.jcarousel-prev').jcarouselControl({
		target: '-=1'
	});

	$('.jcarousel-next').jcarouselControl({
		target: '+=1'
	});

});

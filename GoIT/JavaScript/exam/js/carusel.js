$(function() {

	//Carousel
	$('.jcarousel-wrapper')
	.append('<a class = "jcarousel-prev" href="#"></a>')
	.append('<a class = "jcarousel-next" href="#"></a>')
	.append('<p class = "jcarousel-pagination"></p>');

	$('.jcarousel')
		.on('jcarousel:reload jcarousel:create', function () {
		var element = $(this);
		var width = element.innerWidth();

		if (width >= 630) {
			width = width / 3;
		} else if (width >= 350) {
			width = width / 2;
		}

		   element.jcarousel('items').css('width', Math.ceil(width) + 'px');
	    })
		.jcarousel({

		});

	$('.jcarousel-prev')
		.jcarouselControl({
			target: '-=1'
		});

	$('.jcarousel-next')
		.jcarouselControl({
			target: '+=5'
		});

	$('.jcarousel-pagination')
	    .on('jcarouselpagination:active', 'a', function() {
	        $(this).addClass('active');
	    })
	    .on('jcarouselpagination:inactive', 'a', function() {
	        $(this).removeClass('active');
	    })
	    .on('click', function(e) {
	        e.preventDefault();
	    })
	    .jcarouselPagination({
	        perPage: 1,
	        item: function(page) {
	            return '<a href="#' + page + '">' + page + '</a>';
	        }
	    });

	$('.jcarousel').jcarouselAutoscroll({
        interval: 2000,
        target: '+=1',
        autostart: true
    });

	//Select

	$("#cars").selectbox({
		speed: 800,
		effect: "fade"
	});

	//CHECKBOX

	$(".niceCheck").each(function() {
		changeCheckStart($(this));
	});

});

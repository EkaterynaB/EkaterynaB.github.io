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
			wrap: 'circular'
		});

	$('.jcarousel-prev')
		.jcarouselControl({
			target: '-=1'
		});

	$('.jcarousel-next')
		.jcarouselControl({
			target: '+=1'
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


	function changeCheck(el) {

		var el = el,
        input = el.find("input").eq(0);

		if (el.prop("class").indexOf("niceCheckDisabled") == -1) {

	        if (!input.prop("checked")) {
				el.addClass("niceChecked");
	            input.prop("checked", true);
	        } else {
	            el.removeClass("niceChecked");
	            input.prop("checked", false).focus();
	        }
		}

    return true;
	}

	function changeVisualCheck(input) {

	var wrapInput = input.parent();

	    if (!input.prop("checked")) {
	        wrapInput.removeClass("niceChecked");
	    } else {
	        wrapInput.addClass("niceChecked");
	    }

	}

	function changeCheckStart(el) {

	try {

		var el = el,
		checkId = el.prop("id"),
		checkChecked = el.prop("checked"),
		checkDisabled = el.prop("disabled"),
		checkTab = el.prop("tabindex"),
		checkValue = el.prop("value");

	    if (checkChecked) {
	        el.after("<span class='niceCheck niceChecked'>"+
			"<input type='checkbox'"+
			"id='"+checkId+"'"+
			"checked='"+checkChecked+"'"+
			"value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");
		} else {
	        el.after("<span class='niceCheck'>"+
			"<input type='checkbox'"+
			"id='"+checkId+"'"+
			"value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");
		}

	    if (checkDisabled) {
	        el.next().addClass("niceCheckDisabled");
	        el.next().find("input").eq(0).prop("disabled","disabled");
	    }

	    el.next().bind("mousedown", function(e) { changeCheck($(this)) });
	    el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck($(this)) });

		el.remove();

	    if ($browser.msie) {
	        el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck($(this)) });
	    }

	}

	catch(e) {

	}

	return true;
}

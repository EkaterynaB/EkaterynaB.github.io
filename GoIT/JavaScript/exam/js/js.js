$(function() {

    $.ajax({
                url: 'http://api.pixplorer.co.uk/image?word=snow&amount=7&size=l',
                type: "GET",
				dataType: "json",
				cache: false,
                success: function(data){
                    console.log(data);
                    // var list = data.images.map(function (val) {
                    //   return "<div class='grid-item'><img src='"+val.imageurl+"'><span>"+val.word+"</span></div>";
                    // }).join('');


                    console.log(data);
                    var piclist = tmpl($('#activity__template').html(), {data: data});
                    $('.activity__wrapper').append(piclist);


                    // $(".grid").append(list);
                    $('.grid').isotope({
                        itemSelector: '.grid-item',
                        layoutMode: 'packery',
                        packery: {
                            gutter: 20
                        }
                    });
                    // $('.grid').isotope({
					// 	itemSelector: '.grid-item',
					// 	layoutMode: 'masonry',
					// 	masonry: {
					// 		gutter: 20
					// 	}
					// });
                }
            });



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
})

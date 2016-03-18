$(function() {

    $.ajax({
                url: 'http://api.pixplorer.co.uk/image?word=snow&amount=7&size=m',
                type: "GET",
				dataType: "json",
				cache: false,
                success: function(data){
                    console.log(data);
                    var list = data.images.map(function (val) {
                      return "<div class='grid-item'><img src='"+val.imageurl+"'><span>"+val.word+"</span></div>";
                    }).join('');

                    $(".grid").append(list);
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

            var allItem = $("img");
            console.log($(".grid-item img").height());
})

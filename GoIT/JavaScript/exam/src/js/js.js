$(function() {

    function getImagesByRequest(phrase) {

            $.ajax({
                url: 'https://pixabay.com/api/?key=2271973-553054d4a3087a5229bd26af2&q=' + phrase + '&orientation=horizontal&image_type=photo&min_width=410&min_height=620&per_page=7',
                type: "GET",
                dataType: "json",
                cache: false,
                success: function(data){

                    if (data.hits) {
                        $(".grid").remove();
                        var piclist = tmpl($('#activity__template').html(), {data: data});
                        $('.activity .wrapper').append(piclist);

                        $('.grid').isotope({
                            itemSelector: '.grid-item',
                            layoutMode: 'packery',
                            packery: {
                                gutter: 0
                            }
                        });

                    } else {
                        $('.activity .wrapper').append("<p>Sorry. Something on the server has crashed</p>");
                    }
                }
            });

        }


    var inputWords = ['sun', 'snow', 'snowboard', 'flowers', 'forest', 'fishing', 'sea', 'mountain'];
    var randomWords = Math.floor(Math.random() * inputWords.length);
    getImagesByRequest(inputWords[randomWords]);
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

})

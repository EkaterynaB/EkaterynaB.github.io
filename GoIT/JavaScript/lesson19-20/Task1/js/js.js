$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items : 1,
      autoPlay: true,
      itemsTabletSmall: true,
      pagination : true,
  	  paginationNumbers: false
  });


  $(".banner__tab").click(function(e) {
    e.preventDefault();
    $(this).siblings('.banner__text').slideToggle()
			.prev().toggleClass('banner__tab-active')
      .parents().siblings().children('.banner__text').slideUp()
			.siblings().removeClass('banner__tab-active');
  })

});

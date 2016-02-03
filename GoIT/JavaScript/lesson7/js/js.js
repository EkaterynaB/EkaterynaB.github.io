$(function() {

    var el = {
        wrapper: $("<div>", {class: "wrapper"}),
        unList: $("<ul>"),
        itemTabs: $("<li>"),
        divCont: $("<div>", {class: "content"}),
        divTab1: $("<div>", {class: "tabs1"}),
        divTab2: $("<div>", {class: "tabs2"}),
        divTab3: $("<div>", {class: "tabs3"}),
        divTab4: $("<div>", {class: "tabs4"})
    }

    el.wrapper.appendTo("body");
    el.unList.appendTo(".wrapper");
    el.divCont.appendTo(".wrapper");
    el.divTab1.appendTo(".content");
    el.divTab2.appendTo(".content");
    el.divTab3.appendTo(".content");
    el.divTab4.appendTo(".content");

    var itemsLength = $(".content div").length + 1;

    for (var i = 1; i < itemsLength; i++) {
        if ( i === 1 ) {
            $("ul").append("<li class = 'active'><a href = '#tabs" + i + "'>Nunc tincidunt</a></li>");
        } else if ( i === 2 ) {
            $("ul").append("<li><a href = '#tabs" + i + "'>Proin dolor</a></li>");
        } else if ( i === 3) {
            $("ul").append("<li><a href = '#tabs" + i + "'>Proin dolor</a></li>");
        } else {
            $("ul").append("<li><a href = '#tabs" + i + "'>Aenean lacinia</a></li>");
        }
    }

    el.divTab1.append("<p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>");
    el.divTab2.append("<p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>");
    el.divTab3.append("<p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus. Mauris consectetur tortor et purus.</p>");
    el.divTab4.append("<p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>");


    $('.tabs2, .tabs3, .tabs4').hide();
    var heightCurrentTab = $('.tabs1').height();

    $('.content').height(heightCurrentTab);

	   $("li > a").on("click", function(event) {

		    event.preventDefault();

        $("li").attr("class","");
        $(this).parent().attr('class', "active");

        var indexTab = $(this).parent().index();
        var heightDiv = $('.content div').eq(indexTab).css("height");

        $('.content div').hide();
        var summ = heightDiv.slice(0,-2);
        var sum = (summ - ($('.content').css("height")).slice(0,-2)) + 'px';

        if (sum.slice(0, -2) >= 0) {
          $('.content').animate({
            height: '+=' + sum
          }, 300);
        } else {
          $('.content').animate({
            height: '+=' + sum
          }, 300);
        }

        $('.content div').eq(indexTab).fadeIn();
    });

});

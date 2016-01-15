$(function() {

    var el = {
        wrapper: $("<div>", {class: "wrapper"}),
        unList: $("<ul>"),
        itemTabs: $("<li>"),
        divCont: $("<div>", {class: "content"}),
        divTab1: $("<div>", {class: "tabs1"}),
        divTab2: $("<div>", {class: "tabs2"}),
        divTab3: $("<div>", {class: "tabs3"})
    }

    el.wrapper.appendTo("body");
        el.unList.appendTo(".wrapper");
    el.divCont.appendTo(".wrapper");

    el.divTab1.appendTo(".content");
    el.divTab2.appendTo(".content");
    el.divTab3.appendTo(".content");

    for (var i = 1; i < 4; i++) {
        if ( i === 1 ) {
            $("ul").append("<li class = 'active'><a href = '#tabs" + i + "'>Nunc tincidunt</a></li>");
        } else if ( i === 2) {
            $("ul").append("<li><a href = '#tabs" + i + "'>Proin dolor</a></li>");
        } else {
            $("ul").append("<li><a href = '#tabs" + i + "'>Aenean lacinia</a></li>");
        }
    }

    el.divTab1.append("<p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>");
    el.divTab2.append("<p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>");
    el.divTab3.append("<p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p><p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>");

    $('.tabs2, .tabs3').hide();

    // $("li > a").on("click", function(event) {
    //     event.preventDefault();
    //     $("li").attr("class","");
    //     $(this).parent().attr('class', "active");
    //     var targetPage = "." + $(this).attr('href').slice(1);
    //     $('.content div').hide();
    //     $(targetPage).animate({
    //         height: "show",
    //     }, "slow");
    // })

	$("li > a").on("click", function(event) {
		event.preventDefault();
        $("li").attr("class","");
        $(this).parent().attr('class', "active");
        var indexTab = $(this).parent().index();
        $('.content div').hide();
        $('.content div').eq(indexTab).animate({
                height: "show",
            }, "slow");
    })


});

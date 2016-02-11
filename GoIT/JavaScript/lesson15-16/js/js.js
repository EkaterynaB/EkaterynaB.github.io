function GoogleCallback (func, data) {
    window[func](data);
}

$(function() {

    $(".getInfor").click(function(event) {
        event.preventDefault();
        googleSearch(0);
    });

    function googleSearch(index) {

        var searchField = $("input:text").val();

        $.ajax({
            url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q="+ searchField +"&start="+index+"8&rsz=8&callback=GoogleCallback&context=?",
            dataType: "jsonp",
            method: "POST",
            success: function(data) {
                if (data.results.length) {
                    $(".result").empty();

                    var ul = document.createElement("ul");
                    var ol = document.createElement("ol");
                    $(".result").append(ul);
                    $(".result").append(ol);

                    $.each(data.results, function(i, val) {
                        var li = document.createElement("li");
                        li.innerHTML = "<a href='"+val.url+"' title='"+val.url+"' target='_blank' class='links'>"+val.title+"</a><p><span class='link__url'>"+val.url+"</span>"+val.content+"</p>";
                        ul.appendChild(li);
                    });

                    pages = data.cursor.pages.length;
                    for (var i = 1; i < pages; i++) {
                        $("ol").append(li);
                        var li = document.createElement("li");
                        li.innerHTML = "<a class='result__link'>" + i + "</a>";
                    }

                    $("ol > li").eq(index).children().css("fontWeight","bolder");

                    $("main").css("display", "block");
                    $(".result__link").click(function(event) {
                        googleSearch(event.target.innerHTML-1);
                    });

                } else {
                    alert("I didn't find any info according to your request!");
                }
            }
        });
    }
});

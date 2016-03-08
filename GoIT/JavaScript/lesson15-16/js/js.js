function GoogleCallback (func, data) {
    window[func](data);
}

$(function() {

    $("form").submit(function(event) {
        event.preventDefault();
        googleSearch(0);
    });

    $(".result").on('click', '.result__link', function() {
        var index = $(this).data('index');
        googleSearch(index);
    });

    function googleSearch(index) {

        var searchField = $(".search__field").val();
        $.ajax({
            url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q="+ searchField +"&start="+index+"&rsz=8&callback=GoogleCallback&context=?",
            dataType: "jsonp",
            method: "POST",
            success: function(data) {
                  if (data.results && Array.isArray(data.results) && data.cursor && data.cursor.pages && Array.isArray(data.cursor.pages)) {
                    $(".result").empty();

                    var ul = document.createElement("ul");
                    var ol = document.createElement("ol");
                    $(".result").append(ul);
                    $(".result").append(ol);

                    var list = data.results.map(function (val) {
                      return "<li><a href='"+val.url +"' title='"+val.url+"' target='_blank' class='links'>"+val.title+"</a><p><span class='link__url'>"+val.url+"</span>"+val.content+"</p></li>";
                    }).join('');
                    ul.innerHTML = list;

                    var pagination = data.cursor.pages.map(function(val, i) {
                      return "<li><a class='result__link' data-index='"+ i +"'>" + val.label + "</a></li>";
                    }).join('');
                    ol.innerHTML = pagination;

                    $("ol > li").eq(index).children().css("fontWeight","bolder");

                    $("main").addClass("display-block");

                } else {
                    alert("I didn't find any info according to your request!");
                }
            }
        });
    }
});

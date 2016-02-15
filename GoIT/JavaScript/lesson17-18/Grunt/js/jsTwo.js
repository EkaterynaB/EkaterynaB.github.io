function elem() {
    var menu = document.querySelector("nav");

    var item = menu.getElementsByClassName("dropdown");

    for (var i = 0; i < item.length; i++) {
        var li = item[i];

        li.onmouseover = function () {
  	        if (!this.getElementsByTagName("ul")) return false;
  	        var ul = this.getElementsByTagName("ul");
  	        ul[0].style.display = "block";
  	        return true;
  	    }
        li.onmouseout = function () {
  	        if (!this.getElementsByTagName("ul")) return false;
  	        var ul = this.getElementsByTagName("ul");
  	        ul[0].style.display = "none";
  	        return true;
  	    }
    }
}

addLoadEvent(elem);

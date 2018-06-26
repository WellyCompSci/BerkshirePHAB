function DropDown() {
  var w = parseInt(window.innerWidth);

}
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
function openNav() {
  var w = parseInt(window.innerWidth);
  if (w <= 550) {
      document.getElementById("darken").style.display = "none";
      var x = document.getElementById("butts");
    if (x.className === "butts") {
      x.className += " responsive";
    } else {
      x.className = "butts";
    }
  }
  else{
    document.getElementById("butts").style.width = "250px";
    document.getElementById("icon").style.marginRight = "250px";
    document.getElementById("darken").style.display = "block";
  }
}

function closeNav() {
  document.getElementById("butts").style.width = "";
  document.getElementById("icon").style.marginRight = "0";
  document.getElementById("darken").style.display = "none";
}


function autocloseNav(x) {
  if (x.matches) {
    document.getElementById("butts").style.width = "";
    document.getElementById("icon").style.marginRight = "0";
    document.getElementById("darken").style.display = "none";
  }
}
//$(".icon").css("line-height", $(".img").css("height"));
var x = window.matchMedia("(min-width: 1300px)");
autocloseNav(x);
x.addListener(autocloseNav);
var acc = document.getElementsByClassName("accordion");
var i;

if(detectIE() < 12){
    $(".grid-container").css("width", "100vw");
}
$(".accordion").each(function(){
  $(this).on("click", function(){
      if(parseInt($(this).next(".panel").css("max-height")) > 0){
          $(this).removeClass("activefaq");
          $(this).next(".panel").css("max-height", 0);
      }
      else{
          $(".panel").css("max-height", 0);
          $(".accordion").removeClass("activefaq");
          $(this).addClass("activefaq")
          $(this).next(".panel").css("max-height", $(this).next(".panel")[0].scrollHeight);
      }
  });
});
/*
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activefaq");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}*/

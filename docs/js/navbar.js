function DropDown() {
  var w = parseInt(window.innerWidth);

}

function openNav() {
  var w = parseInt(window.innerWidth);
  if (w <= 550) {
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

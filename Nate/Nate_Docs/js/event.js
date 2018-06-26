function qs(search_for) {
  var query = window.location.search.substring(1);
  var parms = query.split('&');
  for (var i = 0; i < parms.length; i++) {
    var pos = parms[i].indexOf('=');
    if (pos > 0 && search_for == parms[i].substring(0, pos)) {
      return parms[i].substring(pos + 1);;
    }
  }
  return "";
}

$(function() {
  var queryString = qs("postID");
  $.ajax({
    url: "https://www.googleapis.com/blogger/v3/blogs/7927179732203083965/posts/" + queryString + "?key=AIzaSyAMNPX5M4eo9AWHsf5QCmqrXD0n2dVowNw",
    dataType: "jsonp",
    method: "get",
    success: function(response) {
      $("#event-loader").hide();
      $("#app").html(response.content);
      $("#app").removeAttr("style");
      $("#app *").removeAttr("style");
      $(".title h1").text(response.title);
      $("#app img").each(function(){
        $(this).wrap('<div class="image-card-unfixed" style="max-width: ' + (parseInt($(this).attr("width")) + 20) +'px"></div>');
      })
    }
  });
});

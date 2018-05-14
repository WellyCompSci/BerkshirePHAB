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
    url: "https://www.googleapis.com/blogger/v3/blogs/2627810758631398548/posts/" + queryString + "?key=AIzaSyBM1J7SifXYWug5civN-aI3O2cU5EX_f_Y",
    dataType: "jsonp",
    method: "get",
    success: function(response) {
      $("#event-loader").hide();
      $("#app").html(response.content);
      $("#app").removeAttr("style");
      $("#app *").removeAttr("style");
      $(".title h1").text(response.title);
    }
  });
});

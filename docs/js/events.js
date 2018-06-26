$(function() {
  //Events
  $.ajax({
    url: "https://www.googleapis.com/blogger/v3/blogs/7927179732203083965/posts?key=AIzaSyAMNPX5M4eo9AWHsf5QCmqrXD0n2dVowNw",
    dataType: "json",
    method: "get",
    success: function(response) {
      var eventsHTML = "";
      response.items.forEach(function(item) {
        $("#events-loader").hide();
        //eventsHTML += "<a href='events.html?postID=" + item.id + "' class='event'>" + item.content + "</a>";
        var html = $.parseHTML(item.content);
        var published = new Date(item.published);
        eventsHTML += '<div class="event card"><input type="hidden" name="id" value="' + item.id + '"/><div class="card-container"><span class="event-date">' + published.toUTCString() + '</span><h2>' + item.title +
          '</h2><div class="event-text">';
        html.forEach(function(elem) {
          if (elem.innerHTML) {
            eventsHTML += elem.innerHTML;
          }
        });
        eventsHTML += '</div></div></div>';
      });
      $("#events").html(eventsHTML);
      $(".event img").each(function() {
        var $img = $(this).clone();
        $(this).parents(".event").prepend($img);
        $(this).remove();
      });
      $(".event .separator").remove();
      /*$(".event .card-container .event-text").text(function(index, currentText) {
        return currentText.split(" ").splice(0, 50).join(" ") + "...";
      });*/
      $(".event").has("img").css("grid-row", "span 2");
      $(".event").on("click", function() {
        var val = $(this).find("input[name=id]").val();
        window.location.href = "event.html?postID=" + val;
      });

      /*$(".event img").parent().addClass("image-card");
      $(".event:lt(1)").each(function(){
        var string = $(this).text();
        $(this).text(string);
      });
      $(".event:gt(2)").remove();*/

    }
  });
});

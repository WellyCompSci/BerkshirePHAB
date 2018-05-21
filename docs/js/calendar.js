var CLIENT_ID = '713590924881-g1fifkdfiem0qleul5hdojef5jfovh6j.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBM1J7SifXYWug5civN-aI3O2cU5EX_f_Y';
var CAL_ID = 'phabexample@gmail.com';
var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];


function loadCalendarApi() {
  gapi.client.setApiKey(API_KEY);
  gapi.client.load('calendar', 'v3', listUpcomingEvents);
}

function display_events(event_description, time, date, event_title){
  var p1 = '<div class="upcoming-card">';
  var p2 = '<div class="upcoming-header">';
  var p3 = '<h1>';
  var p4 = '<p>';
  var p5 = '<div class="upcoming-container">';
  var p6 = '<div class="upcoming-gallery">';
  var p_1 = '</div>';
  var p_3 = '</h1>';
  var p_4 = '</p>';
  var text_2 = '';
  event_description = event_description ? event_description : ""
  text_2 = p6 + p1 + p2 + p3 + event_title + "<br>" + event_description + p_3 + p_1 + p5 + p4 + date + '<br>' + time + p_4 + p_1 + p_1 + p_1

  return text_2
}

 function listUpcomingEvents() {
   gapi.client.calendar.events.list({
     'calendarId': CAL_ID,
     'timeMin': (new Date()).toISOString(),
     'showDeleted': false,
     'singleEvents': true,
     'maxResults': 10,
     'orderBy': 'startTime'
   }).then(function(response) {
     var events = response.result.items;
     var row_op = "<tr>";
     var row_cl = "</tr>";
     var column_op = "<td>";
     var column_cl = "</td>";
     var text = "<tr> <th>Events</th> <th>Time</th> <th>Date</th> </tr>";
     var text_2 = ''

     if (events.length > 0) {
       for (i = 0; i < events.length; i++) {
         var event = events[i];
         var start = event.start.dateTime;
         var end = event.end.dateTime;
         var summary_event = event.summary;
         var title = summary_event.split(":", 1)
         title = title + ":"
         var date = ''
         var time = "ALL DAY";
         summary_event = summary_event.split(":", 2)[1]
         if (!start) {
           date = event.start.date;
         } else {

           date = start.slice(0,10);

           start = start.slice(11,16);

           end = end.slice(11,16);

           time = start + " to " + end;
         }
         date = new Date(date)
         date = date.toDateString();
         text += row_op + column_op + '<h1>' + title + '</h1>' + '<h2>' + (summary_event || "") + '</h2>' + column_cl + column_op + time + column_cl + column_op + date + column_cl + row_cl;
         text_2 += display_events(summary_event, time, date, title)
       }
       $("#upcoming-loader").hide();
       $("#upcoming-table").html(text);
       $("#upcoming").html(text_2)
     }
    });
   }

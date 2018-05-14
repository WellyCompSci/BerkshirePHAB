var CLIENT_ID = '713590924881-g1fifkdfiem0qleul5hdojef5jfovh6j.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBM1J7SifXYWug5civN-aI3O2cU5EX_f_Y';
var CAL_ID = 'phabexample@gmail.com';
var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];


function loadCalendarApi() {
  gapi.client.setApiKey(API_KEY);
  gapi.client.load('calendar', 'v3', listUpcomingEvents);
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
     $("#upcoming-loader").hide();
      var events = response.result.items;
      var eventsHTML = "";
      if(events.length > 0){
        events.forEach(function(item){
          var start = new Date(item.start.dateTime);
          var end = new Date(item.end.dateTime);
          eventsHTML += '<div class="event card"><input type="hidden" name="id" value="' + item.id + '"/><div class="card-container"><span class="event-date">' + start.toUTCString() + '</span><br/><span class="event-date">' + end.toUTCString() + '</span><h2>' + item.summary +
            '</h2><div class="event-text">' + item.description + '</div></div></div>';
        });
        $("#upcoming").html(eventsHTML);
      }
      else{
        $('#upcoming').html('<h2>No Upcoming Events</h2>');
      }
    });
   }

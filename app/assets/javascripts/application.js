// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var Countdown = {};
Countdown.timer = function() {
  if (!Countdown.stop) Countdown.stop = new Date(Date.UTC(2013, 2, 23, 22, 0, 0));
  var now = (new Date).getTime();
  var diff = Countdown.stop.getTime() - now;
  diff = Math.floor(diff/1000);
  var parts = [];
  var sinceago = '';
  if (diff > 0) {
    sinceago = 'to go';
  } else {
    sinceago = 'ago';
    diff = -1 * diff;
  }
  var segments = [
    {name:'week',time:86400*7},
    {name:'day',time:86400},
    {name:'hour',time:3600},
    {name:'minute',time:60},
    {name:'second',time:1}
  ];
  $.each(segments, function(i,segment) {
    var count = Math.floor(diff / segment.time);
    if (count > 0) parts.push('' + count + ' ' + segment.name + ((count != 1) ? 's' : ''));
    diff -= count * segment.time;
  });
  $('.countdown').text(parts.join(', ') + ' ' + sinceago);
};

$(function() {
  setInterval(Countdown.timer, 100)
});

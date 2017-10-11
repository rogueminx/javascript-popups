$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hiding").toggle();
  });
  $(".clickable02").click(function() {
    $("#initially-showing02").fadeToggle();
    $("#initially-hiding02").fadeToggle();
  });
  $(".clickable03").click(function() {
    $("#initially-showing03").slideToggle();
    $("#initially-hiding03").slideToggle();
  });
});

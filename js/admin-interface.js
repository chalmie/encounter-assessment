$(document).ready(function() {

  $(".patient-form").hide();
  $(".care-form").hide();

  $('#patient').click(function(event) {
    event.preventDefault();
    console.log("success!");
    $(".care-form").hide();
    $(".patient-form").show();
  });
  
  $('#care').click(function(event) {
    event.preventDefault();
    $(".patient-form").hide();
    $(".care-form").show();

  });
});

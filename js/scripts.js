$(document).ready (function () {
  $("form#quiz").submit(function (event)) {
    var location = $("select#location").val();
    var pace = $("select#pace").val();
    var budget = $("select#budget").val();
    var where = $("select#where").val();
    var weather = $("select#weather").val();

    var destination = "";

    
    event.preventDefault ();
  });
});

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var location = $("select#location").val();
    var pace = $("select#pace").val();
    var budget = $("select#budget").val();
    var where = $("select#where").val();
    var weather = $("select#weather").val();

    var destination = "";

    if (location === "mountain" && pace === "adventure" && budget === "extravagant" && where = "stateside" && weather === "hot") {
      destination = "Flagstaff";
    } else if (location === "mountain" && pace === "adventure" && budget === "modest" && where = "stateside" && weather === "hot") {
      destination = "Sedona";
    } else if (location === "mountain" && pace === "adventure" && budget === "shoestring" && where = "stateside" && weather === "hot") {
      destination = "San Jancinto Mountains";
    } else if (location === "mountain" && pace === "adventure" && budget === "shoestring" && where = "stateside" && weather === "moderate") {
      destination = "Appalachia";
    } else if (location === "mountain" && pace === "adventure" && budget === "modest" && where = "stateside" && weather === "moderate") {
      destination = "Sedona";
    } else if (location === "mountain" && pace === "adventure" && budget === "extravagant" && where = "stateside" && weather === "moderate") {
      destination = "Yosemite";
    } else if (location === "mountain" && pace === "adventure" && budget === "extravagant" && where = "stateside" && weather === "cold") {
      destination = "Adirondacks";
    } else if (location === "mountain" && pace === "adventure" && budget === "modest" && where = "stateside" && weather === "cold") {
      destination = "Adirondacks";
    } else if (location === "mountain" && pace === "adventure" && budget === "shoestring" && where = "stateside" && weather === "cold") {
      destination = "Adirondacks";
    } else if (location === "mountain" && pace === "relax" && budget === "modest" && where = "stateside" && weather === "hot") {
      destination = "Tahoe";
    } else if (location === "mountain" && pace === "relax" && budget === "extravagant" && where = "stateside" && weather === "hot") {
      destination = "Tahoe";
    } else if (location === "mountain" && pace === "relax" && budget === "shoestring" && where = "stateside" && weather === "hot") {
      destination = "Appalachia";
    } else if (location === "beach" && pace === "relax" && "budget" === "modest" && where = "stateside" && weather === "hot") {
      destination = "San Diego";
    } else if (location === "beach" && pace === "relax" && budget === "shoestring" && where = "stateside" && weather === "hot") {
      destination = "Jersey Shore";
    } else if (location === "beach" && pace === "relax" && budget === "extravagant" && where = "stateside" && weather === "hot") {
      destination = "Maui";
    } else if (location === "beach" && pace === "adventure" && budget === "extravagant" && where = "stateside" && weather === "hot") {
      destination = "Kauai";
    } else if (location === "beach" && pace === "adventure" && budget === "modest" && where = "stateside" && weather === "hot") {
      destination = "Florida";
    } else if (location === "beach" && pace === "adventure" && budget === "shoestring" && where = "stateside" && weather === "moderate") {
      destination = "North Carolina";
    } else if (location === "beach" && pace === "relax" && budget === "modest" && where = "stateside" && weather === "hot") {
      destination = "San Diego";
    } else if (location === "city" && pace === "relax" && budget === "modest" && where = "stateside" && weather === "hot") {
      destination = "New Orleans";
    } else if (location === "city" && pace === "relax" && budget === "shoestring" && where = "stateside" && weather === "hot") {
      destination = "New Orleans";
    } else if (location === "city" && pace === "relax" && budget === "extravagant" && where = "stateside" && weather === "hot") {
      destination = "New Orleans";
    } else if (location === "city" && pace === "adventure" && budget === "modest" && where = "stateside" && weather === "hot") {
      destination = "New Orleans";
    } else if (location === "city" && pace === "adventure" && budget === "shoestring" && where = "stateside" && weather === "hot") {
      destination = "New Orleans";
    } else if (location === "city" && pace === "adventure" && budget === "extravagant" && where =
    "stateside" && weather === "hot") {
      destination = "Las Vegas";
    } else if (location === "city" && pace === "adventure" && budget === "modest" && where = "stateside" && weather === "moderate") {
      destination = "New York";
    } else if (location === "city" && pace === "adventure" && budget === "extravagant" && where = "stateside" && weather === "moderate") {
      destination = "New York";
    } else if (location === "city" && pace === "adventure" && budget === "shoestring" && where =
    "stateside" && weather === "moderate") {
      destination = "Atlantic City";
    } else if (location === "city" && pace === "relax" && budget === "modest" && where = "stateside" && weather === "hot") {
      destination = "Miami";
    } else if (location === "city" && pace === "relax" && budget === "extravagant" && where = "stateside" && weather === "hot") {
      destination = "Miami";
    } else if (location === "city" && pace === "relax" && budget === "shoestring" && where = "stateside" && weather === "hot") {
      destination = "Miami";
    } else if (location === "city" && pace === "relax" && budget === "modest" && where = "stateside" && weather === "moderate") {
      destination = "San Diego";
    } else if (location === "city" && pace === "relax" && budget === "extravagant" && where = "stateside" && weather === "moderate") {
      destination = "Vegas";
    } else if (location === "city" && pace === "relax" && budget === "shoestring" && where = "stateside" && weather === "moderate") {
      destination = "Nashville";
    } else if (location === "city" && pace === "relax" && budget === "modest" && where = "stateside" && weather === "cold") {
      destination = "Seattle";
    } else if (location === "city" && pace === "relax" && budget === "extravagant" && where = "stateside" && weather === "cold") {
      destination = "Seattle";
    } else if (location === "city" && pace === "relax" && budget === "shoestring" && where = "stateside" && weather === "cold") {
      destination = "Savannah";
    } else if (location === "beach" && pace === "relax" && budget === "modest" && where = "international" && weather === "hot") {
      destination = "Vietnam";
    } else if (location === "beach" && pace === "relax" && budget === s"hoestring" && where = "international" && weather === "hot") {
      destination = "Mexico";
    } else if (location === "beach" && pace === "relax" && budget === "extravagant" && where = "international" && weather === "hot") {
      destination = "Bali";
    } else if (location === "beach" && pace === "adventure" && budget === "extravagant" && where = "international" && weather === "hot") {
      destination = "Bali";
    } else if (location === "beach" && pace === "adventure" && budget === "modest" && where = "international" && weather === "hot") {
      destination = "Vietnam";
    } else if (location === "beach" && pace === "adventure" && budget === "shoestring" && where = "international" && weather === "hot") {
      destination = "Mexico";
    } else if (location === "beach" && pace === "relax" && budget === "modest" && where = "international" && weather === "moderate") {
      destination = "Vietnam";
    } else if (location === "beach" && pace === "relax" && budget === "shoestring" && where = "international" && weather === "moderate") {
      destination = "Mexico";
    } else if (location === "beach" && pace === "adventure" && budget === "extravagant" && where = "international" && weather === "moderate") {
      destination = "Bali";
    } else if (location === "mountain" && pace === "adventure" && budget === "extravagant" && where = "international" && weather === "moderate") {
      destination = "the Italian Alps";
    } else if (location === "mountain" && pace === "adventure" && budget === "modest" && where = "international" && weather === "moderate") {
      destination = "Chiang Mai, Thailand";
    } else if (location === "mountain" && pace === "adventure" && budget === shoestring && where = "international" && weather === "moderate") {
      destination = "Chiang Mai, Thailand";
    } else if (location === "mountain" && pace === "adventure" && budget === "moderate" && where = "international" && weather === "hot") {
      destination = "Chiang Mai, Thailand";
    } else if (location === "mountain" && pace === "adventure" && budget === "shoestring" && where = "international" && weather === "hot") {
      destination = "Chiang Mai, Thailand";
    } else if (location === "mountain" && pace === "adventure" && budget === "extravagant" && where = "international" && weather === "cold") {
      destination = "Everest";
    } else if (location === "mountain" && pace === "adventure" && budget === "modest" && where = "international" && weather === "cold") {
      destination = "Norway";
    } else if (location === "mountain" && pace === "adventure" && budget === "shoestring" && where = "international" && weather === "cold") {
      destination = "Mongolia";
    } else {
      destination = "Neverland";
    }
    $("#destination").text(destination);
      $("#output").show();

    event.preventDefault();
  });

});

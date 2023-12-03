var div = document.getElementById('volunteerDiv');
var h1 = document.getElementById('volunteerButton');
var form = document.getElementById('volunteerForm');

function showHide() { // Function that enables the volunteer button
    if (form.style.display === "block") {
        form.style.display = "none";
        div.id = "none";
      } else {
        form.style.display = "block";
        div.id = "open";
      }
};

function gridOn(item) { // Shows extra information when you hover over grid items on Charities page
    var element = document.getElementsByClassName(item);
    var img = element[0]
    var p = element [1]
    img.id = "on"
    p.id = "on"
    //console.log(img.id)
};

function gridOff(item) { // Hides extra information once your mouse moves away from grid items on Charities page
    var element = document.getElementsByClassName(item);
    var img = element[0]
    var p = element [1]
    img.id = "none"
    p.id = "none"
    //console.log(img.id)
};
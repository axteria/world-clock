// LA
let laElement = document.querySelector("#la");
let laDateElement = laElement.querySelector(".date");
let laTimeElement = laElement.querySelector(".time");
let laTime = moment.tz("America/Los_Angeles");

laDateElement.innerHTML = laTime.format("MMMM	Do YYYY");
laTimeElement.innerHTML = laTime.format("h:mm:ss [<small>]A[</small>]");

// LA
function updateTime() {
  let laElement = document.querySelector("#la");
  let laDateElement = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");
  let laTime = moment.tz("America/Los_Angeles");

  laDateElement.innerHTML = laTime.format("MMMM	Do YYYY");
  laTimeElement.innerHTML = laTime.format("h:mm:ss [<small>]A[</small>]");

  // PARIS
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment.tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

// INTERVAL SECONDS
setInterval(updateTime, 1000);

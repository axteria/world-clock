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

// SELECT DROPDOWN
function updateCity(event) {
  let cityValue = event.target.value;
  let cityName = cityValue.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityValue).format("MMMM	Do YYYY");
  let cityTime = moment.tz(cityValue).format("h:mm:ss [<small>]A[</small>]");
  let presetDiv = document.querySelector("#preset");
  presetDiv.innerHTML = `<div class="preset-cities">
    <div>
    <h2>${cityName}</h2>
    <span class="date">${cityDate}</span>
    </div>
    <div class="time">${cityTime}</div>
    </div>`;
}
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

// INTERVAL SECONDS
setInterval(updateTime, 1000);

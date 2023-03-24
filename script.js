// MELB
function updateTime() {
  let melbElement = document.querySelector("#melb");
  let melbDateElement = melbElement.querySelector(".date");
  let melbTimeElement = melbElement.querySelector(".time");
  let melbTime = moment.tz("Australia/Melbourne");

  melbDateElement.innerHTML = melbTime.format("MMMM	Do YYYY");
  melbTimeElement.innerHTML = melbTime.format("h:mm:ss [<small>]A[</small>]");

  // TOKYO
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment.tz("America/Los_Angeles");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

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
  if (cityValue == "current") {
    cityValue = moment.tz.guess();
  }
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

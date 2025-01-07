function updateTime() {
  let torontoElement = document.querySelector("#toronto-time");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    torontoDateElement.innerHTML = moment().format("dddd, MMM D, YYYY");
    torontoTimeElement.innerHTML = moment().format(
      "h:mm:ss:SSS [<small>]A[</small>]"
    );
  }

  let melbourneElement = document.querySelector("#melbourne-time");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");
    melbourneDateElement.innerHTML = moment()
    .tz("Australia/Melbourne")
    .format("dddd, MMM D, YYYY");
    melbourneTimeElement.innerHTML = moment()
    .tz("Australia/Melbourne")
    .format("h:mm:ss:SSS [<small>]A[</small>]");
  }

  let longyearbyenElement = document.querySelector("#longyearbyen-time");
  if (longyearbyenElement) {
    let longyearbyenDateElement = longyearbyenElement.querySelector(".date");
    let longyearbyenTimeElement = longyearbyenElement.querySelector(".time");
    longyearbyenDateElement.innerHTML = moment()
      .tz("Arctic/longyearbyen")
      .format("dddd, MMM D, YYYY");
    longyearbyenTimeElement.innerHTML = moment()
      .tz("Arctic/longyearbyen")
      .format("h:mm:ss:SSS [<small>]A[</small>]");
  }
}

function twentyFourHourClock(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  if (timeZone.length > 1) {
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML = `<div class="each-city">
    <div class="city-and-date">
    <h2>${cityName}</h2>
    <div class="date">${moment().tz(timeZone).format("dddd, MMM D, YYYY")}</div>
      </div>
      <div class="time">${moment().tz(timeZone).format("H:mm:ss")} 
          </div></div><a href="/" class="homepage">Back to homepage</a>`;
  }
}

function twelveHourClock(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  if (timeZone.length > 1) {
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML = `<div class="each-city">
    <div class="city-and-date">
    <h2>${cityName}</h2>
    <div class="date">${moment().tz(timeZone).format("dddd, MMM D, YYYY")}</div>
      </div>
      <div class="time">${moment()
        .tz(timeZone)
        .format("h:mm:ss")} <small>${moment()
      .tz(timeZone)
      .format("A")}</small></div>
          </div><a href="/" class="homepage">Back to homepage</a>`;
  }
}

function displaySelectedCity(event) {
  let selectedTimeFormat = event.target.value;
  if (selectedTimeFormat.length > 1) {
    if (selectedTimeFormat === "twelve-hour") {
      let selectCityElement = document.querySelector("#select-city");
      selectCityElement.removeEventListener("change", twentyFourHourClock);
      selectCityElement.addEventListener("change", twelveHourClock);
    } 
    else {
      let selectCityElement = document.querySelector("#select-city");
      selectCityElement.removeEventListener("change", twelveHourClock);
      selectCityElement.addEventListener("change", twentyFourHourClock);
    }
  }
}

let selectTimeFormatElement = document.querySelector("#select-time-format");
selectTimeFormatElement.addEventListener("change", displaySelectedCity);

updateTime();
setInterval(updateTime, 10);

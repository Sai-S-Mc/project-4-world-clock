function userGreeting(){
  let userGreeting = document.querySelector("#user-greeting");
  let userTimeZone = moment.tz.guess();
  let userHour = moment().tz(userTimeZone).format("H");
  if (userHour >= 5 && userHour < 12) {
    userGreeting.innerHTML = "Good Morning.";
  } else if (userHour >= 12 && userHour < 17) {
    userGreeting.innerHTML = "Good Afternoon.";
  } else if (userHour >= 17 && userHour < 21) {
    userGreeting.innerHTML = "Good Evening.";
  } else {
    userGreeting.innerHTML = "Good Night.";
  }
}

function homepage12HrDisplay() {
  userGreeting();
  let torontoElement = document.querySelector("#toronto-time");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    torontoDateElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("dddd, MMM D, YYYY");
    torontoTimeElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("h:mm:ss [<small>]A[</small>]");
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
      .format("h:mm:ss [<small>]A[</small>]");
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
      .format("h:mm:ss [<small>]A[</small>]");
  }
  let timeFormatLinkElement = document.querySelector("#time-format-link");
  timeFormatLinkElement.classList.add("switch-page");
  timeFormatLinkElement.innerHTML = `Switch to 24 Hour Format`;
  timeFormatLinkElement.removeEventListener("click", homepage12HrDisplay);
  timeFormatLinkElement.addEventListener("click", homepage24HrDisplay);
}

function homepage24HrDisplay(event) {
  let torontoElement = document.querySelector("#toronto-time");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    torontoDateElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("dddd, MMM D, YYYY");
    torontoTimeElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("H:mm:ss");
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
      .format("H:mm:ss");
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
      .format("H:mm:ss");
  }

  let timeFormatLinkElement = document.querySelector("#time-format-link");
  timeFormatLinkElement.innerHTML = `Switch to 12 Hour Format`;
  timeFormatLinkElement.removeEventListener("click", homepage24HrDisplay);
  timeFormatLinkElement.addEventListener("click", homepage12HrDisplay);
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
          </div></div>`;
    let timeFormatLinkElement = document.querySelector("#time-format-link");
    timeFormatLinkElement.innerHTML = `Back to Homepage`;
    timeFormatLinkElement.setAttribute("href", "/");
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
          </div>`;
    let timeFormatLinkElement = document.querySelector("#time-format-link");
    timeFormatLinkElement.innerHTML = `Back to Homepage`;
    timeFormatLinkElement.setAttribute("href","/");
  }
}

function displaySelectedCity(event) {
  let selectedTimeFormat = event.target.value;
  if (selectedTimeFormat.length > 1) {
    if (selectedTimeFormat === "twelve-hour") {
      let selectCityElement = document.querySelector("#select-city");
      selectCityElement.removeEventListener("change", twentyFourHourClock);
      selectCityElement.addEventListener("change", twelveHourClock);
    } else {
      let selectCityElement = document.querySelector("#select-city");
      selectCityElement.removeEventListener("change", twelveHourClock);
      selectCityElement.addEventListener("change", twentyFourHourClock);
    }
  }
}

let selectTimeFormatElement = document.querySelector("#select-time-format");
selectTimeFormatElement.addEventListener("change", displaySelectedCity);

homepage12HrDisplay();
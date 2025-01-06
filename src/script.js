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
}

function twentyFourHourClock(event) {
  let timeZone = event.target.value;
  console.log(`----Running 24 hour clock function----`);
  console.log(`The timeZone is ${timeZone}`);
  console.log(`The length of the timeZone is ${timeZone.length}`);
  if (timeZone === "current") {
    console.log(`current timezone condition is a pass`);
    timeZone = moment.tz.guess();
  }
  if (timeZone.length > 1) {
    console.log(
      `condition that the timezone length should be > 1 for a 24 hr clock is a pass`
    );

    let cityName = timeZone.replace("_", " ").split("/")[1];
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML = `<div class="each-city">
    <div class="city-and-date">
    <h2>${cityName}</h2>
    <div class="date">${moment().tz(timeZone).format("dddd, MMM D, YYYY")}</div>
      </div>
      <div class="time">${moment().tz(timeZone).format("H:mm:ss")} 
          </div></div><a href="/" class="homepage">Back to homepage</a>`;
    console.log(`City, date and time in 24 hr format have now been added`);
  }
}

function twelveHourClock(event) {
  let timeZone = event.target.value;
  console.log(`----Running 12 hour clock function----`);
  console.log(`The timeZone is ${timeZone}`);
  console.log(`The length of the timeZone is ${timeZone.length}`);
  if (timeZone === "current") {
    console.log(`current timezone condition is a pass`);
    timeZone = moment.tz.guess();
  }
  if (timeZone.length > 1) {
    console.log(
      `condition that the timezone length should be > 1 for a 12 hr clock is a pass`
    );
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
    console.log(`City, date and time in 12 hr format have now been added`);
  }
}

function displaySelectedCity(event) {
  let selectedTimeFormat = event.target.value;
  console.log(`~~~The selected time format is ${selectedTimeFormat}~~~`);
  console.log(
    `The length of the selected time format is ${selectedTimeFormat.length}`
  );
  if (selectedTimeFormat.length > 1) {
    if (selectedTimeFormat === "twelve-hour") {
      console.log(`12 hour condition is a pass`);
      let selectCityElement = document.querySelector("#select-city");
      selectCityElement.addEventListener("change", twelveHourClock);
    } else {
      console.log(`24 hour condition is a pass`);
      let selectCityElement = document.querySelector("#select-city");
      selectCityElement.addEventListener("change", twentyFourHourClock);
    }
  }
}

let selectTimeFormatElement = document.querySelector("#select-time-format");
selectTimeFormatElement.addEventListener("change", displaySelectedCity);

updateTime();
setInterval(updateTime, 10);

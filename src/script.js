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
}
updateTime();
setInterval(updateTime, 10);

function handleSelection(event) {
  let timeZone = event.target.value;
  if (timeZone.length > 1) {
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML= `<div class="each-city">
                <div class="city-and-date">
                  <h2>${cityName}</h2>
                  <div class="date">${moment()
                    .tz(timeZone)
                    .format("dddd, MMM D, YYYY")}</div>
                </div>
                <div class="time">${moment()
                  .tz(timeZone)
                  .format("h:mm:ss")} <small>${moment()
      .tz(timeZone)
      .format("A")}</small></div>
            </div>`;
  }
}

let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", handleSelection);
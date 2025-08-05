// function twelveHourClock(event) {
//   userTime12Hr();
//   let timeZone = event.target.value;
//   if (timeZone === "current") {
//     timeZone = moment.tz.guess();
//   }
//   if (timeZone.length > 1) {
//     let cityName = timeZone.replace("_", " ").split("/")[1];
//     let cityElement = document.querySelector("#cities");
//     cityElement.innerHTML = `<div class="each-city">
//     <div class="city-and-date">
//     <h2>${cityName}</h2>
//     <div class="date">${moment().tz(timeZone).format("dddd, MMM D, YYYY")}</div>
//     </div>
//     <div class="time">${moment()
//       .tz(timeZone)
//       .format("h:mm:ss")} <small>${moment()
//       .tz(timeZone)
//       .format("A")}</small></div>
//         </div>`;
//     let timeFormatLinkElement = document.querySelector("#time-format-link");
//     timeFormatLinkElement.innerHTML = `Back to Homepage`;
//     timeFormatLinkElement.setAttribute("href", "/");
//     timeFormatLinkElement.setAttribute("title", "Homepage");
//   }
// }

// function twentyFourHourClock(event) {
//   userTime24Hr();
//   let timeZone = event.target.value;
//   if (timeZone === "current") {
//     timeZone = moment.tz.guess();
//   }
//   if (timeZone.length > 1) {
//     let cityName = timeZone.replace("_", " ").split("/")[1];
//     let cityElement = document.querySelector("#cities");
//     cityElement.innerHTML = `<div class="each-city">
//     <div class="city-and-date">
//     <h2>${cityName}</h2>
//         <div class="date">${moment()
//           .tz(timeZone)
//           .format("dddd, MMM D, YYYY")}</div>
//           </div>
//           <div class="time">${moment().tz(timeZone).format("H:mm:ss")} 
//           </div></div>`;
//     let timeFormatLinkElement = document.querySelector("#time-format-link");
//     timeFormatLinkElement.innerHTML = `Back to Homepage`;
//     timeFormatLinkElement.setAttribute("href", "/");
//     timeFormatLinkElement.setAttribute("title", "Homepage");
//   }
// }

// function displaySelectedCity(event) {
//   let selectedTimeFormat = event.target.value;
//   if (selectedTimeFormat.length > 1) {
//     if (selectedTimeFormat === "twelve-hour") {
//       let selectCityElement = document.querySelector("#select-city");
//       selectCityElement.removeEventListener("change", twentyFourHourClock);
//       selectCityElement.addEventListener("change", twelveHourClock);
//     } else {
//       let selectCityElement = document.querySelector("#select-city");
//       selectCityElement.removeEventListener("change", twelveHourClock);
//       selectCityElement.addEventListener("change", twentyFourHourClock);
//     }
//   }
// }

// let selectTimeFormatElement = document.querySelector("#select-time-format");
// selectTimeFormatElement.addEventListener("change", displaySelectedCity);
// function homepage24HrDisplay(event) {
//   userTime("24");
//   let torontoElement = document.querySelector("#toronto-time");
//   if (torontoElement) {
//     let torontoDateElement = torontoElement.querySelector(".date");
//     let torontoTimeElement = torontoElement.querySelector(".time");
//     torontoDateElement.innerHTML = moment()
//       .tz("America/Toronto")
//       .format("dddd, MMM D, YYYY");
//     torontoTimeElement.innerHTML = moment()
//       .tz("America/Toronto")
//       .format("H:mm:ss");
//   }

//   let melbourneElement = document.querySelector("#melbourne-time");
//   if (melbourneElement) {
//     let melbourneDateElement = melbourneElement.querySelector(".date");
//     let melbourneTimeElement = melbourneElement.querySelector(".time");
//     melbourneDateElement.innerHTML = moment()
//       .tz("Australia/Melbourne")
//       .format("dddd, MMM D, YYYY");
//     melbourneTimeElement.innerHTML = moment()
//       .tz("Australia/Melbourne")
//       .format("H:mm:ss");
//   }

//   let longyearbyenElement = document.querySelector("#longyearbyen-time");
//   if (longyearbyenElement) {
//     let longyearbyenDateElement = longyearbyenElement.querySelector(".date");
//     let longyearbyenTimeElement = longyearbyenElement.querySelector(".time");
//     longyearbyenDateElement.innerHTML = moment()
//       .tz("Arctic/longyearbyen")
//       .format("dddd, MMM D, YYYY");
//     longyearbyenTimeElement.innerHTML = moment()
//       .tz("Arctic/longyearbyen")
//       .format("H:mm:ss");
//   }

//   let timeFormatLinkElement = document.querySelector("#time-format-link");
//   timeFormatLinkElement.innerHTML = `Switch to 12 Hour Format`;
//   timeFormatLinkElement.removeEventListener("click", homepage24HrDisplay);
//   timeFormatLinkElement.addEventListener("click", homepage12HrDisplay);
// }

// function userTime12Hr(momentTZ) {
//   return momentTZ.format(" h:mm A");
// }

// function userTime24Hr(momentTZ) {
//   return momentTZ.format(" H:mm");
// }

// function userTime(format = "12") {
//   let userTimeZone = moment.tz.guess();
//   let momentTimeZone = moment().tz(userTimeZone);
//   let userTimeElement = document.querySelector("#user-time");
//   let userDate = momentTimeZone.format("ddd, MMM D,");
//   let userTime;
//   if (format !== "12") {
//     userTime = userTime24Hr(momentTimeZone);
//   } else {
//     userTime = userTime12Hr(momentTimeZone);
//   }
//   userTimeElement.innerHTML = `It is currently ${userDate}${userTime} in your location.`;
// }

// function formatGreeting(hour) {
//   if (hour >= 5 && hour < 21) {
//     if (hour < 12) {
//       return "Good Morning.";
//     } else if (hour < 17) {
//       return "Good Afternoon.";
//     } else {
//       return "Good Evening.";
//     }
//   } else {
//     return "Good Night.";
//   }
// }

// function userGreeting() {
//   let userTimeZone = moment.tz.guess();
//   let userHour = moment().tz(userTimeZone).format("H");
//   let userGreeting = document.querySelector("#user-greeting");
//   userGreeting.innerHTML = formatGreeting(userHour);
// }

function displayDate(momentTz) {
  date = momentTz.format("dddd, MMM D, YYYY");
  return date;
}

function displayTime(momentTz, format) {
  if (format === "24") {
    return momentTz.format("H:mm:ss");
  } else {
    return momentTz.format("h:mm:ss [<small>]A[</small>]");
  }
}

function homepageDisplay() {
  // userGreeting();
  // userTime("12");

  // Add default city IDs and respective timezones to an array of objects
  let defaultDisplay = [
    {
      id: "#toronto-time",
      timezone: "America/Toronto",
    },
    {
      id: "#melbourne-time",
      timezone: "Australia/Melbourne",
    },
    {
      id: "#longyearbyen-time",
      timezone: "Arctic/longyearbyen",
    },
  ];

  //Loop through the object to calculate date and time based on their respective timezones and inject the same in HTML

  defaultDisplay.forEach((city) => {
    let element = document.querySelector(city.id);
    let dateElement = element.querySelector(".date");
    let timeElement = element.querySelector(".time");
    let timezone = city.timezone;
    let momentTimezone = moment().tz(timezone);
    let timeDisplayFormat = "12";

    dateElement.innerHTML = displayDate(momentTimezone);
    timeElement.innerHTML = displayTime(momentTimezone, timeDisplayFormat);
  });

  let timeFormatLinkElement = document.querySelector("#time-format-link");
  timeFormatLinkElement.classList.add("switch-page");
  timeFormatLinkElement.innerHTML = `Switch to 24 Hour Format`;
  timeFormatLinkElement.removeEventListener("click", homepage12HrDisplay);
  timeFormatLinkElement.addEventListener("click", homepage24HrDisplay);
}

homepageDisplay();

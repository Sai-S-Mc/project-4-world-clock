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

function formatDate(momentTz) {
  date = momentTz.format("dddd, MMM D, YYYY");
  return date;
}

function formatTime(momentTz, format) {
  if (format === "24") {
    return momentTz.format(
      "H:mm[<span class = 'seconds-display'>]:ss[</span>]"
    );
  } else {
    return momentTz.format(
      "h:mm[<span class = 'seconds-display'>]:ss[</span>][<span class = 'time-suffix'>] A[</span>]"
    );
  }
}

function formatGreetingDate(momentTz) {
  return momentTz.format("ddd, MMM D");
}

function formatGreeting(momentTz) {
  let hour = momentTz.format("H");
  if (hour >= 5 && hour < 21) {
    if (hour < 12) {
      return "Good Morning.";
    } else if (hour < 17) {
      return "Good Afternoon.";
    } else {
      return "Good Evening.";
    }
  } else {
    return "Good Night.";
  }
}

function userGreetingDisplay(format) {
  let userTimezone = moment.tz.guess();
  let momentTimezone = moment().tz(userTimezone);
  let userGreeting = formatGreeting(momentTimezone);
  let userDate = formatGreetingDate(momentTimezone);
  let userTime = formatTime(momentTimezone, format);

  let userGreetingElement = document.querySelector(".user-greeting-display");
  userGreetingElement.innerHTML = `${userGreeting} It's currently ${userDate}, ${userTime} in your location.`;
}

function updateTimeFormatAndLink() {
  let timeFormatLinkElement = document.querySelector("#time-format-link");
  timeFormatLinkElement.classList.add("switch-format");
  timeFormatLinkElement.classList.toggle("format-24-hr");
  if (timeFormatLinkElement.classList.contains("format-24-hr")) {
    timeFormatLinkElement.innerHTML = "Switch to 24 Hour Format";
    return "12";
  } else {
    timeFormatLinkElement.innerHTML = "Switch to 12 Hour Format";
    return "24";
  }
}

function homepageDisplay(event) {
  if (event) {
    event.preventDefault();
  }

  // userGreeting();
  // userTime("12");
  let timeFormat = updateTimeFormatAndLink();

  userGreetingDisplay(timeFormat);

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

    dateElement.innerHTML = formatDate(momentTimezone);
    timeElement.innerHTML = formatTime(momentTimezone, timeFormat);
  });
}

homepageDisplay();

let timeFormatLinkElement = document.querySelector("#time-format-link");
timeFormatLinkElement.addEventListener("click", homepageDisplay);

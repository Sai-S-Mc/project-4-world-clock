function handleErrors(error = "") {
  let mainElement = document.querySelector("main");
  mainElement.classList.add("error-message");
  let message;
  if (error === "location blocked") {
    message =
      "We attempted to guess your time... but your VPN said no.</br>Respect.🫡";
  } else if (error === "greeting location blocked") {
    message = `We can't find your time—you've got a VPN-visibility cloak on.`;
  } else {
    document.querySelector(".select-items").classList.add("hidden");
    message = `Oops! The space-time continuum broke💥<br/>Please try again later.`;
  }
  mainElement.innerHTML = message;
}

function formatTime(momentTz, format) {
  if (format === "twenty-four-hour") {
    return momentTz.format(
      "H:mm[<span class = 'seconds-display'>]:ss[</span>]"
    );
  } else {
    return momentTz.format(
      "h:mm[<span class = 'seconds-display'>]:ss[</span>][<span class = 'time-suffix'>] A[</span>]"
    );
  }
}

function formatDate(momentTz) {
  date = momentTz.format("dddd, MMM D, YYYY");
  return date;
}

function handleTimeFormatSelectionChange() {
  displaySelectedCity();
}

function displaySelectedCity(event) {
  if (event) {
    event.preventDefault();
  }

  let homepageLinkElement = document.querySelector("#homepage-link");
  homepageLinkElement.classList.remove("hidden");
  let timeFormatLinkElement = document.querySelector("#time-format-link");
  timeFormatLinkElement.classList.add("hidden");

  let timezone;
  let timeFormat;
  let timeFormatSelectElement = document.querySelector("#select-time-format");

  if (event) {
    timezone = event.target.value;
  } else {
    timezone = document.querySelector("#select-city").value;
  }

  if (timezone.length > 1) {
    if (timezone === "current") {
      timezone = moment.tz.guess(true);
      if (!timezone) {
        handleErrors("location blocked");
        return;
      }
    }
    let momentTimezone = moment().tz(timezone);
    timeFormat = timeFormatSelectElement.value;
    let cityName = timezone.replace("_", " ").split("/")[1];
    let date = formatDate(momentTimezone);
    let time = formatTime(momentTimezone, timeFormat);
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML = `<div class="each-city">
    <div class="city-and-date">
    <h2>${cityName}</h2>
    <div class="date">${date}</div>
    </div>
    <div class="time">${time}
    </div></div>`;
  }
  userGreetingDisplay(timeFormat);
  timeFormatSelectElement.addEventListener(
    "change",
    handleTimeFormatSelectionChange
  );
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
  let userTimezone = moment.tz.guess(true);
  if (!userTimezone) {
    handleErrors("greeting location blocked");
    return;
  }
  let momentTimezone = moment().tz(userTimezone);
  let userGreeting = formatGreeting(momentTimezone);
  let userDate = formatGreetingDate(momentTimezone);
  let userTime = formatTime(momentTimezone, format);

  let userGreetingElement = document.querySelector(".user-greeting-display");
  userGreetingElement.innerHTML = `${userGreeting} It's currently ${userDate}, ${userTime} in your location.`;
}

function updateHomepageTimeFormatAndLink() {
  let timeFormatLinkElement = document.querySelector("#time-format-link");
  timeFormatLinkElement.classList.add("switch-format");
  timeFormatLinkElement.classList.toggle("format-24-hr");
  if (timeFormatLinkElement.classList.contains("format-24-hr")) {
    timeFormatLinkElement.innerHTML = "Switch to 24 Hour Format";
    return "twelve-hour";
  } else {
    timeFormatLinkElement.innerHTML = "Switch to 12 Hour Format";
    return "twenty-four-hour";
  }
}

function homepageDisplay(event) {
  if (event) {
    event.preventDefault();
  }

  let timeFormat = updateHomepageTimeFormatAndLink();
  let homepageLinkElement = document.querySelector("#homepage-link");
  homepageLinkElement.classList.add("hidden");
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
    if (element) {
      let dateElement = element.querySelector(".date");
      let timeElement = element.querySelector(".time");
      let timezone = city.timezone;
      let momentTimezone = moment().tz(timezone);

      dateElement.innerHTML = formatDate(momentTimezone);
      timeElement.innerHTML = formatTime(momentTimezone, timeFormat);
    }
  });
}

try {
  homepageDisplay();

  let timeFormatLinkElement = document.querySelector("#time-format-link");
  timeFormatLinkElement.addEventListener("click", homepageDisplay);

  let selectCityElement = document.querySelector("#select-city");
  selectCityElement.addEventListener("change", displaySelectedCity);
} catch {
  handleErrors();
}

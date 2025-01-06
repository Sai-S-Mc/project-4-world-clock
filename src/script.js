function updateTime() {
  let torontoElement = document.querySelector("#toronto-time");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  torontoDateElement.innerHTML = moment().format("dddd, MMM D, YYYY");
  torontoTimeElement.innerHTML = moment().format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );

  let melbourneElement = document.querySelector("#melbourne-time");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");
  melbourneDateElement.innerHTML = moment().tz("Australia/Melbourne").format("dddd, MMM D, YYYY");
  melbourneTimeElement.innerHTML = moment()
    .tz("Australia/Melbourne")
    .format("h:mm:ss:SSS [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 10);

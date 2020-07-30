module.exports = (time) => {
  if (time === "12:00:00AM") {
    return "00:00:00";
  }
  if (time === "12:00:00PM") {
    return "12:00:00";
  }
  if (time.split("").slice(0, 2).join("") === "12" && time.includes("AM")) {
    let timeSplit = time.split("");
    timeSplit.pop();
    timeSplit.pop();
    timeSplit[0] = "0";
    timeSplit[1] = "0";
    return timeSplit.join("");
  }
  if (time.includes("AM") || time.split("").slice(0, 2).join("") === "12") {
    let timeSplit = time.split("");
    timeSplit.pop();
    timeSplit.pop();
    return timeSplit.join("");
  }

  let timeSplit = time.split(":");
  timeSplit[0] = String(Number(timeSplit[0]) + 12);
  const withoutPm = timeSplit[2].split("PM")[0];
  timeSplit[2] = withoutPm;
  return timeSplit.join(":");
};

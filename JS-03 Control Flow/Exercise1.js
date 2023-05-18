function bussinessHours(dayNumber, hourNumber) {
  if (hourNumber >= 9 && hourNumber <= 18) {
    return true;
  } else {
    return false;
  }
}

function getDayNumber(janFirstDayNumber, yearDayNumber) {
  if (
    janFirstDayNumber >= 0 &&
    janFirstDayNumber <= 6 &&
    yearDayNumber >= 0 &&
    yearDayNumber <= 365
  ) {
    return `${yearDayNumber % 7}`;
  }
}
console.log(bussinessHours(10, 15));
console.log(getDayNumber(5, 360));

const gridSize = 42;

const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

const padNumber = (num) => num < 10 ? `0${num}` : num;

const getFormattedMonth = (month) => {
  const monthToUse = month + 1;
  return padNumber(monthToUse)  
}

const generateDateArray = (dateToUse, month) => {
  const results = []
  while(dateToUse.getMonth() === month) {
    results.push({
      date: `${dateToUse.getFullYear()}-${getFormattedMonth(month)}-${padNumber(dateToUse.getDate())}`,
      day: dateToUse.getDay()
    })
    dateToUse.setDate(dateToUse.getDate() + 1);
  }
  return results;
}

const getCorrectMonthAndYear = (year, month) => {
  let monthToUse = month;
  let yearToUse = year;
  if (monthToUse === -1) {
    monthToUse = 11;
    yearToUse = year - 1;
  }
  if (monthToUse === 12) {
    monthToUse = 0;
    yearToUse = year + 1;
  }
  return {
    monthToUse,
    yearToUse,
  }
}

const padStartDate = (year, month, upTo) => {
  const { monthToUse, yearToUse } = getCorrectMonthAndYear(year, month);
  const daysInMonth = getDaysInMonth(yearToUse, monthToUse);
  const startDate = new Date(yearToUse, monthToUse, daysInMonth - upTo);
  while(startDate.getDay() !== 0) {
    startDate.setDate(startDate.getDate() + 1);
  }
  return generateDateArray(startDate, monthToUse);
}

const padEndDates = (year, month, upTo) => {
  const { monthToUse, yearToUse } = getCorrectMonthAndYear(year, month);
  const endDates = new Date(yearToUse, monthToUse, 1);
  return generateDateArray(endDates, monthToUse).slice(0, upTo);
}



export function generateCalendarMonth(year, month, shouldPad = true) {
  const date = new Date(year, month, 1);
  let results = generateDateArray(date, month);
  if (results.length < 42 && shouldPad) {
    if (results[0].day !== 0) {
      const startDates = padStartDate(year, month - 1, results[0].day);
      results = [...startDates, ...results];
    }
    const endDates = padEndDates(year, month + 1, gridSize - results.length);
    results = [...results, ...endDates];
  }
  return results;
}


generateCalendarMonth(2023, 0);

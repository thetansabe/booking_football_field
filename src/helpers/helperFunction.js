export const currencyFormat = (n, currency) => {
  return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
};

export const generateDates = (today, offSet) => {
  let dates = [];
  let nextDay = new Date(today);
  let weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  for (let i = 1; i <= offSet; i++) {
    dates.push({
      weekday: weekDays[nextDay.getDay()],
      day: nextDay.getDate(),
      month: nextDay.getMonth() + 1,
    });

    nextDay.setDate(today.getDate() + i);
  }

  return dates;
};

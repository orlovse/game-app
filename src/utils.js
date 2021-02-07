const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

export const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
export const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
export const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

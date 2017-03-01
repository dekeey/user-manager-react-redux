import moment from 'moment';


const yearsArray = () => {
  let yearsArray = [];
  for(let i=1910; i<= 2010; i++) {
    yearsArray.push(i);
  }
  return yearsArray;
};

const daysArray = (numberOfDays) => {
  let daysArray = [];
  for(let i=1; i<= numberOfDays; i++) {
    daysArray.push(i);
  }
  return daysArray;
};

const daysInMonth = (year, month) => {
  let monthFormatted = ('0' + (month)).slice(-2);
  return moment(`${year}-${monthFormatted}`, 'YYYY-MM').daysInMonth();
};

export const months = moment.months();
export const years = yearsArray();
export const days = (year, month) => daysArray(daysInMonth(year, month));

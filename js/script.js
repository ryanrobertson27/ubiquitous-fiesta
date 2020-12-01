const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');
const weeksEl = document.getElementById('weeks');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const avgExcpectYears = 76;
const avgExcpectSeconds = avgExcpectYears * 365.25 * 24 * 60 * 60;


function countdown() {

    const userAge = '30 Mar 1992';
    const userBirthDate = new Date(userAge).getTime()/1000;
    const lastDay = userBirthDate + avgExcpectSeconds;
    const currentDate = new Date().getTime()/1000;
    const secondsLeft = Math.floor(lastDay - currentDate);

    const years = Math.floor(secondsLeft / 3600 / 24 / 365.25);
    const months = Math.floor(secondsLeft / 3600 / 24 / 12);
    const weeks = Math.floor(secondsLeft / 3600 / 24 / 7);
    const days = Math.floor(secondsLeft / 3600 / 24);
    const hours = Math.floor(secondsLeft / 3600);
    const mins = Math.floor(secondsLeft / 60);
    const seconds = Math.floor(secondsLeft);

    //console.log(secondsLeft);
    //console.log(futureDate);
    //console.log(year, mn, wk, dy, hr, min, sec);

    yearsEl.innerHTML = years;
    monthsEl.innerHTML = months;
    weeksEl.innerHTML = weeks;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

}

countdown();


setInterval(countdown, 1000);

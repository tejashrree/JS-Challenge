let currentDate = new Date();
let mm = currentDate.getMonth();
let dd = currentDate.getDate();
let yyyy = currentDate.getFullYear();
console.log(mm + "-" + dd + "-" + yyyy);


let targetYear = 2026;
let targetMonth = 11;
let targetDate = 25;


let yearDiff = targetYear - yyyy;
let dateDiff = targetDate - dd;
let monthDiff = targetMonth - mm;


if (dateDiff < 0) {
    monthDiff--;
    dateDiff = dateDiff + 30;
}

if (monthDiff < 0) {
    yearDiff--;
    monthDiff = monthDiff + 12;
}


console.log(yearDiff, "years", monthDiff, "months", dateDiff, "days");

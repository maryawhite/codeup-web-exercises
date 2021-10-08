"use strict"
//write a function to convert dt to a human readable format dt 1618317040

// new Date((data.daily[i].dt) * 1000).toLocaleString("en-US", {weekday: "long"})

function convertDateTime(input){
    return new Date (input * 1000).toLocaleString("en-US", {weekday: "long"});
}
convertDateTime(1618317040);

//getting current date
function DateString(){
const  currentDate = new Date();
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth();   //January is 0
const currentYear = currentDate.getFullYear();

const dateString = (currentMonth + 1) + "-" + currentDayOfMonth + "-" + currentYear;
return dateString
}


//https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript
function convertDt(dtNum){
const unixTimestamp = dtNum

const milliseconds = unixTimestamp * 1000

const dateObject = new Date(milliseconds)

const humanDateFormat = dateObject.toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric"}) //2019-12-9 10:30:15
    return humanDateFormat;
}

// dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
// dateObject.toLocaleString("en-US", {month: "long"}) // December
// dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
// dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
// dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
// dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30
// dateObject.toLocaleString("en-US", {second: "numeric"}) // 15
// dateObject.toLocaleString("en-US", {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST


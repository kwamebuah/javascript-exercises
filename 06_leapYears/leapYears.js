const leapYears = function(year) {
    const leapYear = true;
    const notLeapYear = false;
    
    if ((year % 4 === 0) && (year % 100 !==0)) return leapYear;
    else if (year % 400 === 0) return leapYear;
    else return notLeapYear;
};

// Do not edit below this line
module.exports = leapYears;

var MONTH_INDEXES = {
  'jan': 0,
  'feb': 1,
  'mar': 2,
  'apr': 3,
  'may': 4,
  'jun': 5,
  'jul': 6,
  'aug': 7,
  'sep': 8,
  'oct': 9,
  'nov': 10,
  'dec': 11
};

var SUNDAY_INDEX = 0;

var createDate = function (monthString, yearString, startOfFollowingMonth) {
  var baseDate = new Date();

  var threeLetterMonth = monthString.trim().substring(0,3).toLowerCase();
  var monthIndex = MONTH_INDEXES[threeLetterMonth];
  if (monthIndex === null || monthIndex === undefined) {
    throw new Error('Invalid month: ' + monthString);
  }

  baseDate.setMonth(monthIndex, 1);

  var yearInt = parseInt(yearString);
  if (isNaN(yearInt) || !isFinite(yearInt)) {
    throw new Error('Invalid year: ' + yearString);
  }
  baseDate.setYear(yearInt);

  // Move to the start of the next month for ending date
  if (startOfFollowingMonth) {
    while (baseDate.getMonth() === monthIndex) {
      baseDate.setDate(baseDate.getDate() + 1);
    }
  }

  return baseDate;
};

var numberOfMonthsWithFiveSundays = function (startDate, endDate) {
  var monthCount = 0;

  var currentMonth = startDate.getMonth();
  var currentSundayCount = 0;

  for (var d = startDate; d < endDate; d.setDate(d.getDate() + 1)) {
    if (currentMonth != d.getMonth()) {
      currentMonth = d.getMonth();
      currentSundayCount = 0;
    }

    if (currentMonth === d.getMonth() && SUNDAY_INDEX === d.getDay()) {
      currentSundayCount += 1;
      if (currentSundayCount === 5) {
        monthCount += 1;
      }
    }
  }

  return monthCount;
};

var main = function (line) {
  var splitData = line.split(' ');

  var startDate,endDate;
  try {
    if (splitData.length !== 4) {
      throw new Error('Expecting data in the form \'Month Year Month Year\'');
    }

    startDate = createDate(splitData[0], splitData[1], false);
    endDate = createDate(splitData[2], splitData[3], true);


    if (startDate >= endDate) {
      throw Error('Start date must be before end date');
    }
  }
  catch (error) {
    console.error(error);
    return '';
  }

  return numberOfMonthsWithFiveSundays(startDate, endDate);
};


module.exports = main;

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dateFns"] = factory();
	else
		root["dateFns"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    addDays: __webpack_require__(1),
	    addHours: __webpack_require__(4),
	    addISOYears: __webpack_require__(5),
	    addMilliseconds: __webpack_require__(13),
	    addMinutes: __webpack_require__(14),
	    addMonths: __webpack_require__(15),
	    addQuarters: __webpack_require__(17),
	    addSeconds: __webpack_require__(18),
	    addWeeks: __webpack_require__(19),
	    addYears: __webpack_require__(20),
	    closestIndexTo: __webpack_require__(21),
	    closestTo: __webpack_require__(22),
	    compareAsc: __webpack_require__(23),
	    compareDesc: __webpack_require__(24),
	    differenceInCalendarDays: __webpack_require__(11),
	    differenceInCalendarISOWeeks: __webpack_require__(25),
	    differenceInCalendarISOYears: __webpack_require__(26),
	    differenceInCalendarMonths: __webpack_require__(27),
	    differenceInCalendarQuarters: __webpack_require__(28),
	    differenceInCalendarWeeks: __webpack_require__(30),
	    differenceInCalendarYears: __webpack_require__(31),
	    differenceInDays: __webpack_require__(32),
	    differenceInHours: __webpack_require__(33),
	    differenceInISOYears: __webpack_require__(35),
	    differenceInMilliseconds: __webpack_require__(34),
	    differenceInMinutes: __webpack_require__(37),
	    differenceInMonths: __webpack_require__(38),
	    differenceInQuarters: __webpack_require__(39),
	    differenceInSeconds: __webpack_require__(40),
	    differenceInWeeks: __webpack_require__(41),
	    differenceInYears: __webpack_require__(42),
	    distanceInWords: __webpack_require__(43),
	    distanceInWordsToNow: __webpack_require__(45),
	    eachDay: __webpack_require__(46),
	    endOfDay: __webpack_require__(47),
	    endOfHour: __webpack_require__(48),
	    endOfISOWeek: __webpack_require__(49),
	    endOfISOYear: __webpack_require__(51),
	    endOfMinute: __webpack_require__(52),
	    endOfMonth: __webpack_require__(53),
	    endOfQuarter: __webpack_require__(54),
	    endOfSecond: __webpack_require__(55),
	    endOfToday: __webpack_require__(56),
	    endOfTomorrow: __webpack_require__(57),
	    endOfWeek: __webpack_require__(50),
	    endOfYear: __webpack_require__(58),
	    endOfYesterday: __webpack_require__(59),
	    format: __webpack_require__(60),
	    getDate: __webpack_require__(64),
	    getDay: __webpack_require__(65),
	    getDayOfYear: __webpack_require__(61),
	    getDaysInMonth: __webpack_require__(16),
	    getDaysInYear: __webpack_require__(66),
	    getHours: __webpack_require__(68),
	    getISOWeek: __webpack_require__(63),
	    getISOWeeksInYear: __webpack_require__(69),
	    getISOYear: __webpack_require__(6),
	    getMilliseconds: __webpack_require__(70),
	    getMinutes: __webpack_require__(71),
	    getMonth: __webpack_require__(72),
	    getQuarter: __webpack_require__(29),
	    getSeconds: __webpack_require__(73),
	    getYear: __webpack_require__(74),
	    isAfter: __webpack_require__(75),
	    isBefore: __webpack_require__(44),
	    isDate: __webpack_require__(3),
	    isEqual: __webpack_require__(76),
	    isFirstDayOfMonth: __webpack_require__(77),
	    isFriday: __webpack_require__(78),
	    isFuture: __webpack_require__(79),
	    isLastDayOfMonth: __webpack_require__(80),
	    isLeapYear: __webpack_require__(67),
	    isMonday: __webpack_require__(81),
	    isPast: __webpack_require__(82),
	    isSameDay: __webpack_require__(83),
	    isSameHour: __webpack_require__(84),
	    isSameISOWeek: __webpack_require__(86),
	    isSameISOYear: __webpack_require__(88),
	    isSameMinute: __webpack_require__(89),
	    isSameMonth: __webpack_require__(91),
	    isSameQuarter: __webpack_require__(92),
	    isSameSecond: __webpack_require__(94),
	    isSameWeek: __webpack_require__(87),
	    isSameYear: __webpack_require__(96),
	    isSaturday: __webpack_require__(97),
	    isSunday: __webpack_require__(98),
	    isThisHour: __webpack_require__(99),
	    isThisISOWeek: __webpack_require__(100),
	    isThisISOYear: __webpack_require__(101),
	    isThisMinute: __webpack_require__(102),
	    isThisMonth: __webpack_require__(103),
	    isThisQuarter: __webpack_require__(104),
	    isThisSecond: __webpack_require__(105),
	    isThisWeek: __webpack_require__(106),
	    isThisYear: __webpack_require__(107),
	    isThursday: __webpack_require__(108),
	    isToday: __webpack_require__(109),
	    isTomorrow: __webpack_require__(110),
	    isTuesday: __webpack_require__(111),
	    isValid: __webpack_require__(112),
	    isWednesday: __webpack_require__(113),
	    isWeekend: __webpack_require__(114),
	    isWithinRange: __webpack_require__(115),
	    isYesterday: __webpack_require__(116),
	    lastDayOfISOWeek: __webpack_require__(117),
	    lastDayOfISOYear: __webpack_require__(119),
	    lastDayOfMonth: __webpack_require__(120),
	    lastDayOfQuarter: __webpack_require__(121),
	    lastDayOfWeek: __webpack_require__(118),
	    lastDayOfYear: __webpack_require__(122),
	    max: __webpack_require__(123),
	    min: __webpack_require__(124),
	    parse: __webpack_require__(2),
	    setDate: __webpack_require__(125),
	    setDay: __webpack_require__(126),
	    setDayOfYear: __webpack_require__(127),
	    setHours: __webpack_require__(128),
	    setISOWeek: __webpack_require__(129),
	    setISOYear: __webpack_require__(9),
	    setMilliseconds: __webpack_require__(130),
	    setMinutes: __webpack_require__(131),
	    setMonth: __webpack_require__(132),
	    setQuarter: __webpack_require__(133),
	    setSeconds: __webpack_require__(134),
	    setYear: __webpack_require__(135),
	    startOfDay: __webpack_require__(12),
	    startOfHour: __webpack_require__(85),
	    startOfISOWeek: __webpack_require__(7),
	    startOfISOYear: __webpack_require__(10),
	    startOfMinute: __webpack_require__(90),
	    startOfMonth: __webpack_require__(136),
	    startOfQuarter: __webpack_require__(93),
	    startOfSecond: __webpack_require__(95),
	    startOfToday: __webpack_require__(137),
	    startOfTomorrow: __webpack_require__(138),
	    startOfWeek: __webpack_require__(8),
	    startOfYear: __webpack_require__(62),
	    startOfYesterday: __webpack_require__(139),
	    subDays: __webpack_require__(140),
	    subHours: __webpack_require__(141),
	    subISOYears: __webpack_require__(36),
	    subMilliseconds: __webpack_require__(142),
	    subMinutes: __webpack_require__(143),
	    subMonths: __webpack_require__(144),
	    subQuarters: __webpack_require__(145),
	    subSeconds: __webpack_require__(146),
	    subWeeks: __webpack_require__(147),
	    subYears: __webpack_require__(148)
	};
	


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function addDays(dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setDate(date.getDate() + amount);
	    return date;
	}
	module.exports = addDays;
	


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(3);
	var MILLISECONDS_IN_HOUR = 3600000;
	var MILLISECONDS_IN_MINUTE = 60000;
	var parseTokenDateTimeDelimeter = /[T ]/;
	var parseTokenPlainTime = /:/;
	var parseTokenYYYY = /^(\d{4})-?/;
	var parseTokenYYYYY = /^([+-]\d{4,6})-/;
	var parseTokenMM = /^-(\d{2})$/;
	var parseTokenDDD = /^-?(\d{3})$/;
	var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/;
	var parseTokenWww = /^-?W(\d{2})$/;
	var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/;
	var parseTokenHH = /^(\d{2}([.,]\d*)?)$/;
	var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/;
	var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/;
	var parseTokenTimezone = /([Z+-].*)$/;
	var parseTokenTimezoneZ = /^(Z)$/;
	var parseTokenTimezoneHH = /^([+-])(\d{2})$/;
	var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/;
	function parse(dateString) {
	    if (isDate(dateString)) {
	        return new Date(dateString.getTime());
	    } else if (typeof dateString !== 'string') {
	        return new Date(dateString);
	    }
	    var dateStrings = splitDateString(dateString);
	    var date = parseDate(dateStrings.date);
	    if (date) {
	        var timestamp = date.getTime();
	        var time = 0;
	        var offset;
	        if (dateStrings.time) {
	            time = parseTime(dateStrings.time);
	        }
	        if (dateStrings.timezone) {
	            offset = parseTimezone(dateStrings.timezone);
	        } else {
	            offset = new Date(timestamp + time).getTimezoneOffset();
	            offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
	        }
	        return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE);
	    } else {
	        return new Date(dateString);
	    }
	}
	function splitDateString(dateString) {
	    var dateStrings = {};
	    var array = dateString.split(parseTokenDateTimeDelimeter);
	    var timeString;
	    if (parseTokenPlainTime.test(array[0])) {
	        dateStrings.date = null;
	        timeString = array[0];
	    } else {
	        dateStrings.date = array[0];
	        timeString = array[1];
	    }
	    if (timeString) {
	        var token = parseTokenTimezone.exec(timeString);
	        if (token) {
	            dateStrings.time = timeString.replace(token[1], '');
	            dateStrings.timezone = token[1];
	        } else {
	            dateStrings.time = timeString;
	        }
	    }
	    return dateStrings;
	}
	function parseDate(dateString) {
	    var year;
	    var yearToken;
	    yearToken = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString);
	    if (yearToken) {
	        var yearString = yearToken[1];
	        year = parseInt(yearString, 10);
	        dateString = dateString.slice(yearString.length);
	    } else {
	        return null;
	    }
	    var token;
	    var date;
	    var month;
	    var week;
	    if (dateString.length === 0) {
	        date = new Date(0);
	        date.setUTCFullYear(year);
	        return date;
	    }
	    token = parseTokenMM.exec(dateString);
	    if (token) {
	        date = new Date(0);
	        month = parseInt(token[1], 10) - 1;
	        date.setUTCFullYear(year, month);
	        return date;
	    }
	    token = parseTokenDDD.exec(dateString);
	    if (token) {
	        date = new Date(0);
	        var dayOfYear = parseInt(token[1], 10);
	        date.setUTCFullYear(year, 0, dayOfYear);
	        return date;
	    }
	    token = parseTokenMMDD.exec(dateString);
	    if (token) {
	        date = new Date(0);
	        month = parseInt(token[1], 10) - 1;
	        var day = parseInt(token[2], 10);
	        date.setUTCFullYear(year, month, day);
	        return date;
	    }
	    token = parseTokenWww.exec(dateString);
	    if (token) {
	        week = parseInt(token[1], 10) - 1;
	        return dayOfISOYear(year, week);
	    }
	    token = parseTokenWwwD.exec(dateString);
	    if (token) {
	        week = parseInt(token[1], 10) - 1;
	        var dayOfWeek = parseInt(token[2], 10) - 1;
	        return dayOfISOYear(year, week, dayOfWeek);
	    }
	    return null;
	}
	function parseTime(timeString) {
	    var token;
	    var hours;
	    var minutes;
	    token = parseTokenHH.exec(timeString);
	    if (token) {
	        hours = parseFloat(token[1].replace(',', '.'));
	        return hours % 24 * MILLISECONDS_IN_HOUR;
	    }
	    token = parseTokenHHMM.exec(timeString);
	    if (token) {
	        hours = parseInt(token[1], 10);
	        minutes = parseFloat(token[2].replace(',', '.'));
	        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
	    }
	    token = parseTokenHHMMSS.exec(timeString);
	    if (token) {
	        hours = parseInt(token[1], 10);
	        minutes = parseInt(token[2], 10);
	        var seconds = parseFloat(token[3].replace(',', '.'));
	        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
	    }
	    return null;
	}
	function parseTimezone(timezoneString) {
	    var token;
	    var absoluteOffset;
	    token = parseTokenTimezoneZ.exec(timezoneString);
	    if (token) {
	        return 0;
	    }
	    token = parseTokenTimezoneHH.exec(timezoneString);
	    if (token) {
	        absoluteOffset = parseInt(token[2], 10) * 60;
	        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
	    }
	    token = parseTokenTimezoneHHMM.exec(timezoneString);
	    if (token) {
	        absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
	        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
	    }
	    return 0;
	}
	function dayOfISOYear(isoYear, week, day) {
	    week = week || 0;
	    day = day || 0;
	    var date = new Date(0);
	    date.setUTCFullYear(isoYear, 0, 4);
	    var diff = week * 7 + day + 1 - date.getUTCDay();
	    date.setUTCDate(date.getUTCDate() + diff);
	    return date;
	}
	module.exports = parse;
	


/***/ },
/* 3 */
/***/ function(module, exports) {

	function isDate(argument) {
	    return argument instanceof Date;
	}
	module.exports = isDate;
	


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function addHours(dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setHours(date.getHours() + amount);
	    return date;
	}
	module.exports = addHours;
	


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(6);
	var setISOYear = __webpack_require__(9);
	function addISOYears(dirtyDate, amount) {
	    return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount);
	}
	module.exports = addISOYears;
	


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfISOWeek = __webpack_require__(7);
	function getISOYear(dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    var startOfNextYear = startOfISOWeek(new Date(year + 1, 0, 4));
	    var startOfThisYear = startOfISOWeek(new Date(year, 0, 4));
	    if (date.getTime() >= startOfNextYear.getTime()) {
	        return year + 1;
	    } else if (date.getTime() >= startOfThisYear.getTime()) {
	        return year;
	    } else {
	        return year - 1;
	    }
	}
	module.exports = getISOYear;
	


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(8);
	function startOfISOWeek(dirtyDate) {
	    return startOfWeek(dirtyDate, { weekStartsOn: 1 });
	}
	module.exports = startOfISOWeek;
	


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function startOfWeek(dirtyDate, options) {
	    var weekStartsOn = options ? options.weekStartsOn || 0 : 0;
	    var date = parse(dirtyDate);
	    var day = date.getDay();
	    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
	    date.setDate(date.getDate() - diff);
	    date.setHours(0, 0, 0, 0);
	    return date;
	}
	module.exports = startOfWeek;
	


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfISOYear = __webpack_require__(10);
	var differenceInCalendarDays = __webpack_require__(11);
	function setISOYear(dirtyDate, isoYear) {
	    var date = parse(dirtyDate);
	    var diff = differenceInCalendarDays(date, startOfISOYear(date));
	    date = startOfISOYear(new Date(isoYear, 0, 4));
	    date.setDate(date.getDate() + diff);
	    return date;
	}
	module.exports = setISOYear;
	


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(6);
	var startOfISOWeek = __webpack_require__(7);
	function startOfISOYear(dirtyDate) {
	    var year = getISOYear(dirtyDate);
	    var date = startOfISOWeek(new Date(year, 0, 4));
	    return date;
	}
	module.exports = startOfISOYear;
	


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(12);
	var MILLISECONDS_IN_MINUTE = 60000;
	var MILLISECONDS_IN_DAY = 86400000;
	function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
	    var startOfDayLeft = startOfDay(dirtyDateLeft);
	    var startOfDayRight = startOfDay(dirtyDateRight);
	    var timestampLeft = startOfDayLeft.getTime() - startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    var timestampRight = startOfDayRight.getTime() - startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
	}
	module.exports = differenceInCalendarDays;
	


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function startOfDay(dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setHours(0, 0, 0, 0);
	    return date;
	}
	module.exports = startOfDay;
	


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function addMilliseconds(dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setMilliseconds(date.getMilliseconds() + amount);
	    return date;
	}
	module.exports = addMilliseconds;
	


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function addMinutes(dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setMinutes(date.getMinutes() + amount);
	    return date;
	}
	module.exports = addMinutes;
	


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getDaysInMonth = __webpack_require__(16);
	function addMonths(dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    var desiredMonth = date.getMonth() + amount;
	    var daysInMonth = getDaysInMonth(new Date(date.getFullYear(), desiredMonth, 1));
	    date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
	    return date;
	}
	module.exports = addMonths;
	


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function getDaysInMonth(dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    var monthIndex = date.getMonth();
	    return new Date(year, monthIndex + 1, 0).getDate();
	}
	module.exports = getDaysInMonth;
	


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(15);
	function addQuarters(dirtyDate, amount) {
	    var months = amount * 3;
	    return addMonths(dirtyDate, months);
	}
	module.exports = addQuarters;
	


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function addSeconds(dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setSeconds(date.getSeconds() + amount);
	    return date;
	}
	module.exports = addSeconds;
	


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(1);
	function addWeeks(dirtyDate, amount) {
	    var days = amount * 7;
	    return addDays(dirtyDate, days);
	}
	module.exports = addWeeks;
	


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(15);
	function addYears(dirtyDate, amount) {
	    return addMonths(dirtyDate, amount * 12);
	}
	module.exports = addYears;
	


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function closestIndexTo(dirtyDateToCompare, dirtyDatesArray) {
	    if (!(dirtyDatesArray instanceof Array)) {
	        throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array');
	    }
	    var dateToCompare = parse(dirtyDateToCompare);
	    var timeToCompare = dateToCompare.getTime();
	    var result;
	    var minDistance;
	    dirtyDatesArray.forEach(function (dirtyDate, index) {
	        var currentDate = parse(dirtyDate);
	        var distance = Math.abs(timeToCompare - currentDate.getTime());
	        if (result === undefined || distance < minDistance) {
	            result = index;
	            minDistance = distance;
	        }
	    });
	    return result;
	}
	module.exports = closestIndexTo;
	


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function closestTo(dirtyDateToCompare, dirtyDatesArray) {
	    if (!(dirtyDatesArray instanceof Array)) {
	        throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array');
	    }
	    var dateToCompare = parse(dirtyDateToCompare);
	    var timeToCompare = dateToCompare.getTime();
	    var result;
	    var minDistance;
	    dirtyDatesArray.forEach(function (dirtyDate) {
	        var currentDate = parse(dirtyDate);
	        var distance = Math.abs(timeToCompare - currentDate.getTime());
	        if (result === undefined || distance < minDistance) {
	            result = currentDate;
	            minDistance = distance;
	        }
	    });
	    return result;
	}
	module.exports = closestTo;
	


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function compareAsc(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var timeLeft = dateLeft.getTime();
	    var dateRight = parse(dirtyDateRight);
	    var timeRight = dateRight.getTime();
	    if (timeLeft < timeRight) {
	        return -1;
	    } else if (timeLeft > timeRight) {
	        return 1;
	    } else {
	        return 0;
	    }
	}
	module.exports = compareAsc;
	


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function compareDesc(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var timeLeft = dateLeft.getTime();
	    var dateRight = parse(dirtyDateRight);
	    var timeRight = dateRight.getTime();
	    if (timeLeft > timeRight) {
	        return -1;
	    } else if (timeLeft < timeRight) {
	        return 1;
	    } else {
	        return 0;
	    }
	}
	module.exports = compareDesc;
	


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var startOfISOWeek = __webpack_require__(7);
	var MILLISECONDS_IN_MINUTE = 60000;
	var MILLISECONDS_IN_WEEK = 604800000;
	function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
	    var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft);
	    var startOfISOWeekRight = startOfISOWeek(dirtyDateRight);
	    var timestampLeft = startOfISOWeekLeft.getTime() - startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    var timestampRight = startOfISOWeekRight.getTime() - startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
	}
	module.exports = differenceInCalendarISOWeeks;
	


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(6);
	function differenceInCalendarISOYears(dirtyDateLeft, dirtyDateRight) {
	    return getISOYear(dirtyDateLeft) - getISOYear(dirtyDateRight);
	}
	module.exports = differenceInCalendarISOYears;
	


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
	    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
	    return yearDiff * 12 + monthDiff;
	}
	module.exports = differenceInCalendarMonths;
	


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var getQuarter = __webpack_require__(29);
	var parse = __webpack_require__(2);
	function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
	    var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight);
	    return yearDiff * 4 + quarterDiff;
	}
	module.exports = differenceInCalendarQuarters;
	


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function getQuarter(dirtyDate) {
	    var date = parse(dirtyDate);
	    var quarter = Math.floor(date.getMonth() / 3) + 1;
	    return quarter;
	}
	module.exports = getQuarter;
	


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(8);
	var MILLISECONDS_IN_MINUTE = 60000;
	var MILLISECONDS_IN_WEEK = 604800000;
	function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, options) {
	    var startOfWeekLeft = startOfWeek(dirtyDateLeft, options);
	    var startOfWeekRight = startOfWeek(dirtyDateRight, options);
	    var timestampLeft = startOfWeekLeft.getTime() - startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    var timestampRight = startOfWeekRight.getTime() - startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
	}
	module.exports = differenceInCalendarWeeks;
	


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    return dateLeft.getFullYear() - dateRight.getFullYear();
	}
	module.exports = differenceInCalendarYears;
	


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInCalendarDays = __webpack_require__(11);
	var compareAsc = __webpack_require__(23);
	function differenceInDays(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var sign = compareAsc(dateLeft, dateRight);
	    var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight));
	    dateLeft.setDate(dateLeft.getDate() - sign * difference);
	    var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign;
	    return sign * (difference - isLastDayNotFull);
	}
	module.exports = differenceInDays;
	


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(34);
	var MILLISECONDS_IN_HOUR = 3600000;
	function differenceInHours(dirtyDateLeft, dirtyDateRight) {
	    var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR;
	    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
	}
	module.exports = differenceInHours;
	


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    return dateLeft.getTime() - dateRight.getTime();
	}
	module.exports = differenceInMilliseconds;
	


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInCalendarISOYears = __webpack_require__(26);
	var compareAsc = __webpack_require__(23);
	var subISOYears = __webpack_require__(36);
	function differenceInISOYears(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var sign = compareAsc(dateLeft, dateRight);
	    var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight));
	    dateLeft = subISOYears(dateLeft, sign * difference);
	    var isLastISOYearNotFull = compareAsc(dateLeft, dateRight) === -sign;
	    return sign * (difference - isLastISOYearNotFull);
	}
	module.exports = differenceInISOYears;
	


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var addISOYears = __webpack_require__(5);
	function subISOYears(dirtyDate, amount) {
	    return addISOYears(dirtyDate, -amount);
	}
	module.exports = subISOYears;
	


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(34);
	var MILLISECONDS_IN_MINUTE = 60000;
	function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
	    var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
	    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
	}
	module.exports = differenceInMinutes;
	


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInCalendarMonths = __webpack_require__(27);
	var compareAsc = __webpack_require__(23);
	function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var sign = compareAsc(dateLeft, dateRight);
	    var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
	    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
	    var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
	    return sign * (difference - isLastMonthNotFull);
	}
	module.exports = differenceInMonths;
	


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var differenceInMonths = __webpack_require__(38);
	function differenceInQuarters(dirtyDateLeft, dirtyDateRight) {
	    var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3;
	    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
	}
	module.exports = differenceInQuarters;
	


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(34);
	function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
	    var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000;
	    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
	}
	module.exports = differenceInSeconds;
	


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var differenceInDays = __webpack_require__(32);
	function differenceInWeeks(dirtyDateLeft, dirtyDateRight) {
	    var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7;
	    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
	}
	module.exports = differenceInWeeks;
	


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInCalendarYears = __webpack_require__(31);
	var compareAsc = __webpack_require__(23);
	function differenceInYears(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var sign = compareAsc(dateLeft, dateRight);
	    var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight));
	    dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference);
	    var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign;
	    return sign * (difference - isLastYearNotFull);
	}
	module.exports = differenceInYears;
	


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isBefore = __webpack_require__(44);
	var parse = __webpack_require__(2);
	var differenceInSeconds = __webpack_require__(40);
	var differenceInMonths = __webpack_require__(38);
	var MINUTES_IN_DAY = 1440;
	var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
	var MINUTES_IN_MONTH = 43200;
	var MINUTES_IN_TWO_MONTHS = 86400;
	function distanceInWords(dirtyDateFrom, dirtyDateTo, options) {
	    var dateTo, dateFrom;
	    if (isBefore(dirtyDateFrom, dirtyDateTo)) {
	        dateFrom = parse(dirtyDateFrom);
	        dateTo = parse(dirtyDateTo);
	    } else {
	        dateFrom = parse(dirtyDateTo);
	        dateTo = parse(dirtyDateFrom);
	    }
	    var includeSeconds = options ? options.includeSeconds : false;
	    var seconds = differenceInSeconds(dateTo, dateFrom);
	    var offset = dateTo.getTimezoneOffset() - dateFrom.getTimezoneOffset();
	    var minutes = Math.round(seconds / 60) - offset;
	    var months;
	    if (minutes < 2) {
	        if (includeSeconds) {
	            if (seconds < 5) {
	                return translate('lessThanXSeconds', 5);
	            } else if (seconds < 10) {
	                return translate('lessThanXSeconds', 10);
	            } else if (seconds < 20) {
	                return translate('lessThanXSeconds', 20);
	            } else if (seconds < 40) {
	                return translate('halfAMinute');
	            } else if (seconds < 60) {
	                return translate('lessThanXMinutes', 1);
	            } else {
	                return translate('xMinutes', 1);
	            }
	        } else {
	            if (minutes === 0) {
	                return translate('lessThanXMinutes', 1);
	            } else {
	                return translate('xMinutes', minutes);
	            }
	        }
	    } else if (minutes < 45) {
	        return translate('xMinutes', minutes);
	    } else if (minutes < 90) {
	        return translate('aboutXHours', 1);
	    } else if (minutes < MINUTES_IN_DAY) {
	        var hours = Math.round(minutes / 60);
	        return translate('aboutXHours', hours);
	    } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
	        return translate('xDays', 1);
	    } else if (minutes < MINUTES_IN_MONTH) {
	        var days = Math.round(minutes / MINUTES_IN_DAY);
	        return translate('xDays', days);
	    } else if (minutes < MINUTES_IN_TWO_MONTHS) {
	        months = Math.round(minutes / MINUTES_IN_MONTH);
	        return translate('aboutXMonths', months);
	    }
	    months = differenceInMonths(dateTo, dateFrom);
	    if (months < 12) {
	        var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
	        return translate('xMonths', nearestMonth);
	    } else {
	        var monthsSinceStartOfYear = months % 12;
	        var years = Math.floor(months / 12);
	        if (monthsSinceStartOfYear < 3) {
	            return translate('aboutXYears', years);
	        } else if (monthsSinceStartOfYear < 9) {
	            return translate('overXYears', years);
	        } else {
	            return translate('almostXYears', years + 1);
	        }
	    }
	}
	function translate(token, count) {
	    if (count === undefined) {
	        return locale[token];
	    } else if (count === 1) {
	        return locale[token].one;
	    } else {
	        return locale[token].other.replace('${count}', count);
	    }
	}
	var locale = {
	    lessThanXSeconds: {
	        one: 'less than a second',
	        other: 'less than ${count} seconds'
	    },
	    halfAMinute: 'half a minute',
	    lessThanXMinutes: {
	        one: 'less than a minute',
	        other: 'less than ${count} minutes'
	    },
	    xMinutes: {
	        one: '1 minute',
	        other: '${count} minutes'
	    },
	    aboutXHours: {
	        one: 'about 1 hour',
	        other: 'about ${count} hours'
	    },
	    xDays: {
	        one: '1 day',
	        other: '${count} days'
	    },
	    aboutXMonths: {
	        one: 'about 1 month',
	        other: 'about ${count} months'
	    },
	    xMonths: {
	        one: '1 month',
	        other: '${count} months'
	    },
	    aboutXYears: {
	        one: 'about 1 year',
	        other: 'about ${count} years'
	    },
	    overXYears: {
	        one: 'over 1 year',
	        other: 'over ${count} years'
	    },
	    almostXYears: {
	        one: 'almost 1 year',
	        other: 'almost ${count} years'
	    }
	};
	module.exports = distanceInWords;
	


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isBefore(dirtyDateToCompare, dirtyDate) {
	    var dateToCompare = parse(dirtyDateToCompare);
	    var date = parse(dirtyDate);
	    return dateToCompare.getTime() < date.getTime();
	}
	module.exports = isBefore;
	


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var distanceInWords = __webpack_require__(43);
	function distanceInWordsToNow(dirtyDate, options) {
	    return distanceInWords(dirtyDate, Date.now(), options);
	}
	module.exports = distanceInWordsToNow;
	


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function eachDay(dirtyStartDate, dirtyEndDate) {
	    var startDate = parse(dirtyStartDate);
	    var endDate = parse(dirtyEndDate);
	    var endTime = endDate.getTime();
	    if (startDate.getTime() > endTime) {
	        throw new Error('The first date cannot be after the second date');
	    }
	    var dates = [];
	    var currentDate = startDate;
	    currentDate.setHours(0, 0, 0, 0);
	    while (currentDate.getTime() <= endTime) {
	        dates.push(new Date(currentDate));
	        currentDate.setDate(currentDate.getDate() + 1);
	    }
	    return dates;
	}
	module.exports = eachDay;
	


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function endOfDay(dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setHours(23, 59, 59, 999);
	    return date;
	}
	module.exports = endOfDay;
	


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function endOfHour(dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setMinutes(59, 59, 999);
	    return date;
	}
	module.exports = endOfHour;
	


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var endOfWeek = __webpack_require__(50);
	function endOfISOWeek(dirtyDate) {
	    return endOfWeek(dirtyDate, { weekStartsOn: 1 });
	}
	module.exports = endOfISOWeek;
	


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function endOfWeek(dirtyDate, options) {
	    var weekStartsOn = options ? options.weekStartsOn || 0 : 0;
	    var date = parse(dirtyDate);
	    var day = date.getDay();
	    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
	    date.setDate(date.getDate() + diff);
	    date.setHours(23, 59, 59, 999);
	    return date;
	}
	module.exports = endOfWeek;
	


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(6);
	var startOfISOWeek = __webpack_require__(7);
	function endOfISOYear(dirtyDate) {
	    var year = getISOYear(dirtyDate);
	    var date = startOfISOWeek(new Date(year + 1, 0, 4));
	    date.setMilliseconds(date.getMilliseconds() - 1);
	    return date;
	}
	module.exports = endOfISOYear;
	


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function endOfMinute(dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setSeconds(59, 999);
	    return date;
	}
	module.exports = endOfMinute;
	


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function endOfMonth(dirtyDate) {
	    var date = parse(dirtyDate);
	    var month = date.getMonth();
	    date.setFullYear(date.getFullYear(), month + 1, 0);
	    date.setHours(23, 59, 59, 999);
	    return date;
	}
	module.exports = endOfMonth;
	


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function endOfQuarter(dirtyDate) {
	    var date = parse(dirtyDate);
	    var currentMonth = date.getMonth();
	    var month = currentMonth - currentMonth % 3 + 3;
	    date.setMonth(month, 0);
	    date.setHours(23, 59, 59, 999);
	    return date;
	}
	module.exports = endOfQuarter;
	


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function endOfSecond(dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setMilliseconds(999);
	    return date;
	}
	module.exports = endOfSecond;
	


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var endOfDay = __webpack_require__(47);
	function endOfToday() {
	    return endOfDay(new Date());
	}
	module.exports = endOfToday;
	


/***/ },
/* 57 */
/***/ function(module, exports) {

	function endOfTomorrow() {
	    var now = new Date();
	    var year = now.getFullYear();
	    var month = now.getMonth();
	    var day = now.getDate();
	    return new Date(year, month, day + 1, 23, 59, 59, 999);
	}
	module.exports = endOfTomorrow;
	


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function endOfYear(dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    date.setFullYear(year + 1, 0, 0);
	    date.setHours(23, 59, 59, 999);
	    return date;
	}
	module.exports = endOfYear;
	


/***/ },
/* 59 */
/***/ function(module, exports) {

	function endOfYesterday() {
	    var now = new Date();
	    var year = now.getFullYear();
	    var month = now.getMonth();
	    var day = now.getDate();
	    return new Date(year, month, day - 1, 23, 59, 59, 999);
	}
	module.exports = endOfYesterday;
	


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var getDayOfYear = __webpack_require__(61);
	var getISOWeek = __webpack_require__(63);
	var getISOYear = __webpack_require__(6);
	var parse = __webpack_require__(2);
	function format(dirtyDate, format) {
	    var date = parse(dirtyDate);
	    if (!format) {
	        format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
	    }
	    var formatFunction = makeFormatFunction(format);
	    return formatFunction(date);
	}
	var formats = {
	    'M': function () {
	        return this.getMonth() + 1;
	    },
	    'MM': function () {
	        return addLeadingZeros(this.getMonth() + 1, 2);
	    },
	    'MMM': function () {
	        return locale.monthsShort[this.getMonth()];
	    },
	    'MMMM': function () {
	        return locale.months[this.getMonth()];
	    },
	    'Q': function () {
	        return Math.ceil((this.getMonth() + 1) / 3);
	    },
	    'D': function () {
	        return this.getDate();
	    },
	    'DD': function () {
	        return addLeadingZeros(this.getDate(), 2);
	    },
	    'DDD': function () {
	        return getDayOfYear(this);
	    },
	    'DDDD': function () {
	        return addLeadingZeros(getDayOfYear(this), 3);
	    },
	    'd': function () {
	        return this.getDay();
	    },
	    'dd': function () {
	        return locale.dayNamesMin[this.getDay()];
	    },
	    'ddd': function () {
	        return locale.dayNamesShort[this.getDay()];
	    },
	    'dddd': function () {
	        return locale.dayNames[this.getDay()];
	    },
	    'E': function () {
	        return this.getDay() || 7;
	    },
	    'W': function () {
	        return getISOWeek(this);
	    },
	    'WW': function () {
	        return addLeadingZeros(getISOWeek(this), 2);
	    },
	    'YY': function () {
	        return String(this.getFullYear()).substr(2);
	    },
	    'YYYY': function () {
	        return this.getFullYear();
	    },
	    'GG': function () {
	        return String(getISOYear(this)).substr(2);
	    },
	    'GGGG': function () {
	        return getISOYear(this);
	    },
	    'A': function () {
	        return this.getHours() / 12 >= 1 ? 'PM' : 'AM';
	    },
	    'a': function () {
	        return this.getHours() / 12 >= 1 ? 'pm' : 'am';
	    },
	    'aa': function () {
	        return this.getHours() / 12 >= 1 ? 'p.m.' : 'a.m.';
	    },
	    'H': function () {
	        return this.getHours();
	    },
	    'HH': function () {
	        return addLeadingZeros(this.getHours(), 2);
	    },
	    'h': function () {
	        var hours = this.getHours();
	        if (hours === 0) {
	            return 12;
	        } else if (hours > 12) {
	            return hours % 12;
	        } else {
	            return hours;
	        }
	    },
	    'hh': function () {
	        return addLeadingZeros(formats['h'].apply(this), 2);
	    },
	    'm': function () {
	        return this.getMinutes();
	    },
	    'mm': function () {
	        return addLeadingZeros(this.getMinutes(), 2);
	    },
	    's': function () {
	        return this.getSeconds();
	    },
	    'ss': function () {
	        return addLeadingZeros(this.getSeconds(), 2);
	    },
	    'S': function () {
	        return Math.floor(this.getMilliseconds() / 100);
	    },
	    'SS': function () {
	        return Math.floor(this.getMilliseconds() / 10);
	    },
	    'SSS': function () {
	        return this.getMilliseconds();
	    },
	    'Z': function () {
	        return formatTimezone(this.getTimezoneOffset(), ':');
	    },
	    'ZZ': function () {
	        return formatTimezone(this.getTimezoneOffset());
	    },
	    'X': function () {
	        return Math.floor(this.getTime() / 1000);
	    },
	    'x': function () {
	        return this.getTime();
	    }
	};
	var ordinalFunctions = [
	    'M',
	    'D',
	    'DDD',
	    'd',
	    'Q',
	    'W'
	];
	ordinalFunctions.forEach(function (functionName) {
	    formats[functionName + 'o'] = function () {
	        return locale.ordinal(formats[functionName].apply(this));
	    };
	});
	var formattingTokens = Object.keys(formats).sort().reverse();
	var formattingTokensRegexp = new RegExp('(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g');
	function makeFormatFunction(format) {
	    var array = format.match(formattingTokensRegexp);
	    var length = array.length;
	    for (var i = 0; i < length; i++) {
	        if (formats[array[i]]) {
	            array[i] = formats[array[i]];
	        } else {
	            array[i] = removeFormattingTokens(array[i]);
	        }
	    }
	    return function (mom) {
	        var output = '';
	        for (var i = 0; i < length; i++) {
	            if (array[i] instanceof Function) {
	                output += array[i].call(mom, format);
	            } else {
	                output += array[i];
	            }
	        }
	        return output;
	    };
	}
	function removeFormattingTokens(input) {
	    if (input.match(/\[[\s\S]/)) {
	        return input.replace(/^\[|\]$/g, '');
	    }
	    return input.replace(/\\/g, '');
	}
	function addLeadingZeros(number, targetLength) {
	    var output = String(Math.abs(number));
	    while (output.length < targetLength) {
	        output = '0' + output;
	    }
	    return output;
	}
	function formatTimezone(offset, delimeter) {
	    delimeter = delimeter || '';
	    var sign = offset > 0 ? '-' : '+';
	    var absOffset = Math.abs(offset);
	    var hours = Math.floor(absOffset / 60);
	    var minutes = absOffset % 60;
	    return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2);
	}
	var locale = {
	    ordinal: function (number) {
	        if (number > 20 || number < 10) {
	            switch (number % 10) {
	            case 1:
	                return number + 'st';
	            case 2:
	                return number + 'nd';
	            case 3:
	                return number + 'rd';
	            }
	        }
	        return number + 'th';
	    },
	    months: [
	        'January',
	        'February',
	        'March',
	        'April',
	        'May',
	        'June',
	        'July',
	        'August',
	        'September',
	        'October',
	        'November',
	        'December'
	    ],
	    monthsShort: [
	        'Jan',
	        'Feb',
	        'Mar',
	        'Apr',
	        'May',
	        'Jun',
	        'Jul',
	        'Aug',
	        'Sep',
	        'Oct',
	        'Nov',
	        'Dec'
	    ],
	    dayNames: [
	        'Sunday',
	        'Monday',
	        'Tuesday',
	        'Wednesday',
	        'Thursday',
	        'Friday',
	        'Saturday'
	    ],
	    dayNamesShort: [
	        'Sun',
	        'Mon',
	        'Tue',
	        'Wed',
	        'Thu',
	        'Fri',
	        'Sat'
	    ],
	    dayNamesMin: [
	        'Su',
	        'Mo',
	        'Tu',
	        'We',
	        'Th',
	        'Fr',
	        'Sa'
	    ]
	};
	module.exports = format;
	


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfYear = __webpack_require__(62);
	var differenceInCalendarDays = __webpack_require__(11);
	function getDayOfYear(dirtyDate) {
	    var date = parse(dirtyDate);
	    var diff = differenceInCalendarDays(date, startOfYear(date));
	    var dayOfYear = diff + 1;
	    return dayOfYear;
	}
	module.exports = getDayOfYear;
	


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function startOfYear(dirtyDate) {
	    var cleanDate = parse(dirtyDate);
	    var date = new Date(cleanDate.getFullYear(), 0, 1, 0, 0, 0, 0);
	    return date;
	}
	module.exports = startOfYear;
	


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfISOWeek = __webpack_require__(7);
	var startOfISOYear = __webpack_require__(10);
	var MILLISECONDS_IN_WEEK = 604800000;
	function getISOWeek(dirtyDate) {
	    var date = parse(dirtyDate);
	    var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime();
	    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
	}
	module.exports = getISOWeek;
	


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function getDate(dirtyDate) {
	    var date = parse(dirtyDate);
	    var dayOfMonth = date.getDate();
	    return dayOfMonth;
	}
	module.exports = getDate;
	


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function getDay(dirtyDate) {
	    var date = parse(dirtyDate);
	    var day = date.getDay();
	    return day;
	}
	module.exports = getDay;
	


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isLeapYear = __webpack_require__(67);
	function getDaysInYear(dirtyDate) {
	    return isLeapYear(dirtyDate) ? 366 : 365;
	}
	module.exports = getDaysInYear;
	


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isLeapYear(dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
	}
	module.exports = isLeapYear;
	


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function getHours(dirtyDate) {
	    var date = parse(dirtyDate);
	    var hours = date.getHours();
	    return hours;
	}
	module.exports = getHours;
	


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var startOfISOYear = __webpack_require__(10);
	var addWeeks = __webpack_require__(19);
	var MILLISECONDS_IN_WEEK = 604800000;
	function getISOWeeksInYear(dirtyDate) {
	    var thisYear = startOfISOYear(dirtyDate);
	    var nextYear = startOfISOYear(addWeeks(thisYear, 60));
	    var diff = nextYear.valueOf() - thisYear.valueOf();
	    return Math.round(diff / MILLISECONDS_IN_WEEK);
	}
	module.exports = getISOWeeksInYear;
	


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function getMilliseconds(dirtyDate) {
	    var date = parse(dirtyDate);
	    var milliseconds = date.getMilliseconds();
	    return milliseconds;
	}
	module.exports = getMilliseconds;
	


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function getMinutes(dirtyDate) {
	    var date = parse(dirtyDate);
	    var minutes = date.getMinutes();
	    return minutes;
	}
	module.exports = getMinutes;
	


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function getMonth(dirtyDate) {
	    var date = parse(dirtyDate);
	    var month = date.getMonth();
	    return month;
	}
	module.exports = getMonth;
	


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function getSeconds(dirtyDate) {
	    var date = parse(dirtyDate);
	    var seconds = date.getSeconds();
	    return seconds;
	}
	module.exports = getSeconds;
	


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function getYear(dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    return year;
	}
	module.exports = getYear;
	


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isAfter(dirtyDateToCompare, dirtyDate) {
	    var dateToCompare = parse(dirtyDateToCompare);
	    var date = parse(dirtyDate);
	    return dateToCompare.getTime() > date.getTime();
	}
	module.exports = isAfter;
	


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isEqual(dirtyLeftDate, dirtyRightDate) {
	    var dateLeft = parse(dirtyLeftDate);
	    var dateRight = parse(dirtyRightDate);
	    return dateLeft.getTime() === dateRight.getTime();
	}
	module.exports = isEqual;
	


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isFirstDayOfMonth(dirtyDate) {
	    return parse(dirtyDate).getDate() === 1;
	}
	module.exports = isFirstDayOfMonth;
	


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isFriday(dirtyDate) {
	    return parse(dirtyDate).getDay() === 5;
	}
	module.exports = isFriday;
	


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isFuture(dirtyDate) {
	    return parse(dirtyDate).getTime() > new Date().getTime();
	}
	module.exports = isFuture;
	


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var endOfDay = __webpack_require__(47);
	var endOfMonth = __webpack_require__(53);
	function isLastDayOfMonth(dirtyDate) {
	    var date = parse(dirtyDate);
	    return endOfDay(date).getTime() === endOfMonth(date).getTime();
	}
	module.exports = isLastDayOfMonth;
	


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isMonday(dirtyDate) {
	    return parse(dirtyDate).getDay() === 1;
	}
	module.exports = isMonday;
	


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isPast(dirtyDate) {
	    return parse(dirtyDate).getTime() < new Date().getTime();
	}
	module.exports = isPast;
	


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(12);
	function isSameDay(dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
	    var dateRightStartOfDay = startOfDay(dirtyDateRight);
	    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
	}
	module.exports = isSameDay;
	


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var startOfHour = __webpack_require__(85);
	function isSameHour(dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfHour = startOfHour(dirtyDateLeft);
	    var dateRightStartOfHour = startOfHour(dirtyDateRight);
	    return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
	}
	module.exports = isSameHour;
	


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function startOfHour(dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setMinutes(0, 0, 0);
	    return date;
	}
	module.exports = startOfHour;
	


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var isSameWeek = __webpack_require__(87);
	function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
	    return isSameWeek(dirtyDateLeft, dirtyDateRight, { weekStartsOn: 1 });
	}
	module.exports = isSameISOWeek;
	


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(8);
	function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
	    var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, options);
	    var dateRightStartOfWeek = startOfWeek(dirtyDateRight, options);
	    return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
	}
	module.exports = isSameWeek;
	


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var startOfISOYear = __webpack_require__(10);
	function isSameISOYear(dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft);
	    var dateRightStartOfYear = startOfISOYear(dirtyDateRight);
	    return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
	}
	module.exports = isSameISOYear;
	


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var startOfMinute = __webpack_require__(90);
	function isSameMinute(dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft);
	    var dateRightStartOfMinute = startOfMinute(dirtyDateRight);
	    return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
	}
	module.exports = isSameMinute;
	


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function startOfMinute(dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setSeconds(0, 0);
	    return date;
	}
	module.exports = startOfMinute;
	


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isSameMonth(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
	}
	module.exports = isSameMonth;
	


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var startOfQuarter = __webpack_require__(93);
	function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft);
	    var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight);
	    return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
	}
	module.exports = isSameQuarter;
	


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function startOfQuarter(dirtyDate) {
	    var date = parse(dirtyDate);
	    var currentMonth = date.getMonth();
	    var month = currentMonth - currentMonth % 3;
	    date.setMonth(month, 1);
	    date.setHours(0, 0, 0, 0);
	    return date;
	}
	module.exports = startOfQuarter;
	


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var startOfSecond = __webpack_require__(95);
	function isSameSecond(dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft);
	    var dateRightStartOfSecond = startOfSecond(dirtyDateRight);
	    return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
	}
	module.exports = isSameSecond;
	


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function startOfSecond(dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setMilliseconds(0);
	    return date;
	}
	module.exports = startOfSecond;
	


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isSameYear(dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    return dateLeft.getFullYear() === dateRight.getFullYear();
	}
	module.exports = isSameYear;
	


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isSaturday(dirtyDate) {
	    return parse(dirtyDate).getDay() === 6;
	}
	module.exports = isSaturday;
	


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isSunday(dirtyDate) {
	    return parse(dirtyDate).getDay() === 0;
	}
	module.exports = isSunday;
	


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var isSameHour = __webpack_require__(84);
	function isThisHour(dirtyDate) {
	    return isSameHour(new Date(), dirtyDate);
	}
	module.exports = isThisHour;
	


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var isSameISOWeek = __webpack_require__(86);
	function isThisISOWeek(dirtyDate) {
	    return isSameISOWeek(new Date(), dirtyDate);
	}
	module.exports = isThisISOWeek;
	


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var isSameISOYear = __webpack_require__(88);
	function isThisISOYear(dirtyDate) {
	    return isSameISOYear(new Date(), dirtyDate);
	}
	module.exports = isThisISOYear;
	


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var isSameMinute = __webpack_require__(89);
	function isThisMinute(dirtyDate) {
	    return isSameMinute(new Date(), dirtyDate);
	}
	module.exports = isThisMinute;
	


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var isSameMonth = __webpack_require__(91);
	function isThisMonth(dirtyDate) {
	    return isSameMonth(new Date(), dirtyDate);
	}
	module.exports = isThisMonth;
	


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var isSameQuarter = __webpack_require__(92);
	function isThisQuarter(dirtyDate) {
	    return isSameQuarter(new Date(), dirtyDate);
	}
	module.exports = isThisQuarter;
	


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var isSameSecond = __webpack_require__(94);
	function isThisSecond(dirtyDate) {
	    return isSameSecond(new Date(), dirtyDate);
	}
	module.exports = isThisSecond;
	


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var isSameWeek = __webpack_require__(87);
	function isThisWeek(dirtyDate, options) {
	    return isSameWeek(new Date(), dirtyDate, options);
	}
	module.exports = isThisWeek;
	


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var isSameYear = __webpack_require__(96);
	function isThisYear(dirtyDate) {
	    return isSameYear(new Date(), dirtyDate);
	}
	module.exports = isThisYear;
	


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isThursday(dirtyDate) {
	    return parse(dirtyDate).getDay() === 4;
	}
	module.exports = isThursday;
	


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(12);
	function isToday(dirtyDate) {
	    return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime();
	}
	module.exports = isToday;
	


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(12);
	function isTomorrow(dirtyDate) {
	    var tomorrow = new Date();
	    tomorrow.setDate(tomorrow.getDate() + 1);
	    return startOfDay(dirtyDate).getTime() === startOfDay(tomorrow).getTime();
	}
	module.exports = isTomorrow;
	


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isTuesday(dirtyDate) {
	    return parse(dirtyDate).getDay() === 2;
	}
	module.exports = isTuesday;
	


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(3);
	function isValid(date) {
	    if (isDate(date)) {
	        return !isNaN(date);
	    } else {
	        throw new TypeError(toString.call(date) + ' is not an instance of Date');
	    }
	}
	module.exports = isValid;
	


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isWednesday(dirtyDate) {
	    return parse(dirtyDate).getDay() === 3;
	}
	module.exports = isWednesday;
	


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isWeekend(dirtyDate) {
	    var date = parse(dirtyDate);
	    var day = date.getDay();
	    return day === 0 || day === 6;
	}
	module.exports = isWeekend;
	


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function isWithinRange(dirtyDate, dirtyStartDate, dirtyEndDate) {
	    var time = parse(dirtyDate).getTime();
	    var startTime = parse(dirtyStartDate).getTime();
	    var endTime = parse(dirtyEndDate).getTime();
	    if (startTime > endTime) {
	        throw new Error('The start of the range cannot be after the end of the range');
	    }
	    return time >= startTime && time <= endTime;
	}
	module.exports = isWithinRange;
	


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(12);
	function isYesterday(dirtyDate) {
	    var yesterday = new Date();
	    yesterday.setDate(yesterday.getDate() - 1);
	    return startOfDay(dirtyDate).getTime() === startOfDay(yesterday).getTime();
	}
	module.exports = isYesterday;
	


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var lastDayOfWeek = __webpack_require__(118);
	function lastDayOfISOWeek(dirtyDate) {
	    return lastDayOfWeek(dirtyDate, { weekStartsOn: 1 });
	}
	module.exports = lastDayOfISOWeek;
	


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function lastDayOfWeek(dirtyDate, options) {
	    var weekStartsOn = options ? options.weekStartsOn || 0 : 0;
	    var date = parse(dirtyDate);
	    var day = date.getDay();
	    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
	    date.setHours(0, 0, 0, 0);
	    date.setDate(date.getDate() + diff);
	    return date;
	}
	module.exports = lastDayOfWeek;
	


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(6);
	var startOfISOWeek = __webpack_require__(7);
	function lastDayOfISOYear(dirtyDate) {
	    var year = getISOYear(dirtyDate);
	    var date = startOfISOWeek(new Date(year + 1, 0, 4));
	    date.setDate(date.getDate() - 1);
	    return date;
	}
	module.exports = lastDayOfISOYear;
	


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function lastDayOfMonth(dirtyDate) {
	    var date = parse(dirtyDate);
	    var month = date.getMonth();
	    date.setFullYear(date.getFullYear(), month + 1, 0);
	    date.setHours(0, 0, 0, 0);
	    return date;
	}
	module.exports = lastDayOfMonth;
	


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function lastDayOfQuarter(dirtyDate) {
	    var date = parse(dirtyDate);
	    var currentMonth = date.getMonth();
	    var month = currentMonth - currentMonth % 3 + 3;
	    date.setMonth(month, 0);
	    date.setHours(0, 0, 0, 0);
	    return date;
	}
	module.exports = lastDayOfQuarter;
	


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function lastDayOfYear(dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    date.setFullYear(year + 1, 0, 0);
	    date.setHours(0, 0, 0, 0);
	    return date;
	}
	module.exports = lastDayOfYear;
	


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function max() {
	    var dirtyDates = Array.prototype.slice.call(arguments);
	    var dates = dirtyDates.map(function (dirtyDate) {
	        return parse(dirtyDate);
	    });
	    var latestDirtyDate = Math.max.apply(null, dates);
	    return new Date(latestDirtyDate);
	}
	module.exports = max;
	


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function min() {
	    var dirtyDates = Array.prototype.slice.call(arguments);
	    var dates = dirtyDates.map(function (dirtyDate) {
	        return parse(dirtyDate);
	    });
	    var earliestDirtyDate = Math.min.apply(null, dates);
	    return new Date(earliestDirtyDate);
	}
	module.exports = min;
	


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function setDate(dirtyDate, dayOfMonth) {
	    var date = parse(dirtyDate);
	    date.setDate(dayOfMonth);
	    return date;
	}
	module.exports = setDate;
	


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var addDays = __webpack_require__(1);
	function setDay(dirtyDate, day, options) {
	    var weekStartsOn = options ? options.weekStartsOn || 0 : 0;
	    var date = parse(dirtyDate);
	    var currentDay = date.getDay();
	    var remainder = day % 7;
	    var dayIndex = (remainder + 7) % 7;
	    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
	    return addDays(date, diff);
	}
	module.exports = setDay;
	


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function setDayOfYear(dirtyDate, dayOfYear) {
	    var date = parse(dirtyDate);
	    date.setMonth(0);
	    date.setDate(dayOfYear);
	    return date;
	}
	module.exports = setDayOfYear;
	


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function setHours(dirtyDate, hours) {
	    var date = parse(dirtyDate);
	    date.setHours(hours);
	    return date;
	}
	module.exports = setHours;
	


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getISOWeek = __webpack_require__(63);
	function setISOWeek(dirtyDate, isoWeek) {
	    var date = parse(dirtyDate);
	    var diff = getISOWeek(date) - isoWeek;
	    date.setDate(date.getDate() - diff * 7);
	    return date;
	}
	module.exports = setISOWeek;
	


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function setMilliseconds(dirtyDate, milliseconds) {
	    var date = parse(dirtyDate);
	    date.setMilliseconds(milliseconds);
	    return date;
	}
	module.exports = setMilliseconds;
	


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function setMinutes(dirtyDate, minutes) {
	    var date = parse(dirtyDate);
	    date.setMinutes(minutes);
	    return date;
	}
	module.exports = setMinutes;
	


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getDaysInMonth = __webpack_require__(16);
	function setMonth(dirtyDate, month) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    var day = date.getDate();
	    var daysInMonth = getDaysInMonth(new Date(year, month));
	    date.setMonth(month, Math.min(day, daysInMonth));
	    return date;
	}
	module.exports = setMonth;
	


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var setMonth = __webpack_require__(132);
	function setQuarter(dirtyDate, quarter) {
	    var date = parse(dirtyDate);
	    var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
	    var diff = quarter - oldQuarter;
	    return setMonth(date, date.getMonth() + diff * 3);
	}
	module.exports = setQuarter;
	


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function setSeconds(dirtyDate, seconds) {
	    var date = parse(dirtyDate);
	    date.setSeconds(seconds);
	    return date;
	}
	module.exports = setSeconds;
	


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function setYear(dirtyDate, year) {
	    var date = parse(dirtyDate);
	    date.setFullYear(year);
	    return date;
	}
	module.exports = setYear;
	


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	function startOfMonth(dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setDate(1);
	    date.setHours(0, 0, 0, 0);
	    return date;
	}
	module.exports = startOfMonth;
	


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(12);
	function startOfToday() {
	    return startOfDay(new Date());
	}
	module.exports = startOfToday;
	


/***/ },
/* 138 */
/***/ function(module, exports) {

	function startOfTomorrow() {
	    var now = new Date();
	    var year = now.getFullYear();
	    var month = now.getMonth();
	    var day = now.getDate();
	    return new Date(year, month, day + 1);
	}
	module.exports = startOfTomorrow;
	


/***/ },
/* 139 */
/***/ function(module, exports) {

	function startOfYesterday() {
	    var now = new Date();
	    var year = now.getFullYear();
	    var month = now.getMonth();
	    var day = now.getDate();
	    return new Date(year, month, day - 1);
	}
	module.exports = startOfYesterday;
	


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(1);
	function subDays(dirtyDate, amount) {
	    return addDays(dirtyDate, -amount);
	}
	module.exports = subDays;
	


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var addHours = __webpack_require__(4);
	function subHours(dirtyDate, amount) {
	    return addHours(dirtyDate, -amount);
	}
	module.exports = subHours;
	


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var addMilliseconds = __webpack_require__(13);
	function subMilliseconds(dirtyDate, amount) {
	    return addMilliseconds(dirtyDate, -amount);
	}
	module.exports = subMilliseconds;
	


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var addMinutes = __webpack_require__(14);
	function subMinutes(dirtyDate, amount) {
	    return addMinutes(dirtyDate, -amount);
	}
	module.exports = subMinutes;
	


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(15);
	function subMonths(dirtyDate, amount) {
	    return addMonths(dirtyDate, -amount);
	}
	module.exports = subMonths;
	


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var addQuarters = __webpack_require__(17);
	function subQuarters(dirtyDate, amount) {
	    return addQuarters(dirtyDate, -amount);
	}
	module.exports = subQuarters;
	


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var addSeconds = __webpack_require__(18);
	function subSeconds(dirtyDate, amount) {
	    return addSeconds(dirtyDate, -amount);
	}
	module.exports = subSeconds;
	


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var addWeeks = __webpack_require__(19);
	function subWeeks(dirtyDate, amount) {
	    return addWeeks(dirtyDate, -amount);
	}
	module.exports = subWeeks;
	


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var addYears = __webpack_require__(20);
	function subYears(dirtyDate, amount) {
	    return addYears(dirtyDate, -amount);
	}
	module.exports = subYears;
	


/***/ }
/******/ ])
});
;

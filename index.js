'use strict';

module.exports = function isToday (date, convert) {
	if(convert === true) {
		date = new Date(date);
	}

	if (isNaN(Date.parse(date))) {
		throw new TypeError('Expected Date got ' + typeof date);
	}

	return date.toDateString() === new Date().toDateString();
};

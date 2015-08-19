'use strict';

export default function isToday (date, options = {}) {
	const {convert = false, scope = new Date()} = options;
	if(typeof convert !== 'boolean') {
		throw new TypeError('Expected convert option to be a Boolean got ' + typeof convert);
	}

	if(convert === true) {
		date = new Date(date);
	}

	if (isNaN(Date.parse(date))) {
		throw new TypeError('Expected first parameter to be a Date got ' + typeof date);
	}

	return date.toDateString() === scope.toDateString();
};

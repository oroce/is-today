'use strict';

module.exports = function isToday (date, options) {
	options = typeof options === 'undefined' ? {} : options;
	var convert = typeof options.convert === 'undefined' ? false : options.convert;
	var scope = typeof options.scope === 'undefined' ? new Date() : options.scope;

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

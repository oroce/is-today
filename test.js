'use strict';
var assert = require('assert');
var isToday = require('./');

describe('without conversion', function () {
	it('should return true if the date is today', function () {
		assert.equal(isToday(new Date()), true);
	});

	it('should return false if the date is not today', function () {
		assert.equal(isToday(new Date('1977-01-01')), false);
	});

	it('should throw if param is not a date', function () {
		assert.throws(function () {
			isToday('unicorns');
		});
	});

	it('should throw if no param is supplied', function () {
		assert.throws(function () {
			isToday();
		});
	});
});

describe('with conversion', function () {
	it('should return true if the date is today', function () {
		assert.equal(isToday(new Date(), {convert: true}), true);
	});

	it('should return true if converted date is today', function () {
		var testDate = new Date();
		assert.equal(isToday(testDate.toString(), {convert: true}), true);
	});

	it('should return false if the date is not today', function () {
		assert.equal(isToday(new Date('1977-01-01'), {convert: true}), false);
	});

	it('should throw if param is not a date', function () {
		assert.throws(function () {
			isToday('unicorns', {convert: true});
		});
	});

	it('should throw if no param is supplied', function () {
		assert.throws(function () {
			isToday(undefined, {convert: true});
		});
	});

	it('should not convert if the convert argument is not a bool', function () {
		assert.throws(function () {
			isToday('unicorns', {convert: 'true'});
		});
	});
});

describe('with time travel', function () {
	it('should return true if the date is scoped day', function () {
		assert.equal(isToday(new Date('1977-01-01'), {scope: new Date('1977-01-01')}), true);
	});

	it('should return false if the date is not today', function () {
		assert.equal(isToday(new Date('1977-01-01'), {scope: new Date('1978-01-01')}), false);
	});

	it('should not convert if the convert argument is not a bool', function () {
		assert.throws(function () {
			isToday(new Date(), {scope: 'true'});
		});
	});
});

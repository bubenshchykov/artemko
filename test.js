var add = require('.');
var expect = require('chai').expect;

describe('calculator', () => {

	it('add nothing should return 0', () => {
		expect(add()).to.eql(0);
	});

	it('add one number should return same number', () => {
		expect(add('1')).to.eql(1);
	});

	it('add two numbers should return valid result', () => {
		expect(add('1,2')).to.eql(3);
	});

	it('add unkown number of elements should return a valid result', () => {
		expect(add('1,2,3,4,5,6')).to.eql(21);
	});

});

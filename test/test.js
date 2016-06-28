var add = require('../');

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

});
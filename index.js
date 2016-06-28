function add(expression) {
	if (!expression) {
		return 0;
	}

	return expression
		.split(',')
		.map(str => Number.parseFloat(str))
		.reduce((accum, cur) => accum + cur, 0);
}

module.exports = add;

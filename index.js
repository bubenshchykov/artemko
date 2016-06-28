function add(expression) {
	if (!expression) {
		return 0;
	}
	var parts = expression.split(',');

	var res = parts.reduce(function (accum, curr) {
		return accum += +curr;
	}, 0);

	return res;
}

module.exports = add;

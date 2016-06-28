function add(expression) {
	if (!expression) {
		return 0;
	}
	var parts = expression.split(',');
	if (parts.length === 1) {
		return Number.parseFloat(parts[0]);
	}

	var res = parts.reduce(function (accum, curr) {
		return accum += +curr;
	}, 0);

	return res;
}

module.exports = add;

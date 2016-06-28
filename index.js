function add(expression) {
	if (!expression) {
		return 0;
	}
	var parts = expression.split(',');
	if (parts.length === 1) {
		return Number.parseFloat(parts[0]);
	}
	return Number.parseFloat(parts[0]) + Number.parseFloat(parts[1]);
}

module.exports = add;
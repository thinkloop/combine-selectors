module.exports = function (selectors, getState) {
	for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		args[_key - 2] = arguments[_key];
	}

	return Object.keys(selectors).reduce(function (p, selectorKey) {
		Object.defineProperty(p, selectorKey, {
			get: function get() {
				return selectors[selectorKey].apply(selectors, [getState()].concat(args));
			},
			enumerable: true
		});
		return p;
	}, {});
};
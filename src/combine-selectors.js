module.exports = function(selectors, getState, ...args) {
	return Object.keys(selectors).reduce((p, selectorKey) => {
		Object.defineProperty(p, selectorKey, {
			get: function() { return selectors[selectorKey](getState(), ...args) },
			enumerable: true
		});
		return p;
	}, {});
};

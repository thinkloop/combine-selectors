module.exports = function(selectors, ...args) {
	return Object.keys(selectors).reduce((p, selectorKey) => {
		Object.defineProperty(p, selectorKey, {
			get: function() { return selectors[selectorKey](...args) },
			enumerable: true
		});
		return p;
	}, {});
};

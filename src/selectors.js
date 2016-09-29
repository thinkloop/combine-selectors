module.exports = function(selectors, getState) {
	return Object.keys(selectors).reduce((p, selectorKey) => {
		Object.defineProperty(p, selectorKey, {
			get: function() { return selectors[selectorKey](getState()) },
			enumerable: true
		});
		return p;
	}, {});
};

# Selectors
Selectors are deterministic functions that transform state into view-specific structures. Before being passed to views, selectors have to be converted into getter functions, and combined into a single generic object. This micro-lib does that.

### Install
Using npm:

```
npm install 'thinkloop/combine-selectors' --save
```

Or download the latest source of [selectors.js](src/selectors.js).

### Use

```javascript
import combineSelectors from 'combine-selectors';
import { state } from 'todo-redux-state';

import selectedPage from './site/selected-page';
import todos from './todos/todos';

const selectors = {
	selectedPage,
	todos
};

export default combineSelectors(selectors, () => state);

```

### License

Released under an MIT license.

### Related
- [todo-app](https://github.com/thinkloop/todo-app) (integration)

### Like it? Star it

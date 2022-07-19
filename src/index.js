import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { rootReducer } from './store/reduscer/rootReducer';
import Root from './Root';
import './index.scss';

const store = createStore(
	rootReducer,
	compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

render(<Root store={store} />, document.getElementById('root'));

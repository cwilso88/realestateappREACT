import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from './reducers';

ReactDOM.render(<App />, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { rapperEnhancer } from './rapper'

require('./rapper/customFetch')

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    rapperEnhancer()
  ))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

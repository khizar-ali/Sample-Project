import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import collectionApp from './reducers'
import App from './components/App'

// import registerServiceWorker from './registerServiceWorker';

let store = createStore(collectionApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)



// registerServiceWorker();

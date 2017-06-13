import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import collectionApp from './reducers'
import App from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import registerServiceWorker from './registerServiceWorker';

let store = createStore(collectionApp)

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,

  document.getElementById('root')
)



// registerServiceWorker();

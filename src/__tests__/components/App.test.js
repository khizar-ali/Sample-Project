import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui/styles'
import collectionApp from '../../reducers'
import App from '../../components/App'


it('renders without crashing', () => {
  const div = document.createElement('div');

  let store = createStore(collectionApp)

  ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>, div);
});

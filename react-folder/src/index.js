import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes';
import { Router, browserHistory } from 'react-router'
// import { store } from './store'
import '../public/bootstrap/css/bootstrap.css'
import '../public/style/master.css'
import '../public/style/typography.css'
import configureStore from './store/configureStore';

export const store = configureStore()

ReactDOM.render(
  <div className="c">
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
</div>,
  document.getElementById('root')
);

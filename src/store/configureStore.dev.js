import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk'
import rootReducer from '../reducers/root-reducer'
import thunk from 'redux-thunk';
export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    // maybe use promises here?
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
      module.hot.accept('../reducers/root-reducer', () => {
        const nextReducer = require('../reducers/root-reducer');
      // might just be reducers instead of rootReducer?
        store.replaceReducer(nextReducer);
      })
    }

    return store
}

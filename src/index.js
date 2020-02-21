import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageRouter from './PageRouter'; 
import * as serviceWorker from './serviceWorker'; 
import RootReducers from './Reducers/RootReducers';

import {Provider} from 'react-redux'
import { applyMiddleware,compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk' 
 
  const store = createStore(RootReducers,
                           compose(applyMiddleware(logger, thunkMiddleware),
                           window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
                           )
 

    ReactDOM.render( <Provider store={store}>
                        <PageRouter />
                      </Provider>, document.getElementById('root'));

 
serviceWorker.unregister();

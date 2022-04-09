import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.scss';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './redux/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
const root = createRoot(document.getElementById('root'))

sagaMiddleware.run(rootSaga)

root.render(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>)
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import createSagaMiddle from 'redux-saga'
import { helloSaga } from './saga'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddle = createSagaMiddle();
const enhancer = composeEnhancers(
    applyMiddleware(thunk)//将所有中间件组成一个数组，依次执行
);

const store = createStore(reducer, applyMiddleware(sagaMiddle));
sagaMiddle.run(helloSaga)
export default store;
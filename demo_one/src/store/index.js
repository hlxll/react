import {applyMiddleware, createStore} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import rPromise from 'redux-promise'

import {defSaga} from './sagas'
import createSagaMiddleware from 'redux-saga'
//调用函数
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    //如果浏览器窗口有这个插件，就执行这个插件
    applyMiddleware(thunk, rPromise, sagaMiddleware)
)
sagaMiddleware.run(defSaga)
export default store
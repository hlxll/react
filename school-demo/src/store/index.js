import { createStore } from 'redux'
import reducer from './reducer'
import Middleware from './Middleware'

const store = createStore(reducer)

// Middleware([])(store)
export default store
import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import {reducer} from '../reduces/reduce' 
import thunk from 'redux-thunk'


const store = createStore(reducer,applyMiddleware(thunk))

export {store} 
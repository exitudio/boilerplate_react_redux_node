import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import pageReducer from './reducers/pageReducer'
import page1Reducer from '../components/page1/reducer'
import page2Reducer from '../components/page2/reducer'


const logger = createLogger({
    timestamp:true,
    duration:true
})
const middleware = compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)
const allReducers = combineReducers({
    pageReducer,
    page1Reducer,
    page2Reducer
})

export default createStore(allReducers, middleware);



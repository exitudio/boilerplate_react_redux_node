import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import pageReducers from './reducers/pageReducers'
import page1Reducers from '../components/page1/reducers'
import page2Reducers from '../components/page2/reducers'


const logger = createLogger({
    timestamp:true,
    duration:true
})
const middleware = compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)
const allReducers = combineReducers({
    pageReducers,
    page1Reducers,
    page2Reducers
})

export default createStore(allReducers, middleware);



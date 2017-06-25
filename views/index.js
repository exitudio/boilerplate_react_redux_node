import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './redux/store'
import * as PageActions from './redux/actions/pageActions'
import {Provider} from 'react-redux'
import assert from 'assert'

import Layout from './components/main/Layout.jsx'
import Home from './components/home/Home.jsx'
import Page1 from './components/page1/Page1.jsx'
import Page2 from './components/page2/Page2.jsx'
import NotFoundPage from './components/notfoundpage/NotFoundPage.jsx'

const app = document.getElementById('app')
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="home" name="home" component={Home}></Route>
                <Route path="page1" name="page1" component={Page1}></Route>
                <Route path="page2" name="page2" component={Page2}></Route>
                {/*<Route path="page2/:item" name="page2" component={Page2}></Route>*/}
                <Route path='*' component={NotFoundPage} />
            </Route>
        </Router>
    </Provider>,
app)



/*store.subscribe(function(){
    let state = store.getState()
    let currentPage = state.pageReducers.currentPage
    if( currentPage==PageActions.HOME_PAGE){
        browserHistory.push('')
    }else if(currentPage==PageActions.PAGE_2){
        browserHistory.push('page2')
    }
})*/
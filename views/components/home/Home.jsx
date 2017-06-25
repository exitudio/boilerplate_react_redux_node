import React from 'react'
import ReactDom from 'react-dom'
import Home from './Home.scss'


export default class NewsFeed extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("... NewsFeed [render]....")
        console.dir(this.props)
        return(
            <div className="container">
                <div className="list-item-container">
                    
                </div>
            </div>)
    }
}
import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router'
import SignupScss from './Header.scss'

import CollapseAnimateComponent from '../../libs/CollapseAnimateComponent'
import LogoImage from './images/exit.jpg'

import {changePage,HOME_PAGE,PAGE_1,PAGE_2,PAGE_3} from '../../redux/actions/pageActions'
import store from '../../redux/store'

export default class Header extends CollapseAnimateComponent{
    constructor (props) {
        super(props)
        this.state = {...this.state,isMenuMoving:true}
        this.menuTopPx = 50
        //console.log(Data)
    }

    logout = (e)=>{
        e.preventDefault()
        this.props.logoutAction()
    }
    
    componentDidMount(){
        super.setCollapseElement(this.nav)
        super.componentDidMount()
        this.collapseButton.addEventListener("click",this.toggleCollpse)

        window.addEventListener("scroll",(event)=>{
            var isMenuMoving = (event.srcElement.body.scrollTop < this.menuTopPx)
            console.log("moving...",event.srcElement.body.scrollTop, this.menuTopPx)
            if(this.state.isMenuMoving != isMenuMoving ){
                this.setState( {...this.state, isMenuMoving})
            }                
        });
    }
    scrollState(){
        return this.state.isMenuMoving?"":"floating-menu"
    }

    onClickPage = (event)=>{
        // store.dispatch(changePage(event.target.getAttribute('value')))
        // this.props.router.push('/'+event.target.getAttribute('value'))
        console.log(this.props)
        return false
    }

    render(){
        super.render()
        const userLinks = (
            <ul className="navbar navbar-right">
                <li> <a href="#" onClick={this.logout}>Logout</a> </li>
            </ul>
        )
        const guestLinks = (
            <ul className="navbar navbar-right">
                <li> <a href="/signup">Sign up</a> </li>
                <li> <a href="/login">Log in</a> </li>
            </ul>
        )

        return(
            <div className="header-container">
                <div className={`header-fullwidth-container ${this.scrollState()}`}>
                    <div className={`container`}>
                        <div className="page-header">
                            <div className="navbar-header">
                                <div className="brand-wrapper">
                                    <a href="/">
                                        <img className="brand-icon" src={LogoImage}/>
                                    </a>
                                </div>
                                <button ref={(child)=>{this.collapseButton = child;}} type="button" className="hamburger-toggle collapsed">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <nav ref={(child)=>{this.nav = child;}} style={ this.animateStyle }  >
                                <ul className="navbar">
                                    {/*<li> <a href="javascript:void(0)" onClick={this.onClickPage} value={HOME_PAGE}>home</a> </li>
                                    <li> <a href="javascript:void(0)" onClick={this.onClickPage} value={PAGE_1}>page1</a> </li>
                                    <li> <a href="javascript:void(0)" onClick={this.onClickPage} value={PAGE_2}>page2</a> </li>*/}
                                    <li> <Link to={HOME_PAGE}>home</Link> </li>
                                    <li> <Link to={PAGE_1}>page1</Link> </li>
                                    <li> <Link to={PAGE_2}>page2</Link> </li>
                                </ul>
                                {this.props.isAuthenticated?userLinks:guestLinks}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react'
import ReactDom from 'react-dom'
import {connect} from 'react-redux'
import store from '../../redux/store'
import * as Actions from './actions'
import Page2Scss from './Page2.scss'
class Page2 extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        store.dispatch( Actions.changeItemAction(Actions.ITEM_1) )
    }
    changeItem(event){
        store.dispatch( Actions.changeItemAction( event.target.getAttribute('value') ) )
    }

    getClassName(itemName){
        if(itemName==this.props.item){
            return 'red'
        }
        return 'black'
    }
    
    render(){
        return (
            <div>
                <div onClick={this.changeItem} value={Actions.ITEM_1} className={this.getClassName(Actions.ITEM_1)}>item1</div>
                <div onClick={this.changeItem} value={Actions.ITEM_2} className={this.getClassName(Actions.ITEM_2)}>item2</div>
                <div onClick={this.changeItem} value={Actions.ITEM_3} className={this.getClassName(Actions.ITEM_3)}>item3</div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    // console.log('mapStateToProps',state)
    return {item:state.page2Reducer.currentItem}
}
export default connect(mapStateToProps)(Page2)
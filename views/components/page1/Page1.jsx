import React from 'react'
import ReactDom from 'react-dom'
import store from '../../redux/store'
import {connect} from 'react-redux'
import * as Actions from './actions'
import ItemText from './components/ItemText.jsx'

class Page1 extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        store.dispatch(Actions.getItemInStoreAction('random_store_name'))
        console.log(this.a)
    }
    render(){
        let items
        if(this.props.items){
            items = this.props.items.map((item,i)=>{
                return (<div key={i}>
                            <ItemText {...item}></ItemText>
                        </div>)
            })
        }
        return (<div>
            page1
            <div className="container">
                <div ref={child=>{this.a = child}}>
                    {items}
                </div>
            </div>
        </div>)
    }
}


const mapStateToProps=(state)=>{
    // console.log('mapStateToProps',state)
    if(state.page1Reducer.itemsInStore){
        return {items:state.page1Reducer.itemsInStore.items}
    }
    return {items:[]}
}
export default connect(mapStateToProps)(Page1)

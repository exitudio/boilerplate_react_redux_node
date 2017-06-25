import React from 'react'
import ItemTextScss from './ItemText.scss'
const ItemText = (props)=>{
    return (<div>
                <h1 className='name-text'>
                    {props.name}
                </h1>
                <div className='status-text'>
                    {props.status}
                </div>
            </div>)
}
export default ItemText
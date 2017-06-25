import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header.jsx';
import LayoutScss from './Layout.scss';

export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
};
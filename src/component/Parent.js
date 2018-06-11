import React, { Component } from 'react';
import Childrent from './Childrent';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        };
    someMethod() {
        console.log('bar');
    }
    render() {
        return(
            <Childrent parentMethod={this.someMethod}>Hello Parent, {this.props.children}</Childrent>
        )
          
    }
}
export default Parent;
import React, { Component } from 'react';

class Childrent extends React.Component {
    constructor(props) {
        super(props);
        };

    click = () => {
        this.props.parentMethod();
    }

    render() {
        return(
          <div onClick={this.click}>Hello Child</div>
        )
    }
}
export default Childrent;
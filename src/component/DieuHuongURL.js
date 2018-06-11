import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NdPayment from '../screens/ndpayment/NdPayment';
import Home from '../screens/home/Home';

class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />   
                    <Route exact path="/payment" component={NdPayment} />
                </div>
            </Router>
        );
    }
}

export default DieuHuongURL;
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Nav from '../../component/Nav';
import Footer from '../../component/Footer';
import NdPayment from '../ndpayment/NdPayment';
import News from '../news/News';

class Payment extends Component {
  render() {
    return (
      <div style={{overflow:"hidden"}}>
        <Nav/>
        <NdPayment/>
        <News/>
        <Footer/>
      </div>
    );
  }
}

export default Payment;
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Nav from '../../component/Nav';
import '../../App.css'
import { Spin } from 'antd';
class Loadding extends Component {
  render() {
    return (
    <div style={{overflow:"hidden"}}>
        <Nav/>
        <div className="example">
        <Spin />
        </div>    
    </div>
    );
  }
}

export default Loadding;
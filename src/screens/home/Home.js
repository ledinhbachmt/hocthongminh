import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Row } from 'antd';
import { Icon } from 'antd';
import Nav from '../../component/Nav';
import Content from '../Content/Content'
import Slider from '../Slider/Slider';
import Footer from '../../component/Footer';
import Reason from '../Reason/Reason';
import FeedBack from '../FeedBack/FeedBack';
// import Fixxer from '../../component/Fixxer';
// import FeedBackHv from '../feedbackhv/FeedBackHv';
import News from '../news/News';
class Home extends Component {



  render() {
    return (
      <div style={{overflow:"hidden"}}>
        <Nav color="blue"/>
        <Slider/>
        <Content/>
        <FeedBack/>
        <Reason/>
        <Row type="flex" justify="end" align="buttom"  style={{position:"fixed",right:10,bottom:10,zIndex:9999,backgroundColor:"#f88900",color:'white',padding:5}}>
          <Icon type="mail" style={{marginTop:4}}/> Thắc mắc xin để lại lời nhắn nhé!!! <Icon type="up" style={{marginTop:4}}/>
        </Row>        
        <News/>
        {/* <FeedBackHv/> */}
        <Footer/>
      </div>
    );
  }
}

export default Home;





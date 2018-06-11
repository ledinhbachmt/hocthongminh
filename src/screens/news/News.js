import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import {Icon} from 'antd';

class News extends Component {
    render() {
      return (
            <Row id='news' gutter={8} style={{color: 'white',paddingTop: 50,paddingLeft:"15%",paddingRight:"15%",paddingBottom: 40,backgroundImage: "url('http://www.hocthongminh.com/resources/images/hocthongminh/bg-news.jpg')"}}>
                <h1 style={{color:'white'}}>Tin tức liên quan</h1>
                <Col span={6}>
                    <img alt="abc" src="http://storage.googleapis.com/kslearning/images/450687542-1527576887317-rectangle11copy.jpg" style={{width:245,height:248}}/>
                    <h3 style={{color:'white'}}>Danh sách các môn học </h3>
                    <p><Icon type="calendar" />11:50:53 28-03-2018</p>
                    <p style={{paddingRight:30}}>trong ky 2 nam 2017 2018 hoc thong minhs se bo sung 1 so tinh nang moi cho cac truong dai hoc kinh te quoc dan va dai hoc thuoung mai</p>
                </Col>
                <Col span={6}>
                    <img alt="abc" src="http://storage.googleapis.com/kslearning/images/807315495-1527577754035-3.png" style={{width:245,height:248}}/>
                    <h3 style={{color:'white'}}>Danh sách các môn học </h3>
                    <p><Icon type="calendar" />11:50:53 28-03-2018</p>
                    <p style={{paddingRight:30}}>trong ky 2 nam 2017 2018 hoc thong minhs se bo sung 1 so tinh nang moi cho cac truong dai hoc kinh te quoc dan va dai hoc thuoung mai</p>
                </Col>
            </Row>
      );
    }
  }
  
  export default News;
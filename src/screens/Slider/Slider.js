import React, { Component } from 'react';
import { Row } from 'antd';
import { Carousel } from 'antd';

class Slider extends Component {
  render() {
    return (
        <Row id='trangchu' style={{marginTop:60}}>
          <Carousel draggable="true" style={{ width: "100%", height: "100%" }}>
            <div>
              <img alt="abc" style={{ width: "100%", height: "auto", maxHeight: 450 }} src="http://storage.googleapis.com/kslearning/images/615342499-1522635327957-banner_thuphi.png" />
            </div>
            <div>
              <img alt="abc" style={{ width: "100%", height: "auto", maxHeight: 450 }} src="http://storage.googleapis.com/kslearning/images/107430843-1525959440047-phuongthucthanhtoan.png" />
            </div>
          </Carousel>
        </Row>
    );
  }
}

export default Slider;





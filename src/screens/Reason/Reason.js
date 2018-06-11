import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

class Reason extends Component {
  render() {
    return (
      <div style={{overflow:"hidden"}}>
        <Row style={{ textAlign: "center", fontSize: 20, marginTop: 10, marginBottom: 35 }}>
          Tại sao nên chọn chúng tôi
        </Row>
        <Row gutter={32} style={{ paddingLeft: "7%", paddingRight: "7%", marginBottom: 20, textAlign: "center",backgroundImage: "url('http://www.hocthongminh.com/resources/images/hocthongminh/bg-why.png')",backgroundRepeat: 'no-repeat',backgroundSize: '80%',backgroundPosition:'center -70px'}}>
          <Col xs={24} sm={6} md={6} >
            <Row>
              <img alt="abc"style={{ width: "50%" }} src="http://www.hocthongminh.com/resources/images/hocthongminh/cam-ket.png" />
              <div><b>Tính hiệu quả</b></div>
              <div>Cá nhân hoá nội dung theo trình độ và kết quả của người dùng</div>
            </Row>
          </Col>
          <Col  xs={24} sm={6} md={6}>
            <Row>
              <img alt="abc"style={{ width: "50%" }} src="http://www.hocthongminh.com/resources/images/hocthongminh/tinh-hieu-qua.png" />
              <div><b>Tính hiệu quả</b></div>
              <div>Cá nhân hoá nội dung theo trình độ và kết quả của người dùng</div>
            </Row>
          </Col>
          <Col  xs={24} sm={6} md={6} >
            <Row>
              <img alt="abc"style={{ width: "50%" }} src="http://www.hocthongminh.com/resources/images/hocthongminh/tinh-tuong-tac.png" />
              <div><b>Tính hiệu quả</b></div>
              <div>Cá nhân hoá nội dung theo trình độ và kết quả của người dùng</div>
            </Row>
          </Col>
          <Col xs={24} sm={6} md={6} >
            <Row>
              <img alt="abc"style={{ width: "50%" }} src="http://www.hocthongminh.com/resources/images/hocthongminh/tinh-tien-loi.png" />
              <div><b>Tính hiệu quả</b></div>
              <div>Cá nhân hoá nội dung theo trình độ và kết quả của người dùng</div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Reason;





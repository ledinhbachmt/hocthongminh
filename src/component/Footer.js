import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'antd';


class Footer extends Component {
  render() {
    return (
      <Row id='footer' style={{ backgroundColor: "#3d5777", paddingTop: 40,paddingLeft:"5%",paddingRight:"5%" }}>
        <Col span={5}>
          <img alt="abc" src="http://www.hocthongminh.com/resources/images/default/logo.png" style={{ width: 60, height: 60 }} />
          <p>Follow us</p>
          <Icon type="facebook" /><Icon type="google" /><Icon type="twitter" /><Icon type="apple" />
        </Col>
        <Col span={7}>
          <Row style={{ color: "white" }}>
            <h4 style={{ color: "white" }}>Công ty Cổ phần Đầu tư và Phát triển Koolsoft</h4>
            <p>Email: info.hocthongminh@gmail.com<br />
              Địa chỉ: Số 5B N2 TT5, KĐT Bắc Linh Đàm, Phường Đại Kim, Quận Hoàng Mai, TP Hà Nội<br />
              Hotline: Mr. Hoàng Anh 0166.6040.322</p>
          </Row>
        </Col>
      </Row >
    );
  }
}
export default Footer;





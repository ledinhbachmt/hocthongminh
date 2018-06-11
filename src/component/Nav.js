import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Input, Button } from 'antd';
import { Icon } from 'antd';
import LoginModal from '../screens/LoginModal/LoginModal';
import '../App.css';
class Nav extends Component {
  handleClick(text) {
    alert(text);
  }
  handleScrollToElement(e) {
    const tesNode = document.getElementById(e);
    // const tesNode = ReactDOM.findDOMNode('course')
    tesNode.scrollIntoView();
    // window.scrollTo(0, tesNode);
  }

  render() {
    return (
      <div style={{backgroundColor: "white", position: "fixed", top: 0,
      zIndex: 9999, width: "100%"}}>
        <Row type='flex' align='middle' justify='space-between' style={{paddingLeft:'7%',paddingRight:'7%', marginTop:4, marginBottom:8}}>
          <Col>
            HOTLINE: 0166.6040.322 THEO DÕI MXH: <Icon type="facebook" style={{ fontSize: 16, color: '#08c' }} /> <Icon type="google" style={{ fontSize: 16, color: '#de4d42' }} /> <Icon type="skype" style={{ fontSize: 16, color: 'blue' }} />
          </Col>
          <Col>
            <Input placeholder="Tìm kiếm khóa học" style={{borderRadius:17}} />
          </Col>
          <Col type='flex' align='middle' justify='end'>
            <LoginModal/>
          </Col>
        </Row>
        <Row type="flex" style={styles.a}>
          <Col sm={22} md={5} lg={11} className="logo" style={styles.b}>
            <Row type="flex" align="middle" style={styles.c}>
              <img alt="abc"src="http://www.hocthongminh.com/resources/images/default/logo.png" style={styles.d} />
            </Row>
          </Col>
          <Col xs={0} sm={0} md={3} lg={2} className="gutter-row" type="flex" justify="center" align="middle">
            <Row type="flex" justify="center" align="middle" style={styles.c}>
              <div className="gutter-box" onClick={() => this.handleScrollToElement("trangchu")}>TRANG CHỦ </div>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={4} lg={3} className="gutter-row" type="flex" justify="center" align="middle">
            <Row type="flex" justify="center" align="middle" style={styles.c}>
              <div className="gutter-box" onClick={() => this.handleClick("muakhoa")}>MUA KHÓA HỌC</div>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={3} lg={2} className="gutter-row">
            <Row type="flex" justify="center" align="middle" style={styles.c}>
              <div className="gutter-box" onClick={() => this.handleScrollToElement("course")}>KHÓA HỌC</div>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={3} lg={2} className="gutter-row">
            <Row type="flex" justify="center" align="middle" style={styles.c}>
              <div className="gutter-box" onClick={() => this.handleScrollToElement("feedback")}>PHẢN HỒI</div>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={3} lg={2} className="gutter-row">
            <Row type="flex" justify="center" align="middle" style={styles.c}>
              <div className="gutter-box" onClick={() => this.handleScrollToElement("news")}>TIN TỨC</div>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={3} lg={2} className="gutter-row">
            <Row type="flex" justify="center" align="middle" style={styles.c}>
              <div className="gutter-box" onClick={() => this.handleScrollToElement("footer")}>LIÊN HỆ</div>
            </Row>
          </Col>
          <Col sm={2} md={0}>
            <Row type="flex" justify="center" align="middle" style={{ width: 100 }}>
              <Button style={{ fontSize: 25, height: 40 }} icon="bars" />
            </Row>
          </Col>
        </Row >
      </div>
    );
  }
}


const styles = {
  a: {
    textAlign: "justify", borderTop: '1px solid #e7e7e7',
    height: 60, paddingLeft: "7%", paddingRight: "7%"
  },
  b: { color: "white", cursor: "pointer" },
  c: { height: "100%", width: "100%", padding: 3,cursor: 'pointer' },
  d: { width: 40, height: 40 }
}
export default Nav;
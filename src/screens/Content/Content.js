import React, { Component } from 'react';
import { Row } from 'antd';
import { Divider } from 'antd';
import { Button } from 'antd';
import ContentDetail from './ContentDetail';

class Content extends Component {
  render() {
    return (
      <div id="course" style={{overflow:"hidden"}}>
            <Row type="flex" justify="center" align="middle" style={{ width: "100%", flexDirection: "column", marginBottom: 50 }}>
          <div style={{ fontSize: 30 }}>Các khóa học</div>
          <Divider style={{ width: "5%", margin: 10, height: 3, backgroundColor: "#3d5777" }} />
        </Row>
        {/* noidung */}
        <Row style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <ContentDetail/>
        </Row>
        <Row type="flex" justify="center" align="middle" ><Button style={{borderRadius:20,backgroundColor: '#59a246',textAlign:'center',color:'white',paddingTop:12,paddingBottom:33,marginTop:20, marginBottom:30}}>Xem tất cả khóa học</Button></Row>
      </div>
    );
  }
}
export default Content;





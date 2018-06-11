import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import { Card } from 'antd';
import { List } from 'antd';
import './index.css'

const data = [
  {
    title: '',
  },
  {
    title: '',
  },
  {
    title: '',
  },
  {
    title: '',
  },
  {
    title: '',
  },
  {
    title: '',
  },
  {
    title: '',
  },
  {
    title: '',
  }
];

class ContentDetail extends Component {
  handleScrollToElement = () => {
    // const elementTop = ReactDOM.findDOMNode(this.refs.list);
    // window.scrollTo(0, elementTop.offsetTop);
    const tesNode = document.getElementById("a");
    // const tesNode = ReactDOM.findDOMNode('course')
    tesNode.scrollIntoView();
    // window.scrollTo(0, tesNode);
  };
  render() {
    return (
      <List ref="list" onClick={() => this.handleScrollToElement()}
        grid={{ gutter: 64, xs: 1, sm: 1, md: 4 }}
        dataSource={data} id="a"
        renderItem={item => (
          <List.Item>
            <Card
              hoverable={true}
              cover={
                <Row className="cardhv">
                  <Row className="imghv">
                    <img style={{width:"100%"}} alt="example" src="https://storage.googleapis.com/kslearning/images/921144420-1527348888218-vnua_visinhvatdaicuong.jpg"/>  
                    <div className="hover">
                    <div className="xem" type="submit" style={{ position: "absolute",top:"44%",left:"20%", padding: 10,backgroundColor:"rgba(255,255,255,0.1)",color:'white',fontSize:20 }} ><b>Xem chi tiết</b></div>
                    <div className="mua" type="submit" style={{ position: "absolute",top:"44%",right:"20%", padding: 10,backgroundColor:"#00cc00",color:'white',fontSize:20 }}><b>Mua ngay</b></div>
                    </div>
                  </Row>
                </Row>
              }
            >

              <Row><b>Toic luyện đề</b></Row>
              <Row type="flex" justify="space-between">
                <Col style={{ color: "green" }}><b>200,000VND</b></Col>
                <Col><Icon type="usergroup-add" />̀54</Col>
                <Col><Icon type="star" style={{ color: "yellow" }} /><Icon type="star" style={{ color: "yellow" }} /><Icon type="star" style={{ color: "yellow" }} /><Icon type="star" style={{ color: "yellow" }} /><Icon type="star" /></Col>
              </Row>
              <Row>
                Khóa Toeic luyện đề với bộ sách ETS 2016 có giải thích chi tiết.
              </Row>
            </Card>
          </List.Item>
        )}
      />



    );
  }
}
export default ContentDetail;
// const styles = {
//   images: {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: 'DodgerBlue',
//     justifyContent: 'center',
//   }
// }





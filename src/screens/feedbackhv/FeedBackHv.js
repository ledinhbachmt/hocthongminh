import { Modal, Button } from 'antd';
import { Row } from 'antd';
import '../../App.css';

export default class FeedBackHv extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
        >      
        <Row>
            <img alt="abc" src="http://storage.googleapis.com/kslearning/images/368890267-1526321545170-img_9430_fotor.jpg" style={{width:250,height:235,}}/>
            <h2>Đỗ Thị Thùy Dương</h2>
            <p>Trường Đại học Thương Mại</p>
            <p>Kết quả học tập của bạn Dung trong học kỳ 1 năm học 2017-2018. Thật đáng nể phải không nào </p>
            <img alt="abc" src="http://storage.googleapis.com/kslearning/images/23499925-1526321162545-32587464_1025644330918834_4789412718618607616_n.jpg" style={{width:400,height:400}}/>
        </Row>  
        </Modal>
      </div>
    );
  }
}

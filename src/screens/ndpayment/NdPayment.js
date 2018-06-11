import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row } from 'antd';
import {Icon} from 'antd';

class NdPayment extends Component {
    render() {
        return (
            <Row style={{ marginTop: 60, paddingLeft: "15%", paddingRight: "15%" }}>
                <h1 style={{textAlign:"center"}}>Hướng dẫn thanh toán cho Học thông minh</h1>
                <p><Icon type="table" /> 11:59:55 04-04-2018</p>
                <h1 style={{textAlign:"center",color:"red"}}>Có 3 cách thanh toán khóa học trên Học thông minh.</h1>
                <h3><b>Cách 1: Thanh toán trực tiếp- Học thông minh có mặt tại trường của bạn.</b> </h3>               
                <p>-Từ ngày 23/04, chỉ cần bạn gọi điện qua số hotline để liên lạc với CTV- kinh doanh có mặt tại các trường.<br />
                    - Hotline NEU: 0167.583.2256<br />
                    - Hotline TMU: cơ sở chính 0167.586.1156 / cơ sở Hà Nam: 0167.830.7900<br />
                    -Thời gian: từ 8h-18h- miễn phí ship.<br />
                    -Với những khung giờ và địa điểm khác: Tính phí thêm tùy vào khoảng cách.
                </p>
                <h3><b>Cách 2: Sử dụng ví Momo</b> </h3>
                <p>-Gửi tiền qua Ví momo đến số điện thoại 0166.6040.322 theo cú pháp:<br/>
                    01. "TÊN KHÓA HỌC MUỐN MUA"<br/>
                    02. "ĐỊA CHỈ EMAIL." -Nếu bạn muốn nhận qua email.<br/> 
                    -Bạn sẽ nhận code qua số điện thoại chuyển tiền, hoặc mail đã đăng ký trong vòng 2h sau khi nhắn tin. Thời gian xử lý từ: 8h- 22h. Nếu không nhận được vui lòng nhắn tin báo lỗi qua fanpage.</p>
                <img alt="abc"style={{width: 320,height: 569}} src="http://storage.googleapis.com/kslearning/images/895328093-1524280854585-screenshot_2018-04-21-09-49-21-512_com.mservice.momotransfer.png" />                
                <img alt="abc"style={{width: 320,height: 569}} src="http://storage.googleapis.com/kslearning/images/135626614-1523417493532-screenshot_2018-04-11-00-02-01-835_com.mservice.momotransfer.png" />
                <h3>Cách 3: Thanh toán qua tài khoản ngân hàng</h3> 
                <p> -Vietinbank chi nhánh Ba Đình.<br />
                    Số tài khoản: 105005522761<br />
                    Chủ tài khoản: Nguyễn Như Hoàng Anh<br />
                    -Vietcombank chi nhánh Thăng Long: <br />
                    Số tài khoản: 0971000015744<br />
                    Chủ tài khoản: Nguyễn Như Hoàng Anhv
                    -Các bạn nhớ ghi rõ tên mỗi môn học+ số code + địa chỉ hộp thư/ sđt liên lạc.<br />
                    * Khuyến cáo các bạn nên thanh toán bằng cách 1 và 2 để đảm bảo thanh toán nhanh nhất. Từ ngày 10/5 hình thức thanh toán bằng thẻ cào không còn được chấp nhận do quy định của Nhà nước.
                </p>
                <Row type="flex" justify="end" align="buttom"  style={{position:"fixed",right:10,bottom:10,zIndex:9999,backgroundColor:"#f88900",padding:5}}>
          <Icon type="mail" style={{marginTop:4}}/> Thắc mắc xin để lại lời nhắn nhé!!! <Icon type="up" style={{marginTop:4}}/>
        </Row> 
            </Row>
        );
    }
}

export default NdPayment;



import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';

const dataSource = [{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },{
    key: '1',
   icon:'',
   tk:'Lê Đình Bách',
   online:'',
   email:'ledinhbachmt@gmail.com',
   date:'21/05',
   day:'1 ngày',
   hours:'1 giờ trước',
   hocvien:'Học viên'
  },];
  
  const columns = [{
    title: '#',
    dataIndex: 'icon',
    key: 'icon',
    render: icon => <img src='http://www.hocthongminh.com/resources/images/avatardefault.jpg' style={{width:30,height:30,borderRadius:25}}/>
  }, {
    title: 'Tài khoản',
    dataIndex: 'tk',
    key: 'tk',
  }, {
    title: 'Online',
    dataIndex: 'check',
    key: 'check',
    render: check => <img src='http://www.hocthongminh.com/resources/images/offline-01.png' style={{width:30,height:30,borderRadius:25}}/>    
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: 'Tham gia',
    dataIndex: 'date',
    key: 'date',
  }, {
    title: 'Còn lại',
    dataIndex: 'day',
    key: 'day',
  }, {
    title: 'Truy cập',
    dataIndex: 'hours',
    key: 'hours',
  }, {
    title: 'Vai trò',
    dataIndex: 'hocvien',
    key: 'hocvien',
  }







];

class Member extends Component {
    render() {
        return (
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

export default Member;  
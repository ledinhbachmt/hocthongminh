import React, { Component } from 'react'
import { Button, Checkbox } from 'antd';
import { Row, Col, Modal } from 'antd';

export default class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            text:'',
            visible: false,
            login: false,

        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let isLogin = localStorage.getItem("isLogin");
        let account = localStorage.getItem("account");
        if(isLogin !== undefined && isLogin === 'true') {
            this.setState({
                visible: false,
                login: true, 
                account
            })
        }
    }

    SignIn = () => {
        console.log('name', this.state.account, 'password', this.state.password);
       if(this.state.account === 'ledinhbach' & this.state.password ==='12345') {
        localStorage.setItem("isLogin", true);
        localStorage.setItem("account", this.state.account);
        this.setState({
            visible: false,
            login: true, 
        });
       } else {
           this.setState({text:'tk mk sai' })
       }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };
    logOut = () => {
        this.setState({
            login: false,
        })
        localStorage.removeItem("isLogin");
        localStorage.removeItem("account");
    }
    render() {
        return (
            <div>
                {
                    (this.state.login === false) ?
                    <div>
                        <Button type="primary" onClick={this.showModal} visible={this.state.visible} style={{ borderRadius: 17, marginRight: 10 }}>Đăng nhập</Button>
                        <Button type="primary" onClick={this.showModal} visible={this.state.visible} style={{ borderRadius: 17 }}>Đăng ký</Button>
                    </div> 
                    :
                    <div>   {this.state.account}
                            <button  type="primary" onClick={this.logOut}>LogOut</button>
                    </div>
                    
                }

                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    style={{ top: 220 }}
                    bodyStyle={{ padding: 30 }}
                    footer={null}
                    width={820}
                >
                    <Row>
                        <Col md={8}>
                            <h1 style={styles.tieude}>Đăng nhập</h1>
                            <input type="text"
                                style={styles.nhap}
                                placeholder="Tài khoản (*)"
                                value={this.state.account}
                                name='account'
                                onChange={this.handleChange}
                            />
                            <input type="password"
                                style={styles.nhap}
                                placeholder="Mật khẩu (*)"
                                value={this.state.password}
                                name='password'
                                onChange={this.handleChange}
                            />
                            {this.state.text}
                            <Row type="flex" justify="space-">
                                <Col>
                                    <Checkbox />
                                    <span>Nhớ mật khẩu</span>
                                </Col>
                                <Col>
                                    <p>Quên mật khẩu</p>
                                </Col>
                            </Row>
                            <button style={styles.button} onClick={() => this.SignIn()}>Đăng nhập</button>
                            <img alt="abc" src="http://www.hocthongminh.com/resources/images/default/logo.png" style={{ width: 100, height: 100 }} />
                        </Col>
                        <Col md={16}>
                            <h1 style={styles.tieude}>Đăng ký</h1>
                            <Row>
                                <Col md={12}>
                                    <input style={styles.nhap} type="text" placeholder="Tài khoản (*)" />
                                    <input style={styles.nhap} type="password" placeholder="Mật khẩu (*)" />
                                    <input style={styles.nhap} type="text" placeholder="Xác nhận mật khẩu (*)" />
                                    <button style={styles.button}>Đăng ký</button>
                                </Col>
                                <Col md={12}>
                                    <input style={styles.nhap} type="text" placeholder="Họ tên (*)" />
                                    <input style={styles.nhap} type="text" placeholder="Email (*)" />
                                    <input style={styles.nhap} type="text" placeholder="Số điện thoại (*)" />
                                    <button style={styles.button}>Đăng nhập</button>
                                </Col>
                            </Row>
                        </Col>
                        <Col />
                    </Row>
                </Modal>
            </div>
        )
    }
}
const styles = {
    nhap: {
        display: 'block',
        padding: '7 10',
        borderRadius: 0,
        marginTop: 15,
        borderTop: '1px solid white',
        borderLeft: '1px solid white',
        borderRight: '1px solid white',
    },
    tieude: {
        color: '#4c6997', paddingLeft: 6, paddingTop: 2, paddingBottom: 2, borderLeft: '5px solid #4c6997',
    },
    button: {
        color: 'white',
        backgroundColor: 'rgb(76, 105, 151)',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block',
        borderRadius: 25,
        textTransform: 'uppercase'
    }
}

import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import './register.styl'
import { reqRegister } from '../../utils/http'
import { successAlert } from '../../utils/alert'

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: '',
                nickname: "",
                password: ''
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    sumbit() {
        console.log(this.state.user)
        reqRegister(this.state.user).then(res => {
            if (res.data.code === 200) {
                successAlert(res.data.msg)
                this.props.history.push('/login')
            }
        })
    }
    render() {
        return (
            <div className='form'>
                <Header title='注册' back></Header>
                <div className='form-input'><span>手机号：</span><input type="text" className="input" onChange={(e) => this.changeUser(e, 'phone')} /></div>
                <div><span>昵称：</span><input type="text" className="input" onChange={(e) => this.changeUser(e, 'nickname')} /></div>
                <div><span>密码：</span><input type="text" className="input" onChange={(e) => this.changeUser(e, 'password')} /></div>
                <p className='btn' onClick={() => this.sumbit()}>注册</p>
            </div>
        )
    }
}

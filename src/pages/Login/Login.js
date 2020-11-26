import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import { Link, NavLink } from 'react-router-dom'
import './login.styl'
import '../../stylus/index.styl'
import { reqLogin } from '../../utils/http'
import { successAlert } from '../../utils/alert'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: '',
                password: ''
            }
        }
    }
    componentDidMount() {

    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    login() {
        reqLogin(this.state.user).then(res => {
            if (res.data.code === 200) {
                successAlert(res.data.msg)

                sessionStorage.setItem('userInfo', JSON.stringify(res.data.list))
                
                this.props.history.push('/index')

            }
        })
    }
    render() {
        return (
            <div>
                <Header title='登录' register></Header>
                <div className='form'>
                    <div className='form-input'> <span>账号：</span> <input type="text" className="input" onChange={(e) => this.changeUser(e, 'phone')} /></div>
                    <div className='form-input' onChange={(e) => this.changeUser(e, 'password')} > <span>密码：</span><input type="text" className="input" /></div>
                    <div className='form-forget'><i>忘记密码</i></div>
                    <div className='btn' onClick={() => this.login()}>登录</div>
                </div>
                <Link to='/index'>大首页</Link>
            </div>
        )
    }
}


import React, { Component } from 'react'
import './nav.styl'
import { Link, NavLink, withRouter } from "react-router-dom"
import navImg from '../../../../assets/img/img/home/1.jpg'
 class Nav extends Component {
    push() {
        console.log(this.props);
        this.props.history.push("/index/shop")
    }
    replace() {
        this.props.history.replace("/index/shop")
    }
    render() {
        return (
            <div className="nav">
                <div className="nav-box">
                    <img src={navImg} alt=""/>
                    <Link to="/index/shop">限时抢购</Link>
                </div>
                <div className="nav-box">
                <img src={navImg} alt=""/>
                    <NavLink to="/index/shop">积分商城</NavLink>
                </div>
                <div className="nav-box">
                <img src={navImg} alt=""/>
                    <NavLink to="/index/shop">联系我们</NavLink>
                </div>
                <div className="nav-box">
                <img src={navImg} alt=""/>
                    <NavLink to="/index/shop">商品分类</NavLink>
                </div>
            </div>
        )
    }
}
export default withRouter(Nav)

import React, { Component } from 'react'
import './nav.styl'
import { Link, NavLink, withRouter } from "react-router-dom"
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
                    <h3>Link</h3>
                    <Link to="/index/shop">购物车</Link>
                </div>
                <div className="nav-box">
                    <h3>NavLink</h3>
                    <NavLink to="/index/shop">购物车</NavLink>
                </div>
                <div className="nav-box">
                    <h3>NavLink</h3>
                    <NavLink to="/index/shop">购物车</NavLink>
                </div>
                <div className="nav-box">
                    <h3>NavLink</h3>
                    <NavLink to="/index/shop">购物车</NavLink>
                </div>
            </div>
        )
    }
}
export default withRouter(Nav)

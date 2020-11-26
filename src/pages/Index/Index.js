import React, { Component } from 'react'
import { Switch, Redirect, Route, NavLink } from "react-router-dom"
import Cate from '../Cate/Cate'
import Home from '../Home/Home'
import Mine from '../Mine/Mine'
import Shop from '../Shop/Shop'

import './index.styl'
export default class Index extends Component {
    render() {
        return (
            <div className='index'>
                {/* 二级路由出口 */}
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/cate' component={Cate}></Route>
                    <Route path='/index/mine' component={Mine}></Route>
                    <Route path='/index/shop' component={Shop}></Route>
                    <Redirect to='/index/home'></Redirect>
                </Switch>
                {/* 底部导航，NavLink有activeClassName，Link没有 */}
                <footer className='index-footer'>
                    <NavLink to='/index/home' activeClassName='select'>首页</NavLink>
                    <NavLink to='/index/cate' activeClassName='select'>分类</NavLink><NavLink to='/index/shop' activeClassName='select'>购物车</NavLink>
                    <NavLink to='/index/mine' activeClassName='select'>我的</NavLink>
                </footer>
            </div>
        )
    }
}

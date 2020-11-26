import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Info from './components/Info/Info'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import GoodsList from './components/GoodsList/GoodsList'
import { reqHomeGoods, reqbanner } from '../../utils/http'
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            goods: [

            ],
            banner:[]
        }
    }
    componentDidMount() {
        reqHomeGoods().then(res => {
            this.setState({
                goods: res.data.list[0].content
            })
        })
        reqbanner().then(res=>{
         this.setState({
             banner:res.data.list
         })
        })
    }
    render() {
        let { goods,banner } = this.state
        return (
            <div>
                <Header title='首页'></Header>
                {/* 顶部信息 */}
                <Info></Info>
                {/* 轮播图 */}
                <Banner></Banner>
                {/* 导航 */}
                <Nav></Nav>
                {/* 列表 */}
                <GoodsList goods={goods} banner ={banner}></GoodsList>
            </div>
        )
    }
}

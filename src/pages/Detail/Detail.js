import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import { reqHomeGoodsDetail } from '../../utils/http'
import querystying from 'querystring'
import Info from "./components/Info/Info"
import Picker from './components/Picker/Picker'
import './Detail.styl'
export default class Detail extends Component {
    constructor() {
        super()
        this.state = {
            goodsDetail: {},
            // 控制弹框状态
            isshow: false
        }
        this.des = React.createRef()
    }
    // 控制弹框
    show() {
        this.setState({
            isshow: true
        })
    }
    hide(){
        this.setState({
            isshow: false
        })
    }
    render() {
        let { goodsDetail, isshow } = this.state
        return (
            <div className='detail'>
                <Header title='商品详情' back></Header>
                {/* 图片 */}
                <p><img src={goodsDetail.img} alt="" /></p>
                {/* 商品信息 */}

                {goodsDetail.goodsname ? <Info goodsDetail={goodsDetail}></Info> : null}
                {/* 商品描述 */}
                <div ref={this.des}></div>
                {/* 底部 */}
                <footer className='footer'>
                    <div className='flash' onClick={() => this.show()}>加入购物车</div>
                </footer>
                {/* 弹框 */}
                {goodsDetail.goodsname && isshow ? <Picker goodsDetail={goodsDetail} isshow={isshow} hide={()=>this.hide()
                }></Picker> : null}
            </div>
        )
    }
    componentDidMount() {
        let str = this.props.location.search
        let result = querystying.parse(str.slice(1))
        console.log(result)
        //ajax   
        reqHomeGoodsDetail(result.id).then(res => {
            let list = res.data.list[0]
            list.specsattr = JSON.parse(list.specsattr)
            this.setState({
                goodsDetail: list
            }, () => {
                this.des.current.innerHTML = this.state.goodsDetail.description
            })
        })
    }
}

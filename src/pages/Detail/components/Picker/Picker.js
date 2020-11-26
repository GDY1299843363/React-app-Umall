import React, { Component } from 'react'
import './Picker.styl'
import { reqShopAdd } from "../../../../utils/http"
import { successAlert } from "../../../../utils/alert"
export default class Picker extends Component {
    constructor() {
        super()
        this.state = {
            n: 0
        }
    }
    hide(e) {
        e.target.className === 'picker' && this.props.hide()
    }
    changeN(index) {
        this.setState({
            n: index
        })
    }
    add() {
        reqShopAdd({
            uid: JSON.parse(sessionStorage.getItem('userInfo')).uid,
            goodsid: this.props.goodsDetail.id,
            num: 1
        }).then(res => {
            if (res.data.code === 200) {
                successAlert(res.data.msg)
                this.props.hide()
            }
        })
    }
    render() {
        let { goodsDetail } = this.props
        let { n } = this.state
        return (
            <div className='picker' onClick={(e) => this.hide(e)}>
                <div className='con clearfix'>
                    <div className='img-parent'>
                        <img src={goodsDetail.img} alt="" />
                        <p>{goodsDetail.goodsname}</p>
                    </div>
                    <h5>{goodsDetail.specsname}</h5>
                    <p className='spec-title'></p>
                    <div className='btns clearfix'>
                        {
                            // 异步操作值有了再map，需要在传值的地方加判断
                            goodsDetail.specsattr.map((item, index) => {
                                return (
                                    <b key={item} className={index === n ? 'active' : ''} onClick={() => this.changeN(index)}>{item}</b>
                                )
                            })
                        }

                    </div>
                    <div className='flash' onClick={() => this.add()}>加入购物车</div>
                </div>
            </div>
        )
    }
}

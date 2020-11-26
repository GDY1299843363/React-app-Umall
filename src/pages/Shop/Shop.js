import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import "./Shop.styl"
import radio_nor from "../../assets/img/radio_nor.png"
import radio_hig from "../../assets/img/radio_hig.png"
import { reqShopDel, reqShopList, reqShopEdit } from '../../utils/http'
import { successAlert, confirmAlert } from '../../utils/alert'
import { filtersPrice } from '../../filters/Price'
export default class Shop extends Component {
    constructor() {
        super()
        this.state = {
            // 购物车的list
            list: [],
            //.编辑状态
            isEdit: false,
            //.全选状态
            isAll: false,
        }
    }
    componentDidMount() {
        this.init()
    }
    init() {
        //  fa请求
        reqShopList().then(res => {
            if (res.data.code === 200) {
                let list = res.data.list ? res.data.list : []
                list.forEach(item => {
                    item.checked = false
                })
                this.setState({
                    list: list
                }, () => {
                    console.log(this.state.list);
                })
            }
        }).catch((e) => {

        })
    }
    add(id) {
        reqShopEdit(
            {
                id: id,
                type: 2
            }
        ).then(res => {
            if (res.data.code === 200) {
                this.init()

            }
        })
    }
    jian(id, num) {
        // return阻止执行
        if (num <= 1) {
            successAlert('不能再少了')
            return
        }
        reqShopEdit(
            {
                id: id,
                type: 1
            }
        ).then(res => {

            if (res.data.code === 200) {
                this.init()

            }
        })
    }
    edit() {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    checkOne(index) {
        let { list } = this.state;
        list[index].checked = !list[index].checked;
        this.setState({
            list: list,
            //全选：如果list的每条数据的checked都是true,那么isAll 就是true;否则就是false
            isAll: list.every(item => item.checked)
        })
    }
    // 点了全选
    checkdAll() {
        this.setState({
            isAll: !this.state.isAll,
            list: this.state.list.map(item => {
                item.checked = !this.state.isAll
                return item
            })
        })
    }
    // 删除
    del(id) {
        confirmAlert(() => {
            reqShopDel(id).then(res => {
                if (res.data.code === 200) {
                    this.init()
                }
            })
        })



    }
    render() {
        let { list, isEdit, isAll } = this.state
        console.log(list)
        // 计算总价
        let sum = 0
        list.forEach(item => {
            if(item.checked){
                sum += item.price * item.num

            }
        })

        return (
            <div className='shop'>
                <Header title='购物车'></Header>
                {/* 购物车没有内容 */}
                {
                    list.length === 0 ? <div>购物车空空，快去逛街吧</div> : null
                }
                {
                    list.map((item, index) => {
                        return (
                            <div className='item' key={item.id}>
                                <div className=
                                    {isEdit ? 'inner inner-show-del' : 'inner'}
                                >
                                    <img src={item.checked ? radio_hig : radio_nor} alt="" className='img' onClick={() => this.checkOne(index)} />
                                    <div className='logo'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='info cleafix'>

                                        <h3>{item.goodsname}</h3>
                                        <p className='price'>价格：{filtersPrice(item.price)}</p>
                                        <ul className='clearfix'>
                                            <li onClick={() => this.jian(item.id, item.num)}>-</li>
                                            <li>{item.num}</li>
                                            <li onClick={() => this.add(item.id)}>+</li>
                                        </ul>
                                        <div className='zongjia'>
                                            总价：{filtersPrice(item.price * item.num)}
                                        </div>

                                    </div>
                                    <div className='del' onClick={() => this.del(item.id)}>
                                        删除
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


                <footer className='footer'>

                    <div className='all' onClick={() => this.checkdAll()}>
                        <img src={isAll ? radio_hig : radio_nor} alt="" />
                        <p>全选</p>
                    </div>
                    <div className='edit' onClick={() => this.edit()}>
                        <img src={isEdit ? radio_hig : radio_nor} alt="" />
                        <p>编辑</p>
                    </div>
                    <div className='allprice'>
                        合计：{filtersPrice(sum)}
                    </div>
                </footer>
            </div >
        )
    }
}

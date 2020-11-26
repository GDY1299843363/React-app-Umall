import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import './Cate.styl'
import { reqCate } from '../../utils/http'
export default class Cate extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            n: 0
        }
    }
    componentDidMount() {
        reqCate().then(res => {
            if (res.data.code === 200) {
                this.setState({
                    data: res.data.list
                })
            }
        })
    }
    changeN(index) {
        this.setState({
            n: index
        })
    }
    toList(name,id){
        this.props.history.push('/list/'+name+'/'+id)
    }
    render() {
        let { data, n } = this.state
        //  data下的n存在吗？在的话拿出children如果没有赋值空数组
        let rightList = data[n] ? data[n].children : []

        return (
            <div>
                <Header title='分类'></Header>
                <div className='cate'>
                    <aside className='cate-left'>
                        {
                            data.map((item, index) => {
                                return (
                                    <ul className='clearfix'>
                                        <li onClick={() => this.changeN(index)} className={index === n ? 'active' : ''} key={item}>
                                            {item.catename}
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </aside>

                    <div className='cate-right clearfix'>
                        {
                            rightList.map((item, index) => {
                                return (
                                    <div className='item' key={item.id} onClick={()=>this.toList(item.catename,item.id)}>
                                        <div className="con">
                                            <img src={item.img} alt="" />
                                            <span>{item.catename}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}

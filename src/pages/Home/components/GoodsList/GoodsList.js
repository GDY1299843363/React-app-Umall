import React, { Component } from 'react'
import './GoodsList.styl'
import { Link } from 'react-router-dom'
import './GoodsList.styl'
export default function GoodsList(props) {
    let { goods } = props
    return (
        <div className='list'>
            {
                goods.map(item => {
                    return (
                        <Link to={"/detail?id=" + item.id} className="list-item" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className='frbox clearfix'>
                                <h3>{item.goodsname}</h3>
                                <p>&yen;{item.price}</p>
                                <div className="flash">立即抢购</div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
import React from 'react'
import './Info.styl'
import { filtersPrice } from '../../../../filters/Price'
export default function Info(props) {
    let { goodsDetail } = props
    return (
        <div className='Info clearfix'>
            <div  className='Info-title'>
                <h2>{goodsDetail.goodsname}</h2>
                <p className='price'>&yen;{filtersPrice(goodsDetail.price)}</p>
                <p className='mark-price'>&yen;{filtersPrice(goodsDetail.market_price)}</p>
            </div>
            <div className='Info-new'>
                {goodsDetail.isnew === 1 ? <p>新品</p> : null}
                {goodsDetail.isnew === 1 ? <p>热卖</p> : null}
            </div>
        </div>
    )
}

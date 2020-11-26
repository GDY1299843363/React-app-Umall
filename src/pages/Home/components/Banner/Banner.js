import './banner.styl'
import React, { Component } from 'react'
import {Carousel }from 'antd-mobile'
export default function Banner(props) {
    let { banner } = props
    return (
        <div className='banner'>
            <Carousel
                autoplay={true}
                infinite
            >
                {banner.map(item => (
                    <a
                        key={item.id}
                        style={{ display: 'inline-block', width: '100%', height: "100%" }}
                    >
                        <img
                            src={item.img}
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                            }}
                        />
                    </a>
                ))}
            </Carousel>
        </div>
    )

}
// export default class Banner extends Component {
//     componentDidMount() {
//         var mySwiper = new Swiper('.swiper-container', {
//             direction: 'vertical', // 垂直切换选项
//             loop: true, // 循环模式选项

//             // 如果需要分页器
//             pagination: {
//                 el: '.swiper-pagination',
//             },
//         })

//     }
//     render() {
//         return (
//             <div className="banner">
//                 <div className="swiper-container">
//                     <div className="swiper-wrapper">
//                         {
//                             this.props.banner.map(item => {
//                                 return (
//                                     <div className="swiper-slide" key={item.div}>
//                                         <img src={item.img} alt="" />
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                     <div className="swiper-pagination"></div>
//                 </div>
//             </div>
//         )
//     }
// }




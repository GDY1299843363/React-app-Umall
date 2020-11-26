import React, { Component } from 'react'
import logo from '../../../../assets/img/img/home/logo.jpg'
import './Info.styl'
export default class Info extends Component {
    render() {
        return (
            <div className='imgbox'>
               <img src={logo} alt=""/>
            </div>
        )
    }
}

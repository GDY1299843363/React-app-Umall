import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 重置样式
import './assets/css/reset.css'
// remjs
import './assets/js/rem'

import "./assets/css/swiper.min.css"
//配置路由模式 HashRouter：hash模式 BrowserRouter：history模式
import { HashRouter, BrowserRouter } from "react-router-dom"

// UI框架
import 'antd-mobile/dist/antd-mobile.css'
 
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  ,

  document.getElementById('root')
);



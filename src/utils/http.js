import axios from 'axios'
import qs from 'qs'
import { successAlert } from '../utils/alert'
// 请求拦截
axios.interceptors.request.use(req => {
    if (req.url !== '/api/register' && req.url !== '/api/login') {
        req.headers.authorization = JSON.parse(sessionStorage.getItem('userInfo')).token
    }
    return req
})
// 响应拦截
axios.interceptors.response.use(res => {
    console.log('本次请求地址' + res.config.url)
    console.log(res);
    //统一处理失败
    if (res.data.code !== 200) {
        successAlert(res.data.msg)
    }
    //统一处理掉线
    if (res.data.msg === '登录已过期或访问权限受限') {
        sessionStorage.removeItem('userInfo')
        //跳转到"/login" 
        window.location.href = 'http://localhost:3001/#/login'
    }

    return res
})
// 首页商品数据
export const reqHomeGoods = () => {
    return axios({
        url: '/api/getindexgoods',
        method: 'get'
    })
}
// 轮播图
export const reqbanner = () => {
    return axios({
        url: '/api/getbanner',
        method: 'get',
    })
}
// id商品详情
export const reqHomeGoodsDetail = (id) => {
    return axios({
        url: '/api/getgoodsinfo',
        method: 'get',
        params: {
            id: id
        }
    })
}
// 注册
export const reqRegister = (user) => {
    return axios({
        url: '/api/register',
        method: 'post',
        data: qs.stringify(user)
    })
}
// 登录
export const reqLogin = (user) => {
    return axios({
        url: '/api/login',
        method: 'post',
        data: qs.stringify(user)
    })
}
// 商品树形结构
export const reqCate = () => {
    return axios({
        url: '/api/getcatetree',
        method: 'get',
    })
}
// 商品获取分类商品
export const reqCateGoods = (id) => {
    return axios({
        url: '/api/getgoods',
        method: 'get',
        params: {
            fid: id
        }
    })
}
// 购物车添加
export const reqShopAdd = (user) => {
    return axios({
        url: '/api/cartadd',
        method: 'POST',
        data: qs.stringify(user)
    })
}
// 购物车列表
export const reqShopList = () => {
    return axios({
        url: '/api/cartlist',
        method: 'GET',
        params: {
            uid: JSON.parse(sessionStorage.getItem('userInfo')).uid
        }
    })
}
//购物车修改 + - 
export const reqShopEdit = (user) => {
    return axios({
        url: '/api/cartedit',
        method: 'POST',
        data: qs.stringify(user)
    })
}
//购物车删除
export const reqShopDel = (id) => {
    return axios({
        url: '/api/cartdelete',
        method: 'POST',
        data: qs.stringify({
            id: id
        })
    })
}

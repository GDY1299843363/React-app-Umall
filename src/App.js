import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"


// import Login from "./pages/Login/Login"
// import Register from './pages/Register/Register'
// import List from './pages/List/List'
// import Index from './pages/Index/Index'
// import Detail from './pages/Detail/Detail'
let Login = asyncCom(() => import('./pages/Login/Login'))
let Register = asyncCom(() => import('./pages/Register/Register'))
let List = asyncCom(() => import('./pages/List/List'))
let Index = asyncCom(() => import('./pages/Index/Index'))
let Detail = asyncCom(() => import('./pages/Detail/Detail'))

import './App.styl'
import MyRouter from './utils/MyRouter'
import asyncCom from './utils/asyncComponent'


export default function App() {
  return (
    <div className='app'>
      {/* 一级路由出口 */}
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path='/register' component={Register}></Route>

        <MyRouter path='/list/:name/:id' component={List}></MyRouter>
        <MyRouter path='/index' component={Index}></MyRouter>
        <MyRouter path='/detail' component={Detail}></MyRouter>

        <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  )
}


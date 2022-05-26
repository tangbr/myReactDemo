import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
 render() {
  return (
      <div>
      <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
      </div>

      <div className="row">
          <div className="col-xs-offset-2 col-xs-2">
              <div className="list-group">
                  {/* <a className="list-group-item" href="./about.html">About</a>
                  <a className="list-group-item active" href="./home.html">Home</a> */}
{/*    在React 中靠路由链接实现切换组件 --编写路由链接*/}
                  
                      <MyNavLink to="/atguigu/about">About</MyNavLink>
                      <MyNavLink to="/atguigu/home">Home</MyNavLink>
              </div>
          </div>
          <div className="col-xs-6">
             <div className="panel1">
                 <div className="panel-body">
                    {/* 注册路由 */}
                    <Switch>
                        <Route path="/atguigu/about" component={About}/>
                        <Route path="/atguigu/home" component={Home}/>
                    </Switch>
                 </div>
              </div>
         </div>
      </div>
  </div>
  )
 }
}

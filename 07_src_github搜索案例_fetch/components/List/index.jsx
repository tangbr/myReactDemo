import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = {    //初始化状态
    users:[],  // users 初始值为数组
    isFirst: true,  //是否为第一次打开页面
    isLoading: false, //是否处于加载中
    err: '', //存储请求相关的错误信息
  }

componentDidMount(){
  this.token = PubSub.subscribe('atguigu',(_,stateObj)=>{
    this.setState(stateObj)
    //   console.log('List组件收到数据了',stateObj);
  })
}

componentWillUnmount(){
  PubSub.unsubscribe(this.token)
}

  render() {
      const {users,isFirst, isLoading,err} = this.state
       return (
            <div className="row">
            {
                isFirst ? <h2>欢迎使用， 输入关键字， 随后点击搜索</h2> :
                isLoading ? <h2>Loading..........</h2>:
                err ? <h2 style={{color:'red'}}>{err}</h2> :
                users.map((userObj)=>{
                  return (
                    <div key={userObj.id} className="card">
                        <a rel="noreferrer" href={userObj.html_url} target="_blank">
                            <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}} />
                        </a>
                        <p className="card-text">{userObj.login}</p>
                    </div>
                  )
                })
            }

{/*                 <div className="card">
           <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
             <img alt="head_portrait" src="https://img2.baidu.com/it/u=457681302,3981348939&fm=253&fmt=auto&app=138&f=JPEG?w=352&h=288" style={{width: '100px'}} />
           </a>
           <p className="card-text">reactjs</p>
                </div>
                <div className="card">
           <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
             <img alt="head_portrait" src="https://img2.baidu.com/it/u=1141669830,3812989879&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=471" style={{width: '100px'}} />
           </a>
           <p className="card-text">reactjs</p>
                </div>
                <div className="card">
           <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
             <img alt="head_portrait" src="https://img2.baidu.com/it/u=3612926555,522546903&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200" style={{width: '100px'}} />
           </a>
           <p className="card-text">reactjs</p>
                </div>
                <div className="card">
           <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
             <img alt="head_portrait" src="https://img1.baidu.com/it/u=1847922946,915956888&fm=253&fmt=auto&app=138&f=JPEG?w=343&h=400" style={{width: '100px'}} />
           </a>
           <p className="card-text">reactjs</p>
                </div> */}


            </div>
       )
    }
}

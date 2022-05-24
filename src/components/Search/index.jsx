import React, { Component } from 'react'

export default class Search extends Component {

    search = ()=>{
        //获取用户的输入
        console.log(this.keyWordElement.value);
        //发送网络的请求
    }

  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">收索github用户</h3>
            <div>
                <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                <button onClick={this.search}>搜索</button>
            </div>
        </section>
         )
  }
}

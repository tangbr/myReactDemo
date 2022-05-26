import React, { Component } from 'react'
import axios from 'axios'


export default class Search extends Component {

    search = ()=>{
        //获取用户的输入(连续解构赋值加重命名)
        const {keyWordElement:{value:keyWord}} = this
        //发送请求前通知App更新状态
        this.props.updateAppState({isFirst:false, isLoading:true})
        console.log(keyWord);
        //发送网络的请求
        axios.get('https://api.github.com/search/users?q=${keyWord}').then(
        //   response => {console.log('成功了', response.data);},
            response =>{
                //请求成功后通知App更新状态
                this.props.updateAppState({isLoading:true, users:response.data.items})              
            //    this.props.saveUsers(response.data.items)
            }, 
        error => //{console.log('失败了',error);}
        {   //请求失败后通知App更新状态
            this.props.updateAppState({isLoading:false,err:error.message})
        }
        )
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

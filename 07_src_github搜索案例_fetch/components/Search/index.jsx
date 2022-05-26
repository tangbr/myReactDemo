import React, { Component } from 'react'
import PubSub from 'pubsub-js'
//import axios from 'axios'


export default class Search extends Component {

    search = async ()=>{
 //       console.log ('Search 组件发布消息了');
 //       PubSub.publish('atguigu',{name:'tom',age:18})
        //获取用户的输入(连续解构赋值加重命名)
        const {keyWordElement:{value:keyWord}} = this
        //发送请求前通知List更新状态
        // this.props.updateAppState({isFirst:false, isLoading:true})
        PubSub.publish('atguigu',{isFirst:false, isLoading:true})
    //    console.log(keyWord);
        //#region 发送网络的请求 使用axios 发送
/*         axios.get('https://api.github.com/search/users?q=${keyWord}').then(
        //   response => {console.log('成功了', response.data);},
            response =>{
                //请求成功后通知App更新状态
//                 this.props.updateAppState({isLoading:false, users:response.data.items})  
        PubSub.publish('atguigu',{isFirst:false,users:response.data.items})

            
        //    this.props.saveUsers(response.data.items)
            }, 
        error => //{console.log('失败了',error);}
        {   //请求失败后通知App更新状态
//             this.props.updateAppState({isLoading:false,err:error.message})
            PubSub.publish('atguigu',{isLoading:false,err:error.message})
        } 
    )  */
    //#endregion

        //发送网络的请求 使用fetch 发送(未优化)
/*         fetch('/api1/search.users2?q=${keyWord}').then(
                response => {
                    console.log('联系服务器成功了');
                    return response.json()
                },
                 error => {
                    console.log('联系服务器失败了',error);
                    return new Promise(()=>{})
                }  
        ).then(
            response => {console.log('获取服务器成功了',response);},
             error => {console.log('获取数据失败了',error);}
         ) */
         //发送网络的请求 使用fetch 发送(优化)
    try{
         const response = await fetch('/api1/search.users2?q=${keyWord}')/* .then(
            response => {
                console.log('联系服务器成功了');
                return response.json()
            },
    ).then(
        response => {console.log('获取服务器成功了',response);},
     ).catch(
         error=>{console.log('请求出错',error);}
     ) */
        const data = await response.json()
        PubSub.publish('atguigu',{isLoading:false, users:data.items})
        console.log(data);
     } catch (error) {
        console.log('请求出错',error);
        PubSub.publish('atguigu',{isLoading:false,err:error.message})
    }
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

import React, { Component } from 'react'
//import {useSearchParams} from 'react-router-dom'

/* import qs from 'querystring' */

/* let str = 'carName=奔驰&price=199'
result =  new URLSearchParams(str) */

/* let obj = {name:'tom',age:18}   //name=tom&age=18    key=value&key=value   is called unrlencoded
console.log(qs.stringify(obj));

let str = 'carName=奔驰&price=199'
console.log(qs.parse(str)); */

const DetailData = [
    {id:'01', content:'你好，加拿大'},
    {id:'02', content:'你好，赌博场'},
    {id:'03', content:'你好，职场'}
]
export default class Detail extends Component {
  render() {
    console.log(this.props);

    // 接收params参数
    //const {id,title} = this.props.match.params  
    
    // 接收search参数
//const {search} = this.props.location;
//const result = qs.parse(search.slice(1))

//const paramsString = search.slice(1);
/*
const Search = () => {
     let [searchParams,setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const title = searchParams.get("title"); */
/* const searchParams = new URLSearchParams(paramsString);    //("carName=奔驰&price=199");
const id = searchParams.get("id");
const title = searchParams.get("title");  */
//console.log(id);
    // 接收state参数
        const {id,title} = this.props.location.state || {}
    
        const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === id
    }) || {}
    return (
      <ul>
          <li>ID:{id} </li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}

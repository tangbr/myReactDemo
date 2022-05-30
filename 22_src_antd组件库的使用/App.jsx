import React, { Component } from 'react'
import { Button,DatePicker } from 'antd'
import {WechatOutlined,WeiboSquareOutlined,SearchOutlined} from '@ant-design/icons'
// import 'antd/dist/antd.css' 
const { RangePicker } = DatePicker;

export default class App extends Component {
  render() {
    return (
      <div>
          App...
          <button>点我</button>
          <Button type="primary">Primary Button</Button>
          <Button type="link">Primary Button</Button>
          <Button type="primary" icon={<SearchOutlined />}>
      
    </Button>
          <WechatOutlined /><hr/>
          <WeiboSquareOutlined />
          <DatePicker  />
          <RangePicker/>
      </div>
     
    )
  }
}

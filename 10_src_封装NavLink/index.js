//引入react的核心库
import React from 'react'
//引入ReactDom
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'
//引入App
import App from './App'

//before
//ReactDom.render(<App/>, document.getElementById('root'))

// After

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter><App/></BrowserRouter>);


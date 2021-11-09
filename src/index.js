import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Product from './Product'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/:productID">
        <Product />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, hashHistory, Router, Route } from 'react-router'
import SearchPage from './mySearchPage'
import myRepo from './myRepo'

render(
  
       <Router history={hashHistory}> 
         <h1>Search:</h1>
         <Route path="/" component={SearchPage}></Route>
         <Route path="repo/:owner/:repo" component={myRepo} />
       </Router>
 
 ,
  document.getElementById('example')
)
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, hashHistory, Router, Route } from 'react-router';
import {Provider} from 'react-redux';
import SearchPage from './mySearchPage';
import myRepo from './myRepo';
import configureStore from './store/configureStore';
import styles from './sss.css'
const store = configureStore();
render(
  <div className={styles.app}>
  <Provider store={store}>
       <Router history={hashHistory}> 
         <h1>Search:</h1>
         <Route path="/" component={SearchPage}></Route>
         <Route path="repo/:owner/:repo" component={myRepo} />
       </Router>
  </Provider>
  </div>
 ,
  document.getElementById('example')
)
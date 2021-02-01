/* layout路由配置 */

import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom";

import List from '../../pages/List'
import Add from '../../pages/Add'
import Count from '../../pages/Count'

export default class MyRouter extends Component {
  render() {
    return (
       <Switch>
          <Route path="/list" component={List} />
          <Route path="/count" component={Count} />
          <Route path="/" component={Add} />
       </Switch>
    )
  }
}
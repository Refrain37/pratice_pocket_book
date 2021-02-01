import React from 'react'
import MyRouter from './MyRouter'
import Tabbar from './Tabbar'

class Layout extends React.Component{
  render() {
    return (
      <div style={{height:'100vh',display:'flex',flexDirection:'column'}}>
        <div style={{flex:'1'}}>
          <MyRouter/>
        </div>
        <Tabbar></Tabbar>
      </div>
    )
  }
}

export default Layout
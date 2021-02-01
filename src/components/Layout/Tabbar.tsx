/* tabbar配置 */

import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {useHistory } from 'react-router-dom'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState('add');
  let history = useHistory()

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        let path = newValue === 'add'?'':newValue
        history.push(`/${path}`) // navigate
      }}
      showLabels
      style={{borderTop:'1px solid rgb(245, 245, 245)',}}
    >
      <BottomNavigationAction value="list" label="明细" />
      <BottomNavigationAction value="add" label="记账"  />
      <BottomNavigationAction value="count" label="统计"/>
    </BottomNavigation>
  );
}

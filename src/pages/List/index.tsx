import React,{ useState } from 'react'
import { useAPI } from '../../rapper/index';
import { List as DataList, ListItemText, ListItem, Avatar } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import './index.css'


export default function List() {
  const [timestamp, setTimestamp] = useState(Date.now())
  let [data] = useAPI['GET/list']({ timestamp })
  
  const remove = async (id:number,index:number) => {
    data?.data.splice(index,1)
    setTimestamp(Date.now()) // fresh
  }

  return (
    <div className={'list-container'}>
      <DataList className={'list'}>
        {data?.data.map((item,index) => (
          <ListItem
            className={'item'}
            onClick={() => remove(item.id,index)}
            key={item.id}>
              <Avatar style={{height:'30px',width:'30px'}}>
                <WorkIcon style={{height:'22px',width:'22px'}} />
              </Avatar>
              <ListItemText style={{marginLeft:'10px'}} primary={item.type}/>
              <ListItemText primary={item.create_at} />
              <ListItemText primary={`￥${item.amount}`} />
          </ListItem>
        ))}
      </DataList>
    </div>
  )
}

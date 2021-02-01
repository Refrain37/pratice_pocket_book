import React,{useState} from 'react'
import { TextField,Button } from '@material-ui/core'
import { fetch } from '../../rapper/index';
import {useHistory } from 'react-router-dom'
import './index.css'

export default function Login() {
  const [isRegister,changeStatus] = useState(true) // 是否为注册
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassWd,setConfirmPassWd] = useState('')
  const [isError,setErrorStatus] = useState(false)

  let history = useHistory()

  // 状态切换：注册 <=> 登录
  const change = () => {
    changeStatus(!isRegister)
    setUsername('')
    setPassword('')
    setConfirmPassWd('')
    setErrorStatus(false)
  }

  const login = async () => {
    let payload = {
      username,
      password
    }
    const res =  await fetch['POST/login'](payload)
    if(res.isOk) {
      history.replace('/')
    }
  }

  const register = async () => {
      if(password !== confirmPassWd) {
        setErrorStatus(true)
        return 
      }
      let payload = {
        username,
        password
      }
      const res =  await fetch['POST/register'](payload)
      if(res.isOk) {
        change()
      }
  }


  return (
    <div className={'container'}>
      {(isRegister)?
        <div className={'login-box'}>
          <h1>Sign In</h1>
          <TextField className={'input'} size="small" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} placeholder="输入用户名" />
          <TextField className={'input'} size="small" variant="outlined" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="输入密码" />
          <Button
          className={'button'}
          color="primary"
          variant="contained"
          onClick={login}
          disabled={username.trim() === '' || password.trim() === ''}>登录</Button>
          <p className={'tips'} onClick={() => change()}>还没有账号？点击注册</p>
        </div>:
        <div className={'register-box'}>
          <h1>Sign Up</h1>
          <TextField className={'input'} size="small" value={username} variant="outlined" onChange={e => setUsername(e.target.value)} placeholder="输入用户名" />
          <TextField className={'input'} size="small" value={password} type="password" variant="outlined" onChange={e => setPassword(e.target.value)} placeholder="输入密码" />
          <TextField className={'input'} error={isError} size="small" value={confirmPassWd} type="password" variant="outlined" 
            onChange={e => {setConfirmPassWd(e.target.value); setErrorStatus(false)}} 
            placeholder="确认密码" />
          <Button
          className={'button'}
          color="primary"
          variant="contained"
          onClick={register}
          disabled={username.trim() === '' || password.trim() === '' || confirmPassWd.trim() === ''}>注册</Button>
          <p className={'tips'} onClick={() => change()}>已有账号，点击登录</p>
        </div>
      }
    </div>
  )
}

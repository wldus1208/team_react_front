import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Session from 'react-session-api'
import { useNavigate } from 'react-router-dom'
import './loginForm.css'

function LoginForm() {
  useEffect(() => {
    console.log('Login useEffect start')
  }, [])
  const navigate = useNavigate()
  //로그인 input (Id, PW) 변경 값
  const [account, setAccount] = useState({
    lgnId: '',
    pwd: '',
  })
  //const [loginId, setLoginId] = useState('')
  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    })
  }
  // 로그인 하기
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      loginGo()
    }
  }
  const loginGo = async () => {
    Session.set('loginId', '')
    Session.set('loginName', '')
    //alert(account.lgnId + ':' + account.pwd)
    let params = new URLSearchParams()
    params.append('loginId', account.lgnId)
    params.append('loginPw', account.pwd)
    await axios
      .post('/login.do', params)
      .then((res) => {
        if (res.data.result === 'SUCCESS') {
          alert(res.data.resultMsg)
          Session.set('loginId', res.data.loginId)
          Session.set('name', res.data.name)
          sessionStorage.setItem('loginId', res.data.loginId)
          sessionStorage.setItem('name', res.data.name)
          sessionStorage.setItem('email', res.data.email)
          //navigate('/')
          //document.location.href = '/'
        } else {
          alert(res.data.resultMsg)
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    //navigate('/')
  }
  return (
    <div className='d-flex align-items-center py-4'>
      <div className='form-signin w-100 m-auto'>
        <form>
          <h1 className='h3 mb-3 fw-normal'></h1>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id=''
              name='lgnId'
              placeholder='Id'
              onChange={onChangeAccount}
            />
            <label htmlFor='floatingInput'>ID</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id=''
              name='pwd'
              placeholder='Password'
              onChange={onChangeAccount}
              onKeyDown={onKeyDown}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          <br />
          <button className='btn btn-primary w-100 py-2' onClick={loginGo}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './joinForm.css'

function JoinForm() {
  useEffect(() => {
    console.log('Join useEffect start')
  }, [])
  const navigate = useNavigate()
  //회원가입 변수 선언
  const [loginId, setLoginId] = useState('')
  const [loginPw, setLoginPw] = useState('')
  const [loginName, setLoginName] = useState('')
  const [email, setEmail] = useState('')

  // 회원가입
  const registerGo = async () => {
    alert(
      'ID : ' +
        loginId +
        ' ' +
        'PW : ' +
        loginPw +
        ' ' +
        'name : ' +
        loginName +
        ' ' +
        'email : ' +
        email,
    )

    let params = new URLSearchParams()
    params.append('loginId', loginId)
    params.append('loginPw', loginPw)
    params.append('loginName', loginName)
    params.append('email', email)
    await axios
      .post('/register.do', params)
      .then((res) => {
        let data = res.data
        if (data.result === 'SUCCESS') {
          alert('가입완료')
          navigate('/login')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <>
      <div className='d-flex align-items-center py-4'>
        <div className='form-signin w-100 m-auto'>
          <h1 className='h3 mb-3 fw-normal'>sign up</h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              placeholder='Name'
              onChange={(e) => {
                setLoginName(e.target.value)
              }}
            />
            <label htmlFor='floatingInput'>Name</label>
          </div>
          <br />
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              placeholder='ID'
              onChange={(e) => {
                setLoginId(e.target.value)
              }}
            />
            <label htmlFor='floatingInput'>ID</label>
          </div>
          <br />
          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='Email'
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <label htmlFor='floatingInput'>Email</label>
          </div>
          <br />
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
              onChange={(e) => {
                setLoginPw(e.target.value)
              }}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          <br />
          <button
            className='btn btn-primary w-100 py-2'
            type='button'
            onClick={registerGo}
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  )
}

export default JoinForm
// About.js

import React, {useState} from 'react';
import axios from 'axios'

const About = () => {
  
  const [loginid, setLoginId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')

  const save = async () => {
    alert("성공")
    alert(loginid + name + email + reason)

    let params = new URLSearchParams()
    params.append('loginid', loginid)
    params.append('name', name)
    params.append('email', email)
    params.append('reason', reason)


    await axios
      .post('/blog/insertblogreq', params)
      .then((res) => {
        console.log(res)

        if (res.data.result === 'SUCCESS') {
          alert('저장 되었습니다.')
          //closeModal()
          // search()
        } else {
          alert(res.data.resultmsg)
        }
      })
      .catch((err) => {
        console.log('noticeUpdate catch start')
        alert(err.message)
      })
  }

  return (
    <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">블로그 체험단 신청</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-5 pt-0">
              <div className="form-floating mb-3">
                <input 
                  type="id" 
                  className="form-control rounded-3" 
                  id="floatingInput" 
                  placeholder="ID" 
                  // value={loginid}
                  onChange={(e) => {
                    setLoginId(e.target.value)
                  }}/>
                <label htmlFor="floatingInput">아이디</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                  type="name" 
                  className="form-control rounded-3" 
                  id="floatingInput" 
                  placeholder="Name"
                  // value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}/>
                <label htmlFor="floatingInput">이름</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                  type="email" 
                  className="form-control rounded-3" 
                  id="floatingInput" 
                  placeholder="email@example.com" 
                  // value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}/>
                <label htmlFor="floatingInput">이메일</label>
              </div>
              
              <div className="form-floating mb-3">
                  <textarea 
                    type="textarea" 
                    className="form-control rounded-3" 
                    id="floatingInput" 
                    placeholder="Reason" 
                    style={{width:'400px', height:'150px'}}
                    // value={reason}
                    onChange={(e) => {
                      setReason(e.target.value)
                    }}/>
                  <label htmlFor="floatingInput">신청사유</label>
              </div>
              
              <button onClick={save} className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">
                신청하기
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

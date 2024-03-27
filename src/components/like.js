// src/AlbumPage.js

import React from 'react';
import Card from './Card'; // Card 컴포넌트의 경로가 올바른지 확인하세요.
import axios from 'axios'
const Like = (props) => {
  const cards = Array.from({ length: 9 }); // 9개의 카드를 생성하기 위한 배열
  //const b_no = props.b_no;
  let b_no = props.b_no;
  let likeyn = props.likeyn;


  

  const likeUpdate = () => {

    let params = new FormData()
    
    //params.append('loginId', sessionStorage.getItem('loginId'));
    params.append('b_no', b_no);
    params.append('likeyn', likeyn);
    params.append('loginid', 'admin');
    

    const test = async() => {
      await axios
      .post('/updateLike.do', params)
      .then((res) => {
        console.log('updateLike res start')
        alert('등록성공')
        
        //listSearch() //재출력
      })
      .catch((err) => {
        console.log('updateLike catch start')
        alert(err.message)
      })
    }

    test();
  }


  return (
    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={likeUpdate} >Like</button>
  )
};

export default Like;

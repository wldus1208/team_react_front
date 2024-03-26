// src/AlbumPage.js

import React from 'react';
import Card from './Card'; 

const AlbumPage = () => {
  // const cards = Array.from({ length: 9 }); // 9개의 카드를 생성하기 위한 배열

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/* {cards.map((_, index) => (
            <Card key={index} />
          ))} */}
          <Card />
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;

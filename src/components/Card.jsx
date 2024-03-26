import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const navigate = useNavigate();

  const [stores] = useState([
    { name: "가게1", id: 1, image: "img/1.png" },
    { name: "가게2", id: 2, image: "img/2.png" },
    { name: "가게3", id: 3, image: "img/3.png" },
    { name: "가게4", id: 4, image: "" },
    { name: "가게5", id: 5, image: "" },
    { name: "가게6", id: 6, image: "" },
  ]);

  const handleViewClick = (storeId) => {
    console.log("가게 번호:", storeId);
    navigate(`/detail/${storeId}`)
  };

  return (
    <>
      {stores.map(store => (
        <div key={store.id} className="col">
          <div className="card shadow-sm">
            {/* Card 내용 */}
            {store.image ? (
              <img src={store.image} className="bd-placeholder-img card-img-top" style={{ height: "250px" }} alt={store.name} />
            ) : (
              <svg className="bd-placeholder-img card-img-top" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">No Image</text>
              </svg>
            )}
            <div className="card-body">
              <p className="card-text">{store.name}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleViewClick(store.id)}>View</button>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

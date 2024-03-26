import React, { useState, useEffect  } from 'react';
// import axios from 'axios';
import About from './About';
import './test.css';
import { useParams } from 'react-router-dom';

function Detail() {
    const { storeId } = useParams();
    const [storeName, setStoreName] = useState('');

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        // axios.get(`/stores/${storeId}`)
        //   .then(response => {
        //       setStoreName(response.data.name);
        //   })
        //   .catch(error => {
        //       console.error('Error fetching store name:', error);
        //   });
        setStoreName(`가게${storeId}`);
    }, [storeId]);


    const toggleLike = () => {
        setIsLiked(!isLiked);
        console.log("isLiked", isLiked);
        // axios.post('/like', { liked: !isLiked })
        // .then(response => {
        //     console.log(response.data); 
        // })
        // .catch(error => {
        //     console.error('There has been a problem with your axios operation:', error);
        // });
    };

    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState([]);
    const [visibleReviews, setVisibleReviews] = useState(4);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (event) => {
        setComment(event.target.value);
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setReviews([...reviews, comment]);
        setComment('');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          handleSubmit(event);
        }
    };

    const handleLoadMore = () => {
        setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 4);
    };

    const handleButtonClick = () => {
        setShowModal(true);
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
    };
    

    return (
        <div className="container marketing">
            <br />
            <div className="row">
            <div className="col-lg-4">
                <button type="button" className="btn" onClick={toggleLike}>
                    {isLiked ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path>
                        </svg>
                    )}
                </button>
                <button className="btn btn-light rounded-pill px-3" type="button" onClick={handleButtonClick}>체험단 신청</button>
                <About show={showModal} handleClose={handleCloseModal} />
            </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">{storeName}</h2>
                <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </div>
            <div className="col-md-5">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">No Image</text></svg>
            </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row g-3">
                <div className="col-md-10">
                    <label htmlFor="comment" className="form-label">Reviw</label>
                    <textarea
                    className="form-control"
                    id="comment"
                    rows="1"
                    value={comment}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    required
                    ></textarea>
                </div>
                <div className="col-md-2 d-flex align-items-end">
                    <button type="button" className="btn" onClick={handleSubmit}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                        </svg>
                    </button>
                </div>

                <div className="mt-4">
                    <ul className="list-group list-group-flush">
                    {reviews.slice(0, visibleReviews).map((review, index) => (
                        <li key={index} className="list-group-item" style={{ marginBottom: '10px' }}>{review}</li>
                    ))}
                    </ul>   

                    {visibleReviews < reviews.length && (
                        <button className="btn btn-outline-primary mt-3" onClick={handleLoadMore}>
                        Load More
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Detail;
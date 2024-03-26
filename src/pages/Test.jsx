// Modal.jsx

import React from 'react';

function Modal({ handleClose, show }) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>닫기</button>
        <p>모달 내용을 여기에 작성하세요.</p>
      </section>
    </div>
  );
}

export default Modal;

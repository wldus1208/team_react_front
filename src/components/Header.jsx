import React from 'react';
import { Link,useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  const loginId = sessionStorage.getItem('loginId');

  const LoginClick = () => {
    navigate('/login');
  };

  const SignUpClick = () => {
    navigate('/signup');
  };

  // 로그아웃 버튼 클릭 시 호출되는 함수
  const logoutClick = () => {
    // 세션에서 로그인 정보 삭제
    sessionStorage.removeItem('loginId');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    // 페이지 새로고침
    // window.location.reload();
    navigate('/login');
  };

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li><Link to="#" className="nav-link px-2 text-white">Features</Link></li>
            <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
          {loginId ? (
              // 로그인 되어 있을 때 로그아웃 버튼 표시
              <button type="button" className="btn btn-outline-light me-2" onClick={logoutClick}>Logout</button>
            ) : (
              // 로그인 되어 있지 않을 때 로그인 버튼 표시
              <button type="button" className="btn btn-outline-light me-2" onClick={LoginClick}>Login</button>
          )}
            <button type="button" className="btn btn-warning" onClick={SignUpClick}>Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

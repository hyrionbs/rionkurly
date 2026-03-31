import { Link } from "react-router-dom";
import "./LoginC.css"


function HeaderLogin() {


  return (
    <div className="login">

      <Link to="/signup" id="loginA">회원가입</Link>
      <div className="HeaderLoginBar"></div>
      <Link to="/login">로그인</Link>
      <div className="HeaderLoginBar"></div>
      <div className="CustomerDropbox">
        <Link to="/customer" className="Customer">
          고객센터
          <span className="CustomerIcon"></span>
        </Link>

        <div className="CustomerDropboxIn">
          <a href="">공지사항</a>
          <a href="">자주하는 질문</a>
          <a href="">1:1 문의</a>
          <a href="">대량주문 문의</a>
        </div>
      </div>
      
    </div>
  );
}

export default HeaderLogin;
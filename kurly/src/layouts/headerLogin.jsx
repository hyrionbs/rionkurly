import { Link } from "react-router-dom";
import "./LoginC.css"


function HeaderLogin() {


  return (
    <div>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
      <div className="CustomerDropbox">
        <Link to="/customer">고객센터</Link>
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
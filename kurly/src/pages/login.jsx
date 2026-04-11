import "./login.css";

function Login() {
  return (
  <div> 
    <div className ="loginHD">
      <h1>Header</h1>
    </div>
  <div className="loginPage">
    <div>
      <p className="loginText">로그인</p>
    </div>

    <div>
      <div>
        <div className="loginInputDiv">
          <input className="loginInput" type="text" placeholder="아이디를 입력해주세요" />
          <input className="loginInput" type="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div className="loginInputSc">
          <a href="">아이디 찾기</a>
          <a href="">비밀번호 찾기</a>
        </div>
        <div className="loSiBtn">
          <button className="loginBtn">로그인</button>
          <button className="signBtn">회원가입</button>
        </div>
        <div>
          <p className="loginText">간편 로그인</p>
          <div className="NKlogin">
            <button className="NaverloginBtn">네이버로 계산하기</button>
            <button className="KakaologinBtn">카카오로 계속하기</button>
          </div>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</div>)
}

export default Login;
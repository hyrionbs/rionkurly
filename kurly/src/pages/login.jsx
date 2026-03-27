import "./login.css";

function Login() {
  return (
  <div> 
    <div class ="loginHD">
      <h1>Header</h1>
    </div>
  <div class="login">
    <p class="loginText">로그인</p>

    <div>
      <div>
        <div>
          <input class="loginInput" type="text" placeholder="아이디를 입력해주세요" />
          <input class="loginInput" type="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div>
          <a href="">아이디 찾기</a>
          <a href="">비밀번호 찾기</a>
        </div>
        <div>
          <button class="loginBtn">로그인</button>
          <button class="signBtn">회원가입</button>
        </div>
        <div>
          <p class="loginText">로그인</p>
          <button class="loginBtn">네이버로 계산하기</button>
          <button class="signBtn">카카오로 계속하기</button>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</div>)
}

export default Login;
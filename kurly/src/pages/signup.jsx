import "./signup.css";


function signup() {
  return (
  <div>
      <div className="signupTitle">
        <p>회원가입</p>
      </div>
      <div className="signupBox" >
        <div className="aa">
          <span id="starIcon">*</span> 필수입력사항
        </div>

        <div className="signupInnerbox">
          <div className="signupInner">
            <div className="signupInnerTitle">
              아이디<span id="starIcon">*</span>
            </div>
            <div className="signupInnerInput">
              <input type="text" placeholder="아이디를 입력해주세요." />
            </div>
            <div className="signupInnerEmpty"></div>
          </div>

          <div className="signupInner">
            <div className="signupInnerTitle">
              비밀번호<span id="starIcon">*</span>
            </div>
            <div className="signupInnerInput">
              <input type="password" placeholder="비밀번호를 입력해주세요." />
            </div>
            <div className="signupInnerEmpty"></div>
          </div>

          <div className="signupInner">
            <div className="signupInnerTitle">
              비밀번호 확인<span id="starIcon">*</span>
            </div>
            <div className="signupInnerInput">
              <input type="password" placeholder="비밀번호를 한번 더 입력해주세요." />
            </div>
            <div className="signupInnerEmpty"></div>
          </div>

          <div className="signupInner">
            <div className="signupInnerTitle">
              이름<span id="starIcon">*</span>
            </div>
            <div>
              <input type="text" placeholder="이름을 입력해주세요." />
            </div>
            <div className="signupInnerEmpty"></div>
          </div>

          <div className="signupInner">
            <div className="signupInnerTitle">
              이메일<span id="starIcon">*</span>
            </div>
            <div>
              <input type="email" placeholder="아이디를 입력해주세요." />
            </div>
            <div className="signupInnerEmpty"></div>
          </div>
        </div>
      </div>

      <div>
        <div></div>
      </div>
  </div>);
}

export default signup;
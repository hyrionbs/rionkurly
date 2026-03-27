import "./LoginBtn.css"

function LoginBtn({ text, className = "" ,onClick }) {
  return (
    <button
      className={`btn ${className}`}
      onClick={() => {
        console.log("클릭됨");
        onClick && onClick();
      }}
    >
      {text}
    </button>
    );
}

export default LoginBtn
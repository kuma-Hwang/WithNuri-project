// src/pages/LoginPage.tsx
const Login = () => {
    return (
      <div>
        <h1>로그인</h1>
        <form>
          <input type="text" placeholder="아이디 또는 이메일" />
          <input type="password" placeholder="비밀번호" />
          <button type="submit">로그인</button>
        </form>
      </div>
    );
  };
  
  export default Login;
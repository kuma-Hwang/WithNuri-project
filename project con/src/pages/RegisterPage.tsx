const RegisterPage = () => {
    return (
      <div>
        <h1>회원가입</h1>
        <form>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="생년월일 (YYMMDD)" />
          <input type="text" placeholder="휴대폰 번호" />
          <input type="email" placeholder="이메일 주소" />
          <button type="submit">가입하기</button>
        </form>
      </div>
    );
  };
  
  export default RegisterPage;
  
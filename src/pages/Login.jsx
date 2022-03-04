import React from "react";
import LoginForm from "../components/LoginForm";
import '../styles/login.css';

function Login() {
  return (
    <main className="loginContainer">
      <div className='sideText'>
        <h1 className="display-4 font-weight-normal">Tabela Inteligov</h1>
        <h4 className="text-muted">Faça login para acessar.</h4>
      </div>
      <LoginForm />
    </main>
  );
}

export default Login;

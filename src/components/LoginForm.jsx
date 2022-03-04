import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import "../styles/login.css";

function LoginForm() {
  const [disable, setDisable] = useState(true);
  const [loginForm, setLoginForm] = useState({ user: "", password: "" });
  const { setUser } = useContext(Context);
  const navigate = useNavigate();

  /* salva mudanças do input no estado local */
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  /* A cada mudança nos inputs e feito a validação para liberação do butão */
  useEffect(() => {
    const { user, password } = loginForm;
    const minLength = 6;
    const valid = user.length >= 4 && password.length >= minLength;

    if (valid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [loginForm]);

  /* Função responsável pelo login do user */
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(loginForm);
    navigate("/table");
  };

  return (
    <div className='formLoginConteiner'>
      <form className='formLogin' action='submit'>
        <label className='formLabel' htmlFor='user'>
          Usuário
          <input
            type='text'
            name='user'
            className='form-control'
            placeholder='Digite seu usuário'
            value={loginForm.user}
            onChange={handleChange}
          />
        </label>

        <label className='formLabel' htmlFor='password'>
          Senha
          <input
            type='password'
            className='form-control'
            name='password'
            placeholder='*********'
            value={loginForm.password}
            onChange={handleChange}
          />
        </label>

        <br />

        <button
          type='submit'
          className='btn btn-outline-dark'
          disabled={disable}
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

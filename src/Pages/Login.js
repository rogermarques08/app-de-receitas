import { useState } from 'react';

function Login() {
  const inputsLogin = {
    email: '',
    senha: '',
  };
  const [inputs, setInputs] = useState(inputsLogin);

  const mudarInput = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <>
      <h1>Login</h1>
      <br />
      <input
        type="text"
        placeholder="Digite seu email"
        data-testid="email-input"
        value={ inputs.email }
        onChange={ mudarInput }
        name="email"
      />
      <input
        type="text"
        placeholder="Digite sua senha"
        data-testid="password-input"
        value={ inputs.senha }
        onChange={ mudarInput }
        name="senha"
      />
      <button type="button" data-testid="login-submit-btn">Enter</button>

    </>
  );
}

export default Login;
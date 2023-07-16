import React from 'react';
import './form.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function SigninForm() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      {errorMessage && (
        <h2 className="error-message form-error-message">{errorMessage}</h2>
      )}
      <label className="form__label">
        Email Address
        <input
          className="form__input--email"
          type="email"
          label="Email Address"
          placeholder="Email Address"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
      </label>
      <label className="form__label">
        Password
        <input
          className="form__input--password"
          type="password"
          label="Create password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
      </label>
      <button className="form__submit" type="submit">
        Login
      </button>
    </form>
  );
}

export default SigninForm;

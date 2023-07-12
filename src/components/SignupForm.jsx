import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        navigate('/auth/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email Address
        <input
          type="email"
          label="Email Address"
          placeholder="Email Address"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          label="Create password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;

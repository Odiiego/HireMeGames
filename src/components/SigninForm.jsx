import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function SigninForm() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      console.log(user);
      navigate('/');
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
      <button type="submit">Login</button>
    </form>
  );
}

export default SigninForm;

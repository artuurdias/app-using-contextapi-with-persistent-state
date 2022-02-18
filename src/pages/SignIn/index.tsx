import React, { useState } from 'react';

import { Container } from './styles';

import { useUserContext } from '../../contexts/UserContext';

const SignIn: React.FC = () => {
  const userContext = useUserContext();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  function handleSignIn() {
    userContext?.signIn({ name, email });
  }

  return (
    <Container>
      <input name='name' placeholder='Name' onChange={e => setName(e.target.value)} value={name} />
      <input name='email' placeholder='E-mail' onChange={e => setEmail(e.target.value)} value={email} />
      <button onClick={handleSignIn}>Sign In</button>
    </Container>
  );
}

export default SignIn;
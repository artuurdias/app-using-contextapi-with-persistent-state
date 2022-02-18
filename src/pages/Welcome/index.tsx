import React from 'react';

import { Container } from './styles';

import { useUserContext } from '../../contexts/UserContext';

const Welcome: React.FC = () => {
  const userContext = useUserContext();

  function handleSignOut() {
    userContext?.signOut();
  }

  return (
    <Container>
      <p>Welcome {userContext?.user?.name}!</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </Container>
  );
}

export default Welcome;
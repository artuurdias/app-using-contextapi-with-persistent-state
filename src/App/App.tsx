import React from 'react';

import { useUserContext } from '../contexts/UserContext';

import SignIn from '../pages/SignIn';
import Welcome from '../pages/Welcome';

import { Container } from './styles';

const App: React.FC = () => {
  const userContext = useUserContext();

  return (
    <Container>
      <h2>Application combining React Context and Persistent State.</h2>
      {userContext?.user ? <Welcome /> : <SignIn />}
    </Container>
  );
}

export default App;
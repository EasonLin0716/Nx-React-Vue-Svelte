import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { myLib } from '@my-nx-project/my-lib';

const StyledApp = styled.div`
  // Your style here
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 24px;
`

const myLibResult = myLib();

export function App() {
  return (
    <StyledApp>
      <StyledH1>{myLibResult}</StyledH1>
      <NxWelcome title="my-react-app" />
    </StyledApp>
  );
}

export default App;

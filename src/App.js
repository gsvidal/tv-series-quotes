import { useState } from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* margin-top: 30rem; */
`;

const Button = styled.button`
  width: 240px;
  background: -webkit-linear-gradient(top left, #007d35 0%, #627d35 50%, #0f574e 100%);
  background-size: 240px; 
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem;
  font-size: 2rem;
  border: 2px solid white;
  border-radius: 5px;
  transition: transform 0.2s ease;
  &:active {
    opacity: 0.9;
    transform: scale(0.95);
  }
`;

function App() {

  // Quotes state
  const [ phrase, setPhrase ] = useState({});

  // Async await
  const fetchAPI = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const result = await api.json();
    // console.log(phrase)
    setPhrase(result[0]);
  } 

  return (
    <Container>
      <Quote 
        phrase={phrase}
      />
      <Button
        onClick={fetchAPI}
      >
          Get quote
      </Button>
    </Container>
  );
}

export default App;

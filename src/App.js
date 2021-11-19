import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Selector from './components/Selector';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;
const ContainerMain = styled.div`
  text-align: center;
  h1 {
    font-size: 5rem;
    margin-bottom: 8rem;
    font-family: 'Shadows Into Light Two', cursive;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem;
  margin: 1rem;
  font-size: 2rem;
  background-color: #cfc;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: black;
  &:hover {
    background-color: #aca;
  }
`;

function App() {

  const [ series, setSeries ] = useState(""); 

  const handleClick = (event) => {
    setSeries(event.target.value);
  }

  return (

    <Container>
      { series 
      ?
      <Selector 
        series={series}
        setSeries={setSeries}
      />
      :
      <ContainerMain>
        <h1>TV SERIES QUOTES</h1>
        <h2>Select your favourite series to get Quotes!</h2>
        <Button
          onClick={handleClick}
          value="smallville"
        >Smallville
        </Button>
        <Button
          onClick={handleClick}
          value="breakingbad"
        >Breaking bad
        </Button>
        
      </ContainerMain>
      }
    </Container>
  );
}

export default App;

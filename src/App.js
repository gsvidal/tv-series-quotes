import { useState } from 'react';
import styled from '@emotion/styled';
import Selector from './components/Selector';
import btnImgSmallville from './assets/smallville.png';
import btnImgBreakingBad from './assets/breakingbad.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  min-height: 100vh;
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
  width: 280px;
  height: 200px;
  padding: 1rem;
  margin: 1rem;
  font-size: 2rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: black;
  cursor: pointer;
  opacity: 0.5;
  transition: transform .1s linear;
  &:hover {
    opacity: 1;
  }
  &.button__smallville {
    background: url(${btnImgSmallville}) center/cover no-repeat;
    background-size: 135%;
    transition: background-size .5s linear;
    &:hover {
      background-size: 180%;
    }
    &.disabled {
      opacity: 0.2;
      transform: scale(1);
      cursor: initial;
    }
  }
  &.button__breaking-bad {
    background: url(${btnImgBreakingBad}) center/cover no-repeat;
    transition: background-size 1.5s ease;background-size: 145%;
    transition: background-size .5s linear;
    &:hover {
      background-size: 180%;
    }
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
          className="button__smallville"
        >
        </Button>
        <Button
          onClick={handleClick}
          value="breakingbad"
          className="button__breaking-bad"
        >
        </Button>
        <p className="credits">Smallville API made by <a href="https://github.com/francoxr" target="_blank">Franco</a></p>
      </ContainerMain>
      }
    </Container>
  );
}

export default App;

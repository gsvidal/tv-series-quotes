import React, { useState, useEffect, Fragment } from 'react';
import Quote from './Quote';
import styled from '@emotion/styled';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Button = styled.button`
  width: 240px;
  background: -webkit-linear-gradient(top left, #007d35 0%, #627d35 50%, #0f574e 100%);
  background-size: 240px; 
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3rem;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: 1px solid white;
  background-image: ${props => (props.series === "smallville" ? "-webkit-radial-gradient(circle, rgba(8,0,255,1) 53%, rgba(252,70,70,1) 100%)" : "-webkit-linear-gradient(top left, #007d35 0%, #627d35 50%, #0f574e 100%)")};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: transform 0.2s ease;
  transition: box-shadow 0.2s ease;
  &:active {
    opacity: 0.9;
    transform: scale(0.95);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 5px, rgba(0, 0, 0, 0.23) 0px 3px 5px;
  }
`;
const ButtonBack = styled.button`
  padding: .5rem 2rem;
  margin-top: 5rem;
  font-size: 1.2rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #ecf; 
`;

const Selector = ({series, setSeries}) => {

  // Quotes state
  const [ phrase, setPhrase ] = useState({});

  // Asigning which tv series will retrieve
  const urlAPISmallville = "";
  const urlAPIBreakingBad = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";

  const urlAPI = series === "smallville" ? urlAPISmallville : urlAPIBreakingBad ;

  // Async await
  const fetchAPI = async function() {
    const api = await fetch(urlAPI);
    const result = await api.json();
    setPhrase(result[0]); 
  }

  // Loads a phrase since the firts App mounting
  useEffect(() => {
    fetchAPI();
  },[])

  // Handle back button click
  const handleClickBack = () => {
    setSeries("");
  }  

  return(
    <Container>
      <Quote 
        phrase={phrase}
      />
      <Button 
        series={series}
        onClick={fetchAPI}
      >
          Get quote
      </Button>
      <ButtonBack
        onClick={handleClickBack}
      >Back</ButtonBack>
    </Container>
  );
}

export default Selector;
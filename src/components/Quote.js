import React, { Fragment } from 'react';
import styled from '@emotion/styled'

const ContainerQuote = styled.div`
  max-width: 800px;
  padding: 3.5rem;
  background-color: #ffffffdd;
  border: 3px solid grey;
  border-radius: 10px;
  font-family: 'Dancing Script', cursive;
  
  h1 {
    padding-left: 2rem;
    font-size: 3rem;
    position: relative;
    &::before {
      font-family: Arial, Helvetica, sans-serif;
      content: open-quote;
      font-size: 7rem;
      position: absolute;
      top: -3.5rem;
      left: -3rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2rem;
    text-align: right;
    color: #aaa;
    margin-top: 3rem;
  }
`;

const Quote = ({phrase}) => {

  const { quote, author } = phrase;

  return(
    <ContainerQuote>
      <h1>{quote}</h1>
      <p>{author}</p>
    </ContainerQuote>
  );
}

export default Quote;
import React from 'react';
import styled from '@emotion/styled'

const ContainerQuote = styled.div`
  max-width: 800px;
  padding: 3rem;
  background-color: #ffffffdd;
  border: 3px solid grey;
  border-radius: 10px;
  font-family: 'Dancing Script', cursive;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  
  h1 {
    padding-left: 2rem;
    font-size: 2.5rem;
    position: relative;
    &::before {
      font-family: Arial, Helvetica, sans-serif;
      content: open-quote;
      font-size: 7rem;
      position: absolute;
      top: -3.2rem;
      left: -2.2rem;
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

  // const { quote, author } = phrase;

  if(!phrase) return null;
  return(
    <ContainerQuote>
      {phrase.author_id 
      ? 
      <>
        <h1>{phrase.content}</h1>
        <p>{phrase.author_id.name}</p>
      </>
      :
      <>
        <h1>{phrase.quote}</h1>
        <p>{phrase.author}</p>
      </>
      }
    </ContainerQuote>
  );
}

export default Quote;
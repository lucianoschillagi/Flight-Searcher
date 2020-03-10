import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn } from 'react-animations';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-top: 20px;
  font-family: 'Sen', sans-serif;  font-size: 14px;
  font-size: 14px;
  color: black;
  margin: 0 auto;
  `

export const OriginMsj = styled.p`
  width: 100%;
  font-size: 3em;
  font-weight: bold;
  text-decoration: underline;
`;

export const Origins = styled.select`
  width: 100%;
  margin-bottom: 50px;
  height: 50px;
  font-size: 2em;
  border: solid 2px black;
  border-radius: 10px;
  background-color: whitesmoke;
  text-indent: 10px;
`;

export const SearchOriginBtn = styled.button`
  font-size: 2em;
  height: 60px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid;
  color: white;
  margin: 0 0em;
  padding: 0.25em 1em;
  background-color: black;
  align-items: center;
  border-radius: 10px;
  border: none;
  font-family: 'Sen', sans-serif;  
`;

export const NumberOfFlights = styled.h1`
  font-size: 2em;
  color: white;
`;


// Animations
export const bounceAnimation = keyframes`${bounce}`;
 
export const BouncyDiv = styled.div`
  animation: 3s ${bounceAnimation};
`;

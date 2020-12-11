
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  text-align: center;
  cursor: pointer;
  background-color: ${(pr) => pr.theme.black};
  width: 100%;
  height: 100%;
  padding: 4%;
`;

const TitleStyled = styled.h1`
  font-family: 'Quattrocento Sans', sans-serif;
  color: ${(pr) => pr.theme.white};
  font-size: 3em;
  padding: 4% 0;
`;

const BASE_URL = 'https://swapi.dev/api/';
const API_KEY = 'people';

const App = () => {
  
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${API_KEY}`)
      .then((res) => {
        setStarWarsData(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []) 

  return (
    <WrapperDiv>
      <TitleStyled>Star Wars Information</TitleStyled>
      {starWarsData.map((data) => {
        return <Character key={data.height} name={data.name} birth={data.birth_year}/>
      })}
    </WrapperDiv>
  );
}

export default App;

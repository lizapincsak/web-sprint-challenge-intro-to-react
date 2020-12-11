// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterDiv = styled.div` 
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid ${(pr) => pr.theme.tertiaryColor};
    margin: 5%;
    padding: 0 5%;
`;

const SubHeaderStyled = styled.h2`
    color: ${(pr) => pr.theme.secondaryColor};
    font-family: 'Noto Serif JP', serif;
    
    &:hover{
        color: ${(pr) => pr.theme.primaryColor};
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
    
`;

export default function Character (props){
    const {name, birth} = props;
    return(
        <CharacterDiv>
        <SubHeaderStyled>{name}</SubHeaderStyled>
        <SubHeaderStyled>{birth}</SubHeaderStyled>
        </CharacterDiv>
    )
}
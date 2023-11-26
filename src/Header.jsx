import {React, useState} from 'react'
import {styled, ThemeProvider} from 'styled-components'


const Header = () => {
 
const HeaderContainer = styled.header`
width: 100vw;
height: 50px;
margin: 5px 10px 0px 5px;
background-color: gray;
transition: all 0.4s ease-in-out;
`
const MenuButton = styled.button`
width: 50px;
height: ${(props) => props.isOpen ? '150px' : '50px'};
align-items: right;

`
  
const MenuTitle = {
  color: 'white',
  fontSize: '18px',
  marginRight: '10px',
  marginLeft: '10px'
}





return (
    <>
     <HeaderContainer>
      <span style={MenuTitle}>Difficulty</span>
      
       
      
     </HeaderContainer>
  </>   
    )
}

export default Header
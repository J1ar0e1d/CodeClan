import {React, useState} from 'react'
import { ThemeProvider, styled } from 'styled-components'
import "./App.css"
import { BsList } from "react-icons/bs";

const Sidebar = () => {
  

    const Aside = styled.aside`
    width: ${(props) => props.isOpen ? '150px' : '50px'};
    height: 100vh;
    background: #333;
    transition: all 0.4s ease-in-out;
    `

    const [isOpen, setIsOpen] = useState(false);

  const [items, setItems] = useState(
         [{
             id: 1,
             title: 'Difficulty'
             },
            
             {
              id: 2,
              title: 'Appearance'
              }            
            ]
          )
  

    

  return (
    <>
        <Aside isOpen={isOpen}>
        <BsList  onClick={() => setIsOpen(!isOpen)}></BsList>
        <ul>
          {items.map(item => (
            <li key={item.id} title={item.title}></li>))}
        </ul>
        
        
        </Aside>
    </>
  )
}

export default Sidebar
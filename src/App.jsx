import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components';
import './App.css'
import Form from './Form';
import Table from './Tabla';




function App() {
const API_URL = 'https://jsonplaceholder.typicode.com/';
const [reqType, setReqType] = useState('users');
const [items, setItems] = useState([]) 


// STYLEZ

const light = {
  backgroundColor: "#ACC7F7",
  text: "#212121",
}

const dark = {
  backgroundColor: "#414040",
  text: "#D3E0E0",
}

const themeButton = {
  position: "fixed",
  width: '15px'
}
// STYLES FUNCTIONS 
const [theme, setTheme] = useState('light');
 
function toggleTheme() {
  setTheme(theme === 'light' ? 'dark' : 'light') 
}

useEffect(() => {
  const fetchItems = async () => {
       try {
         const response = await fetch(`${API_URL}${reqType}`);
         const data = await response.json();
         setItems(data);
       }catch(err){
        console.log(err);
       }
  
      }
      fetchItems();

}, [reqType])  
  
  
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? dark : light} >
     
     <div className='App'>
      
      <button  onClick={toggleTheme}>
      {theme === 'light' ? 'light' : 'dark'}
      </button>
      
      <Form reqType={reqType} setReqType={setReqType}/>
      
      <Table items= {items} />
      
      </div> 
      
      </ThemeProvider>
    </>
  )
}

export default App

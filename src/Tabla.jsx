import React from 'react'
import styled from 'styled-components'
import Row from './Row'

const Table = ({ items }) => {
  
  const Tabla = styled.table`
  width: 100%;
  overflow-y: auto;
  padding-top: 52px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.text};
  `

    return (
    <div>
        <Tabla>
            <tbody>
                {items.map(item => (
                    <Row key={item.id} item={item}/>
                ))}
            </tbody>
        </Tabla>
    </div>
  )
}

export default Table
import React from 'react' ;
import '../styles/Body.css' ;
import { data } from '../data.js' ;
import Container from './Container' ;


const Body = () => {
  return (
    <div className='body'>
      { data.map((item , index ) => (
        <Container key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </Container>
      ))}
    </div>
  ) ;
} ;


export default Body ;
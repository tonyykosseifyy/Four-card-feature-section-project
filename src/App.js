import React from "react";
import './Global.css' ;
import './styles/App.css' ;
import Header from './Components/Header' ;
import Body from './Components/Body' ;


const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
} ;



export default App ;
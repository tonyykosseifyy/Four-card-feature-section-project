import React from 'react' ;
import '../styles/Header.css' ;
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <Fade cascade >
      <header className='header'>
        <h1>Reliable, efficient delivery </h1>
        <h1>Powered by Technology</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisiicing elit. Iure hic ab mollitia excepturi repudiandae, recusandae voluptate expedita architecto omnis et.
        </p>
      </header>
    </Fade>
  ) ;
} ;


export default Header ;
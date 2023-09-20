import React, {useState} from 'react';

import '../style/Header.css';

import cupcake from '/img/cupcake32.png'

const Header = () => {

const [classOn, setClassOn] = useState(false);
      
  return (
    <header>
    <div className="container">

      <div className='logo'>
      <img className="logo-image" src={cupcake} alt="logo cupcake"/>
      <span>Jeeh,s</span>
      </div>
      



      <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
           <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav className='nav'>
            <ul className='nav-list'>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#sobre">SOBRE NÓS</a>
              </li>
              <li>
                <a href="#cardapio">CARDÁPIO</a>
              </li>
              <li>
                <a href="#contato">CONTATO</a>  
              </li>
              
            </ul>
          </nav>

          </div>
        </div>

      </header>

      )
    }
    
export default Header;
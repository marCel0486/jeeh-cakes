import React from 'react'
import '../style/Home.css'
import Sobre from './Sobre'
import Contato from './Contato'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className='home-bg animeleft' >
      <h1 className='home-title animate__animated animate__heartBeat'>Deixe seu dia mais doce !!!</h1>
      <p className='home-content animate__animated animate__heartBeat'>Os melhores doces da região</p>

      <div className='home-button-bg'>
        
        <Link to='/cart'
        >
          <button className='home-button'>
          
          Encomende seu bolo
          </button>
          
        </Link>
      
      </div>

      
    </div>
    <Sobre/>

    

    <Contato/>

    
    </>
  )
}

export default Home
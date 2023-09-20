import React from 'react'
import '../style/Home.css'
import Sobre from './Sobre'
import Produto from './Produto'
import Contato from './Contato'
const Home = () => {
  return (
    <>
    <div className='home-bg' >
      <h1 className='home-title'>Deixe seu dia mais doce !!!</h1>
      <p className='home-content'>Os melhores doces da região</p>

      <div className='home-button-bg'>
      <button className='home-button'>
        Encomende seu bolo
      </button>
      </div>

      
    </div>
    <Sobre/>

    <Produto/>

    <Contato/>

    
    </>
  )
}

export default Home
import React from 'react'
import bolo from '/img/bolo-sobre.png'
import '../style/Sobre.css'

const Sobre = () => {
  return (
    <section className='sobre animate__animated animate__backInRight' id='sobre' >
        
        <div>
        <h2 className='sobre-title'>
        Sobre Nós</h2>
        <p className='sobre-content'>
        
Bem-vindo a um paraíso de confeitaria onde os sonhos se tornam realidade e a doçura é celebrada em cada fatia! Nossa loja de bolos é um refúgio para os apreciadores de sabores extraordinários, onde a arte da confeitaria se encontra com a paixão por criar bolos que são verdadeiras obras-primas comestíveis. Aqui, cada bolo é uma história contada em camadas de sabor, decorado com maestria e amor. Seja você um amante de bolos clássicos, cupcakes criativos, ou tortas irresistíveis, nossa loja tem algo especial para todos os paladares. Entre e mergulhe em um mundo de doçura onde a alegria é fatiada e servida com um toque de magia. Estamos ansiosos para tornar seus momentos especiais ainda mais doces e memoráveis.
     
     
        
    </p>
        </div>
    
    <div className='sobre-image'><img className='bolo' src={bolo} alt="" /></div>
        
        </section>
  )
}

export default Sobre
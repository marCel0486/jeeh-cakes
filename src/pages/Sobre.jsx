import React from 'react'
import bolo from '/img/bolo-sobre.png'
import '../style/Sobre.css'

const Sobre = () => {
  return (
    <section className='sobre' id='sobre' >
        
        <div>
        <h2 className='sobre-title'>
        Sobre Nós</h2>
        <p className='sobre-content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi labore perferendis tempore accusamus esse voluptates sed tempora nemo ipsa porro inventore distinctio sint at cupiditate, aperiam ea ad optio.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, totam quasi nobis tenetur ab minima, itaque mollitia labore distinctio dolores odit unde consectetur consequuntur! Suscipit reprehenderit eaque enim exercitationem corporis.
     
     
        
    </p>
        </div>
    
    <div className='sobre-image'><img className='bolo' src={bolo} alt="" /></div>
        
        </section>
  )
}

export default Sobre
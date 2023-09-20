import React from 'react'
import '../style/Produto.css'
import boloBrigadeiro from '/img/bolo5.png'


const Produto = () => {
  return (
    <section className='cardapio' id='cardapio'>
      <h2 className='Produto-title'>
        Cardápio
      </h2>
        
          <div className='container-produto'>
            <div className='card-produto'>
                <div className="produto-image">
                    <img src={boloBrigadeiro} alt="" />
                    <div className="produto-content">
                        <h3 className='bolo-title'>Bolo Brigadeiro</h3>
                        <span className='span-produto'>
<sup>R$</sup> 46 <sup>kg</sup>
                        </span>
                        
                    </div>
                </div>
            </div>
          </div>
    </section>
  )
}

export default Produto
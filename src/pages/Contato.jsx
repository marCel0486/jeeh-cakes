import React from 'react'
import '../style/Contato.css'
import {Link} from 'react-router-dom'
import inst from '/img/insta.svg'
import what from '/img/what.svg'

const Contato = () => {
  return (
    <section className='contato' id='contato'>
      <h2 className='contato-title'>Contato</h2>
      <div className='container-contato'>
        
        <Link to='https://www.instagram.com/docurinhasdajeh/' target='_blank'>
<img src={inst} alt="" /> @docurinhasdajeh

        </Link>

        <Link to='
https://contate.me/docurinhasdajeh' target='_blank'>
  <img src={what} alt="" />
        (15)997466647
        </Link>
        

      </div>
    </section>
  )
}

export default Contato
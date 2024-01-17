import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'

import Footer from './components/Footer'
import Header from './components/Header'

import './style/Global.css'

import { Helmet } from 'react-helmet'

import favicon from '/img/cupcake16.png'
import Loja from './pages/Loja'

import 'animate.css';


function App() {
  return(
    <>
    <Helmet>
      <title> Jeeh,s</title>
      <link rel='icon' type='image/ico' href='/img/favicon.ico' />
    </Helmet>
    <BrowserRouter>
<Header/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Loja/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
 </>
  )
 
}

export default App

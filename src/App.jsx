import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'

import Footer from './components/Footer'
import Header from './components/Header'

import './style/Global.css'

import { Helmet } from 'react-helmet'

import favicon from '/img/cupcake16.png'


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
 </Routes>
 <Footer/>
 </BrowserRouter>
 </>
  )
 
}

export default App

import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'

import Footer from './components/Footer'
import Header from './components/Header'

import './style/Global.css'


function App() {
  return(
    <BrowserRouter>
<Header/>
 <Routes>
  <Route path='/' element={<Home/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
  )
 
}

export default App

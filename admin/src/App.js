import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Menu from './components'
import Home from './pages/Home'
import Esportes from './pages/Produtos/Esportes'
import Eletrodomesticos from './pages/Produtos/Eletrodomesticos'
import Brinquedos from './pages/Produtos/Brinquedos'
import Futebol from './pages/Produtos/Esportes/Futebol'
import Volei from './pages/Produtos/Esportes/Volei'



const App = () => { 
  return (
    <>
      <BrowserRouter>
        <Menu/>
                
        <Routes>

          <Route path='/'>
            <Route index element={<Home/>}/>
              
            <Route path='esportes'> 
              <Route index element={<Esportes/>}/>
              <Route path='futebol' >
                <Route index element={<Futebol/>}/>
                <Route path='campo' element={<h1>Aqui so futebol de campo!</h1>}/>
              </Route>
              <Route path='volei' element={<Volei/>}/>
            </Route>

            <Route path='eletrodomesticos' element={<Eletrodomesticos/>}/>
            <Route path='brinquedos' element={<Brinquedos/>}/>

          </Route>

        </Routes>
        

      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/main.scss"
import Nav from './components/landing/Nav'
import Main from './pages/Main'
import Revs from './pages/Revs'
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/reviews' element={<Revs />} />
      </Routes>
    </>
  )
}

export default App


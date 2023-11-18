import React from 'react'
import CoinPage from './pages/CoinPage'
import Header from './components/Header.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { makeStyles } from '@mui/material'

const App = () => {


  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
    </>
  )
}

export default App



import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchNavbar from './components/SearchNavbar';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <SearchNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}
export default App;
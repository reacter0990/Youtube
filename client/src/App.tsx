// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import ThemeBlur from './components/ThemeBlur'
import './App.css'
import Home from './Pages/Home'

function App() {

  return (
    <Box flexGrow={1}>
      <Navbar/>
      <Home/>
    </Box>
  )
}

export default App

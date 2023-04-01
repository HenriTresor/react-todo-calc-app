
import './App.css'
import { Container, Button, Box } from '@mui/material'
import Header from './components/Header'
import Calculator from './components/Calculator'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


function App() {

  let [isCalActive, setIsCalActive] = useState(false)
  let [isTodoActive, setIsTodoActive] = useState(true)


  return (
    <BrowserRouter>
      <Container sx={{
        marginTop: 5
      }}>

        <Box sx={{
          margin: 3,
          display: 'flex',
          width: '100%',
          justifyContent: 'space-evenly'
        }}>
          <Link to="calculator">
            <Button onClick={() => {
              setIsCalActive(true)
              setIsTodoActive(false)
            }} variant={isCalActive? 'contained': 'outlined'}>
              Calculator
            </Button>
          </Link>
          <Link to="/">
            <Button
              onClick={() => {
                setIsCalActive(false)
                setIsTodoActive(true)
              }}
              variant={isTodoActive ? 'contained' : 'outlined'}
            >
              ToDo List
            </Button>
          </Link>
        </Box>

        <Routes>
          <Route path='calculator' element={isCalActive && <Calculator />} />
          <Route path="/" element={<Header />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App

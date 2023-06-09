import { Container, TextField, Box, Grid } from '@mui/material'
import React, {useEffect, useState} from 'react'
import Button from './Button'
import keys from '../data/keys'

const Calculator = () => {

  let [inputValue, setInputValue] = useState("")

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        try {
           console.log(inputValue);
           setInputValue(eval(inputValue).toString())
         } catch (err) {
          setInputValue("Err")
         }
      }
    })

    return () => {
      window.removeEventListener('keydown', (e) => {
        if (e.key == "Enter") {
          setInputValue(eval(inputValue).toString())
        }
      })
    }
  },[inputValue])

  const handleCal = (text) => {
    if (text === '=') {
      try {
          setInputValue(eval(inputValue).toString())     
      } catch (err) {
        setInputValue("Error")
      }
    }
    else if (text === 'C') {
      setInputValue('')
    }
    else {
      setInputValue(prevInput => prevInput +text)
    }
  }
  return (
    
    <Container>
      <TextField

        fullWidth
        label="calculate"
        variant='outlined'
        onChange={(e) => {
          setInputValue(inputValue)
        } }
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            try {
              setInputValue(eval(inputValue).toString())
            } catch (err) {
              setInputValue("Error")
            }
        }}}
      />

      <Container sx={{marginTop:3}}>
        {/* <Button btnText="1" btnVar="outlined" onClick={()=>setInputValue(inputValue + '1')}></Button> */}

        <Grid container spacing={2}>
          {
            keys.map(({ text, variant, color }, index) => (
                
              <Grid key={index} item xs={3}>
                <Button
                  xs={{width:'100%'}}
                  btnText={text}
                  btnVar={variant}
                  btnColor={color}
                  onClick={() => handleCal(text)}
                />
             </Grid>
            ))
          }
       </Grid>
      </Container>
    </Container>
  )
}

export default Calculator
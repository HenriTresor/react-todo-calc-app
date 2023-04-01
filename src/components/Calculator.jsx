import { Container, TextField, Box, Grid } from '@mui/material'
import React, {useState} from 'react'
import Button from './Button'
import keys from '../data/keys'

const Calculator = () => {

  let [inputValue, setInputValue] = useState("")

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
        onChange= { ()=>setInputValue(inputValue) }
        value={inputValue}
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
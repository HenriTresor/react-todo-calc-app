import React from 'react'
import {Button} from '@mui/material'

const Butto = ({btnText, btnVar, btnColor, onClick}) => {
  return (
      <Button variant={btnVar} color={btnColor} onClick={onClick}> 
          {btnText}
    </Button>
  )
}

export default Butto
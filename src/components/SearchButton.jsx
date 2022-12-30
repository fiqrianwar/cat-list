import React      from 'react'
import { Button } from '@mui/material'

const SearchButton = ({type,value,style}) => {
  return (
    <>
        <Button 
            type      = {type} 
            variant   = "contained" 
            color     = "success"
            style     = { style}
            className ='search-button'
            >
          {value}
        </Button>
    </>
  )
}

export default SearchButton
import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return ( <div>
    <TextField id="standard-basic" label="Movie ID: " variant="standard" />  <br />
    <TextField id="standard-basic" label="Movie Name: " variant="standard" /> <br />
    <TextField id="standard-basic" label="Release Date:  " variant="standard" /> <br />
    <TextField id="standard-basic" label="Category: " variant="standard" /> <br />
    <TextField id="standard-basic" label="Director:  " variant="standard" /> <br />
    <TextField id="standard-basic" label="Language:  " variant="standard" /> <br /> <br />
    <Button sx={{backgroundColor: '#86AB89'}} variant="contained">Submit</Button>

    </div>
  )
  
}

export default Add
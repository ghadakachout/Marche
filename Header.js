import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function StateTextFields() {


  return (
    <Paper sx={{ maxWidth: 550, margin: 'auto', overflow: 'hidden',}}>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0.5, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h1>Ajouter Article</h1>
        <br/>
        <br/>
      <TextField  
        id="code"
        label="Code"
      />
      <TextField
        id="outlined-uncontrolled"
        label="Désignation"
      />
       <TextField
        id="date"
        label="DateExpiration"
      />
       <TextField
        id="prix"
        label="Prix"
      />
       <TextField
        id="stock"
        label="Stock"

      />
        <TextField
       select
       label="Categorie"/>
  
  <br/>
  <br/>
  <br/>
       <Button>
        Ajouter
       </Button>
 </Box>
        
    </Paper>
   
  );
    }
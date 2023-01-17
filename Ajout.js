import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';

export default function StateTextFields() {


  return (
    <Paper sx={{ maxWidth: 1000 , maxHeight:600 , margin: 'auto', overflow: 'hidden',}}>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0.8, width: '15ch' },
      }}

    >
        <h2 color='orange'>Ajouter Article :</h2>
        <label>Code:</label>
      <TextField  
        id="code"
      />
         <label>Désignation :</label>
      <TextField
        id="designation"
      />
      <br/>
         <label>DateExpiration :</label>
       <TextField
        type= 'date'
        id="date"
      />
         <label>Prix :</label>
       <TextField
        id="prix"
      
      />
      <br/>
         <label>Stock :</label>
       <TextField
        id="stock"

      />
         <label>Catégorie</label>
        <TextField
       select/>
       <br/>
       <IconButton color="primary" aria-label="add to shopping cart"  left='10em' variant="contained" href="#text-buttons" >
  <AddShoppingCartIcon />
</IconButton>
       
 </Box>
        
    </Paper>
   
  );
    }
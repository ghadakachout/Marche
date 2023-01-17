import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import LiquorIcon from '@mui/icons-material/Liquor';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        < LiquorIcon/>
      </ListItemIcon>
      <ListItemText primary="Articles" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <CategoryIcon/>
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Vendeurs" />
    </ListItemButton>
   
  </React.Fragment>
);

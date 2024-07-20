import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import RecpieForm from './RecpieForm';
const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});


function Footer() {
    const [open,setOpen] = useState(false)

    const handleClick = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }
    
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, bgcolor: 'black' }}>
        <Toolbar>
          <StyledFab color="secondary" aria-label="add" onClick={handleClick}>
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose}>
        <RecpieForm onClose={handleClose} /> 
      </Dialog>
    </React.Fragment>
  );
}

export default Footer;

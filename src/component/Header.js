import * as React from 'react';
import Box from '@mui/material/Box';

function Header() {
  return (
    <Box
    sx={{
      width: "100%",
      height: 400,
      backgroundColor: 'primary.main',
      position : "fixed",
      zIndex : "-100",
      top : 0,
    }}
  />
  )
}

export default Header
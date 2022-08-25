import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Divider from '@mui/material/Divider';

export default function Banner(props) {
  return (
    <Box sx={{ width : "80%" , margin : "auto", marginTop: "100px" ,  }}>
        <Paper elevation={6} sx={{ width: "100%", mb: 2,border: "0.01px solid #3D95DF" }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0, sm: 2}}>
        <Stack spacing={1} p={4} pb={{ xs: 0, sm: 2}} >
          <Typography variant="h6" component="h6">
            Total Vehicles
          </Typography>
          <Typography variant="h4" component="h4">
          {props.countData.numberOfVehicles}
          </Typography>
        </Stack>
        <Stack spacing={1} p={4}>
          <Typography variant="h6" component="h6">
          Total Transports
          </Typography>
          <Typography variant="h4" component="h4">
          {props.countData.count}
          </Typography>
        </Stack>
      </Stack>
        </Paper>
     
    </Box>
  );
}

import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Banner(props) {
  return (
    <Box sx={{ width: "80%", margin: "auto", marginTop: "100px" }}>
      <Paper
        elevation={6}
        sx={{ width: "100%", mb: 2, backgroundColor : "#000" }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0, sm: 12 }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Stack spacing={1} p={4} pb={{ xs: 0, sm: 2 }}>
            <Typography variant="h6" component="h6" textAlign="center"color='#04cceb'>
              Registration Number
            </Typography>
            <Typography variant="h4" component="h4"  textAlign="center" color="white">
              {props.countData.id}
            </Typography>
          </Stack>
          <Stack spacing={1} p={4}>
            <Typography variant="h6" component="h6" textAlign="center"color='#04cceb'>
              Total Transports
            </Typography>
            <Typography variant="h4" component="h4"  textAlign="center" color="white">
              {props.countData.numberOfTrips}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}

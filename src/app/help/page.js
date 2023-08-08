"use client";

import { Box, Grid } from "@mui/material";
import Map from "./component/Map";
import Sanal from "./component/sanal";

const HelpPage = () => {
  return (
    <Grid container spacing={0} columns={16}>
      <Grid xs={8}>
        <Sanal />
      </Grid>
      <Grid item xs={8}>
        <Map />
      </Grid>
    </Grid>
  );
};

export default HelpPage;

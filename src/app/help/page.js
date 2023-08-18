"use client";

import { Box, Container, Grid } from "@mui/material";
import Map from "./component/Map";
import Sanal from "./component/sanal";

const HelpPage = () => {
  return (
    <Container sx={{ background: "background.default" }}>
      <Grid container spacing={0}>
        <Grid container item xs={12} md={4} lg={4}>
          <Sanal />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Map />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HelpPage;

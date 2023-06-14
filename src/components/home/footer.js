import { Grid } from "@mui/material";
import React from "react";

const Footer = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid xs={6} lg={3}>
        Item 1
      </Grid>
      <Grid xs={6} lg={3}>
        Item 2
      </Grid>
      <Grid xs={6} lg={3}>
        Item 2
      </Grid>
      <Grid xs={6} lg={3}>
        Item 4
      </Grid>
    </Grid>
  );
};

export default Footer;

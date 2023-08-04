"use client";
import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Filter from "./component/filter";
import FilteredProducts from "./component/filteredProducts";

export default function BasicAccordion() {
  return (
    <Grid container spacing={1} bgcolor={""}>
      <Grid item xs={12} lg={3}>
        <Filter sx={{}} />
      </Grid>
      <Grid item xs={12} lg={9}>
        <FilteredProducts />
      </Grid>
    </Grid>
  );
}

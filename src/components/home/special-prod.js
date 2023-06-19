"use client";
import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import theme from "@/theme";

const Item = styled(Paper)(({ theme }) => ({
  height: "35rem",
  marginTop: "2rem",
  marginLeft: "5rem",
  borderRadius: "2rem",
  border: "1px ",
}));

export default function ProductCard() {
  return (
    <>
      <Grid container>
        <Grid lg={4} justifyContent="center">
          <Item>
            <Box
              component="img"
              src="https://api.hitech.mn/uploads/images/2023/4/21/61a2KPfgj9L_AC_SL1000_-1682051586419003924-full.jpg"
              alt="{main image}"
              sx={{
                width: "100%",
                height: "90%",
                backgroundColor: "green",
                borderRadius: "2rem",
              }}
            ></Box>
            <Typography>Үнэ:</Typography>
            <Button
              sx={{
                position: "absolute",
                width: "16%",
                height: "2rem",
                borderRadius: "10rem",
                backgroundColor: "primary.main",
                color: "white",
                zIndex: 1,
              }}
            >
              Худалдан авах
            </Button>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
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
function handleClick() {
  console.log(" like ");
}

function ProductCard() {
  return (
    <>
      <Grid container>
        <Grid lg={3}>
          <Item>
            <Button
              onClick={handleClick}
              sx={{
                marginTop: "28rem",
                position: "absolute",
                width: "16%",
                height: "3rem",
                borderRadius: "10rem",
                backgroundColor: "primary.main",
                color: "white",
                textAlign: "center",
              }}
            >
              Худалдан авах
            </Button>
            <Box
              component="img"
              src="https://api.hitech.mn/uploads/images/2023/4/21/61a2KPfgj9L_AC_SL1000_-1682051586419003924-full.jpg"
              alt="{main image}"
              sx={{
                width: "100%",
                height: "92%",
                backgroundColor: "green",
                borderRadius: "2rem",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                margin: "auto",
                marginTop: "0.5rem",
                justifyContent: "space-around",
              }}
            >
              <Typography>Үнэ: 120,000</Typography>
              <Typography>Үлдсэн: 1</Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductCard;

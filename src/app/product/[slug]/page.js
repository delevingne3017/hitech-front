"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

const Product = ({ params }) => {
  const { slug } = params;
  return (
    <Box>
      <Typography></Typography>
      <Typography>Product No {slug}</Typography>
    </Box>
  );
};

export default Product;

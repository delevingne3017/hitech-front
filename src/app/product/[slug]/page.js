"use client";
import styled from "@emotion/styled";
import { Box, Typography, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const ProductImage = styled("img")({
  transition: "all .25s ease",
  ":hover": {
    transform: "scale(1.5)",
    cursor: "crosshair",
  },
});

const Product = ({ params }) => {
  const [state, setState] = useState({
    product: {},
    loading: false,
  });
  const { slug } = params;

  const ref = useRef();
  const [transformOrigin, setTransformOrigin] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseOver = (event) => {
    console.log(event.clientX);
    console.log(event.clientY);
    setTransformOrigin({
      x: event.clientX,
      y: event.clientY,
    });
  };
  // useEffect(() => {
  //   if (ref.current) ref.current.addEventListener("mouseover", handleMouseOver);
  // }, [ref.current]);

  const getProduct = async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      const response = await axios.get(`/api/product/${slug}`);
      setState({
        ...state,
        product: response.data.data,
        loading: false,
      });
    } catch (err) {
      setState({
        ...state,
        loading: false,
      });
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return state.loading ? (
    <CircularProgress />
  ) : (
    <Grid container justifyContent='center'>
      <Grid item xs={12} lg={5}>
        <Box width="content-fit" height="content-fit" overflow="hidden">
          <ProductImage
            style={{
              transformOrigin: `${transformOrigin.x}px ${transformOrigin.y}px`,
            }}
            ref={ref}
            src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fapi.hitech.mn%2Fuploads%2Fimages%2F2023%2F2%2F19%2F11-1676790502808094150-thumbnail.jpg&w=1920&q=75"
            alt="Prod"
          />
        </Box>
      </Grid>
      <Grid item xs={12} lg={5}>
      <Typography></Typography>
        <Typography>Name: {state.product.name}</Typography>
        <Typography>Count: {state.product.count}</Typography>
        <Typography>Price: {state.product.price}</Typography>
      </Grid>
    </Grid>
  );
};

export default Product;

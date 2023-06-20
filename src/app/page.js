"use client";
import { Box, Button, Grid, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import "./globals.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "@/components/home/special-prod";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
  height: "10rem",
  marginTop: "2rem",
  borderRadius: "0.4rem",
  border: "1px ",
  justifyContent: "center",
}));

export default function Home() {
  const [state, setState] = useState({
    products: [],
  });
  const router = useRouter();

  const handleProduct = (productId) => {
    router.push(`/product/${productId}`);
  };

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/product");
      setState({
        ...state,
        products: response.data.data,
      });
    } catch (err) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box sx={{ width: "100%", height: "50vh" }}>
      <Grid container>
        <Grid item xs={12}>
          <Box
            component="img"
            src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
            alt="{main image}"
            sx={{ height: "35rem", width: "1" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={8} lg={2.5}>
                <Item
                  component="img"
                  src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
                  alt="{main image}"
                  sx={{ width: "1" }}
                ></Item>
              </Grid>
              <Grid item xs={4} lg={2.5}>
                <Item
                  component="img"
                  src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
                  alt="{main image}"
                  sx={{ width: "1" }}
                ></Item>
              </Grid>
              <Grid item xs={4} lg={2.5}>
                <Item
                  component="img"
                  src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
                  alt="{main image}"
                  sx={{ width: "1" }}
                ></Item>
              </Grid>
              <Grid item xs={8} lg={2.5}>
                <Item
                  component="img"
                  src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
                  alt="{main image}"
                  sx={{ width: "1" }}
                ></Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <ProductCard />
        </Grid>
        {state.products[0] &&
          state.products.map((el, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleProduct(el._id)}
                >
                  product
                </Button>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}

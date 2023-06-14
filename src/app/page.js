"use client";
import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import "./globals.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
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
        {state.products[0] && state.products.map((el, index) => {
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

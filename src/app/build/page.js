"use client";
import * as React from "react";
import {
  Box,
  Pagination,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FilteredProducts from "./components/productF";
import axios from "axios";

export default function Build() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("/api/product");
        const allProducts = res.data.data;

        const filteredProducts = allProducts.filter((product) =>
          product.name.toLowerCase().includes(products.toLowerCase())
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }

    fetchProducts();
  }, []);
  const handlechange = (index) => {
    setProducts(index);
  };

  const filterData = [
    {
      value: "cpu",
      name: "cpu",
    },
    {
      value: "motherboard",
      name: "Motherboard",
    },
    {
      value: "ram",
      name: "Ram",
    },
    {
      value: "ssd",
      name: "SSD",
    },
    {
      value: "cooler",
      name: "CPU Cooler",
    },
    {
      value: "case",
      name: "Case",
    },
    {
      value: "gpu",
      name: "Graphic Card",
    },
    {
      value: "hdd",
      name: "HDD",
    },
    {
      value: "power supply",
      name: "Power Supply",
    },
  ];

  return (
    <>
      <Box>
        <img
          src="https://api.hitech.mn/uploads/images/2021/4/9/CPU-1617961246091546110-original.jpg"
          alt="{main image}"
          width={"100%"}
        />
      </Box>
      <Grid container spacing={2}>
        {/* 8-column grid */}
        <Grid item xs={12} lg={3}>
          {filterData.map((item) => (
            <Box
              key={item.value}
              border={"dashed"}
              width={"15rem"}
              height={"5rem"}
              borderRadius={"0.6rem"}
              borderColor={"#FE5900"}
              marginLeft={"4rem"}
              marginTop={"1rem"}
              sx={{
                cursor: "pointer",
                ":hover": { bgcolor: "#FFD1B8" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                handlechange(item.value);
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                  alignItems: "center",
                }}
              >
                <AddCircleOutlineIcon />
                <Typography>{item.name}</Typography>
              </Box>
            </Box>
          ))}
          <Button
            variant="contained"
            sx={{
              padding: "0 .1rem 0 .8rem",
              borderRadius: "5rem",
              height: "2.7rem",
              boxShadow: "3px 3px 7px -2px rgba(0, 0, 0, 0.56)",
            }}
          >
            сагсанд хийх
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              width={"6rem"}
              height="2.5rem"
              marginLeft={"3rem"}
              borderRadius={"5rem"}
              backgroundColor={"white"}
              color={"black"}
            >
              <Typography>₮</Typography>
            </Box>
          </Button>
        </Grid>

        {/* 4-column grid */}
        <Grid item xs={12} lg={9}>
          <Box>
            <FilteredProducts fetchedProduct={products} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

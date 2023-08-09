"use client";
import * as React from "react";
import {
  Box,
  Pagination,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FilteredProducts from "./components/productF";
import axios from "axios";

export default function Build() {
  const data = [...Array(25).keys()].map((i) => i + 1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("/api/product");
        const allProducts = res.data.data;

        const filteredProducts = allProducts.filter((product) =>
          product.name.toLowerCase().includes(products.toLowerCase())
        );
        console.log("data", filteredProducts);
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }

    fetchProducts();
  }, [products]);
  const handlechange = (index) => {
    console.log("index", index);
    setProducts(index);
  };

  const filterData = [
    {
      value: "ram",
      name: "cpu",
    },
    {
      value: "mouse",
      name: "Motherboard",
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
        <Grid item xs={3}>
          {filterData.map((item) => (
            <Box
              key={item.value}
              border={"dashed"}
              width={"15rem"}
              height={"5rem"}
              borderRadius={"0.6rem"}
              borderColor={"#FE5900"}
              bgcolor="#F7F7F7"
              marginLeft={"4rem"}
              marginTop={"1rem"}
              sx={{ cursor: "pointer", ":hover": { bgcolor: "#FFD1B8" } }}
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
        </Grid>

        {/* 4-column grid */}
        <Grid item xs={9}>
          <Box>
            <FilteredProducts product={products} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

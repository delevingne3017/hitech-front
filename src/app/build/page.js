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
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect } from "react";
import FilteredProducts from "./components/productF";

export default function Build() {
  const data = [...Array(160).keys()].map((i) => i + 1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

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
          {Array.from(Array(6)).map((_, index) => (
            <Box
              border={"dashed"}
              width={"15rem"}
              height={"5rem"}
              borderRadius={"0.6rem"}
              borderColor={"#FE5900"}
              bgcolor={"#FFD1B8"}
              marginLeft={"4rem"}
              marginTop={"1rem"}
            >
              <Box sx={{ display:"flex", justifyContent:"center", margin:"auto"}}>
                <AddCircleOutlineIcon />
                <Typography>CPU</Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        {/* 4-column grid */}
        <Grid item xs={9}>
          <Box>
            <FilteredProducts/>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

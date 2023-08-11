"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Box, Button, Checkbox, Grid, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import GridViewIcon from "@mui/icons-material/GridView";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import useSettings from "@/hooks/useSettings";

export default function FilteredProducts({ fetchedProduct }) {
  const { addItemToCart } = useSettings();

  const itemsPerPage = 16;

  const [products, setProducts] = useState([]);
  console.log("fetchedProduct", fetchedProduct);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("/api/product");
        const allProducts = res.data.data;

        const filteredProducts = allProducts.filter((product) =>
          product.name.toLowerCase().includes(fetchedProduct.toLowerCase())
        );
        console.log("data", filteredProducts);
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }

    fetchProducts();
  }, [fetchedProduct]);

  const addToCart = (productId) => {
    const item = { _id: productId };
    addItemToCart(item);
    console.log("id", item);
  };
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
        }}
      >
        <Button>
          <GridViewIcon color="primary"></GridViewIcon>
        </Button>
        <Button>
          <FormatListBulletedIcon color="primary"></FormatListBulletedIcon>
        </Button>

        <Typography
          sx={{ fontsize: ".5rem", color: "gray", marginLeft: "0.5rem" }}
        >
          Бэлэн {products.length} бараа байна
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={3} display={"flex"} marginTop={"1rem"}>
          {products.map((item) => (
            <Grid item xs={12} sm={2} md={3} lg={3} key={item._id}>
              <Box sx={{ display: "flex", justifyConten: "center" }}>
                <Card>
                  <CardContent>
                    <Button
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      variant="outlined"
                    >
                      шинэ
                    </Button>
                    <img
                      src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fapi.hitech.mn%2Fuploads%2Fimages%2F2023%2F8%2F1%2F1-1690872502046385648-thumbnail.jpg&w=1920&q=75"
                      alt="{main image}"
                      width={"170px"}
                      height={"170px"}
                    />
                    <Typography variant="body2" component="p" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      marginTop={"0.4rem"}
                    >
                      {item.price}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                      }}
                    >
                      <Button onClick={() => addToCart(item._id)}>
                        <Box
                          sx={{
                            bgcolor: "#fe5900",
                            margin: "1",
                            borderRadius: "5rem",
                            padding: "0.4rem",
                          }}
                        >
                          <Box display={"flex"} flexDirection="row">
                            <ShoppingBagIcon
                              sx={{ color: "#fffcfa" }}
                              width="20"
                              height="12"
                              size="small"
                              flexDirection="row"
                            ></ShoppingBagIcon>
                            <Typography
                              flexDirection="row"
                              fontSize={".6rem"}
                              fontWeight={"bold"}
                              marginTop={".4rem"}
                              sx={{
                                color: "white",
                                alignItems: "center",
                                flexDirection: "row",
                                top: ".2rem",
                              }}
                            >
                              сонгох
                            </Typography>
                          </Box>
                        </Box>
                      </Button>
                      <IconButton
                        aria-label="FavoriteBorderIcon"
                        disabled
                        color="primary"
                      >
                        <FavoriteBorderIcon
                          sx={{ ":lefth": "2rem" }}
                          color={"primary"}
                        ></FavoriteBorderIcon>
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={totalPages} // Total number of pages
          page={currentPage} // Current page
          onChange={handlePageChange} // Callback function for page change
          variant="outlined"
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        />
      </Box>
    </>
  );
}

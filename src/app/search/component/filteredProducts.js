import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSearchContext } from "@/context/searchContext";
import axios from "axios";
import useSettings from "@/hooks/useSettings";
import { useCallback } from "react";

export default function FilteredProducts() {
  const { lastSearch } = useSearchContext();
  const [products, setProducts] = useState([]);
  const { addItemToCart, saveProduct } = useSettings();

  const itemsPerPage = 16;

  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get("/api/product");
      const allProducts = res.data.data;

      const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(lastSearch.toLowerCase())
      );

      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  }, [lastSearch]);
  useEffect(() => {
    if (lastSearch) {
      fetchProducts();
    }
  }, [lastSearch]);
  const addToCart = (productId) => {
    addItemToCart(products.find((product) => product._id === productId));
  };
  const saveProducts = (productId) => {
    saveProduct(products.find((product) => product._id === productId));
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
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          top: "2rem",
          Trim: "90rem",
          justifyContent: "flex-start",
          flexDirection: "row",
          marginTop: "2rem",
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
          Бэлэн {products.length} бараа байна{" "}
        </Typography>
      </Box>

      <Grid container spacing={3} display="flex" marginTop="1rem">
        {currentProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <Box sx={{ display: "flex", justifyConten: "center" }}>
              <Card>
                <CardContent>
                  <Button
                    size="small"
                    sx={{ borderRadius: "2rem" }}
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
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    marginTop={"0.4rem"}
                  >
                    {product.price}₮
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <Button sx={{}}>
                      <Box
                        sx={{
                          bgcolor: "#fe5900",
                          margin: "1",
                          borderRadius: "5rem",
                          padding: "0.4rem",
                        }}
                      >
                        <Box
                          display={"flex"}
                          flexDirection="row"
                          onClick={() => addToCart(product._id)}
                        >
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
                            сагсанд хийх
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

      <Stack
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </Box>
  );
}

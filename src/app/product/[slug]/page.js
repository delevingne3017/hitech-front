"use client";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Directions,
  Grid3x3Outlined,
  StayPrimaryLandscape,
} from "@mui/icons-material";
import DetailImage from "../productComponent/detailImage";
import SameProduct from "../productComponent/sameProduct";
import TusProduct from "../productComponent/tusProduct";
import useSettings from "@/hooks/useSettings";

const ProductImage = styled("img")({
  transition: "all .25s ease",
  ":hover": {
    transform: "scale(1.5)",
    cursor: "crosshair",
  },
});

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Product = ({ params }) => {
  const { settings, addItemToCart, removeItemFromCart } = useSettings();

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

  const addToCart = () => {
    addItemToCart(state.product);
  };
  useEffect(() => {
    getProduct();
  }, [slug]);

  return state.loading ? (
    <CircularProgress />
  ) : (
    <Box bgcolor={"#f7f7f7"} position={"relative"}>
      <Box
        borderRadius={5}
        bgcolor={"white"}
        boxShadow={1}
        marginY={1}
        marginX={2}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={5}>
            <Box width="content-fit" height="content-fit" overflow="hidden">
              <ProductImage
                style={{
                  transformOrigin: `${transformOrigin.x}px ${transformOrigin.y}px`,
                }}
                ref={ref}
                src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fapi.hitech.mn%2Fuploads%2Fimages%2F2023%2F2%2F19%2F11-1676790502808094150-thumbnail.jpg&w=1920&q=75"
                alt="Prod"
                width="300"
                height="380"
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              {state.product.name}
            </Typography>
            <Box sx={{ display: "flex", mt: 2, mb: 2 }}>
              <Typography sx={{ color: "gray" }}>Ангилал</Typography>

              <Typography sx={{ paddingLeft: 1, fontWeight: "bold" }}>
                {state.product.subCatId}
              </Typography>
              <Typography sx={{ paddingLeft: 1, color: "gray" }}>
                Бренд
              </Typography>
              <Typography sx={{ paddingLeft: 1, fontWeight: "bold" }}>
                {/* {state.product.subCatId} */}
                crucial
              </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Typography sx={{ fontSize: ".9rem" }}>Үнэ:</Typography>
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {state.product.price}₮
            </Typography>
            <Typography sx={{ fontSize: ".9rem", mt: 2 }}>Хүргэлт:</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocalShippingIcon color="primary" />
              <Typography sx={{ color: "gray", fontSize: ".9rem" }}>
                Хүргэлтийн үнэ:
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  pl: 1,
                }}
              >
                Үнэгүй
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Typography sx={{ fontSize: ".9rem" }}>
                Агуулахад үлдсэн:
              </Typography>
              <Typography sx={{ fontWeight: "bold", pl: 1 }}>10ш</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography sx={{ fontSize: ".9rem" }}>Төлөв:</Typography>
              <Typography sx={{ fontWeight: "bold", pl: 1 }}>Шинэ</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography sx={{ fontSize: ".9rem" }}>Түлхүүр үг:</Typography>
              <Typography sx={{ fontWeight: "bold", pl: 1 }}>
                Шинэ,Онцлох
              </Typography>
            </Box>

            <Divider sx={{ mb: 4 }} />
            <Stack spacing={4}>
              <Stack spacing={2} direction="row">
                <Box>
                  <TextField
                    size="small"
                    sx={{ m: "rem", alignItems: "right", mt: 1 }}
                    type="number"
                    InputProps={{
                      inputProps: {
                        max: 100,
                        min: 1,
                      },
                    }}
                    label="ширхэг"
                  />

                  <Button
                    sx={{
                      // some styles
                      ":hover": {
                        boxShadow: 8,
                      },
                      top: ".5rem",
                      width: "273px",
                      height: "40px",
                      spacing: "1rem",
                      borderSpacing: "3rem",
                    }}
                    variant="outlined"
                    color="primary"
                    onClick={addToCart}
                  >
                    <ShoppingCartIcon
                      sx={{ color: "black", size: "0.7rem" }}
                    ></ShoppingCartIcon>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: ".7rem",
                        fontWeight: "bold",
                      }}
                    >
                      Сагсанд хийх
                    </Typography>
                  </Button>
                </Box>
              </Stack>
            </Stack>
            <Box sx={{ top: "5rem", m: "rem" }}>
              <Button
                sx={{ width: 375, height: 35, top: 5 }}
                variant="contained"
                color="primary"
              >
                <Typography>Худалдан авах </Typography>{" "}
              </Button>
            </Box>

            <Divider sx={{ mb: 4 }} />
            <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
              <Typography sx={{ color: "gray", fontSize: ".9rem" }}>
                Барааны тухай :
              </Typography>
              {
                <Typography sx={{ color: "black", fontSize: ".7rem" }}>
                  {state.product.description}
                </Typography>
              }
            </Box>
          </Grid>
        </Grid>
      </Box>
      <DetailImage />
      <Box
        borderRadius={5}
        bgcolor={"white"}
        boxShadow={1}
        padding={1}
        marginY={2}
        marginX={2}
      >
        <Box>
          <SameProduct />
          <TusProduct />
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Product;

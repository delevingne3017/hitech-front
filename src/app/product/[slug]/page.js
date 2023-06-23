"use client";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Button,
  TextField,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import slider from "@/components/home/slider.json";

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
    <Box bgcolor={"#f7f7f7"}>
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
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
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

            {/*         

            <Button onClick={handleDecrement}>-</Button>
          <TextField value={quantity} />
           <Button onClick={handleIncrement}>+</Button>
        <Typography>Ангилал: {state.product.sonsoh}</Typography>
        <Typography>Брэнд : {state.product.hoco}</Typography>
        <Typography></Typography>

        <Typography> Агуулхад үлдсэн : {state.product.one}</Typography>
        <Typography>Төлөв : {state.product.count}</Typography>
        <Typography>Түлхүүр үг : {state.product.price}</Typography> */}

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
      <Box
        borderRadius={5}
        bgcolor={"white"}
        boxShadow={1}
        padding={1}
        marginY={2}
        marginX={2}
      >
        <Box
          marginTop={2}
          component="img"
          src="https://sc04.alicdn.com/kf/H91dead8a595c46adb0f3119e3ddb7abeS/252793555/H91dead8a595c46adb0f3119e3ddb7abeS.jpg"
          alt="{main image}"
          sx={{
            height: "100%",
            width: "190vh",
            marginLeft: "3rem",
            marginRight: "3rem",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 7,
          }}
        />
        <Box
          marginTop={2}
          component="img"
          src="https://sc04.alicdn.com/kf/H1f0fa678076a401abe26f505e601737ey/252793555/H1f0fa678076a401abe26f505e601737ey.jpg"
          alt="{main image}"
          sx={{
            height: "100%",
            width: "190vh",
            marginLeft: "3rem",
            marginRight: "3rem",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 7,
          }}
        />

        <Box
          marginTop={2}
          component="img"
          src="https://sc04.alicdn.com/kf/Hc4c9bb22a84d48849ba62b01fa59ff45U/252793555/Hc4c9bb22a84d48849ba62b01fa59ff45U.jpg"
          alt="{main image}"
          sx={{
            height: "100%",
            width: "190vh",
            marginLeft: "3rem",
            marginRight: "3rem",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 7,
          }}
        />
      </Box>
      <Box
        borderRadius={5}
        bgcolor={"white"}
        boxShadow={1}
        padding={1}
        marginY={2}
        marginX={2}
      >
        <Grid
          container
          spacing={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ marginY: 1 }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "0.9rem",
              display: "flex",
              flexDirection: "column",
              mt: 1,
            }}
          >
            Ижил бараанууд
          </Typography>
          <Grid item xs={3}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
              alt="{main image}"
              style={{
                width: "95%",
                height: "10rem",
                borderRadius: "0.5rem",
                marginLeft: 9.5,
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/5/10/2-1683710064596681390-thumbnail.jpg"
              alt="{main image}"
              style={{
                width: "95%",
                height: "10rem",
                borderRadius: "0.5rem",

                marginLeft: 9.5,
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/4/28/1-1682667494399129561-thumbnail.jpg"
              alt="{main image}"
              style={{
                width: "95%",
                height: "7rem",
                height: "10rem",
                borderRadius: "0.5rem",
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/5/12/61L2e2TzFUL_AC_SL1500_-1683879349057074041-thumbnail.jpg"
              alt="{main image}"
              style={{
                width: "95%",
                height: "10rem",
                borderRadius: "0.5rem",
                marginLeft: 9.5,
              }}
            />

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "0.9rem",
                display: "flex",
                flexDirection: "column",
                mt: 1,
              }}
            >
              Төсөөтэй бараанууд
            </Typography>
            <Grid item xs={3}>
              <img
                src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
                alt="{main image}"
                style={{
                  width: "95%",
                  height: "10rem",
                  borderRadius: "0.5rem",
                  marginLeft: 9.5,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
                alt="{main image}"
                style={{
                  width: "95%",
                  height: "10rem",
                  borderRadius: "0.5rem",
                  marginLeft: 9.5,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                src="https://api.hitech.mn/uploads/images/2023/5/27/1-1685172765883052862-thumbnail.jpg"
                alt="{main image}"
                style={{
                  width: "95%",
                  height: "10rem",
                  borderRadius: "0.5rem",
                  marginLeft: 9.5,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Product;

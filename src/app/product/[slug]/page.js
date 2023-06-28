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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Directions,
  Grid3x3Outlined,
  StayPrimaryLandscape,
} from "@mui/icons-material";

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
        ></Grid>
        <Typography
          sx={{
            paddingLeft: 6,
            fontSize: "1.2rem",
            fontWeight: "bold",
            display: "flex",
            marginLeft: "4",
          }}
        >
          Ижил бараанууд:
        </Typography>

        <Box>
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-height-100%"
          >
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                spacing={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ marginY: 1 }}
              >
                <Grid item xs={3}>
                  <Box bgcolor={"white"} boxShadow={1} marginY={1} marginX={2}>
                    <Typography
                      sx={{
                        fontSize: ".8rem",
                        pl: 2,
                        fontWeight: "500",
                        padding: "0",
                        marging: "0",
                        display: "flex",
                        flexDirection: "row",
                        position: "relative",
                        align: "left",
                        spacing: "0",
                        height: "3rem",
                      }}
                    >
                      Asrock - AMD Radeon™ RX 6900 XT Phantom Gaming D 16G OC
                    </Typography>
                    <img
                      src="https://api.hitech.mn/uploads/images/2023/5/27/5-1685154064634387085-thumbnail.jpg"
                      alt="{main image}"
                      style={{
                        width: "12  rem",
                        height: "10rem",
                        borderRadius: "0.4rem",
                        padding: "4",
                        lg: "5rem",
                        marginLeft: "6rem",
                        marginRight: "6rem",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      dispaly: "flex",
                      fontSize: "1.1rem",
                      fontWeight: "bolder",
                      pl: 4,
                    }}
                  >
                    1,500,000₮
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    borderRadius={5}
                    bgcolor={"white"}
                    boxShadow={1}
                    marginY={2}
                    marginX={2}
                  >
                    <img
                      src="https://api.hitech.mn/uploads/images/2023/6/17/1-1686981979885205220-thumbnail.jpg"
                      alt="{main image}"
                      style={{
                        width: "12  rem",
                        height: "10rem",
                        borderRadius: "0.4rem",
                        padding: "4",
                        lg: "5rem",
                        marginLeft: "6rem",
                        marginRight: "6rem",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    borderRadius={5}
                    bgcolor={"white"}
                    boxShadow={1}
                    marginY={2}
                    marginX={2}
                  >
                    <img
                      src="https://api.hitech.mn/uploads/images/2023/5/21/1-1684651272349644569-thumbnail.jpg"
                      alt="{main image}"
                      style={{
                        width: "12  rem",
                        height: "10rem",
                        borderRadius: "0.4rem",
                        padding: "4",
                        lg: "5rem",
                        marginLeft: "6rem",
                        marginRight: "6rem",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    borderRadius={5}
                    bgcolor={"white"}
                    boxShadow={1}
                    marginY={2}
                    marginX={2}
                  >
                    <img
                      src="https://api.hitech.mn/uploads/images/2023/5/2/5-1683009299677355672-thumbnail.jpg"
                      alt="{main image}"
                      style={{
                        width: "12  rem",
                        height: "10rem",
                        borderRadius: "0.4rem",
                        padding: "4",
                        lg: "5rem",
                        marginLeft: "6rem",
                        marginRight: "6rem",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Carousel>

          <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            Төстэй бараанууд:
          </Typography>
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-height-100%"
          >
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                spacing={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ marginY: 1 }}
              >
                <Grid item xs={3}>
                  <img
                    src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
                    alt="{main image}"
                    style={{
                      width: "95%",
                      height: "7rem",
                      borderRadius: "0.4rem",
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
                      height: "7rem",
                      borderRadius: "0.4rem",
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
                      height: "7rem",
                      borderRadius: "0.4rem",
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
                      height: "7rem",
                      borderRadius: "0.4rem",
                      marginLeft: 9.5,
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Carousel>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Product;

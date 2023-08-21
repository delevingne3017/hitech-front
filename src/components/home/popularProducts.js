import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React, { Component, useRef } from "react";
import Slider from "react-slick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import useSettings from "@/hooks/useSettings";

export default function PopularProducts() {
  const { addItemToCart, saveProduct } = useSettings();
  const [isHovered, setIsHovered] = useState(false);

  const [state, setState] = useState({
    popularProducts: [],
    openSnackBar: false,
    snackbarText: "",
  });

  const router = useRouter();
  const handleProduct = (productId) => {
    router.push(`/product/${productId}`);
  };
  const addToCart = (productId) => {
    addItemToCart(
      state.popularProducts.find((product) => product._id === productId)
    );
  };
  const saveProducts = (productId) => {
    saveProduct(
      state.popularProducts.find((product) => product._id === productId)
    );
    setState({
      ...state,
      openSnackBar: true,
      snackbarText: "Амжилттай хадгалагдлаа. ",
    });
  };
  const fetchPopularProducts = async () => {
    try {
      const response = await axios.post("/api/product/popular", {});
      console.log("popular:", response.data.data);
      setState({
        ...state,
        popularProducts: response.data.data,
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchPopularProducts();
  }, []);
  const ref = useRef();
  const next = () => {
    // const obj = new Slider();
    ref.current.slickNext();
  };
  const previous = () => {
    // const obj = new Slider();
    ref.current.slickPrev();
  };
  // render() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Box marginTop={"6rem"} marginBottom={"3rem"}>
        <Box>
          <Typography display={"flex"} justifyContent={"center"}>
            <FiberManualRecordIcon sx={{ color: "#FE5900" }} /> Өргөн хэрэглээнд
          </Typography>
        </Box>
        <Slider ref={ref} {...settings}>
          <Box key={1}>
            <Box>
              <Grid
                container
                spacing={2}
                item
                xs={12}
                justifyContent={"center"}
              >
                {state.popularProducts &&
                  state.popularProducts[0] &&
                  state.popularProducts.map((item, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={3}
                        md={3.5}
                        sx={{
                          margin: "1rem",
                          borderRadius: "0.5rem",
                          cursor: "pointer",
                        }}
                        key={index}
                        onClick={() => handleProduct(item._id)}
                      >
                        <Card>
                          <CardContent>
                            <Box display={"flex"} justifyContent={"flex-start"}>
                              <Box
                                marginBottom={"0.5rem"}
                                position={"relative"}
                              >
                                <img
                                  src="https://api.hitech.mn/uploads/images/2022/10/11/jombogo-Recovered-Recovered-1665462625503444295-thumbnail.jpg"
                                  alt="{main image}"
                                  style={{
                                    width: "9rem",
                                    borderRadius: "0.5rem",
                                    height: { xs: "8rem", lg: "10rem" },
                                  }}
                                  bgcolor="white"
                                />

                                <Box
                                  display={"flex"}
                                  justifyContent={"flex-start"}
                                  alignItems={"center"}
                                  posititon={"absolute"}
                                  marginTop={"-4rem"}
                                >
                                  <Box
                                    bgcolor={"white"}
                                    margin={1}
                                    borderRadius={"5rem"}
                                    padding={"0.2rem"}
                                    onClick={() => saveProducts(item._id)}
                                  >
                                    <FavoriteIcon
                                      sx={{ color: "#fe5900" }}
                                      width={10}
                                      height={10}
                                    />
                                  </Box>
                                  <Box
                                    bgcolor={"white"}
                                    margin={1}
                                    borderRadius={"5rem"}
                                    padding={"0.2rem"}
                                  >
                                    <RemoveRedEyeIcon
                                      sx={{ color: "#fe5900" }}
                                      width={20}
                                      height={12}
                                    />
                                  </Box>
                                  <Box
                                    bgcolor={"white"}
                                    margin={1}
                                    borderRadius={"5rem"}
                                    padding={"0.2rem"}
                                  >
                                    <SwapHorizIcon
                                      sx={{ color: "#fe5900" }}
                                      width={20}
                                      height={12}
                                    />
                                  </Box>
                                </Box>
                              </Box>

                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                justifyContent={"space-between"}
                                paddingBottom={"0.5rem"}
                                flexGrow={"2"}
                              >
                                <Box marginTop={"1"} marginX={1}>
                                  <Typography fontSize={14}>
                                    {item.name}
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginLeft: "0.5rem",
                                  }}
                                >
                                  <Typography>{item.price}T</Typography>
                                  <Box
                                    sx={{
                                      bgcolor: "#fe5900",
                                      margin: "1",
                                      borderRadius: "5rem",
                                      padding: "0.4rem",
                                      ":hover": { bgcolor: "red" },
                                    }}
                                    onClick={() => addToCart(item._id)}
                                    onMouseover={() => setIsHovered(true)}
                                  >
                                    <Box display={"flex"} flexDirection="row">
                                      <ShoppingBagIcon
                                        sx={{ color: "#fffcfa" }}
                                        width="20"
                                        height="12"
                                        size="small"
                                        flexDirection="row"
                                      ></ShoppingBagIcon>
                                      {isHovered ? (
                                        <Typography>hi</Typography>
                                      ) : null}
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </Box>
          <Box key={2}>
            <Box>
              <Grid
                container
                spacing={2}
                item
                xs={12}
                justifyContent={"center"}
              >
                {state.popularProducts &&
                  state.popularProducts[0] &&
                  state.popularProducts.map((item, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={3}
                        md={3.5}
                        sx={{
                          margin: "1rem",
                          borderRadius: "0.5rem",
                          cursor: "pointer",
                        }}
                        key={index}
                        onClick={() => handleProduct(item._id)}
                      >
                        <Card>
                          <CardContent>
                            <Box display={"flex"} justifyContent={"flex-start"}>
                              <Box
                                marginBottom={"0.5rem"}
                                position={"relative"}
                              >
                                <img
                                  src="https://api.hitech.mn/uploads/images/2022/10/11/jombogo-Recovered-Recovered-1665462625503444295-thumbnail.jpg"
                                  alt="{main image}"
                                  style={{
                                    width: "9rem",
                                    borderRadius: "0.5rem",
                                    height: { xs: "8rem", lg: "10rem" },
                                  }}
                                  bgcolor="white"
                                />

                                <Box
                                  display={"flex"}
                                  justifyContent={"flex-start"}
                                  alignItems={"center"}
                                  posititon={"absolute"}
                                  marginTop={"-4rem"}
                                >
                                  <Box
                                    bgcolor={"white"}
                                    margin={1}
                                    borderRadius={"5rem"}
                                    padding={"0.2rem"}
                                  >
                                    <FavoriteIcon
                                      sx={{ color: "#fe5900" }}
                                      width={10}
                                      height={10}
                                    />
                                  </Box>
                                  <Box
                                    bgcolor={"white"}
                                    margin={1}
                                    borderRadius={"5rem"}
                                    padding={"0.2rem"}
                                  >
                                    <RemoveRedEyeIcon
                                      sx={{ color: "#fe5900" }}
                                      width={20}
                                      height={12}
                                    />
                                  </Box>
                                  <Box
                                    bgcolor={"white"}
                                    margin={1}
                                    borderRadius={"5rem"}
                                    padding={"0.2rem"}
                                  >
                                    <SwapHorizIcon
                                      sx={{ color: "#fe5900" }}
                                      width={20}
                                      height={12}
                                    />
                                  </Box>
                                </Box>
                              </Box>

                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                justifyContent={"space-between"}
                                paddingBottom={"0.5rem"}
                                flexGrow={"2"}
                              >
                                <Box marginTop={"1"} marginX={1}>
                                  <Typography fontSize={14}>
                                    {item.name}
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginLeft: "0.5rem",
                                  }}
                                >
                                  <Typography>{item.price}T</Typography>
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
                                      onClick={() => addToCart(item._id)}
                                    >
                                      <ShoppingBagIcon
                                        sx={{ color: "#fffcfa" }}
                                        width="20"
                                        height="12"
                                        size="small"
                                        flexDirection="row"
                                      ></ShoppingBagIcon>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </Box>
        </Slider>
        <Box style={{ textAlign: "center" }}>
          <Button onClick={previous}>
            <Box
              bgcolor={"#ffffff"}
              width={"4rem"}
              boxShadow={"1px 3px 1px #9E9E9E"}
              borderRadius={"2rem"}
            >
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </Box>
          </Button>
          <Button onClick={next}>
            <Box
              bgcolor={"#ffffff"}
              width={"4rem"}
              boxShadow={"1px 3px 1px #9E9E9E"}
              borderRadius={"2rem"}
            >
              <KeyboardDoubleArrowRightIcon fontSize="large" />
            </Box>
          </Button>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={state.openSnackBar}
          autoHideDuration={1500}
          onClose={() => setState({ ...state, openSnackBar: false })}
        >
          <Alert
            onClose={() => setState({ ...state, openSnackBar: false })}
            severity="success"
            sx={{ width: "100%" }}
          >
            {state.snackbarText}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
  // }
}

"use client";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React, { useRef } from "react";
import Slider from "react-slick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewProducts() {
  const [state, setState] = useState({
    newProducts: [],
  });
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const router = useRouter();
  const handleProduct = (productId) => {
    router.push(`/product/${productId}`);
  };
  const getNewProducts = async () => {
    try {
      const resNewPrd = await axios.post("/api/product/search", {
        type: "new",
      });
      console.log("resNewPrd:", resNewPrd.data.data);

      setState({
        ...state,
        newProducts: resNewPrd.data.data,
      });
    } catch (err) {}
  };

  useEffect(() => {
    getNewProducts();
  }, []);

  const ref = useRef();
  const next = () => {
    ref.current.slickNext();
  };
  const previous = () => {
    ref.current.slickPrev();
  };
  // render() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Box marginTop={"6rem"} marginBottom={"3rem"}>
        <Box>
          <Typography display={"flex"} justifyContent={"center"}>
            <FiberManualRecordIcon sx={{ color: "#FE5900" }} /> Шинэ бараа
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
                md={12}
                justifyContent={"center"}
              >
                {state.newProducts &&
                  state.newProducts[0] &&
                  state.newProducts.map((item, index) => {
                    return (
                      <Grid
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        key={index}
                        item
                        xs={12}
                        sm={4}
                        md={3.5}
                        sx={{
                          margin: "1rem",
                          borderRadius: "0.5rem",
                          cursor: "pointer",
                        }}
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
                                      onClick={() => addToCart(product._id)}
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
          <Box key={2}>
            <Box>
              <Grid
                container
                spacing={2}
                item
                xs={12}
                md={12}
                justifyContent={"center"}
              >
                {state.newProducts &&
                  state.newProducts[0] &&
                  state.newProducts.map((item, index) => {
                    return (
                      <Grid
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        key={index}
                        item
                        xs={12}
                        sm={4}
                        md={3.5}
                        sx={{
                          margin: "1rem",
                          borderRadius: "0.5rem",
                          cursor: "pointer",
                        }}
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
                                      onClick={() => addToCart(product._id)}
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
      </Box>
    </>
  );
  // }
}

import { Box, Grid, Typography, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React, { Component, useRef } from "react";
import Slider from "react-slick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default function PopularProducts() {
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
            <FiberManualRecordIcon /> Өргөн хэрэглээнд
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
                {Array.from(Array(9)).map((_, index) => (
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={3.5}
                    sx={{
                      bgcolor: "#ffffff",
                      margin: "1rem",
                      borderRadius: "0.5rem",
                    }}
                    key={index}
                  >
                    <Box display={"flex"} justifyContent={"flex-start"}>
                      <Box>
                        <img
                          src="https://api.hitech.mn/uploads/images/2022/10/11/jombogo-Recovered-Recovered-1665462625503444295-thumbnail.jpg"
                          alt="{main image}"
                          style={{
                            width: "25vh",
                            borderRadius: "0.5rem",
                            height: "20vh",
                            position: "absolute",
                          }}
                          bgcolor="white"
                        />
                        <Box
                          display={"flex"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          position={"relative"}
                          marginTop={"5rem"}
                        >
                          <Box
                            bgcolor={"white"}
                            margin={1}
                            borderRadius={"5rem"}
                            padding={"0.2rem"}
                          >
                            <FavoriteIcon width={10} height={10} />
                          </Box>
                          <Box
                            bgcolor={"white"}
                            margin={1}
                            borderRadius={"5rem"}
                            padding={"0.2rem"}
                          >
                            <RemoveRedEyeIcon width={20} height={12} />
                          </Box>
                          <Box
                            bgcolor={"white"}
                            margin={1}
                            borderRadius={"5rem"}
                            padding={"0.2rem"}
                          >
                            <SwapHorizIcon width={20} height={12} />
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"column"}
                        paddingBottom={"0.5rem"}
                      >
                        <Box marginLeft={"10rem"} marginTop={"1"} marginX={1}>
                          <Typography marginLeft={"1.5rem"} fontSize={14}>
                            MSI GeForce RTX™ 4060 Ti GAMING X 8G
                          </Typography>
                        </Box>
                        <Box
                          marginTop={"4rem"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          marginRight={"1rem"}
                          marginLeft={"2rem"}
                        >
                          <Typography>1.750.000$</Typography>
                          <ShoppingBagIcon />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
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
                {Array.from(Array(9)).map((_, index) => (
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={3.5}
                    sx={{
                      bgcolor: "#ffffff",
                      margin: "1rem",
                      borderRadius: "0.5rem",
                    }}
                    key={index}
                  >
                    <Box display={"flex"} justifyContent={"flex-start"}>
                      <Box>
                        <img
                          src="https://api.hitech.mn/uploads/images/2022/10/31/jombogo-Recovered-Recovered-1667193462163374986-524X524.jpg"
                          alt="{main image}"
                          style={{
                            width: "25vh",
                            borderRadius: "0.5rem",
                            height: "20vh",
                            position: "absolute",
                          }}
                          bgcolor="white"
                        />
                        <Box
                          display={"flex"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          position={"relative"}
                          marginTop={"5rem"}
                        >
                          <Box
                            bgcolor={"white"}
                            margin={1}
                            borderRadius={"5rem"}
                            padding={"0.2rem"}
                          >
                            <FavoriteIcon width={10} height={10} />
                          </Box>
                          <Box
                            bgcolor={"white"}
                            margin={1}
                            borderRadius={"5rem"}
                            padding={"0.2rem"}
                          >
                            <RemoveRedEyeIcon width={20} height={12} />
                          </Box>
                          <Box
                            bgcolor={"white"}
                            margin={1}
                            borderRadius={"5rem"}
                            padding={"0.2rem"}
                          >
                            <SwapHorizIcon width={20} height={12} />
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"column"}
                        paddingBottom={"0.5rem"}
                      >
                        <Box marginLeft={"10rem"} marginTop={"1"} marginX={1}>
                          <Typography marginLeft={"1.5rem"} fontSize={14}>
                            MSI GeForce RTX™ 4060 Ti GAMING X 8G
                          </Typography>
                        </Box>
                        <Box
                          marginTop={"4rem"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          marginRight={"1rem"}
                          marginLeft={"2rem"}
                        >
                          <Typography>1.750.000$</Typography>
                          <ShoppingBagIcon />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
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

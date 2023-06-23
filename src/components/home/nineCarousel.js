import { Box, Grid, Typography, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React, { Component } from "react";
import Slider from "react-slick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default class NineCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
      <Box marginTop={"4rem "}>
        <Box>
          <Typography display={"flex"} justifyContent={"center"}>
            <FiberManualRecordIcon /> Онцгой санал
          </Typography>
        </Box>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
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
                          src="https://api.hitech.mn/uploads/images/2023/6/15/2-1686811807033831943-524X524.jpg"
                          alt="{main image}"
                          style={{
                            width: "25vh",
                            borderRadius: "0.5rem",
                            height:"20vh"
                          }}
                          bgcolor="white"
                        />
                        <Box
                          display={"flex"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
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
                        <Box marginTop={"1"} marginX={1}>
                          <Typography fontSize={14}>
                            MSI GeForce RTX™ 4060 Ti GAMING X 8G
                          </Typography>
                        </Box>
                        <Box
                          marginTop={"6rem"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          marginRight={"1rem"}
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
                          src="https://api.hitech.mn/uploads/images/2023/6/15/2-1686814204120447025-524X524.jpg"
                          alt="{main image}"
                          style={{
                            width: "25vh",
                            borderRadius: "0.5rem",
                            height:"20vh"
                          }}
                          bgcolor="white"
                        />
                        <Box
                          display={"flex"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
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
                        <Box marginTop={"1"} marginX={1}>
                          <Typography fontSize={14}>
                            MSI GeForce RTX™ 4060 Ti GAMING X 8G
                          </Typography>
                        </Box>
                        <Box
                          marginTop={"6rem"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          marginRight={"1rem"}
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
          <Button onClick={this.previous}>
            <Box
              bgcolor={"#ffffff"}
              width={"4rem"}
              boxShadow={"1px 3px 1px #9E9E9E"}
              borderRadius={"2rem"}
            >
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </Box>
          </Button>
          <Button onClick={this.next}>
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
  }
}
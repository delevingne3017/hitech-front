import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";



export default class SaleProduct extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <Box paddingTop={"2rem"}  bgcolor={"#f3f6f4"}>
        <Slider {...settings}>
          {Array.from(Array(9)).map((_, index) => (
            <Box
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
                      height: "20vh",
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
            </Box>
          ))}
        </Slider>
      </Box>
    );
  }
}

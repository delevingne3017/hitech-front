"use client";
import { Box, Typography } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';

export default function LeftCarousel() {
  const settings = {};

  return (
    <>
    <Box  >
      <Typography display={"flex"} justifyContent={"center"} marginBottom={"1rem"} >
        <StarIcon/> Онцгой санал
      </Typography>
    </Box>
      <Slider
        {...settings}
        adaptiveHeight={false}
        arrows={true}
        className="hello"
      >
        <Box style={{ width: "100%", height: "100%" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0631/9590/6271/files/1_67816f92-1c73-46e3-bb91-7535f10549b8.jpg?v=1679389451"
            alt="{main image}"
            style={{
              width: "68%",
              height: "32rem",
              borderRadius: "1.5rem",
              marginLeft: "4rem",
            }}
          />
        </Box>
        <Box style={{ width: "100%", height: "100%" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0631/9590/6271/files/1_67816f92-1c73-46e3-bb91-7535f10549b8.jpg?v=1679389451"
            alt="{main image}"
            style={{
              width: "68%",
              height: "32rem",
              borderRadius: "1.5rem",
              marginLeft: "4rem",
            }}
          />
        </Box>
        <Box style={{ width: "100%", height: "100%" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0631/9590/6271/files/1_67816f92-1c73-46e3-bb91-7535f10549b8.jpg?v=1679389451"
            alt="{main image}"
            style={{
              width: "68%",
              height: "32rem",
              borderRadius: "1.5rem",
              marginLeft: "4rem",
            }}
          />
        </Box>
        <Box style={{ width: "100%", height: "100%" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0631/9590/6271/files/1_67816f92-1c73-46e3-bb91-7535f10549b8.jpg?v=1679389451"
            alt="{main image}"
            style={{
              width: "68%",
              height: "32rem",
              borderRadius: "1.5rem",
              marginLeft: "4rem",
            }}
          />
        </Box>
      </Slider>
    </>
  );
}

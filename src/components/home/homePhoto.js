"use client";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default function HomePhoto() {
  const ref = useRef();
  const next = () => {
    ref.current.slickNext();
  };
  const previous = () => {
    ref.current.slickPrev();
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Adjust breakpoint as needed

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <Box position="relative">
        <Slider ref={ref} {...settings}>
          <Box height={isMobile ? "15rem" : "27rem"}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/6/19/WD-Black-1687181175112843912-original.jpg"
              alt="main image"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Box height={isMobile ? "15rem" : "27rem"}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/6/19/rx7600-1687181206740710246-original.jpg"
              alt="main image"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Box height={isMobile ? "15rem" : "27rem"}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/6/19/corsair-1687181115820730970-original.jpg"
              alt="main image"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Slider>
        <Box
          display="flex"
          justifyContent="space-between"
          position="absolute"
          width="100%"
          bottom="1rem" // Adjust spacing as needed
          left="0"
          right="0"
        >
          <Button onClick={previous}>
            <Box
              width="4rem"
              borderRadius="2rem"
              marginBottom={{ xs: "5rem", lg: "11rem" }}
            >
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </Box>
          </Button>
          <Button onClick={next}>
            <Box
              width="4rem"
              borderRadius="2rem"
              marginBottom={{ xs: "5rem", lg: "11rem" }}
            >
              <KeyboardDoubleArrowRightIcon fontSize="large" />
            </Box>
          </Button>
        </Box>
      </Box>
    </>
  );
}

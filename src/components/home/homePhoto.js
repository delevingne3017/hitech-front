"use client";
import { Box, Button } from "@mui/material";
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
      <Box>
        <Slider ref={ref} {...settings} position={"absolute"}>
          <Box height={"27rem"}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/6/19/WD-Black-1687181175112843912-original.jpg"
              alt="main image"
              style={{ height: "27rem", width: "100%" }}
            />
          </Box>
          <Box height={"27rem"}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/6/19/rx7600-1687181206740710246-original.jpg"
              alt="main image"
              style={{ height: "27rem", width: "100%" }}
            />
          </Box>
          <Box height={"27rem"}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/6/19/corsair-1687181115820730970-original.jpg"
              alt="main image"
              style={{ height: "27rem", width: "100%" }}
            />
          </Box>
        </Slider>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        marginTop={"-4rem"}
      >
        <Button onClick={previous}>
          <Box width={"4rem"} borderRadius={"2rem"} bottom={"12rem"} position={"relative"}>
            <KeyboardDoubleArrowLeftIcon fontSize="large" />
          </Box>
        </Button>
        <Button onClick={next}>
          <Box width={"4rem"} borderRadius={"2rem"} bottom={"12rem"} position={"relative"} >
            <KeyboardDoubleArrowRightIcon fontSize="large" />
          </Box>
        </Button>
      </Box>

      {/* CSS for mobile devices */}
      <style>
        {`
        @media (max-width: 600px) {
          /* Adjust slider height for mobile */
          .slick-slide > div {
            height: 15rem;
          }

          /* Adjust arrow buttons position for mobile */
          .slick-next,
          .slick-prev {
            bottom: 5rem;
          }
        }
        `}
      </style>
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

export default function LittleCarousel() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const mobileSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box marginTop={"1rem"}>
      <Slider {...(windowWidth <= 600 ? mobileSettings : settings)}>
        {Array.from(Array(9)).map((_, index) => (
          <Box key={index}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
              alt="main image"
              style={{
                width: "95%",
                height: "8rem",
                borderRadius: "0.4rem",
                marginLeft: 9.5,
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

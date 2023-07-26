import React, { Component } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

export default function LittleCarousel() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <Box marginTop={"1rem"}>
        <Slider {...settings}>
          {Array.from(Array(9)).map((_, index) => (
            <Box key={index}>
              <img
                src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
                alt="{main image}"
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


//

// {/* <img
//               src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
//               alt="{main image}"
//               style={{
//                 width: "95%",
//                 height: "7rem",
//                 borderRadius: "0.4rem",
//                 marginLeft: 9.5,
//               }}
//             /> */}

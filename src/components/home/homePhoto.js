"use client";
import { Box } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style, marginRight:"20rem", height: 20, zIndex: 20 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style,  display:"block", marginLeft:"20rem", height:"2rem", width:"4rem", zIndex: 20, bgcolor:"#ffffff" }}
      onClick={onClick}
    />
  );
}

export default class HomePhoto extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 6500,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Box>
        <Slider {...settings}>
          <Box height={"27rem"} >
            <img
              src="https://api.hitech.mn/uploads/images/2023/6/19/WD-Black-1687181175112843912-original.jpg"
              alt="main image"
              style={{ height:"27rem", width:"100%"}}
              
            />
          </Box  >
          <Box height={"27rem"}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/6/19/rx7600-1687181206740710246-original.jpg"
              alt="main image"
              style={{ height:"27rem", width:"100%"}}
              
            />
          </Box>
          <Box height={"27rem"}>
            <img
              src="https://api.hitech.mn/uploads/images/2023/6/19/corsair-1687181115820730970-original.jpg"
              alt="main image"
              style={{ height:"27rem", width:"100%"}}
              
            />
          </Box>
        </Slider>
      </Box>
    );
  }
}

// export default function HomePhoto() {
//   return (
//     <>
//       <Slider
//         adaptiveHeight={false}
//         // arrows={true}
//         className="hello"
//         nextArrow={
//           <IconButton sx={{ m: 0, mt: 20, mr: 5, height: 20, zIndex: 20 }}>
//             <ArrowRightAltRounded />
//           </IconButton>
//         }
//         prevArrow={
//           <IconButton sx={{ m: 0, mt: 20, ml: 5, height: 20, zIndex: 20 }}>
//             <ArrowRightAltRounded />
//           </IconButton>
//         }
//       >
//         <Box style={{ width: "100%", height: "100%" }}>
//           <img
//             src="https://api.hitech.mn/uploads/images/2023/6/19/WD-Black-1687181175112843912-original.jpg"
//             alt="main image"
//             style={{ width: "100%", height: "100%" }}
//           />
//         </Box>
//         <Box style={{ width: "100%", height: "100%" }}>
//           <img
//             src="https://api.hitech.mn/uploads/images/2023/6/19/rx7600-1687181206740710246-original.jpg"
//             alt="main image"
//             style={{ width: "100%", height: "100%" }}
//           />
//         </Box>
//         <Box style={{ width: "100%", height: "100%" }}>
//           <img
//             src="https://api.hitech.mn/uploads/images/2023/6/19/corsair-1687181115820730970-original.jpg"
//             alt="main image"
//             style={{ width: "100%", height: "100%" }}
//           />
//         </Box>
//       </Slider>
//     </>
//   );
// }

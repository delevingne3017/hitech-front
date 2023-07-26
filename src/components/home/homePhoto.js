"use client";
import { Box, Button } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default function HomePhoto() {
  const ref = useRef();
  const next = () => {
    // const obj = new Slider();
    ref.current.slickNext();
  };
  const previous = () => {
    // const obj = new Slider();
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
      >
        <Button onClick={previous}>
          <Box width={"4rem"} borderRadius={"2rem"} bottom={"15rem"} position={"relative"}>
            <KeyboardDoubleArrowLeftIcon fontSize="large" />
          </Box>
        </Button>
        <Button onClick={next}>
          <Box width={"4rem"} borderRadius={"2rem"} bottom={"15rem"} position={"relative"} >
            <KeyboardDoubleArrowRightIcon fontSize="large" />
          </Box>
        </Button>
      </Box>
    </>
  );
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

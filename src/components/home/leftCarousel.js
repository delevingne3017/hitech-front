"use client";
import { Box, Typography, Card, CardContent } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";

export default function LeftCarousel() {
  const settings = {
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <Box marginTop={{ xs: "-18rem", lg: 0 }}>
        <Typography
          display={"flex"}
          justifyContent={"center"}
          marginBottom={"0.5rem"}
        >
          <StarIcon sx={{ color: "#FE5900" }} /> Онцгой санал
        </Typography>
      </Box>
      <Box marginLeft={"1rem"}>
        <Card>
          <CardContent>
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
                    height: "27rem",
                    borderRadius: "1.5rem",
                    marginLeft: "4rem",
                  }}
                />
              </Box>
              <Box style={{ width: "100%", height: "100%" }}>
                <img
                  src="https://api.hitech.mn/uploads/images/2023/4/9/1-1681036096911177292-524X524.jpg"
                  alt="{main image}"
                  style={{
                    width: "68%",
                    height: "27rem",
                    borderRadius: "1.5rem",
                    marginLeft: "4rem",
                  }}
                />
              </Box>
              <Box style={{ width: "100%", height: "100%" }}>
                <img
                  src="https://api.hitech.mn/uploads/images/2023/5/26/1-1685094279629573257-524X524.jpg"
                  alt="{main image}"
                  style={{
                    width: "68%",
                    height: "27rem",
                    borderRadius: "1.5rem",
                    marginLeft: "4rem",
                  }}
                />
              </Box>
              <Box style={{ width: "100%", height: "100%" }}>
                <img
                  src="https://api.hitech.mn/uploads/images/2023/3/29/8-1680069451940960724-524X524.jpg"
                  alt="{main image}"
                  style={{
                    width: "68%",
                    height: "27rem",
                    borderRadius: "1.5rem",
                    marginLeft: "4rem",
                  }}
                />
              </Box>
            </Slider>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

"use client";
import { Box, Typography, Grid } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SameProduct() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Typography
        sx={{
          paddingLeft: 6,
          fontSize: "1.2rem",
          fontWeight: "bold",
          display: "flex",
          marginLeft: "4",
        }}
      >
        Ижил бараанууд:
      </Typography>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-height-100%"
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginY: 1 }}
          >
            <Grid item xs={3}>
              <Box bgcolor={"white"} boxShadow={1} marginY={1} marginX={2}>
                <Typography
                  sx={{
                    fontSize: ".8rem",
                    pl: 2,
                    fontWeight: "500",
                    padding: "0",
                    marging: "0",
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",

                    align: "left",
                    spacing: "0",
                    height: "3rem",
                  }}
                >
                  Asrock - AMD Radeon™ RX 6900 XT Phantom Gaming D 16G OC
                </Typography>
                <img
                  src="https://api.hitech.mn/uploads/images/2023/5/27/5-1685154064634387085-thumbnail.jpg"
                  alt="{main image}"
                  style={{
                    width: "12  rem",
                    height: "10rem",
                    borderRadius: "0.4rem",
                    padding: "4",
                    lg: "5rem",
                    marginLeft: "6rem",
                    marginRight: "6rem",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  dispaly: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "bolder",
                  pl: 4,
                }}
              >
                1,500,000₮
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Box
                borderRadius={5}
                bgcolor={"white"}
                boxShadow={1}
                marginY={2}
                marginX={2}
              >
                <img
                  src="https://api.hitech.mn/uploads/images/2023/6/17/1-1686981979885205220-thumbnail.jpg"
                  alt="{main image}"
                  style={{
                    width: "12  rem",
                    height: "10rem",
                    borderRadius: "0.4rem",
                    padding: "4",
                    lg: "5rem",
                    marginLeft: "6rem",
                    marginRight: "6rem",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                borderRadius={5}
                bgcolor={"white"}
                boxShadow={1}
                marginY={2}
                marginX={2}
              >
                <img
                  src="https://api.hitech.mn/uploads/images/2023/5/21/1-1684651272349644569-thumbnail.jpg"
                  alt="{main image}"
                  style={{
                    width: "12  rem",
                    height: "10rem",
                    borderRadius: "0.4rem",
                    padding: "4",
                    lg: "5rem",
                    marginLeft: "6rem",
                    marginRight: "6rem",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                borderRadius={5}
                bgcolor={"white"}
                boxShadow={1}
                marginY={2}
                marginX={2}
              >
                <img
                  src="https://api.hitech.mn/uploads/images/2023/5/2/5-1683009299677355672-thumbnail.jpg"
                  alt="{main image}"
                  style={{
                    width: "12  rem",
                    height: "10rem",
                    borderRadius: "0.4rem",
                    padding: "4",
                    lg: "5rem",
                    marginLeft: "6rem",
                    marginRight: "6rem",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Carousel>
    </>
  );
}

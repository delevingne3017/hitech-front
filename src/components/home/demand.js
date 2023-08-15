"use client";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Slider from "react-slick";

export default function Demand() {
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
  const [state, setState] = useState({
    specialProducts: [],
  });

  const router = useRouter();
  const handleProduct = (productId) => {
    router.push(`/product/${productId}`);
  };

  const specialProducts = async () => {
    try {
      const response = await axios.post("/api/product/special", {});
      setState({
        ...state,
        specialProducts: response.data.data,
      });
    } catch (error) {}
  };

  useEffect(() => {
    specialProducts();
  }, []);
  return (
    <>
      <Box sx={{ marginY: "4", marginTop: "1rem" }}>
        <Box marginLeft={"1rem"} marginBottom={"2rem"}>
          <Typography>
            <FiberManualRecordIcon fontSize="small" marginTop={"2"} />
            ЭРЭЛТТЭЙ БАРАА
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} borderRadius={"2rem"}>
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
          </Grid>
          <Grid
            container
            spacing={2}
            item
            xs={12}
            md={8}
            justifyContent={"space-between"}
            //@TODO
          >
            {state.specialProducts &&
              state.specialProducts[0] &&
              state.specialProducts.map((item, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={4}
                    md={5.5}
                    sx={{
                      borderRadius: "0.5rem",
                      marginRight: { xs: "2rem", lg: "2.3rem" },
                      marginLeft: { xs: "2.8rem", lg: 0 },
                      cursor: "pointer",
                    }}
                    borderRadius={"2rem"}
                    onClick={() => handleProduct(item._id)}
                    // bgcolor={"#ebedf0"}
                  >
                    <Card>
                      <CardContent>
                        <Box display={"flex"} justifyContent={"flex-start"}>
                          <Box marginBottom={"0.5rem"} position={"relative"}>
                            <img
                              src="https://api.hitech.mn/uploads/images/2022/10/11/jombogo-Recovered-Recovered-1665462625503444295-thumbnail.jpg"
                              alt="{main image}"
                              style={{
                                width: "9rem",
                                borderRadius: "0.5rem",
                                height: { xs: "8rem", lg: "10rem" },
                              }}
                              bgcolor="white"
                            />

                            <Box
                              display={"flex"}
                              justifyContent={"flex-start"}
                              alignItems={"center"}
                              posititon={"absolute"}
                              marginTop={"-4rem"}
                            >
                              <Box
                                bgcolor={"white"}
                                margin={1}
                                borderRadius={"5rem"}
                                padding={"0.2rem"}
                              >
                                <FavoriteIcon
                                  sx={{ color: "#fe5900" }}
                                  width={10}
                                  height={10}
                                />
                              </Box>
                              <Box
                                bgcolor={"white"}
                                margin={1}
                                borderRadius={"5rem"}
                                padding={"0.2rem"}
                              >
                                <RemoveRedEyeIcon
                                  sx={{ color: "#fe5900" }}
                                  width={20}
                                  height={12}
                                />
                              </Box>
                              <Box
                                bgcolor={"white"}
                                margin={1}
                                borderRadius={"5rem"}
                                padding={"0.2rem"}
                              >
                                <SwapHorizIcon
                                  sx={{ color: "#fe5900" }}
                                  width={20}
                                  height={12}
                                />
                              </Box>
                            </Box>
                          </Box>

                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"space-between"}
                            paddingBottom={"0.5rem"}
                            flexGrow={"2"}
                          >
                            <Box marginX={1}>
                              <Typography fontSize={14}>{item.name}</Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginLeft: "0.5rem",
                              }}
                            >
                              <Typography>{item.price}T</Typography>
                              <Box
                                sx={{
                                  bgcolor: "#fe5900",
                                  margin: "1",
                                  borderRadius: "5rem",
                                  padding: "0.4rem",
                                }}
                              >
                                <Box
                                  display={"flex"}
                                  flexDirection="row"
                                  onClick={() => addToCart(product._id)}
                                >
                                  <ShoppingBagIcon
                                    sx={{ color: "#fffcfa" }}
                                    width="20"
                                    height="12"
                                    size="small"
                                    flexDirection="row"
                                  ></ShoppingBagIcon>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

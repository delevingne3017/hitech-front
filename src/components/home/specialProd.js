"use client";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import LeftCarousel from "./leftCarousel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SpecialProduct() {
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
      <Box marginY={5} marginTop={20}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box marginTop={"1rem"}>
              <LeftCarousel />
            </Box>
          </Grid>
          <Grid
            container
            spacing={2}
            item
            xs={12}
            md={8}
            justifyContent={"space-between"}
            alignItems={"space-between"}
            marginTop={"2rem"}
          >
            {state.specialProducts &&
              state.specialProducts[0] &&
              state.specialProducts.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3.5}
                    sx={{
                      borderRadius: "0.5rem",
                      cursor: "pointer",
                    }}
                    key={index}
                    onClick={() => handleProduct(item._id)}
                  >
                    <Card>
                      <CardContent>
                        <Box marginLeft={{ xs: "3rem", lg: 0 }}>
                          <Box position={"relative"}>
                            <img
                              src="https://api.hitech.mn/uploads/images/2023/5/27/1-1685172765883052862-thumbnail.jpg"
                              alt="{main image}"
                              style={{
                                width: "35vh",
                                borderRadius: "0.5rem",
                              }}
                              bgcolor="white"
                            />
                            <Box
                              display={"flex"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              position={"absolute"}
                              marginTop={"-3rem"}
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
                          >
                            <Box
                              marginLeft={"10rem"}
                              marginTop={"1"}
                              marginX={1}
                            >
                              <Typography fontSize={12}>{item.name}</Typography>
                            </Box>
                            <Box
                              display={"flex"}
                              justifyContent={"space-between"}
                              marginX={1}
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

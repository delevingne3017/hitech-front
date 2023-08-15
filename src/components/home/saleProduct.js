import React, { Component } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SaleProduct() {
  const [state, setState] = useState({
    saleProducts: [],
  });

  const router = useRouter();
  const handleProduct = (productId) => {
    router.push(`/product/${productId}`);
  };

  const saleProducts = async () => {
    try {
      const response = await axios.post("/api/product/sale", {});
      setState({
        ...state,
        saleProducts: response.data.data,
      });
    } catch (error) {}
  };

  useEffect(() => {
    saleProducts();
  }, []);
  return (
    <>
      <Box marginLeft={"2rem"} marginBottom={"1rem"}>
        <Typography>
          <FiberManualRecordIcon height={10} width={10} />
          ХЯМДРАЛТАЙ БАРАА
        </Typography>
      </Box>
      <Grid
        container
        spacing={1}
        item
        xs={12}
        justifyContent={"space-between"}
        marginTop={"2rem"}
      >
        {state.saleProducts &&
          state.saleProducts[0] &&
          state.saleProducts.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={3.5}
                sx={{
                  margin: "1rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
                key={index}
                onClick={() => handleProduct(item._id)}
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
                        <Box marginTop={"1"} marginX={1}>
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
    </>
  );
}

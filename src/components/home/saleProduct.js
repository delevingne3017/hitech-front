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
                      <Box>
                        <img
                          src="https://api.hitech.mn/uploads/images/2023/6/15/2-1686811807033831943-524X524.jpg"
                          alt="{main image}"
                          style={{
                            width: "25vh",
                            borderRadius: "0.5rem",
                            height: "20vh",
                          }}
                          bgcolor="white"
                        />
                        <Box
                          display={"flex"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          position={"relative"}
                          marginTop={"-3rem"}
                        >
                          <Box
                            bgcolor={"white"}
                            margin={1}
                            borderRadius={"5rem"}
                            padding={"0.2rem"}
                          >
                            <FavoriteIcon width={10} height={10} />
                          </Box>
                          <Box
                            bgcolor={"white"}
                            margin={1}
                            borderRadius={"5rem"}
                            padding={"0.2rem"}
                          >
                            <RemoveRedEyeIcon width={20} height={12} />
                          </Box>
                          <Box
                            bgcolor={"white"}
                            margin={1}
                            borderRadius={"5rem"}
                            padding={"0.2rem"}
                          >
                            <SwapHorizIcon width={20} height={12} />
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"column"}
                        paddingBottom={"0.5rem"}
                      >
                        <Box marginLeft={"10rem"} marginTop={"1"} marginX={1}>
                          <Typography marginLeft={"1.5rem"} fontSize={14}>
                            {item.name}
                          </Typography>
                        </Box>
                        <Box
                          marginTop={"4rem"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          marginRight={"1rem"}
                          marginLeft={"2rem"}
                        >
                          <Typography>{item.price+"$"}</Typography>
                          <ShoppingBagIcon />
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

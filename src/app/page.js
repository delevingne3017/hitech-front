"use client";
import { Box, Grid, Paper, FormRow, Typography, Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/navigation";
import "./globals.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import HomePhoto from "../components/home/homePhoto";
import littleCarousel from "../components/home/littleCarousel";
import readMore from "@/components/home/readMore";

const Item = styled(Paper)(({ theme }) => ({
  // height: "10rem",
  // marginTop: "2rem",
  padding: theme.spacing(2),
  borderRadius: "0.4rem",
  border: "1px ",
  justifyContent: "center",
}));

export default function Home() {
  const [state, setState] = useState({
    products: [],
  });
  const router = useRouter();

  const handleProduct = (productId) => {
    router.push(`/product/${productId}`);
  };

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/product");
      setState({
        ...state,
        products: response.data.data,
      });
    } catch (err) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <div style={{ width: "100%", height: "63vh" }}>
        <HomePhoto />
      </div>
      <div>
        <littleCarousel />
      </div>
      <Box marginY={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box>
              <img
                src="https://cdn.shopify.com/s/files/1/0631/9590/6271/files/1_67816f92-1c73-46e3-bb91-7535f10549b8.jpg?v=1679389451"
                alt="{main image}"
                style={{
                  width: "68%",
                  height: "32rem",
                  borderRadius: "1.5rem",
                  marginLeft: "4rem",
                }}
              />
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
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={3.5}
                sx={{
                  borderRadius: "2rem",
                  bgcolor: "#ebedf0",
                  marginTop: "1rem",
                  marginRight: "1rem",
                }}
              >
                <Box>
                  <Box>
                    <img
                      src="https://api.hitech.mn/uploads/images/2023/5/27/1-1685172765883052862-thumbnail.jpg"
                      alt="{main image}"
                      style={{
                        width: "35vh",
                        borderRadius: "2rem",
                      }}
                      bgcolor="white"
                    />
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
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
                  <Box>
                    <Typography>
                      Crucial P3 Plus 2TB PCIe Gen4 3D NAND NVMe M.2 SSD, up to
                      5000MB/s
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <img
          src="https://api.hitech.mn/uploads/images/2022/5/4/leasing-1651426528247953218-original-1651678259454428388-original.jpg"
          alt="{main image}"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box bgcolor={"F7F7F7"}>
        <Box>
          <Grid container spacing={2} item xs={12} md={12}>
            {Array.from(Array(9)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>xs=2</Item>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2} item xs={12} md={12} marginTop={2}>
            {Array.from(Array(9)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>xs=2</Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box>
        <img
          src="https://api.hitech.mn/uploads/images/2021/7/27/thick-banner-1619167935537878672-original-1627399206221880513-original.jpg"
          alt="{main image}"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box marginY={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box>
              <img
                src="https://api.hitech.mn/uploads/images/2022/12/25/1-1671945082952690867-524X524.gif"
                alt="{main image}"
              />
            </Box>
          </Grid>
          <Grid
            container
            spacing={2}
            item
            xs={12}
            md={8}
            justifyContent={"space-between"}
          >
            {Array.from(Array(4)).map((_, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={5.5}
                sx={{
                  borderRadius: "2rem",
                  bgcolor: "#ebedf0",
                  marginTop: "1rem",
                  marginRight: "2.3rem",
                }}
                borderRadius={"2rem"}
                bgcolor={"#ebedf0"}
              >
                <Box>
                  <Box>
                    <img
                      src="https://api.hitech.mn/uploads/images/2023/5/27/1-1685172765883052862-thumbnail.jpg"
                      alt="{main image}"
                      style={{
                        width: "35vh",
                        borderRadius: "2rem",
                      }}
                      bgcolor="white"
                    />
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
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
                  <Box>
                    <Typography>
                      Crucial P3 Plus 2TB PCIe Gen4 3D NAND NVMe M.2 SSD, up to
                      5000MB/s
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <readMore limit={100}></readMore>
        {state.products[0] &&
          state.products.map((el, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleProduct(el._id)}
                >
                  product
                </Button>
              </Grid>
            );
          })}
      </Box>
    </Box>
  );
}

"use client";
import { Box, Grid, Paper, Typography } from "@mui/material";
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
import LittleCarousel from "../components/home/littleCarousel";
import NewProducts from "@/components/home/newProducts";
import PopularProducts from "@/components/home/popularProducts";
import SaleProduct from "@/components/home/saleProduct";
import Logo from "@/components/home/logo";
import Service from "@/components/home/service";
import Demand from "@/components/home/demand";
import SpecialProduct from "@/components/home/specialProd";

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
    seeMoreClicked: false,
    brandLength: 84,
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
    <Box sx={{ width: "100%" }} bgcolor={"#ffffff"}>
      <Box style={{ width: "100%", height: "63vh" }}>
        <HomePhoto />
        <LittleCarousel />
        {/* <Box marginBottom={"2rem"}></Box> */}
      </Box>
      <SpecialProduct />
      <Box bgcolor={"#f3f6f4"}>
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
          <NewProducts />
          <PopularProducts />
        </Box>
        <Box>
          <img
            src="https://api.hitech.mn/uploads/images/2023/6/20/Thick_Banner_2_png-1687248393835092347-original.png"
            alt="{main image}"
            style={{
              width: "100%",
            }}
          />
        </Box>
      </Box>
      <Box bgcolor={"#f3f6f4"}>
        <Demand />
        <SaleProduct />
        <Logo />
        <Service />
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
    </Box>
  );
}

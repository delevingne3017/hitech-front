"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  Hidden,
  Typography,
  useTheme,
} from "@mui/material";
import { UserContext } from "@/context/userContext";
import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckIcon from "@mui/icons-material/Check";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useRouter } from "next/navigation";
import useSettings from "@/hooks/useSettings";
import PersonalInfo from "./paymentDetail/personalInfo";
import Checkout from "./paymentDetail/checkout";
import ReviewOrder from "./paymentDetail/review";
import OrderShow from "./paymentDetail/orders";
const CircleNumber = styled(Box)(({ theme }) => ({
  margin: "1rem",
  display: "flex",
  borderRadius: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

export default function Payment() {
  const theme = useTheme();
  const { user } = useContext(UserContext);
  const { settings } = useSettings();
  const router = useRouter();

  const totalPrice = settings.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    settings.order &&
    settings.order.page && (
      <>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <Box
              height="6rem"
              borderRadius=".5rem"
              boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              margin={{
                xs: "2rem 0 0 0 ",
                md: "1rem",
                sm: "3rem 6rem 1rem 6rem",
                lg: "3rem 6rem 1rem 6rem",
              }}
            >
              <CircleNumber
                marginLeft="2rem"
                sx={{
                  background:
                    settings.order.page === "personalInfo"
                      ? "#FE5900"
                      : "#CCCCCC",
                  border:
                    settings.order.page == "personalInfo"
                      ? ".5rem solid rgb(255, 209, 184)"
                      : ".2rem solid rgb(255, 209, 184)",
                }}
              >
                <LocalShippingOutlinedIcon
                  sx={{ fill: "white", fontSize: 35 }}
                />
              </CircleNumber>
              <Hidden mdDown={true}>
                <Typography>Хүргэлтийн хэсэг</Typography>
                <Divider sx={{ width: "14rem" }} />
              </Hidden>
              <CircleNumber
                sx={{
                  background:
                    settings.order.page == "checkout" ? "#FE5900" : "#CCCCCC",
                  border:
                    settings.order.page == "checkout"
                      ? ".5rem solid rgb(255, 209, 184)"
                      : ".2rem solid rgb(255, 209, 184)",
                }}
              >
                <AddCardIcon sx={{ fill: "white", fontSize: 35 }} />
              </CircleNumber>
              <Hidden mdDown={true}>
                <Typography>Төлбөрийн хэсэг</Typography>
                <Divider sx={{ width: "14rem" }} />
              </Hidden>
              <CircleNumber
                sx={{
                  background:
                    settings.order.page == "review" ? "#FE5900" : "#CCCCCC",
                  border:
                    settings.order.page == "review"
                      ? ".5rem solid rgb(255, 209, 184)"
                      : ".2rem solid rgb(255, 209, 184)",
                }}
              >
                <CheckIcon sx={{ fill: "white", fontSize: 35 }} />
              </CircleNumber>
              <Hidden mdDown={true}>
                <Typography>Баталгаажуулах хэсэг</Typography>
              </Hidden>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={7} lg={8}>
            {settings.order.page === "personalInfo" ? (
              <PersonalInfo />
            ) : settings.order.page === "checkout" ? (
              <Checkout />
            ) : settings.order.page === "review" ? (
              <ReviewOrder />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            {settings.order.page == "review" ? (
              <OrderShow />
            ) : (
              <Box
                margin={{
                  xs: "1rem  2rem 1rem 2rem",
                  sm: "1rem 4rem 0 4rem",
                  md: "2rem 5rem 0 5rem",
                  lg: "2rem 7rem 1rem 0",
                }}
              >
                <Box display="flex" margin=".5rem">
                  <Typography>Барааны үнэ:</Typography>
                  <Typography sx={{ textAlign: "right" }}>
                    {totalPrice}
                  </Typography>
                </Box>
                <Divider />
                <Box display="flex" margin=".5rem">
                  <Typography>Хүргэлт:</Typography>
                  <Typography textAlign="right">0</Typography>
                </Box>
                <Divider />
                <Box display="flex" margin=".5rem">
                  <Typography>Нийт:</Typography>
                  <Typography textAlign="right">{totalPrice}</Typography>
                </Box>
                <Typography>Дээрх үнэд НӨАТ ороогүй болно.</Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </>
    )
  );
}

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
          <Hidden lgUp={true}>
            <Grid
              item
              xs={12}
              lg={4}
              md={9}
              sx={{
                height: "100px",
                backgroundColor: "black",
                [theme.breakpoints.down("md")]: { backgroundColor: "blue" },
              }}
            ></Grid>
          </Hidden>
          <Grid
            item
            xs={12}
            lg={4}
            md={6}
            sx={{ height: "100px", backgroundColor: "red" }}
          ></Grid>
          <Grid
            item
            xs={12}
            lg={4}
            md={6}
            sx={{ height: "100px", backgroundColor: "yellow" }}
          ></Grid>
          <Grid
            item
            xs={12}
            lg={4}
            md={6}
            sx={{ height: "100px", backgroundColor: "purple" }}
          ></Grid>
          <Grid item xs={12} lg={12}>
            <Box
              margin="3rem 6rem 1rem 6rem"
              height="6rem"
              borderRadius=".5rem"
              boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <CircleNumber
                marginLeft="1rem"
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
          <Grid item xs={12} lg={8}>
            {settings.order.page === "personalInfo" ? (
              <PersonalInfo />
            ) : settings.order.page === "checkout" ? (
              <Checkout />
            ) : (
              <ReviewOrder />
            )}
          </Grid>
          <Grid item xs={12} lg={4}>
            {settings.order.page == "review" ? (
              <OrderShow />
            ) : (
              <Box margin="1rem 7rem 1rem 0">
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

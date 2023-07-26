"use client";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "@/context/userContext";
import { useContext, useEffect, useState } from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Checkout from "./checkout/walletPage";
import styled from "@emotion/styled";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckIcon from "@mui/icons-material/Check";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function payment() {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [state, setState] = useState({
    current: 1,
    cartItems: [],
    buttonText: "Үргэлжлүүлэх",
    payment: false,
  });
  const CircleNumber = styled(Box)(({ theme }) => ({
    margin: "1rem",
    display: "flex",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  }));
  const userId = user._id;

  useEffect(() => {
    let storedItems = localStorage.getItem("settings");
    if (storedItems) {
      setState({
        ...state,
        cartItems: JSON.parse(storedItems),
      });
    }
  }, []);
  var totalPrice = 0;
  for (let item of state.cartItems) {
    totalPrice += item.quantity * item.price;
  }
  const orders = state.cartItems.map((item) => ({
    productId: item._id,
    quantity: item.quantity,
  }));
  const PaymentPage = async () => {
    setState({
      ...state,
      current: 2,
      buttonText: "Худалдаж авах",
    });
    if (state.current === 2) {
      console.log("working");
      if (user.balance > totalPrice) {
        console.log("balance");
        try {
          console.log("data", userId, orders);

          const headers = {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          };

          const response = await axios.post(
            "/api/order",
            {
              userId,
              orders,
            },
            { headers: headers }
          );
          console.log("success", response.data);
        } catch (e) {
          console.error("error", e);
        }
      } else {
        setState({
          ...state,
          payment: true,
        });
      }
    }
  };

  const backAddress = () => {
    setState({
      ...state,
      current: 1,
      buttonText: "Үргэлжлүүлэх",
    });
    if (state.current === 1) {
      router.push("/");
    }
  };

  return (
    <>
      <Grid container>
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
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                background: state.current == 1 ? "#FE5900" : "#CCCCCC",
                border:
                  state.current == 1
                    ? ".5rem solid rgb(255, 209, 184)"
                    : ".2rem solid rgb(255, 209, 184)",
              }}
            >
              <LocalShippingOutlinedIcon sx={{ fill: "white" }} />
            </CircleNumber>
            <Typography>Хүргэлтийн хэсэг</Typography>
            <Divider sx={{ width: "14rem" }} />
            <CircleNumber
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                background: state.current == 2 ? "#FE5900" : "#CCCCCC",
                border:
                  state.current == 2
                    ? ".5rem solid rgb(255, 209, 184)"
                    : ".2rem solid rgb(255, 209, 184)",
              }}
            >
              <AddCardIcon sx={{ fill: "white" }} />
            </CircleNumber>
            <Typography>Төлбөрийн хэсэг</Typography>
            <Divider sx={{ width: "14rem" }} />
            <CircleNumber
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                background: state.current == 3 ? "#FE5900" : "#CCCCCC",
                border:
                  state.current == 3
                    ? ".5rem solid rgb(255, 209, 184)"
                    : ".2rem solid rgb(255, 209, 184)",
              }}
            >
              <CheckIcon sx={{ fill: "white" }} />
            </CircleNumber>
            <Typography>Баталгаажуулах хэсэг</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={8}>
          {state.current == 2 ? (
            <Checkout />
          ) : (
            <Box>
              <Box
                margin="1rem 6rem 0 6rem"
                height="12rem"
                borderRadius=".5rem"
                boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
              >
                <Box display="flex" alignItems="center">
                  <CircleNumber
                    sx={{
                      width: "2rem",
                      height: "2rem",
                      background: "#FE5900",
                    }}
                  >
                    <Typography color="white">1</Typography>
                  </CircleNumber>
                  <Typography>Мэдээлэл оруулах</Typography>
                </Box>
                <Box margin="1rem">
                  <FormControl sx={{ width: "24rem" }}>
                    <Typography>Утасны дугаар</Typography>
                    <TextField variant="outlined" defaultValue={user.phone} />
                  </FormControl>
                  <FormControl sx={{ width: "24rem", marginLeft: "1rem" }}>
                    <Typography>Тэмдэглэл</Typography>
                    <TextField
                      variant="outlined"
                      placeholder="Оройн цагаар хүргүүлмээр байна гэх мэт..."
                    />
                  </FormControl>
                </Box>
              </Box>
              <Box
                margin="1rem 6rem 0 6rem"
                height="12rem"
                borderRadius=".5rem"
                boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
              >
                <Box display="flex" alignItems="center">
                  <CircleNumber
                    sx={{
                      width: "2rem",
                      height: "2rem",
                      background: "#FE5900",
                    }}
                  >
                    <Typography color="white">2</Typography>
                  </CircleNumber>
                  <Typography>Хүргэлтийн хаяг</Typography>
                  <Button
                    variant="text"
                    color="primary"
                    disableRipple
                    sx={{ fontWeight: "bold" }}
                  >
                    + Нэмэх
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Grid>
        <Grid item lg={4}>
          <Box margin="1rem 6rem 0 0">
            <Box display="flex" margin=".5rem">
              <Typography>Барааны үнэ:</Typography>
              <Typography sx={{ textAlign: "right" }}>{totalPrice}</Typography>
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
            <Button
              fullWidth
              color="primary"
              variant="contained"
              onClick={PaymentPage}
              sx={{ marginTop: "2rem" }}
            >
              {state.buttonText}
            </Button>
            <Button
              variant="text"
              startIcon={<KeyboardReturnIcon />}
              disableRipple
              onClick={backAddress}
              sx={{ color: "black", marginTop: ".5rem" }}
            >
              Буцах
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

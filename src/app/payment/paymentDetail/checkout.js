import { Alert, Box, Button, Grid, Snackbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import useSettings from "@/hooks/useSettings";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { useState } from "react";
import { UserContext } from "@/context/userContext";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import PaymentMethod from "./paymentAcc";
import ChargeWallet from "./cartPage";
const CircleNumber = styled(Box)(({ theme }) => ({
  margin: "1rem",
  display: "flex",
  width: "2rem",
  height: "2rem",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "100%",
  justifyContent: "center",
  alignItems: "center",
}));
const PaymentMethods = styled(Box)({
  margin: "1rem",
  backgroundColor: "rgb(242, 245, 251)",
  borderRadius: ".6rem",
  width: "22rem",
  height: "6rem",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  ":hover": {
    border: "1px solid red",
  },
});
const Checkout = (props) => {
  const { changeOrderPage, settings, onChangeOrderValue } = useSettings();
  const { user } = useContext(UserContext);
  const userId = user._id;

  const [state, setState] = useState({
    selected: false,
    payment: false,
    openSnackBar: false,
    snackbarText: "",
    opens: false,
  });
  const chargeWallet = () => {
    setState({
      ...state,
      opens: true,
    });
  };
  const orders = settings.cart.map((item) => ({
    productId: item._id,
    quantity: item.quantity,
  }));
  const totalPrice = settings.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  };

  const placeOrder = useCallback(async () => {
    if (totalPrice <= user.balance) {
      try {
        const response = await axios.post(
          "/api/order",
          {
            userId,
            orders,
          },
          { headers: headers },

          settings.order.values
        );
        onChangeOrderValue("id", response.data.id);
        console.log("success", response.data);
      } catch (error) {
        console.error(error);
      }
      changeOrderPage("review");
      localStorage.removeItem("cart");
    }
    setState({
      ...state,
      payment: true,
      openSnackBar: true,
      snackbarText: "Үлдэгдэл хүрэлцэхгүй байна. Хэтэвчээ цэнэглэнэ үү.",
    });
  }, []);
  const paymentsTypes = [
    {
      img: "https://th.bing.com/th/id/OIP.V7_8jviYWBiq8BjuJHF65QHaHa?pid=ImgDet&rs=1",
      type: "Хэтэвчээр",
      desc: "Та хэтэвчний үлдэгдлээр төлбөр төлөх бол энд дарна уу.",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/000/354/930/original/vector-credit-card-icon.jpg",
      type: "Картаар",
      desc: " Та картаар төлбөрөө төлөх бол энд дарна уу. ",
    },
  ];

  return (
    <Grid item xs={12} sm={12}>
      <Box
        borderRadius=".5rem"
        boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
        margin={{
          xs: "2rem 0 0 0 ",
          md: "1rem",
          md: "1rem 6rem 0 6rem",
          lg: "1rem 6rem 0 6rem",
        }}
      >
        <Box display="flex" alignItems="center">
          <CircleNumber>
            <Typography color="white">1</Typography>
          </CircleNumber>
          <Typography>Төлбөрийн хэлбэр сонгох</Typography>
        </Box>
        <Grid item xs={12} sm={12}>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {paymentsTypes.map((item) => (
              <PaymentMethods border={state.selected ? "1px solid red" : null}>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems={"center"}
                  justifyContent="flex-start"
                  margin="1rem"
                >
                  <img src={item.img} width="60px" height="60px" alt=" icon" />
                  <Box
                    display="flex"
                    flexDirection="column"
                    paddingLeft=".8rem"
                  >
                    <Typography fontSize="1rem" fontWeight={"bold"}>
                      {item.type}
                    </Typography>
                    <Typography fontSize={".8rem"}>{item.desc}</Typography>
                  </Box>
                </Box>
              </PaymentMethods>
            ))}
          </Box>
        </Grid>
      </Box>
      <PaymentMethod />
      <Box
        margin={{
          xs: "2rem 1rem 0 1rem ",
          md: "1rem",
          sm: "3rem 6rem 1rem 6rem",
          lg: "3rem 6rem 1rem 6rem",
        }}
      >
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={state.payment ? chargeWallet : placeOrder}
          //sx={{ marginTop: "2rem" }}
        >
          Худалдаж авах
        </Button>
        <ChargeWallet
          open={state.opens}
          handleOpen={chargeWallet}
          handleClose={() => {
            setState({
              ...state,
              opens: false,
            });
          }}
        />
        <Button
          variant="text"
          startIcon={<KeyboardReturnIcon />}
          disableRipple
          onClick={() => changeOrderPage("personalInfo")}
          sx={{ color: "black", marginTop: ".5rem" }}
        >
          Буцах
        </Button>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state.openSnackBar}
        autoHideDuration={2000}
        onClose={() => setState({ ...state, openSnackBar: false })}
      >
        <Alert
          onClose={() => setState({ ...state, openSnackBar: false })}
          severity="error"
          sx={{ width: "100%" }}
        >
          {state.snackbarText}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Checkout;

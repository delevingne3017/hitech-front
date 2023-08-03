"use client";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Checkout() {
  const [state, setState] = useState({
    selected: false,
  });
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
  const PaymentMethod = styled(Box)({
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
  const text = () => {
    setState({
      ...state,
      selected: true,
    });
  };
  return (
    <Box>
      <Box
        margin="1rem 6rem 0 6rem"
        height="13rem"
        borderRadius=".5rem"
        boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
      >
        <Box display="flex" alignItems="center">
          <CircleNumber>
            <Typography color="white">1</Typography>
          </CircleNumber>
          <Typography>Төлбөрийн хэлбэр сонгох</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <PaymentMethod
            border={state.selected ? "1px solid red" : null}
            onClick={text}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems={"center"}
              justifyContent="flex-start"
              margin="1rem"
            >
              <img
                src="https://th.bing.com/th/id/OIP.V7_8jviYWBiq8BjuJHF65QHaHa?pid=ImgDet&rs=1"
                width="20%"
                height="50%"
                alt="togrog icon"
              />
              <Box display="flex" flexDirection="column" paddingLeft=".8rem">
                <Typography fontSize="1rem" fontWeight={"bold"}>
                  Хэтэвчээр
                </Typography>
                <Typography fontSize={".8rem"}>
                  Та хэтэвчний үлдэгдлээр төлбөр төлөх бол энд дарна уу.
                </Typography>
              </Box>
            </Box>
          </PaymentMethod>
          <PaymentMethod
            border={state.selected ? "1px solid red" : null}
            onClick={text}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems={"center"}
              justifyContent="flex-start"
              margin="1rem"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/354/930/original/vector-credit-card-icon.jpg"
                width="20%"
                height="50%"
                alt="togrog icon"
              />
              <Box display="flex" flexDirection="column" paddingLeft=".8rem">
                <Typography fontSize="1rem" fontWeight={"bold"}>
                  Картаар
                </Typography>
                <Typography fontSize={".8rem"}>
                  Та картаар төлбөрөө төлөх бол энд дарна уу.
                </Typography>
              </Box>
            </Box>
          </PaymentMethod>
        </Box>
      </Box>
      <Box
        margin="1rem 6rem 0 6rem"
        height="12rem"
        borderRadius=".5rem"
        boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
      >
        <Box display="flex" alignItems="center">
          <CircleNumber>
            <Typography color="white">2</Typography>
          </CircleNumber>
          <Typography>Хэрхэн төлбөрөө хийх вэ?</Typography>
        </Box>
      </Box>
    </Box>
  );
}

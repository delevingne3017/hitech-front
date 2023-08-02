"use client";
import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
// import { UserContext } from "../../../context/userContext";
import { useCallback, useContext, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { useEffect } from "react";
import { UserContext } from "@/context/userContext";

const CustomizedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "3rem",
  height: "3rem",
  border: "1px solid",
  borderRadius: ".4rem",
  marginLeft: "1rem",
  color: theme.palette.primary.main,
}));
export default function UserOrder() {
  const { user } = useContext(UserContext);
  const [state, setState] = useState({
    order: [],
  });
  const userId = user._id;
  const showOrder = useCallback(async () => {
    try {
      const response = await axios.get("/api/order?id=${userId}");
      console.log("data2", response.data);
      setState({ order: response.data.data });
    } catch (err) {
      console.error(err);
    }
  }, []);
  useEffect(() => {
    showOrder();
  }, []);
  return (
    <>
      <Box margin="2rem" width="90%" height="25%">
        {state.order.map((item) => (
          <Box key={item._id}>
            <Grid container>
              <Grid item xs={12} lg={3}>
                <Box margin="1rem">
                  <img
                    src="https://api.hitech.mn/uploads/images/2023/6/15/2-1686811807033831943-524X524.jpg"
                    alt="{main image}"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box margin="2rem">
                  <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                    Захиалгын дугаар: 8597
                  </Typography>
                  <Typography paddingTop={"2rem"} fontSize={".9rem"}>
                    Төлөв: Төлбөр төлөгдөөгүй
                  </Typography>
                  <Typography>Хүргэлтийн хаяг: </Typography>
                </Box>
                <Box display="flex" margin="1rem">
                  <CustomizedBox>
                    <Typography>00</Typography>
                    <Typography>өдөр </Typography>
                  </CustomizedBox>
                  <CustomizedBox>
                    <Typography>00</Typography>
                    <Typography>цаг </Typography>
                  </CustomizedBox>
                  <CustomizedBox>
                    <Typography>00</Typography>
                    <Typography>мин </Typography>
                  </CustomizedBox>
                  <CustomizedBox>
                    <Typography>00</Typography>
                    <Typography>сек </Typography>
                  </CustomizedBox>
                </Box>
              </Grid>
              <Grid item xs={12} lg={3} textAlign={"center"}>
                <Box margin={"2rem"}>
                  <Typography paddingTop={"2.5rem"}>
                    Үнэ : {item.totalPrice}
                  </Typography>
                  <Divider />
                  <Box marginTop={"1rem"}>
                    <Button
                      marginTop={"1rem"}
                      variant="contained"
                      color="primary"
                    >
                      Дэлгэрэнгүй
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Divider />
          </Box>
        ))}
      </Box>
    </>
  );
}

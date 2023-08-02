import useSettings from "@/hooks/useSettings";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import PaymentMethod from "./paymentAcc";
const CustomizedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "3rem",
  height: "3rem",
  border: "1px solid white",
  borderRadius: ".4rem",
  marginLeft: "1rem",
  background: theme.palette.primary.main,
  color: "white",
}));
const ReviewOrder = (props) => {
  const { settings } = useSettings();

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <Box
          display="flex"
          justifyContent="center"
          margin="1rem 0 0 6rem"
          flexDirection="column "
          alignItems="center"
        >
          <img
            src="https://www.hitech.mn/_next/static/images/pluto-welcome-89ea1cbb5c4895f7ab5e096000646669.svg"
            width="309px"
            height="220px"
            alt="order image"
          />
          <Typography fontSize="1.5rem" fontWeight="bold" marginTop="1rem">
            Таны захиалгыг хүлээн авлаа
          </Typography>
          <Typography marginTop="2rem">ЗАХИАЛГЫН ДУГААР :</Typography>
          <Typography marginTop="1rem">
            Захиалгын төлөв:Төлбөр төлөгдөөгүй
          </Typography>
          <Box
            display="flex"
            width="60%"
            marginTop="2rem"
            sx={{
              borderRadius: ".4rem",
              background: "rgb(254,89,0)",
              background:
                "linear-gradient(90deg, rgba(254,89,0,1) 49%, rgba(243,163,120,1) 82%)",
              boxShadow: 3,
            }}
          >
            <Box display="flex" margin="1rem 2rem 1rem 0">
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
            <Box
              marginTop="1rem"
              height="3rem"
              sx={{ border: "1px solid white" }}
            />
            <Box margin="1rem " display="flex" alignItems="center">
              <Typography
                color="white"
                marginLeft="1rem"
                sx={{ fontSize: ".8rem" }}
              >
                Төлбөр төлөгдөхийг хүлээж байна
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          margin="1rem 6rem 0 6rem"
          display="flex"
          border="1px solid red"
          borderRadius=".5rem"
          flexDirection="row"
        >
          <Box margin="5rem 2rem 5rem 2rem">
            <PriorityHighIcon
              sx={{
                fill: "white",
                width: "2.5rem",
                height: "2.5rem",
                background: "#FE5900",
                border: ".2rem solid rgb(255, 209, 184)",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Box display="flex" flexDirection="column" margin="2rem 2rem 2rem 0">
            <Typography fontSize=".8rem">
              Захиалга хийгдсэнээс хойш 24 цагийн дотор та төлбөрөө төлнө үү! Эс
              бөгөөс таны захиалга автоматаар цуцлагдах болохыг анхаарна уу!
              Шилжүүлэх дүн: 330,000₮ Та төлбөр хийхдээ гүйлгээний утга хэсэгт
              дараах захиалгын дугаарыг бичнэ үү!
            </Typography>
            <Box
              margin="2rem 8rem 0 8rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              borderRadius=".5rem"
              sx={{ background: "#f7f7f7" }}
            >
              <Typography>ЗАХИАЛГЫН ДУГААР</Typography>
              <Typography sx={{ color: "#FE5900", fontWeight: "bold" }}>
                0000
              </Typography>
            </Box>
          </Box>
        </Box>
        <PaymentMethod />
      </Grid>
    </Grid>
  );
};

export default ReviewOrder;

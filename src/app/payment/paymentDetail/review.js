import useSettings from "@/hooks/useSettings";
import styled from "@emotion/styled";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import PaymentMethod from "./paymentAcc";
const CustomizedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "48px",
  height: "48px",
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
          flexDirection="column "
          alignItems="center"
          margin={{ xs: "2rem 0 0 0", lg: "1rem 0 0 6rem" }}
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
            marginTop="2rem"
            sx={{
              borderRadius: ".4rem",
              background: "rgb(254,89,0)",
              background:
                "linear-gradient(90deg, rgba(254,89,0,1) 49%, rgba(243,163,120,1) 82%)",
              boxShadow: 3,
            }}
            width={{ xs: "90%", md: "60%", sm: "60%", lg: "60%" }}
          >
            <Grid container>
              <Grid item xs={12} md={6} sm={6} lg={7}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  margin={{ xs: "1rem", lg: "1rem 2rem 1rem 0" }}
                >
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
              <Hidden smDown={true}>
                <Box
                  marginTop="1rem"
                  marginRight="2rem"
                  height="3rem"
                  sx={{ border: "1px solid white" }}
                />
              </Hidden>
              <Grid
                item
                xs={12}
                sm={5}
                md={5}
                lg={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box>
                  <Typography color="white" sx={{ fontSize: ".8rem" }}>
                    Төлбөр төлөгдөхийг хүлээж байна
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          display="flex"
          border="1px solid red"
          borderRadius=".5rem"
          flexDirection="row"
          margin={{
            xs: "1rem ",
            sm: "2rem ",
            md: "1rem 6rem 0 6rem",
            lg: "1rem 6rem 0 6rem",
          }}
        >
          <Grid container>
            <Grid item xs={3} lg={2}>
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
            </Grid>
            <Grid item xs={9} lg={10}>
              <Box
                display="flex"
                flexDirection="column"
                margin="2rem 2rem 2rem 0"
              >
                <Typography fontSize=".8rem">
                  Захиалга хийгдсэнээс хойш 24 цагийн дотор та төлбөрөө төлнө
                  үү! Эс бөгөөс таны захиалга автоматаар цуцлагдах болохыг
                  анхаарна уу! Шилжүүлэх дүн: 330,000₮ Та төлбөр хийхдээ
                  гүйлгээний утга хэсэгт дараах захиалгын дугаарыг бичнэ үү!
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  borderRadius=".5rem"
                  sx={{ background: "#f7f7f7" }}
                  margin={{ xs: "2rem", lg: "2rem 4rem 0 4rem" }}
                >
                  <Typography>ЗАХИАЛГЫН ДУГААР</Typography>
                  <Typography sx={{ color: "#FE5900", fontWeight: "bold" }}>
                    0000
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <PaymentMethod />
      </Grid>
    </Grid>
  );
};

export default ReviewOrder;

"use client";
import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = (props) => {
  return (
    <Grid
      container
      spacing={2}
      bgcolor={"#F7F7F7"}
      fontSize={15}
      marginTop={"2rem"}
    >
      <Grid xs={12} lg={4}>
        <Typography
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"15vh"}
          color={"#7781AE"}
        >
          Чанар амлана
        </Typography>
      </Grid>
      <Grid xs={12} lg={3}>
        <Typography
          color={"#7781AE"}
          fontFamily={"bold"}
          margin="2rem 0 0 2rem"
          fontSize={15}
        >
          Танд хэрэгтэй холбоосууд
        </Typography>
        <Box color={"#FE5A03"} margin="2rem 2rem 2rem 4rem">
          <Typography fontSize={12} marginTop={1}>
            Компьютер угсрах
          </Typography>
          <Typography fontSize={12} marginTop={1}>
            Хэрхэн PC Format хийх вэ?
          </Typography>
          <Typography fontSize={12} marginTop={1}>
            Ryzen CPU гэж юу вэ?
          </Typography>
          <Typography fontSize={12} marginTop={1}>
            Intel CPU гэж юу вэ?
          </Typography>
          <Typography fontSize={12} marginTop={1}>
            Хэрхэн зөв PSU сонгох вэ?
          </Typography>
          <Typography fontSize={12} marginTop={1}>
            Таны компьютерт хэрэгтэй 5 зөвлөгөө
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} lg={5}>
        <Box
          marginTop="2rem"
          component="img"
          src="data:image/png;base64,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"
          alt="{main image}"
          sx={{
            height: "2.6rem",
            width: "8rem",
            marginLeft: "3rem",
            marginRight: "3rem",
            cursor: "pointer",
          }}
        />
        <Box margin="1rem 2rem 2rem 4rem">
          <Typography color={"#7781AE"} fontSize={12}>
            2020 © Зохиогчийн эрх хуулиар хамгаалагдав{" "}
          </Typography>
          <Box display={"flex"} justifyContent={"flex-start"}>
            <Typography fontSize={12} color={"#7781AE"}>
              Хөгжүүлсэн
            </Typography>
            <Typography fontSize={12} color={"#FE5A03"} marginLeft={1}>
              HACKUM УБ,
            </Typography>
          </Box>
          <Typography fontSize={12} color={"#7781AE"} marginBottom={3}>
            БАЯНБҮРД, КОМПЬЮТЕР МОЛЛ, 2020 ТООТ
          </Typography>
          <Typography fontSize={12} color={"#FE5A03"}>
            Холбоо барих Түгээмэл асуултууд
          </Typography>
          <Typography fontSize={12} color={"#7781AE"}>
            Холбоосууд
          </Typography>
          <Box>
            <FacebookIcon></FacebookIcon>
            <YouTubeIcon></YouTubeIcon>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;

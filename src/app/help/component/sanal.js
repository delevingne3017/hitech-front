"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "@fontsource/inter";
import { useRouter } from "next/navigation";

export default function CollapsedBreadcrumbs() {
  function handleClick(event) {
    event.preventDefault();
  }
  const router = useRouter();
  return (
    <Grid>
      <Box bgcolor={"#f7f7f7"} position={"relative"}>
        <Box bgcolor={"white"} borderRadius={5} boxShadow={1} marginX={10}>
          <Box role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <ArrowBackIosIcon
                sx={{ fontsize: "small", cursor: "pointer" }}
                size={"small"}
                onClick={() => router.push("/")}
              ></ArrowBackIosIcon>
              <Link
                sx={{ fontSize: ".8rem" }}
                underline="hover"
                color="inherit"
                href="/"
              >
                Буцах
              </Link>
              <Typography sx={{ fontSize: ".8rem" }} color="text.primary">
                Холбоо барих
              </Typography>

              <Typography
                sx={{ color: "black", fontsize: "1.5rem", fontWeight: "bold" }}
                marginTop={"4rem"}
              >
                Санал хүсэлт илгээх
              </Typography>
            </Breadcrumbs>
            <TextField
              bgcolor={"#f7f7f7"}
              sx={{ marginLeft: "5rem", marginTop: "4rem" }}
              id="outlined-textarea"
              label="Таны цахим шуудан"
              placeholder="Таны цахим шуудан"
            />

            <TextField
              bgcolor={"#f7f7f7"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "1rem",
                fontsize: "big",
              }}
              id="outlined-textarea"
              placeholder="Энд бидний юуг сайжруулах талаар бичиж болно 
              "
              inputProps={{ Weight: "100px", height: "500px" }}
            />
            <Button display={"flex"} variant="contained">
              <Typography>Илгээх</Typography>
              <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </Button>
            <Box marginTop={"18rem"}>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                color={"gray"}
                fontSize={".8rem"}
              >
                Бид таны илгээсэн санал хүсэлтэн дээр тулгуурлан өөрсдийн
                <br />
                үйл ажиллагааг илүү сайжруулан ажиллах болно
              </Typography>
            </Box>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
              fontSize={".7rem"}
            >
              Бидний сошиал хаягууд
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <YouTubeIcon
                sx={{ color: "red", cursor: "pointer", fontSize: "40px" }}
                onClick={() =>
                  router.push(
                    "https://www.youtube.com/results?search_query=hitech"
                  )
                }
              ></YouTubeIcon>
              <FacebookIcon
                marginLeft="10rem"
                fontSize="large"
                sx={{ color: "blue", fontSize: "40px" }}
                onClick={() =>
                  router.push("https://www.facebook.com/saiko.bymbaa")
                }
              ></FacebookIcon>

              <InstagramIcon
                onClick={() =>
                  router.push("https://www.instagram.com/bymbaafly/")
                }
                fontSize="large"
                sx={{ color: "purple", fontSize: "40px" }}
              ></InstagramIcon>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

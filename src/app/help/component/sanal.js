"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Card, Grid, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "@fontsource/inter";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function CollapsedBreadcrumbs() {
  function handleClick(event) {
    event.preventDefault();
  }
  const router = useRouter();
  return (
    // <Card sx={{ padding: 2, width: "100%" }}>
    <Stack
      gap={2}
      direction="column"
      sx={{
        padding: 2,
        width: "100%",
        borderRadius: 0,
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
      }}
    >
      <Button
        onClick={() => router.push("/")}
        sx={{ cursor: "pointer" }}
        variant="text"
        startIcon={<ArrowLeft />}
      >
        Буцах / Холбоо барих
      </Button>
      <TextField placeholder="Та цахим хаягаа оруулна уу" />
      <TextField
        placeholder="Энд бидний юуг сайжруулах талаар бичнэ "
        multiline
        rows={3}
      />
      <Button variant="contained" endIcon={<ArrowRight />}>
        Илгээх
      </Button>
      <Box flexDirection={"row"} display={"flex"} justifyContent={"center"}>
        <YouTubeIcon
          onClick={() =>
            router.push("https://www.youtube.com/watch?v=rin1klMtBUE  ")
          }
          sx={{ color: "red", fontSize: "50px", cursor: "pointer" }}
        />
        <InstagramIcon
          onClick={() => router.push("https://www.instagram.com/bymbaafly/")}
          sx={{ color: "purple ", fontSize: "45px", cursor: "pointer" }}
        />
        <FacebookIcon
          onClick={() => router.push("https://www.facebook.com/saiko.bymbaa")}
          sx={{ color: "blue ", fontSize: "45px", cursor: "pointer" }}
        />
      </Box>
    </Stack>
    // </Card>
  );
}

"use client";
import { Box } from "@mui/material";

export default function DetailImage() {
  return (
    <>
      <Box
        borderRadius={5}
        bgcolor={"white"}
        boxShadow={1}
        padding={1}
        marginY={2}
        marginX={2}
      >
        <Box
          marginTop={2}
          component="img"
          src="https://sc04.alicdn.com/kf/H91dead8a595c46adb0f3119e3ddb7abeS/252793555/H91dead8a595c46adb0f3119e3ddb7abeS.jpg"
          alt="{main image}"
          sx={{
            height: "100%",
            width: "190vh",
            marginLeft: "3rem",
            marginRight: "3rem",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 7,
          }}
        />
        <Box
          marginTop={2}
          component="img"
          src="https://sc04.alicdn.com/kf/H1f0fa678076a401abe26f505e601737ey/252793555/H1f0fa678076a401abe26f505e601737ey.jpg"
          alt="{main image}"
          sx={{
            height: "100%",
            width: "190vh",
            marginLeft: "3rem",
            marginRight: "3rem",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 7,
          }}
        />

        <Box
          marginTop={2}
          component="img"
          src="https://sc04.alicdn.com/kf/Hc4c9bb22a84d48849ba62b01fa59ff45U/252793555/Hc4c9bb22a84d48849ba62b01fa59ff45U.jpg"
          alt="{main image}"
          sx={{
            height: "100%",
            width: "190vh",
            marginLeft: "3rem",
            marginRight: "3rem",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 7,
          }}
        />
      </Box>
    </>
  );
}

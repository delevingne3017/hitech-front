"use client";
import { Box, ThemeProvider, Typography } from "@mui/material";
//import "./global =.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/home/navbar";
import ProductCard from "@/components/home/specialProd";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//16px == 1rem

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }} className={inter.className}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <ProductCard/>
          {children}
          <Box sx={{ width: "100%", backgroundColor: "primary.main" }}>
            <Typography>footer</Typography>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";
import { ThemeProvider } from "@mui/material";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/home/navbar";
import theme from "@/theme";
import Footer from "@/components/home/footer";
import { UserProvider } from "@/components/userContext";
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
          <UserProvider>
            <Navbar />
            {children}
            <Footer />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

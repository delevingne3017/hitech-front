import { UserProvider } from "@/context/userContext";
import { ThemeProvider } from "@mui/material";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/home/navbar";
import theme from "@/theme";
import Footer from "@/components/home/footer";
import MainLayout from "@/components/layouts";
import { SettingsProvider } from "@/context/SettingsContext";
import { SearchProvider } from "@/context/searchContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hitech clone",
  description: "Generated by create next app",
};

// 16px == 1rem

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }} className={inter.className}>
        <ThemeProvider theme={theme}>
          <UserProvider>
            <SettingsProvider>
              <SearchProvider>
                <MainLayout>
                  <Navbar />
                  {children}
                  <Footer />
                </MainLayout>
              </SearchProvider>
            </SettingsProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}


"use client";
import { Box, Typography, Grid} from "@mui/material";

import "react-multi-carousel/lib/styles.css";
import LeftCarousel from "./leftCarousel";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";


export default function SpecialProduct() {

  return (
    <>
   <Box marginY={5} marginTop={20}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box marginTop={"1rem"}>
              <LeftCarousel />
            </Box>
          </Grid>
          <Grid
            container
            spacing={2}
            item
            xs={12}
            md={8}
            justifyContent={"space-between"}
            alignItems={"space-between"}
            marginTop={"2rem"}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={3.5}
                sx={{
                  borderRadius: "0.5rem",
                  bgcolor: "#f3f6f4",
                  marginTop: "1rem",
                  marginRight: "1rem",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
              >
                <Box  margin={{xs:"1rem"}}>
                  <Box>
                    <img
                      src="https://api.hitech.mn/uploads/images/2023/5/27/1-1685172765883052862-thumbnail.jpg"
                      alt="{main image}"
                      style={{
                        width: "35vh",
                        borderRadius: "0.5rem",
                      }}
                      bgcolor="white"
                    />
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        bgcolor={"white"}
                        margin={1}
                        borderRadius={"5rem"}
                        padding={"0.2rem"}
                      >
                        <FavoriteIcon width={10} height={10} />
                      </Box>
                      <Box
                        bgcolor={"white"}
                        margin={1}
                        borderRadius={"5rem"}
                        padding={"0.2rem"}
                      >
                        <RemoveRedEyeIcon width={20} height={12} />
                      </Box>
                      <Box
                        bgcolor={"white"}
                        margin={1}
                        borderRadius={"5rem"}
                        padding={"0.2rem"}
                      >
                        <SwapHorizIcon width={20} height={12} />
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Typography>
                      Crucial P3 Plus 2TB PCIe Gen4 3D NAND NVMe M.2 SSD, up to
                      5000MB/s
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

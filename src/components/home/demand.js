"use client";
import { Box, Grid, Typography} from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Demand() {
  const [state, setState] = useState({
    products: [],
    seeMoreClicked: false,
    brandLength: 84,
  });
  const router = useRouter();
  const handleProduct = (productId) => {
    router.push(`/product/${productId}`);
  };

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/product");
      setState({
        ...state,
        products: response.data.data,
      });
    } catch (err) {}
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Box marginY={4}>
        <Box marginLeft={"1rem"} marginBottom={"1rem"}>
          <Typography>
            <FiberManualRecordIcon fontSize="small" />
            ЭРЭЛТТЭЙ БАРАА
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} borderRadius={"2rem"}>
            <Box>
              <img
                src="https://api.hitech.mn/uploads/images/2022/12/25/1-1671945082952690867-524X524.gif"
                alt="{main image}"
                style={{
                  width: "75%",
                  height: "32rem",
                  borderRadius: "1.5rem",
                  marginLeft: "4rem",
                }}
              />
            </Box>
          </Grid>
          <Grid
            container
            spacing={2}
            item
            xs={12}
            md={8}
            justifyContent={"space-between"}
            //@TODO
          >
            {state.products &&
              state.products[0] &&
              state.products.map((item, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    xs={2}
                    sm={4}
                    md={5.5}
                    sx={{
                      borderRadius: "0.5rem",
                      bgcolor: "#ffffff",
                      marginTop: "1rem",
                      marginRight: "2.3rem",
                      cursor: "pointer",
                    }}
                    borderRadius={"2rem"}
                    onClick={() => handleProduct(item._id)}
                    // bgcolor={"#ebedf0"}
                  >
                    <Box>
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
                        <Typography>{item.description}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Box, Button, Checkbox, Grid, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import GridViewIcon from "@mui/icons-material/GridView";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState } from "react";
export default function FilteredProducts({ product }) {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "black" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.2),
    textAlign: "start",
    width: "7rem",
    margin: "1rem, 0",
    color: theme.palette.text.secondary,
  }));
  const data = [...Array(25).keys()].map((i) => i + 1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          top: "2rem",
          Trim: "90rem",
          justifyContent: "flex-start",
          flexDirection: "row",
        }}
      >
        <Button>
          <GridViewIcon color="primary"></GridViewIcon>
        </Button>
        <Button>
          <FormatListBulletedIcon color="primary"></FormatListBulletedIcon>
        </Button>

        <Typography
          sx={{ fontsize: ".5rem", color: "gray", marginLeft: "0.5rem" }}
        >
          Бэлэн .... бараа байна{" "}
        </Typography>
        <typography>ss {product.name}</typography>
      </Box>
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
      <Box>
        <Grid
          container
          spacing={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"1rem"}
        >
          {Array.from(Array(16)).map((_, index) => (
            <Grid item xs={12} sm={2} md={3} lg={2.5} key={index}>
              <Box sx={{ display: "flex", justifyConten: "center" }}>
                <Card>
                  <CardContent>
                    <Button
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      variant="outlined"
                    >
                      шинэ
                    </Button>
                    <img
                      src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fapi.hitech.mn%2Fuploads%2Fimages%2F2023%2F8%2F1%2F1-1690872502046385648-thumbnail.jpg&w=1920&q=75"
                      alt="{main image}"
                      width={"170px"}
                      height={"170px"}
                    />
                    <Typography variant="body2" component="p" fontWeight="bold">
                      MSI - MAG B760M MORTAR WIFI DDR5
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      marginTop={"0.4rem"}
                    >
                      650,000₮
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                      }}
                      color={""}
                    >
                      <Button sx={{}}>
                        {" "}
                        <Box
                          sx={{
                            bgcolor: "#fe5900",
                            margin: "1",
                            borderRadius: "5rem",
                            padding: "0.4rem",
                          }}
                        >
                          <Box display={"flex"} flexDirection="row">
                            <ShoppingBagIcon
                              sx={{ color: "#fffcfa" }}
                              width="20"
                              height="12"
                              size="small"
                              flexDirection="row"
                            ></ShoppingBagIcon>
                            <Typography
                              flexDirection="row"
                              fontSize={".6rem"}
                              fontWeight={"bold"}
                              marginTop={".4rem"}
                              sx={{
                                color: "white",
                                alignItems: "center",
                                flexDirection: "row",
                                top: ".2rem",
                              }}
                            >
                              сагсанд хийх
                            </Typography>
                          </Box>
                        </Box>
                      </Button>
                      <IconButton
                        aria-label="FavoriteBorderIcon"
                        disabled
                        color="primary"
                      >
                        <FavoriteBorderIcon
                          sx={{ ":lefth": "2rem" }}
                          color={"primary"}
                        ></FavoriteBorderIcon>
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={totalPages} // Total number of pages
          page={currentPage} // Current page
          onChange={handlePageChange} // Callback function for page change
          variant="outlined"
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        />
      </Box>
    </>
  );
}

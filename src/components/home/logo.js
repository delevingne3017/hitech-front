"use client";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
export default function Logo() {
    const [state, setState] = useState({
        seeMoreClicked: true,
        brandLength: 84,
      });
  return (
    <>
    
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"2.5rem"}
        marginLeft={"3rem"}
        marginRight={"3rem"}
        marginTop={"3rem"}
      >
        {Array.from(Array(state.brandLength))
          .slice(
            0,
            state.seeMoreClicked ? state.brandLength / 3 - 1 : state.brandLength
          )
          .map((_, index) => (
            <img
              src="https://api.hitech.mn/uploads/images/2020/12/26/amd.png"
              alt="{main image}"
              style={{
                height: "6rem",
                width: "6rem",
                cursor: "pointer",
              }}
            />
          ))}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Box>
          <Button
            onClick={() => {
              setState({
                ...state,
                seeMoreClicked: !state.seeMoreClicked,
              });
            }}
            variant="contained"
            color="primary"
          >
            {state.seeMoreClicked ? (
              
              <KeyboardDoubleArrowDownIcon/>
            ) : (
                <KeyboardDoubleArrowUpIcon/>
            )}
          </Button>
        </Box>
      </Box>
    </>
  );
}

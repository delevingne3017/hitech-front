import { Button, Box } from "@mui/material";
import React from "react";
import { useState } from "react";



const ReadMore = ({ children, limit }) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const text = children;

  const toggleBtn = () => {
    setReadMoreShown(prevState => !prevState)
  }
  return (
    <Box>
      {isReadMoreShown ? text : children.substr(0, limit)}
      <Button onClick={toggleBtn} variant="outlined" color="error">
        {isReadMoreShown ? 'Read Less' : '...Read More'}
      </Button>
    </Box>
  );
};

export default ReadMore;

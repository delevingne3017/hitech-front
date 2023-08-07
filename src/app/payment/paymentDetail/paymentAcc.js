"use client";

import styled from "@emotion/styled";
import { Box, Grid, Hidden, Typography } from "@mui/material";

const CircleNumber = styled(Box)(({ theme }) => ({
  margin: "1rem",
  display: "flex",
  width: "2rem",
  height: "2rem",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "100%",
  justifyContent: "center",
  alignItems: "center",
}));
const PaymentMethod = () => {
  const accounts = [
    {
      img: "data:image/png;base64,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",
      name: "Хаан банк ",
      accName: "Ганзориг",
      accountNUmber: "5700 784 775",
    },
    {
      img: "data:image/png;base64,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",
      name: "Голомт банк  ",
      accName: "Ганзориг",
      accountNUmber: "1165 113 800",
    },
  ];
  return (
    <Box
      borderRadius=".5rem"
      boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
      margin={{
        xs: "2rem 0 0 0 ",
        md: "1rem",
        md: "1rem 6rem 0 6rem",
        lg: "1rem 6rem 0 6rem",
      }}
    >
      <Box display="flex" alignItems="center">
        <CircleNumber>
          <Typography color="white">2</Typography>
        </CircleNumber>
        <Typography>Хэрхэн төлбөрөө хийх вэ?</Typography>
      </Box>

      {accounts.map((items) => (
        <Box
          display="flex"
          flexDirection="row"
          margin="1rem 0 1rem 3rem"
          alignItems="center"
          paddingBottom="1rem"
          flexWrap="wrap"
        >
          <img src={items.img} width="40px" height="40px" alt=" logo" />
          <Typography marginLeft="1rem" fontWeight="bold" width="7rem">
            {items.name}
          </Typography>
          <Hidden smDown={true}>
            <Box
              height="3rem"
              marginLeft="2rem"
              sx={{ border: "1px solid " }}
            />
          </Hidden>
          <Box
            display="flex"
            flexDirection="column"
            marginLeft="3rem"
            margin={{ xs: "1rem" }}
          >
            <Typography>Хүлээн авагчийн нэр: {items.accName}</Typography>
            <Typography>Дансны дугаар: {items.accountNUmber}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default PaymentMethod;

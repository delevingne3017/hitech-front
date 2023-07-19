"use client";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function payment() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Box
            margin="3rem 6rem 1rem 6rem"
            height="5rem"
            border="1px solid"
          ></Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={8}>
          <Box
            margin="1rem 6rem 0 6rem"
            height="12rem"
            borderRadius=".5rem"
            boxShadow="0 .1rem .1rem 0"
          >
            <Box display="flex" alignItems="center">
              <Box
                margin="1rem"
                display="flex"
                width="2rem"
                height="2rem"
                backgroundColor="red"
                borderRadius="100%"
                justifyContent="center"
                alignItems="center"
              >
                <Typography color="white">1</Typography>
              </Box>
              <Typography>Мэдээлэл оруулах</Typography>
            </Box>
            <Box margin="1rem">
              <FormControl sx={{ width: "24rem" }}>
                <Typography>Утасны дугаар</Typography>
                <TextField variant="outlined">duagaar</TextField>
              </FormControl>
              <FormControl sx={{ width: "24rem", marginLeft: "1rem" }}>
                <Typography>Тэмдэглэл</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Оройн цагаар хүргүүлмээр байна гэх мэт..."
                />
              </FormControl>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box margin="1rem 6rem 0 0">
            <Box display="flex" margin=".5rem">
              <Typography>Барааны үнэ:</Typography>
              <Typography textAlign="right">une</Typography>
            </Box>
            <Divider />
            <Box display="flex" margin=".5rem">
              <Typography>Хүргэлт:</Typography>
              <Typography textAlign="right">0</Typography>
            </Box>
            <Divider />
            <Box display="flex" margin=".5rem">
              <Typography>Нийт:</Typography>
              <Typography textAlign="right">0</Typography>
            </Box>
            <Typography>Дээрх үнэд НӨАТ ороогүй болно.</Typography>
            <Button fullWidth color="primary" variant="contained">
              Үргэлжлүүлэх
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={8}>
          <Box
            margin="1rem 6rem 0 6rem"
            height="12rem"
            borderRadius=".5rem"
            boxShadow="0 .1rem .1rem 0"
          >
            <Box display="flex" alignItems="center">
              <Box
                margin="1rem"
                display="flex"
                width="2rem"
                height="2rem"
                backgroundColor="red"
                borderRadius="100%"
                justifyContent="center"
                alignItems="center"
              >
                <Typography color="white">2</Typography>
              </Box>
              <Typography>Хүргэлтийн хаяг</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

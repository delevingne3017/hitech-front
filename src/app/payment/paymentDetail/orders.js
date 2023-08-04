import useSettings from "@/hooks/useSettings";
import { Box, Divider, Grid, Typography } from "@mui/material";

const OrderShow = (props) => {
  const { settings } = useSettings();

  return (
    <Grid xs={12}>
      <Box
        borderRadius=".5rem"
        boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
        margin={{ xs: 0, sm: "1rem 6rem 1rem 6rem", lg: "1rem 6rem 1rem 0" }}
      >
        <Typography
          textAlign="center"
          color="#FE5900"
          fontWeight="bold"
          paddingTop="1rem"
        >
          Таны захиалга
        </Typography>
        {settings.cart &&
          settings.cart.map((item) => (
            <Box>
              <Box
                display="flex"
                flexDirection="row"
                margin="1rem"
                alignItems="center"
              >
                <img
                  src="https://api.hitech.mn/uploads/images/2023/7/5/5-1688546419223128466-full.jpg"
                  width="20%"
                  height="20%"
                />
                <Box display="flex" flexDirection="column" marginLeft="1rem">
                  <Typography marginBottom="1rem">{item.name}</Typography>
                  <Typography textAlign="right">
                    {item.price}₮ x {item.quantity} ширхэг
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Box>
          ))}
        <Box>
          <Box margin="1rem" color="#FE5900">
            <Box display="flex" margin=".5rem">
              <Typography>Хүргэлт</Typography>
              <Typography textAlign="right">0</Typography>
            </Box>
            <Divider />
            <Box display="flex" margin=".5rem" paddingBottom="1rem">
              <Typography>Нийт</Typography>
              <Typography textAlign="right">
                {settings.cart &&
                  settings.cart.reduce(
                    (sum, curr) => sum + curr.quantity * curr.price,
                    0
                  )}
                ₮
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
export default OrderShow;

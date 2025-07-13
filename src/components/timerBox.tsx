import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface TimerBoxProps {
  time: string;
  timeUnit: string;
}

export default function TimerBox({ time, timeUnit }: TimerBoxProps) {
  return (
    <Box
      sx={{
        padding: { xs: 1, sm: 2, md: 3 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        component="div"
        color="white"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
        }}
      >
        {time}
      </Typography>
      <Typography
        variant="subtitle2"
        component="div"
        color="white"
        sx={{ fontWeight: "medium", lineHeight: 1, minWidth: "60px" }}
      >
        {timeUnit}
      </Typography>
    </Box>
  );
}

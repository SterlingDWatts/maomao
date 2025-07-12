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
        padding: 1,
        textAlign: "center",
        backgroundColor: "rgba(139, 139, 139, 0.3)",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        component="div"
        color="white"
        sx={{ fontWeight: "bold" }}
      >
        {time}
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        color="white"
        sx={{ fontWeight: "medium", lineHeight: 1, minWidth: "60px" }}
      >
        {timeUnit}
      </Typography>
    </Box>
  );
}

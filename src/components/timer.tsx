import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimerBox from "./timerBox";

import { getTimeUntil } from "../app/utils";

interface TimerBoxProps {
  distance: number;
  estimate?: boolean;
}

export default function Timer({ distance, estimate = false }: TimerBoxProps) {
  const { days, hours, minutes, seconds } = getTimeUntil(distance);

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 2,
        padding: { xs: 1, sm: 2, md: 3 },
      }}
    >
      {estimate && (
        <Typography
          variant="subtitle1"
          component="div"
          color="white"
          sx={{
            fontWeight: "bold",
            lineHeight: 1,
            minWidth: "60px",
            textAlign: "center",
          }}
        >
          ESTIMATED
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          gap: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <TimerBox time={days} timeUnit={"days"} />
        {!estimate && (
          <>
            <TimerBox time={hours} timeUnit={"hours"} />
            <TimerBox time={minutes} timeUnit={"minutes"} />
            <TimerBox time={seconds} timeUnit={"seconds"} />
          </>
        )}
      </Box>
    </Box>
  );
}

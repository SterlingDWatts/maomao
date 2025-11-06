"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ThemeProvider } from "@mui/material/styles";

import DrawerAppBar from "../components/appBarWithResponsiveMenu";
import TallTimerCard from "../components/tallTimerCard";

import { upNext, backlog, availableNow } from "./showsAndMovies";

import { theme } from "./theme";

export default function Page() {
  React.useEffect(() => {
    function inactivityTime() {
      let timer: string | number | NodeJS.Timeout | undefined;
      const timeLimit = 6 * 60 * 60 * 1000;

      function timerElapsed() {
        console.log("Inactivity period reached. Triggering refresh."); // todo remove later
        window.location.reload();
      }

      function timerReset() {
        console.log("User activity detected. Resetting timer."); // todo remove later
        clearTimeout(timer);
        timer = setTimeout(timerElapsed, timeLimit);
      }

      window.onload = timerReset;
      document.onkeypress = timerReset;
      document.onmousemove = timerReset;
      document.onmousedown = timerReset;
      document.ontouchstart = timerReset;
      document.onclick = timerReset;
      document.onscroll = timerReset;
    }

    inactivityTime();
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          disableGutters
          maxWidth={false}
          sx={{ backgroundColor: "primary.light" }}
        >
          <Box id="back-to-top-anchor"> </Box>
          <Container
            maxWidth="lg"
            sx={{
              paddingTop: { xs: "56px", sm: "64px" },
              paddingBottom: { xs: 1, sm: 3 },
              paddingLeft: { xs: 1, sm: 3 },
              paddingRight: { xs: 1, sm: 3 },
              overflowX: "hidden",
            }}
          >
            <DrawerAppBar />

            <Stack spacing={2} sx={{ marginTop: 2 }}>
              <Stack position="relative">
                <Typography
                  variant="h6"
                  component="div"
                  color="secondary.light"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Featured
                </Typography>
                {[upNext[0]].map(({ TimerCard, ...props }, i) => (
                  <TimerCard key={i} {...{ TimerCard, ...props }} />
                ))}
              </Stack>
              <Stack
                direction="row"
                spacing={4.5}
                sx={{
                  overflowX: "auto",
                  overflowY: "visible",
                  flexWrap: "nowrap",
                  position: "relative",
                  width: { xs: "100vw", sm: "initial" },
                  "&.MuiStack-root": {
                    marginLeft: { xs: -1, sm: 0 },
                  },
                  paddingLeft: { xs: 1, sm: 0 },
                  paddingRight: { xs: 1, sm: 0 },
                  paddingBottom: { xs: 0.5, sm: 0 },
                  marginBottom: { xs: -0.5, sm: 0 },
                  scrollbarWidth: { xs: "none", sm: "thin" },
                  msOverflowStyle: { xs: "none", sm: "scrollbar" },
                  "&::-webkit-scrollbar": {
                    display: { xs: "none", sm: "initial" },
                  },
                }}
              >
                <Stack position="relative">
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                      position: "sticky",
                      left: 0,
                      width: "fit-content",
                      backgroundColor: "primary.light",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="secondary.light"
                      component="span"
                      sx={{ fontWeight: 900 }}
                    >
                      I{" ‎‎ "}
                    </Typography>
                    Next Episode or Movie
                  </Typography>
                  <Stack direction="row" spacing={1.5}>
                    {availableNow.map((props, i) => (
                      <TallTimerCard key={i} {...props} />
                    ))}
                  </Stack>
                </Stack>
                <Stack>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                      position: "sticky",
                      left: 0,
                      width: "fit-content",
                      backgroundColor: "primary.light",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="secondary.light"
                      component="span"
                      sx={{ fontWeight: 900 }}
                    >
                      I{" ‎‎ "}
                    </Typography>
                    Backlog
                  </Typography>
                  <Stack direction="row" spacing={1.5} sx={{ height: "100%" }}>
                    {backlog.map((props, i) => (
                      <TallTimerCard key={i} {...props} />
                    ))}
                  </Stack>
                </Stack>
              </Stack>

              <Stack>
                <Typography
                  variant="h6"
                  component="div"
                  color="secondary.light"
                  sx={{ fontWeight: "bold" }}
                >
                  Coming Soon
                </Typography>
                <Stack spacing={2}>
                  {upNext.slice(1).map(({ TimerCard, ...props }, i) => (
                    <TimerCard key={i} {...{ TimerCard, ...props }} />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

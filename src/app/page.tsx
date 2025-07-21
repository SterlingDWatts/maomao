"use client";

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ThemeProvider } from "@mui/material/styles";

import DrawerAppBar from "../components/appBarWithResponsiveMenu";
import TallTimerCard from "../components/tallTimerCard";

import { upNext, availableNow } from "./showsAndMovies";

import { theme } from "./theme";

export default function Page() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          disableGutters
          maxWidth={false}
          sx={{ backgroundColor: "primary.light" }}
        >
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
              <Stack>
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
              <Stack>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  <Typography
                    variant="h6"
                    color="tertiary.main"
                    component="span"
                    sx={{ fontWeight: 900 }}
                  >
                    |{" ‎‎ "}
                  </Typography>
                  Next Episode or Movie
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    overflowX: "auto",
                    overflowY: "visible",
                    flexWrap: "nowrap",
                    position: "relative",
                    width: { xs: "100vw", sm: "initial" },
                    marginLeft: { xs: -1, sm: 0 },
                    paddingLeft: { xs: 1, sm: 0 },
                    paddingRight: { xs: 1, sm: 0 },
                    paddingBottom: { xs: 1, sm: 0 },
                  }}
                >
                  {availableNow.map((props, i) => (
                    <TallTimerCard key={i} {...props} />
                  ))}
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

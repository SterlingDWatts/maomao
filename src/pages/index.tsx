"use client";

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import DrawerAppBar from "../components/appBarWithResponsiveMenu";
import TallTimerCard from "@/components/tallTimerCard";

import { upNext, availableNow } from "../app/showsAndMovies";

export default function Page() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundColor: "primary.light",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            paddingTop: { xs: "56px", sm: "64px" },
            paddingBottom: { xs: 1, sm: 3 },
            paddingLeft: { xs: 1, sm: 3 },
            paddingRight: { xs: 1, sm: 3 },
            backgroundColor: "primary.light",
            overflowX: "hidden",
          }}
        >
          <DrawerAppBar />

          <Stack spacing={2} sx={{ marginTop: 2 }}>
            <Stack>
              <Typography
                variant="h6"
                component="div"
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
                sx={{ fontWeight: "bold" }}
              >
                Next Episode or Movie
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  overflowX: "auto",
                  flexWrap: "nowrap",
                  position: "relative",
                  width: { xs: "100vw", sm: "initial" },
                  marginLeft: { xs: -1, sm: 0 },
                  paddingLeft: { xs: 1, sm: 0 },
                  paddingRight: { xs: 1, sm: 0 },
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
    </React.Fragment>
  );
}

"use client";

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import DrawerAppBar from "../components/appBarWithResponsiveMenu";
import TimerCard from "../components/timerCard";

import showsAndMovies from "../app/showsAndMovies";

export default function Page() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: { xs: "56px", sm: "64px" },
          paddingLeft: { xs: 0, sm: 3 },
          paddingRight: { xs: 0, sm: 3 },
        }}
      >
        <DrawerAppBar />

        <Stack spacing={2}>
          {showsAndMovies.map((props, i) => (
            <TimerCard key={i} {...props} />
          ))}
        </Stack>
      </Container>
    </React.Fragment>
  );
}

"use client";

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import DrawerAppBar from "../components/appBarWithResponsiveMenu";
import LargeTimerCard from "../components/largeTimerCard";
import SmallTimerCard from "../components/smallTimerCard";
import TallTimerCard from "@/components/tallTimerCard";

import { firstUpNext, secondUpNext } from "../app/showsAndMovies";

export default function Page() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: { xs: "56px", sm: "64px" },
          paddingLeft: { xs: 1, sm: 3 },
          paddingRight: { xs: 1, sm: 3 },
        }}
      >
        <DrawerAppBar />

        <Stack spacing={2} sx={{ marginTop: 2 }}>
          {[firstUpNext[0]].map((props, i) => (
            <LargeTimerCard key={i} {...props} />
          ))}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              overflowX: "auto",
              flexWrap: "nowrap",
            }}
          >
            {firstUpNext.slice(1, 4).map((props, i) => (
              <TallTimerCard key={i} {...props} />
            ))}
            {secondUpNext.map((props, i) => (
              <TallTimerCard key={i} {...props} />
            ))}
          </Stack>
          {[firstUpNext[4]].map((props, i) => (
            <LargeTimerCard key={i} {...props} />
          ))}
          {firstUpNext.slice(5, 7).map((props, i) => (
            <SmallTimerCard key={i} {...props} />
          ))}
          {[firstUpNext[7]].map((props, i) => (
            <LargeTimerCard key={i} {...props} />
          ))}
          {firstUpNext.slice(8, 10).map((props, i) => (
            <SmallTimerCard key={i} {...props} />
          ))}

          {[firstUpNext[10]].map((props, i) => (
            <LargeTimerCard key={i} {...props} />
          ))}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              overflowX: "auto",
              flexWrap: "nowrap",
            }}
          >
            {firstUpNext.slice(11, 19).map((props, i) => (
              <TallTimerCard key={i} {...props} />
            ))}
          </Stack>
          {[firstUpNext[19]].map((props, i) => (
            <LargeTimerCard key={i} {...props} />
          ))}

          <Stack
            direction="row"
            spacing={2}
            sx={{
              overflowX: "auto",
              flexWrap: "nowrap",
            }}
          >
            {firstUpNext.slice(20, 28).map((props, i) => (
              <TallTimerCard key={i} {...props} />
            ))}
          </Stack>
          {firstUpNext.slice(28).map((props, i) => (
            <LargeTimerCard key={i} {...props} />
          ))}
        </Stack>
      </Container>
    </React.Fragment>
  );
}

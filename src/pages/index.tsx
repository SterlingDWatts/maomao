"use client";

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import DrawerAppBar from "../components/appBarWithResponsiveMenu";
import LargeTimerCard from "../components/largeTimerCard";
import SmallTimerCard from "../components/smallTimerCard";

import { firstUpNext } from "../app/showsAndMovies";

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
          {/* <Stack
            direction="row"
            spacing={2}
            sx={{
              overflowX: "auto",
              flexWrap: "nowrap",
            }}
          >
            <Box
              height={365}
              width={300}
              sx={{ backgroundColor: "grey.300", flex: "0 0 auto" }}
            ></Box>
            <Box
              height={365}
              width={300}
              sx={{ backgroundColor: "grey.300", flex: "0 0 auto" }}
            ></Box>
            <Box
              height={365}
              width={300}
              sx={{ backgroundColor: "grey.300", flex: "0 0 auto" }}
            ></Box>
          </Stack> */}
          {[firstUpNext[2]].map((props, i) => (
            <LargeTimerCard key={i} {...props} />
          ))}
          {firstUpNext.slice(0, 2).map((props, i) => (
            <SmallTimerCard key={i} {...props} />
          ))}
          {firstUpNext.slice(3).map((props, i) => (
            <SmallTimerCard key={i} {...props} />
          ))}
        </Stack>
      </Container>
    </React.Fragment>
  );
}

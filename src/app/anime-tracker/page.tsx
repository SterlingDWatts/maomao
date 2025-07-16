"use client";

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

import DrawerAppBar from "../../components/appBarWithResponsiveMenu";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFDE03",
      light: "#FCF267",
      dark: "#FFAB00",
      darker: "#FF7F00",
      lighter: "#FDF795",
    },
    secondary: {
      main: "#0336FF",
      light: "#5954FF",
      dark: "#0026EB",
      darker: "#001BE6",
      lighter: "#8173FF",
    },
    tertiary: {
      main: "#FF0266",
      light: "#FF6297",
      dark: "#C2005D",
      darker: "#9E0057",
      lighter: "#FFBCD3",
      contrastText: "#000",
    },
  },
} as Omit<ThemeOptions, "components">);

export default function AnimeTrackerPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
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

            <Stack spacing={3} sx={{ marginTop: 2 }}>
              <Typography
                variant="h4"
                component="h1"
                color="secondary.main"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Anime Tracker
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 3,
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    backgroundColor: "white",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h2"
                    color="tertiary.main"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    Currently Watching
                  </Typography>
                  <Typography color="text.secondary">
                    Track your ongoing anime series here. Add episodes you're
                    watching and keep track of your progress.
                  </Typography>
                </Paper>

                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    backgroundColor: "white",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h2"
                    color="secondary.main"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    Plan to Watch
                  </Typography>
                  <Typography color="text.secondary">
                    Keep a list of anime you want to watch in the future. Never
                    forget about that series you heard about!
                  </Typography>
                </Paper>

                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    backgroundColor: "white",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h2"
                    color="tertiary.main"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    Completed
                  </Typography>
                  <Typography color="text.secondary">
                    Archive of all the anime you've finished watching. Rate and
                    review your completed series.
                  </Typography>
                </Paper>

                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    backgroundColor: "white",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h2"
                    color="secondary.main"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    Statistics
                  </Typography>
                  <Typography color="text.secondary">
                    View your anime watching statistics, including total
                    episodes watched, favorite genres, and more.
                  </Typography>
                </Paper>
              </Box>

              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  backgroundColor: "primary.lighter",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  color="secondary.dark"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  Coming Soon!
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: "1.1rem" }}>
                  The Anime Tracker is currently under development. Soon you'll
                  be able to manage your anime watchlist, track your progress,
                  and discover new series to enjoy!
                </Typography>
              </Paper>
            </Stack>
          </Container>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

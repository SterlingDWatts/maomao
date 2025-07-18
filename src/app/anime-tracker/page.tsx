"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { animeList } from "../nextAnime";

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

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
      color: "black",
    }}
  >
    •
  </Box>
);

export default function AnimeTrackerPage() {
  const [sortBy, setSortBy] = React.useState<
    "title" | "year" | "rating" | "rank" | "popularity"
  >("rank");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
    "asc",
  );

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return Math.floor(num / 1000000) + "MIL";
    } else if (num >= 1000) {
      return Math.floor(num / 1000) + "k";
    }
    return num.toString();
  };

  const sortedAnimeList = React.useMemo(() => {
    return [...animeList].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case "title":
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case "year":
          aValue = a.year;
          bValue = b.year;
          break;
        case "rating":
          aValue = a.rating;
          bValue = b.rating;
          break;
        case "rank":
          aValue = a.rank;
          bValue = b.rank;
          break;
        case "popularity":
          aValue = a.popularity;
          bValue = b.popularity;
          break;
        default:
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        if (sortDirection === "asc") {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      } else {
        if (sortDirection === "asc") {
          return (aValue as number) - (bValue as number);
        } else {
          return (bValue as number) - (aValue as number);
        }
      }
    });
  }, [sortBy, sortDirection]);

  const handleSortChange = (event: any) => {
    setSortBy(event.target.value);
  };

  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          disableGutters
          maxWidth={false}
          sx={{ backgroundColor: "tertiary.main", minHeight: "100vh" }}
        >
          <Container
            maxWidth="lg"
            sx={{
              paddingTop: { xs: "56px", sm: "64px" },
              paddingBottom: { xs: 1, sm: 3 },
              paddingLeft: { xs: 0, sm: 3 },
              paddingRight: { xs: 0, sm: 3 },
              overflowX: "hidden",
            }}
          >
            <DrawerAppBar backgroundColor="tertiary.dark" color="white" />

            <Box
              sx={{
                mb: 3,
                display: "flex",
                gap: 2,
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: 2,
                paddingLeft: { xs: 1, sm: 0 },
                paddingRight: { xs: 1, sm: 0 },
              }}
            >
              <FormControl
                size="small"
                sx={{
                  minWidth: 110,
                }}
                variant="standard"
                color="primary"
              >
                <InputLabel
                  id="sort-select-label"
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  Sort By
                </InputLabel>
                <Select
                  labelId="sort-select-label"
                  value={sortBy}
                  label="Sort By"
                  onChange={handleSortChange}
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "tertiary.main",
                      color: "black",
                    },
                  }}
                >
                  <MenuItem value="title">Title</MenuItem>
                  <MenuItem value="year">Year</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                  <MenuItem value="rank">Rank</MenuItem>
                  <MenuItem value="popularity">Popularity</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="text"
                color="primary"
                size="medium"
                onClick={toggleSortDirection}
                startIcon={
                  sortDirection === "asc" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  )
                }
                sx={{
                  "&:hover": { backgroundColor: "tertiary.main" },
                }}
              ></Button>
            </Box>

            <Stack>
              {sortedAnimeList.map((anime) => (
                <Card
                  key={anime.title}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "rgb(0, 0, 0, 0)",
                  }}
                >
                  {anime.maomaoRecommendation && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -4,
                        right: -45,
                        backgroundColor: "tertiary.lighter",
                        color: "black",
                        padding: "0px 40px 0px 120px",
                        fontSize: "0.7rem",
                        fontWeight: "bold",
                        textAlign: "center",
                        transform: "rotate(15deg)",
                        transformOrigin: "center",
                        zIndex: 10,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        borderRadius: "2px",
                      }}
                    >
                      maomao recom
                    </Box>
                  )}
                  <CardContent>
                    <Typography
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 14,
                        "& sup": { fontSize: 8 },
                      }}
                    >
                      {anime.year} {bull} {anime.episodes}
                      <sup> episodes</sup>
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {anime.title}
                    </Typography>
                    <Stack
                      direction="row"
                      gap={2}
                      sx={{ lineHeight: "1.1", mb: 1 }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: 14,
                          "& sup": { fontSize: 8 },
                        }}
                      >
                        {anime.rating}
                        <sup> {formatNumber(anime.ratingOutOf)}</sup>
                      </Typography>
                      {bull}
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: 14,
                          "& sup": { fontSize: 8 },
                        }}
                      >
                        #{anime.rank}
                        <sup> RANK</sup>
                      </Typography>
                      {bull}
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: 14,
                          "& sup": { fontSize: 8 },
                        }}
                      >
                        #{anime.popularity}
                        <sup> POPULARITY</sup>
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      sx={{
                        overflowX: "auto",
                        overflowY: "visible",
                        flexWrap: { xs: "nowrap", sm: "wrap" },
                        width: { xs: "100vw", sm: "auto" },
                        marginLeft: { xs: -2, sm: 0 },
                        paddingLeft: { xs: 2, sm: 0 },
                        paddingRight: { xs: 2, sm: 0 },
                        paddingBottom: { xs: 0.5, sm: 0 },
                      }}
                    >
                      {anime.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          color="primary"
                          sx={{ fontSize: "0.75rem" }}
                        />
                      ))}
                    </Stack>
                    {anime.shortDescription && (
                      <Typography
                        variant="body2"
                        mt={1}
                        sx={{ color: "black", fontWeight: "bold" }}
                      >
                        {anime.shortDescription}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Container>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

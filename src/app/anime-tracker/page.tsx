"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";

import { ThemeProvider } from "@mui/material/styles";

import DrawerAppBar from "../../components/appBarWithResponsiveMenu";
import AnimeCard from "../../components/animeCard";

import Placeholder from "../assets/placeholder.jpg";

import { theme } from "../theme";
import { animeList } from "../nextAnime";
import { abbreviateNumber } from "../utils";

export default function AnimeTrackerPage() {
  const [sortBy, setSortBy] = React.useState<
    "title" | "year" | "rating" | "rank" | "popularity" | ""
  >("");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
    "asc",
  );
  const [filterBy, setFilterBy] = React.useState<
    "all" | "maomao" | "dawn" | "sterling" | "neither" | ""
  >("");

  const sortedAnimeList = React.useMemo(() => {
    // First filter the anime list
    const filteredList = animeList.filter((anime) => {
      switch (filterBy) {
        case "maomao":
          return anime.isMaomaoRecommendation === true;
        case "dawn":
          return anime.hasDawnSeen === true;
        case "sterling":
          return anime.hasSterlingSeen === true;
        case "neither":
          return anime.hasDawnSeen !== true && anime.hasSterlingSeen !== true;
        case "all":
        default:
          return true;
      }
    });

    // Then sort the filtered list
    return [...filteredList].sort((a, b) => {
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
          aValue = a.rank;
          bValue = b.rank;
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
  }, [sortBy, sortDirection, filterBy]);

  const handleSortChange = (event: any) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setFilterBy(event.target.value);
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
                alignItems: "end",
                flexWrap: "wrap",
                marginTop: 2,
                paddingLeft: { xs: 1, sm: 0 },
                paddingRight: { xs: 1, sm: 0 },
              }}
            >
              <FormControl
                size="small"
                sx={{
                  minWidth: 112,
                }}
                variant="standard"
                color="primary"
              >
                <InputLabel id="anime-tracker-sort-select">Sort By</InputLabel>
                <Select
                  labelId="sort-select-label"
                  value={sortBy}
                  label="Sort By"
                  onChange={handleSortChange}
                  id="anime-tracker-sort-select"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        size="medium"
                        onClick={toggleSortDirection}
                        sx={{ padding: 0 }}
                      >
                        {sortDirection === "asc" ? (
                          <ArrowUpwardIcon />
                        ) : (
                          <ArrowDownwardIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "tertiary.main",
                      color: "black",
                    },
                    "& .MuiSvgIcon-root.MuiSelect-icon": {
                      display: "none",
                    },
                    "& div#anime-tracker-sort-select ": { paddingRight: 0 },
                  }}
                >
                  <MenuItem value="title">Title</MenuItem>
                  <MenuItem value="year">Year</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                  <MenuItem value="rank">Rank</MenuItem>
                  <MenuItem value="popularity">Popularity</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                size="small"
                sx={{
                  minWidth: 177,
                  ml: 2,
                }}
                variant="standard"
                color="primary"
              >
                <InputLabel id="anime-tracker-filter-select">
                  Filter By
                </InputLabel>
                <Select
                  labelId="filter-select-label"
                  value={filterBy}
                  label="Filter By"
                  onChange={handleFilterChange}
                  id="anime-tracker-filter-select"
                  endAdornment={
                    <InputAdornment position="end">
                      <FilterListIcon color="primary" />
                    </InputAdornment>
                  }
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "tertiary.main",
                      color: "black",
                    },
                    "& .MuiSvgIcon-root.MuiSelect-icon": {
                      display: "none",
                    },
                    "& div#anime-tracker-filter-select ": { paddingRight: 0 },
                  }}
                >
                  <MenuItem value="all">All Anime</MenuItem>
                  <MenuItem value="maomao">Maomao Recommends</MenuItem>
                  <MenuItem value="dawn">Dawn Has Watched</MenuItem>
                  <MenuItem value="sterling">Sterling Has Watched</MenuItem>
                  <MenuItem value="neither">Neither Have Watched</MenuItem>
                </Select>
              </FormControl>

              <Typography
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  fontSize: 14,
                  "& sup": { fontSize: 8 },
                }}
              >
                {sortedAnimeList.length} anime series
              </Typography>
            </Box>

            <Stack>
              {sortedAnimeList.map((anime) => (
                <AnimeCard key={anime.title} anime={anime} />
              ))}
            </Stack>
          </Container>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

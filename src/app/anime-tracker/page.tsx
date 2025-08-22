"use client";

import * as React from "react";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Box from "@mui/material/Box";
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
import CircularProgress from "@mui/material/CircularProgress";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";

import { ThemeProvider } from "@mui/material/styles";

import DrawerAppBar from "../../components/appBarWithResponsiveMenu";
import AnimeCard from "../../components/animeCard";

import { theme } from "../theme";
import { animeList } from "../nextAnime";

function AnimeTrackerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sortBy, setSortBy] = React.useState<
    "rank" | "rating" | "popularity" | "title" | "year" | "episodes" | ""
  >("rank");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
    "asc",
  );
  const [filterBy, setFilterBy] = React.useState<
    "all" | "maomao" | "dawn" | "sterling" | "neither" | ""
  >("all");
  const [filterByTag, setFilterByTag] = React.useState<string[]>([]);

  // Initialize and sync state from URL parameters
  React.useEffect(() => {
    const sort = searchParams.get("sort");
    const direction = searchParams.get("direction");
    const filter = searchParams.get("filter");
    const tags = searchParams.get("tags");

    // Set sort - default to "rank" if not present or invalid
    if (
      sort &&
      ["rank", "rating", "popularity", "title", "year", "episodes"].includes(
        sort,
      )
    ) {
      setSortBy(sort as typeof sortBy);
    } else {
      setSortBy("rank");
    }

    // Set direction - default to "asc" if not present or invalid
    if (direction && ["asc", "desc"].includes(direction)) {
      setSortDirection(direction as "asc" | "desc");
    } else {
      setSortDirection("asc");
    }

    // Set filter - default to "all" if not present or invalid
    if (
      filter &&
      ["all", "maomao", "dawn", "sterling", "neither"].includes(filter)
    ) {
      setFilterBy(filter as typeof filterBy);
    } else {
      setFilterBy("all");
    }

    // Set tags - default to empty array if not present
    if (tags) {
      const tagArray = tags.split(",").filter((tag) => tag.trim() !== "");
      setFilterByTag(tagArray);
    } else {
      setFilterByTag([]);
    }
  }, [searchParams]);

  // Update URL when state changes
  const updateURL = React.useCallback(
    (newParams: {
      sort?: string;
      direction?: string;
      filter?: string;
      tags?: string[];
    }) => {
      const params = new URLSearchParams(searchParams);

      if (newParams.sort !== undefined) {
        if (newParams.sort === "rank") {
          params.delete("sort");
        } else {
          params.set("sort", newParams.sort);
        }
      }

      if (newParams.direction !== undefined) {
        if (newParams.direction === "asc") {
          params.delete("direction");
        } else {
          params.set("direction", newParams.direction);
        }
      }

      if (newParams.filter !== undefined) {
        if (newParams.filter === "all") {
          params.delete("filter");
        } else {
          params.set("filter", newParams.filter);
        }
      }

      if (newParams.tags !== undefined) {
        if (newParams.tags.length === 0) {
          params.delete("tags");
        } else {
          params.set("tags", newParams.tags.join(","));
        }
      }

      const newURL = params.toString() ? `?${params.toString()}` : "";
      router.push(`/anime-tracker${newURL}`, { scroll: false });
    },
    [router, searchParams],
  );

  const sortedAnimeList = React.useMemo(() => {
    const filteredList = animeList.filter((anime) => {
      // Apply base filter
      let baseFilterPassed = false;
      switch (filterBy) {
        case "maomao":
          baseFilterPassed = anime.isMaomaoRecommendation === true;
          break;
        case "dawn":
          baseFilterPassed = anime.hasDawnSeen === true;
          break;
        case "sterling":
          baseFilterPassed = anime.hasSterlingSeen === true;
          break;
        case "neither":
          baseFilterPassed =
            anime.hasDawnSeen !== true && anime.hasSterlingSeen !== true;
          break;
        case "all":
        default:
          baseFilterPassed = true;
      }

      // Apply tag filter (intersection - anime must have ALL selected tags)
      const tagFilterPassed =
        filterByTag.length === 0 ||
        filterByTag.every((tag) => anime.tags.includes(tag));

      return baseFilterPassed && tagFilterPassed;
    });

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
        case "episodes":
          aValue = a.episodes;
          bValue = b.episodes;
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
  }, [sortBy, sortDirection, filterBy, filterByTag]);

  const handleSortChange = (event: any) => {
    const newSort = event.target.value;
    setSortBy((prevSortBy) => {
      let newDirection = sortDirection;
      if (
        (prevSortBy === "rating" && newSort !== "rating") ||
        (prevSortBy !== "rating" && newSort === "rating")
      ) {
        newDirection = sortDirection === "asc" ? "desc" : "asc";
        setSortDirection(newDirection);
      }

      updateURL({ sort: newSort, direction: newDirection });
      return newSort;
    });
  };

  const handleFilterChange = (event: any) => {
    const newFilter = event.target.value;
    setFilterBy(newFilter);
    updateURL({ filter: newFilter });
  };

  const handleTagSelect = (tag: string) => {
    setFilterByTag((prevTags) => {
      // Only add the tag if it's not already selected and is a valid string
      if (tag && typeof tag === "string" && !prevTags.includes(tag)) {
        const newTags = [...prevTags, tag];
        updateURL({ tags: newTags });
        return newTags;
      }
      return prevTags;
    });
  };

  const handleTagRemove = (tagToRemove: string) => {
    setFilterByTag((prevTags) => {
      const newTags = prevTags.filter((tag) => tag !== tagToRemove);
      updateURL({ tags: newTags });
      return newTags;
    });
  };

  const clearAllTags = () => {
    setFilterByTag([]);
    updateURL({ tags: [] });
  };

  const toggleSortDirection = () => {
    setSortDirection((prev) => {
      const newDirection = prev === "asc" ? "desc" : "asc";
      updateURL({ direction: newDirection });
      return newDirection;
    });
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          disableGutters
          maxWidth={false}
          sx={{ backgroundColor: "tertiary.light", minHeight: "100vh" }}
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
            <DrawerAppBar backgroundColor="tertiary.main" />

            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                flexWrap: "wrap",
                marginTop: 1,
                marginBottom: 1,
                rowGap: 1,
                columnGap: 2,
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
                  <MenuItem value="rank">Rank</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                  <MenuItem value="popularity">Popularity</MenuItem>
                  <MenuItem value="title">Title</MenuItem>
                  <MenuItem value="year">Year</MenuItem>
                  <MenuItem value="episodes">Episodes</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                size="small"
                sx={{
                  minWidth: 209,
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

              {filterByTag.length > 0 && (
                <>
                  {filterByTag.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      color="primary"
                      onDelete={() => handleTagRemove(tag)}
                      deleteIcon={<CloseIcon />}
                      sx={{
                        fontSize: "0.75rem",
                        "& .MuiChip-deleteIcon": {
                          fontSize: "1rem",
                        },
                      }}
                    />
                  ))}
                  <Chip
                    label="Clear all"
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={clearAllTags}
                    sx={{
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  />
                </>
              )}

              <Typography
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  fontSize: 14,
                  lineHeight: 1,
                  "& sup": { fontSize: 8 },
                }}
              >
                {sortedAnimeList.length} anime
              </Typography>
            </Box>

            <Stack spacing={2}>
              {sortedAnimeList.map((anime) => (
                <AnimeCard
                  key={anime.title}
                  anime={anime}
                  onTagClick={handleTagSelect}
                />
              ))}
            </Stack>
          </Container>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

function LoadingFallback() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        sx={{ backgroundColor: "tertiary.light", minHeight: "100vh" }}
      >
        <Container
          maxWidth="lg"
          sx={{
            paddingTop: { xs: "56px", sm: "64px" },
            paddingBottom: { xs: 1, sm: 3 },
            paddingLeft: { xs: 1, sm: 3 },
            paddingRight: { xs: 1, sm: 3 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <CircularProgress color="primary" size={60} />
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default function AnimeTrackerPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AnimeTrackerContent />
    </Suspense>
  );
}

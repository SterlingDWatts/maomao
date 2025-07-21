"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SortIcon from "@mui/icons-material/Sort";
import { ThemeProvider } from "@mui/material/styles";

import DrawerAppBar from "../../components/appBarWithResponsiveMenu";

import Placeholder from "../assets/placeholder.jpg";

import { theme } from "../theme";
import { animeList } from "../nextAnime";
import { abbreviateNumber } from "../utils";

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
                  minWidth: 90,
                }}
                variant="standard"
                color="primary"
              >
                <Select
                  labelId="sort-select-label"
                  value={sortBy}
                  label="Sort By"
                  onChange={handleSortChange}
                  endAdornment={<SortIcon />}
                  id="anime-tracker-sort-select"
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "tertiary.main",
                      color: "black",
                    },
                    "& .MuiSvgIcon-root": {
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

              <IconButton
                color="primary"
                size="medium"
                onClick={toggleSortDirection}
                sx={{
                  "&:hover": {
                    backgroundColor: "tertiary.main",
                  },
                }}
              >
                {sortDirection === "asc" ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )}
              </IconButton>

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

            <Stack
              sx={{
                "& .MuiCard-root:not(:first-child) > .MuiBox-root > .MuiCardContent-root":
                  {
                    borderTop: "1px solid rgb(0, 0, 0)",
                  },
              }}
            >
              {sortedAnimeList.map((anime) => (
                <Card
                  key={anime.title}
                  raised={false}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "rgb(0, 0, 0, 0)",
                    boxShadow: "none",
                  }}
                >
                  {anime.maomaoRecommendation && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -4,
                        right: -45,
                        backgroundColor: "tertiary.darker",
                        color: "white",
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
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100px",
                        height: "100px",
                        mt: 1.5,
                        zIndex: 100,
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={anime.picture || Placeholder.src}
                        width={100}
                        height={100}
                        sx={{
                          objectPosition: "50% 50%",
                          objectFit: "cover",
                          zIndex: 100,
                        }}
                      />
                    </Box>
                    <CardContent
                      sx={{
                        width: "calc(100vw - 100px)",
                        pt: 1.5,
                        "&.MuiCardContent-root:last-child": { pb: 1.5 },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: 14,
                          "& sup": { fontSize: 8 },
                        }}
                      >
                        {anime.year} {bull} {anime.episodes}
                        <sup> EPISODES</sup>
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
                          <sup> {abbreviateNumber(anime.ratingOutOf)}</sup>
                        </Typography>
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
                          marginLeft: { xs: "calc(-16px - 100px)", sm: 0 },
                          paddingLeft: { xs: "calc(16px + 100px)", sm: 0 },
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
                    </CardContent>
                  </Box>{" "}
                  {anime.shortDescription && (
                    <CardContent
                      sx={{
                        paddingTop: 0,
                        marginTop: -1.5,
                        "&:last-child": { paddingBottom: 1 },
                      }}
                    >
                      <Typography
                        variant="body2"
                        mt={1}
                        sx={{ color: "black", fontWeight: "bold" }}
                      >
                        {anime.shortDescription}
                      </Typography>
                    </CardContent>
                  )}
                </Card>
              ))}
            </Stack>
          </Container>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

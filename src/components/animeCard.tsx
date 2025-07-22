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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { abbreviateNumber } from "@/app/utils";

import Placeholder from "../app/assets/placeholder.jpg";

import { Anime } from "../app/nextAnime";

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

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
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
          <Stack direction="row" gap={2} sx={{ lineHeight: "1.1", mb: 1 }}>
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
      </Box>
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
  );
}

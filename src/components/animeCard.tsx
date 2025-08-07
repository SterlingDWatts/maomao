import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Face3Icon from "@mui/icons-material/Face3";
import Face5Icon from "@mui/icons-material/Face5";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

import { abbreviateNumber } from "@/app/utils";

import Placeholder from "../app/assets/placeholder.jpg";

import { Anime } from "../app/nextAnime";

const Bullet = () => (
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
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <Card
        key={anime.title}
        raised={false}
        onClick={() => setExpanded((prev) => !prev)}
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(0, 0, 0, 0)",
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "90px",
              mt: 2,
              zIndex: 100,
            }}
          >
            <CardMedia
              component="img"
              image={anime.picture || Placeholder.src}
              width={100}
              height={90}
              sx={{
                objectPosition: anime.objectPosition || "50% 50%",
                objectFit: "cover",
                zIndex: 100,
              }}
            />
          </Box>
          <CardContent
            className="anime-card-content-main"
            sx={{
              width: "calc(100vw - 100px)",
              // pt: 1.5,
              "&.MuiCardContent-root:last-child": { pb: 2 },
              position: "relative",
            }}
          >
            <Box className="anime-card-content-divider"></Box>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              sx={{ width: "100%" }}
            >
              <Typography
                sx={{
                  color: "black",
                  fontSize: 16,
                  lineHeight: 1.25,
                  "& sup": {
                    fontSize: 10,
                    lineHeight: 1,
                    verticalAlign: "5px",
                  },
                }}
              >
                {anime.year} <Bullet /> {anime.episodes}
                <sup> EPISODES</sup>
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {anime.isMaomaoRecommendation && (
                  <LocalFloristIcon color="inherit" sx={{ fontSize: 16 }} />
                )}
                {anime.hasDawnSeen && (
                  <Face3Icon color="inherit" sx={{ fontSize: 16 }} />
                )}
                {anime.hasSterlingSeen && (
                  <Face5Icon color="inherit" sx={{ fontSize: 16 }} />
                )}
              </Stack>
            </Stack>
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
            <Stack direction="row" gap={2} sx={{ lineHeight: "1.1" }}>
              <Typography
                sx={{
                  color: "black",
                  fontSize: 16,
                  "& sub": {
                    fontSize: 13,
                    lineHeight: 1,
                    verticalAlign: "baseline",
                  },
                }}
              >
                {anime.rating}/<sub>{abbreviateNumber(anime.ratingOutOf)}</sub>
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontSize: 16,
                  "& sup": {
                    fontSize: 10,
                    lineHeight: 1,
                    verticalAlign: "5px",
                  },
                }}
              >
                #{anime.rank}
                <sup> RANK</sup>
              </Typography>

              <Typography
                sx={{
                  color: "black",
                  fontSize: 16,
                  "& sup": {
                    fontSize: 10,
                    lineHeight: 1,
                    verticalAlign: "5px",
                  },
                }}
              >
                #{anime.popularity}
                <sup> POP</sup>
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
                marginBottom: { xs: -0.5, sm: 0 },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
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
              "&:last-child": { paddingBottom: 1 },
              display: expanded ? "block" : "none",
            }}
          >
            <Box
              sx={{
                cursor: "pointer",
                position: "relative",
                color: "primary.dark",
                overflow: expanded ? "visible" : "hidden",
                textOverflow: expanded ? "clip" : "ellipsis",
                whiteSpace: expanded ? "normal" : "nowrap",
                transition: "all 0.2s",
                fontWeight: "bold",
                lineHeight: 1.25,
              }}
            >
              <Typography
                variant="body2"
                component={"span"}
                sx={{
                  color: "black",
                  fontSize: 16,
                }}
              >
                {anime.shortDescription}
              </Typography>
              <Divider
                variant="middle"
                sx={{
                  mt: 1,
                  mb: 1,
                  display: expanded ? "block" : "none",
                  lineHeight: 1.25,
                }}
              />
              <Typography
                variant="body2"
                component={"span"}
                sx={{
                  color: "black",
                  display: expanded ? "initial" : "none",
                  fontSize: 16,
                }}
              >
                {anime.longDescription}
              </Typography>
            </Box>
          </CardContent>
        )}
      </Card>
    </>
  );
}

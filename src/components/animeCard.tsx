import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Face3Icon from "@mui/icons-material/Face3";
import Face5Icon from "@mui/icons-material/Face5";
// @ts-ignore
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
    }}
  >
    •
  </Box>
);

export default function AnimeCard({
  anime,
  onTagClick,
}: {
  anime: Anime;
  onTagClick?: (tag: string) => void;
}) {
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
          boxShadow: "none",
          backgroundColor: "transparent",
          color: "white",
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
              height: "100%",
              zIndex: 100,
            }}
          >
            <CardMedia
              component="img"
              image={anime.picture || Placeholder.src}
              width={"100px"}
              height={"100%"}
              sx={{
                objectPosition: anime.objectPosition || "50% 50%",
                position: "absolute",
                objectFit: "cover",
                width: "100px",
                height: "100%",
                zIndex: 100,
                borderRadius: "4px",
              }}
            />
          </Box>
          <CardContent
            className="anime-card-content-main"
            sx={{
              width: "calc(100% - 100px)",
              "&.MuiCardContent-root:last-child": { pb: 0 },
              position: "relative",
              pt: 0,
            }}
          >
            <Stack spacing={0.5}>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                sx={{ width: "100%" }}
              >
                <Typography
                  sx={{
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
                <Stack direction="row" spacing={0.125}>
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
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {anime.title}
              </Typography>
              <Stack direction="row" gap={2} sx={{ lineHeight: "1.1" }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    "& sub": {
                      fontSize: 13,
                      lineHeight: 1,
                      verticalAlign: "baseline",
                    },
                  }}
                >
                  {anime.rating}/
                  <sub>{abbreviateNumber(anime.ratingOutOf)}</sub>
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    "& sup": {
                      fontSize: 10,
                      lineHeight: 1,
                      verticalAlign: "5px",
                    },
                  }}
                >
                  {anime.rank}
                  <sup> RANK</sup>
                </Typography>

                <Typography
                  sx={{
                    fontSize: 16,
                    "& sup": {
                      fontSize: 10,
                      lineHeight: 1,
                      verticalAlign: "5px",
                    },
                  }}
                >
                  {anime.popularity}
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
                  marginLeft: { xs: 0, sm: 0 },
                  paddingLeft: { xs: 0, sm: 0 },
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
                    onClick={
                      onTagClick
                        ? (event) => {
                            event.stopPropagation();
                            onTagClick(tag);
                          }
                        : undefined
                    }
                    sx={{
                      fontSize: "0.75rem",
                      cursor: onTagClick ? "pointer" : "default",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": onTagClick
                        ? {
                            backgroundColor: "primary.dark",
                            transform: "scale(1.05)",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                          }
                        : {},
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </CardContent>
        </Box>
        {anime.shortDescription && (
          <CardContent
            sx={{
              "&:last-child": { paddingBottom: 1 },
              display: expanded ? "block" : "none",
              pl: 0,
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
                  color: "white",
                  fontSize: 16,
                }}
              >
                {anime.shortDescription}
              </Typography>
              <Divider
                variant="fullWidth"
                color="white"
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
                  color: "white",
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

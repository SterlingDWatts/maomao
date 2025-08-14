import * as React from "react";

import Box, { BoxProps } from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { AvailableNowProps } from "../app/showsAndMovies";

interface ExpandMoreProps extends BoxProps {
  expand: boolean;
}

export default function TallTimerCard({
  title,
  subheader,
  season,
  episode,
  episodesInSeason,
  cardMedia,
  cardMediaAlt,
  watchUrl,
  objectPosition = "50% 50%",
  SiteLogo,
}: AvailableNowProps) {
  return (
    <Card sx={{ width: "200px", flex: "0 0 auto" }}>
      <Box
        sx={{
          width: "100%",
          height: "194px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={cardMedia}
          alt={cardMediaAlt}
          sx={{
            objectPosition: objectPosition,
          }}
        />
      </Box>
      <Stack
        sx={{ height: "calc(100% - 194px)", justifyContent: "space-between" }}
      >
        <CardContent
          sx={{
            paddingBottom: 0,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 1,
              left: 0,
              bottom: 0,
              borderTopWidth: 3,
              borderTopStyle: "solid",
              borderTopColor:
                episode && episodesInSeason
                  ? "secondary.darker"
                  : "transparent",
              width:
                episode && episodesInSeason
                  ? `${(episode / episodesInSeason) * 100}%`
                  : "100%",
              height: 3,
            }}
          />
          <Typography
            id={`tall-timer-card-${[title, season, episode, subheader]
              .filter(Boolean)
              .map((v) =>
                String(v)
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9\-]/g, ""),
              )
              .join("-")}`}
            variant="h5"
            component="div"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "secondary.dark",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="black"
            sx={{ fontSize: ".875rem", fontWeight: "bold", lineHeight: 1.5 }}
          >
            {season && episode
              ? `${season}.${episode}${subheader && ": "} ${subheader}`
              : subheader}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton href={watchUrl}>
            <SiteLogo />
          </IconButton>
        </CardActions>
      </Stack>
    </Card>
  );
}

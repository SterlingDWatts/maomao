import * as React from "react";

import Box, { BoxProps } from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { AvailableNowProps } from "../app/showsAndMovies";
import MediaInfoDialog from "./mediaInfoDialog";

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
  releaseDateTime,
  synopsis,
  isMovie,
  imdbUrl,
  finale,
}: AvailableNowProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const id = `tall-timer-card-${[title, season, episode, subheader]
    .filter(Boolean)
    .map((v) =>
      String(v)
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, ""),
    )
    .join("-")}`;

  return (
    <>
      <Card
        onClick={handleOpen}
        role="button"
        aria-labelledby={id}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
        sx={{ width: "200px", flex: "0 0 auto", cursor: "pointer" }}
      >
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
            {episode && episodesInSeason && (
              <LinearProgress
                variant="determinate"
                value={(episode / episodesInSeason) * 100}
                color="secondary"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                }}
              />
            )}
            <Typography
              id={id}
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
            <IconButton
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // prevent dialog open when clicking the logo button
                e.stopPropagation();
              }}
            >
              <SiteLogo />
            </IconButton>
          </CardActions>
        </Stack>
      </Card>

      <MediaInfoDialog
        open={open}
        onClose={handleClose}
        id={id}
        title={title}
        subheader={subheader}
        season={season}
        episode={episode}
        episodesInSeason={episodesInSeason}
        cardMedia={cardMedia}
        cardMediaAlt={cardMediaAlt}
        releaseDateTime={releaseDateTime}
        synopsis={synopsis}
        watchUrl={watchUrl}
        imdbUrl={imdbUrl}
        finale={finale}
      />
    </>
  );
}

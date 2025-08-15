import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles"; // retained if future styled elements needed

import Timer from "./timer";

// Removed badge usage after dialog refactor

import { UpNextProps } from "../app/showsAndMovies";
import MediaInfoDialog from "./mediaInfoDialog";

import useDistance from "@/app/hooks/useDistance";
import useInView from "@/app/hooks/useInView";

import { formatSubheader } from "../app/utils";

// Expand/collapse functionality removed

// MovieBadge removed (icon no longer needed)

export default function LargeTimerCard({
  avatar,
  title,
  subheader,
  season,
  episode,
  episodesInSeason,
  cardMedia,
  cardMediaAlt,
  releaseDateTime,
  synopsis,
  watchUrl,
  estimate = false,
  objectPosition = "50% 50%",
  addContrastToTimer = false,
  SiteLogo,
  finale = false,
  imdbUrl,
}: UpNextProps) {
  const timerBoxRef = React.useRef<HTMLDivElement>(null);

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const distance = useDistance(releaseDateTime);
  const isInView = useInView(timerBoxRef);

  const id = `large-timer-card-${[title, season, episode, subheader]
    .filter(Boolean)
    .map((v) =>
      String(v)
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, ""),
    )
    .join("-")}`;
  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  return (
    <>
      <Card
        role="button"
        tabIndex={0}
        // Only open if dialog not already open to avoid re-open race when closing
        onClick={() => {
          if (!dialogOpen) handleOpen();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!dialogOpen) handleOpen();
          }
        }}
        sx={{
          maxWidth: "100vw",
          backgroundColor: finale ? "tertiary.lighter" : "white",
        }}
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
          <Grow in={isInView} {...(isInView ? { timeout: 1000 } : {})}>
            <Box
              ref={timerBoxRef}
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {distance > 0 ? (
                <Timer
                  distance={distance}
                  estimate={estimate}
                  addContrastToTimer={addContrastToTimer}
                />
              ) : (
                <Typography
                  variant="h3"
                  component="div"
                  color="white"
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: addContrastToTimer
                      ? "rgba(0, 0, 0, 0.3)"
                      : "transparent",
                    borderRadius: 2,
                    padding: 1,
                    fontSize: {
                      xs: "3rem",
                      sm: "4rem",
                      md: "5rem",
                      lg: "6rem",
                    },
                  }}
                >
                  AVAILABLE
                </Typography>
              )}
            </Box>
          </Grow>
        </Box>
        <CardContent
          sx={{ position: "relative", paddingTop: "20px", paddingBottom: 0 }}
        >
          <Avatar
            src={avatar}
            sx={{
              position: "absolute",
              top: -26,
              left: "Calc(50% - 24px)",
              border: "2px solid white",
              height: 48,
              width: 48,
            }}
          />
          {episode && episodesInSeason && (
            <CircularProgress
              variant="determinate"
              value={(episode / episodesInSeason) * 100}
              size={48}
              thickness={4}
              sx={{
                position: "absolute",
                top: -26,
                left: "Calc(50% - 24px)",
                color: "secondary.darker",
              }}
            />
          )}
          <Typography
            id={id}
            variant="h3"
            color="secondary.dark"
            sx={{ fontWeight: "bold", fontSize: "1.5rem", textAlign: "center" }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="black"
            sx={{ fontSize: "1rem", textAlign: "center", fontWeight: "bold" }}
          >
            {formatSubheader(season, episode, subheader)}
            {finale && " (FINALE)"}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button
            size="small"
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<SiteLogo />}
            onClick={(e) => {
              // Prevent opening dialog when clicking watch logo button
              e.stopPropagation();
            }}
          />
        </CardActions>
      </Card>
      <MediaInfoDialog
        open={dialogOpen}
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

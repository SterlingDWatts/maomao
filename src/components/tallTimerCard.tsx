import * as React from "react";

import Box, { BoxProps } from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
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

  // Attempt to format the release date if parsable, else fall back to raw string
  let formattedRelease = releaseDateTime;
  const parsed = new Date(releaseDateTime);
  if (!isNaN(parsed.getTime())) {
    try {
      formattedRelease = parsed.toLocaleString(undefined, {
        dateStyle: "medium",
      });
    } catch (e) {
      // ignore formatting error
    }
  }

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

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby={`${id}-dialog-title`}
      >
        <DialogTitle id={`${id}-dialog-title`} sx={{ pb: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              variant="h6"
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
            {finale && (
              <Typography
                component="span"
                color="error"
                variant="caption"
                sx={{ fontWeight: "bold", ml: 1 }}
              >
                FINALE
              </Typography>
            )}
          </Stack>
          {subheader && (
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              {season && episode ? `${season}.${episode}` : null}
              {season && episode && subheader ? " – " : null}
              {subheader}
            </Typography>
          )}
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 1 }}>
          <Stack spacing={2}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={cardMedia}
                alt={cardMediaAlt}
                sx={{
                  width: "100%",
                  borderRadius: 1,
                  objectFit: "cover",
                  objectPosition,
                  maxHeight: 300,
                }}
              />
              {episode && episodesInSeason && (
                <Box sx={{ mt: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={(episode / episodesInSeason) * 100}
                    color="secondary"
                    sx={{ height: 6, borderRadius: 1 }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    Episode {episode} of {episodesInSeason}
                  </Typography>
                </Box>
              )}
            </Box>
            <Stack spacing={1}>
              <Typography variant="body2">
                <strong>Release:</strong> {formattedRelease}
              </Typography>
              {synopsis && synopsis.trim() !== "" && (
                <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                  {synopsis}
                </Typography>
              )}
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Button
              variant="text"
              size="small"
              color="secondary"
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
            >
              Watch
            </Button>
            {imdbUrl && (
              <Button
                variant="text"
                size="small"
                color="secondary"
                href={imdbUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
              >
                IMDb
              </Button>
            )}
            <Button
              variant="text"
              size="small"
              color="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}

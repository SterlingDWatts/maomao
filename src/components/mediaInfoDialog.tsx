import * as React from "react";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { AvailableNowProps } from "../app/showsAndMovies";

export interface MediaInfoDialogProps
  extends Pick<
    AvailableNowProps,
    | "title"
    | "subheader"
    | "season"
    | "episode"
    | "episodesInSeason"
    | "cardMedia"
    | "cardMediaAlt"
    | "releaseDateTime"
    | "synopsis"
    | "watchUrl"
    | "imdbUrl"
    | "finale"
  > {
  open: boolean;
  onClose: () => void;
  id: string; // base id for aria attributes
}

export default function MediaInfoDialog({
  open,
  onClose,
  id,
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
  imdbUrl,
  finale,
}: MediaInfoDialogProps) {
  // Attempt to format the release date if parsable, else fall back to raw string
  let formattedRelease = releaseDateTime;
  const parsed = new Date(releaseDateTime);
  if (!isNaN(parsed.getTime())) {
    try {
      formattedRelease = parsed.toLocaleString(undefined, {
        dateStyle: "medium",
      });
    } catch (e) {
      /* ignore */
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby={`${id}-dialog-title`}
    >
      <DialogTitle id={`${id}-dialog-title`} sx={{ pb: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h6" component="span" sx={{ fontWeight: "bold" }}>
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
                objectPosition: "50% 50%",
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
            onClick={onClose}
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
              onClick={onClose}
            >
              IMDb
            </Button>
          )}
          <Button
            variant="text"
            size="small"
            color="secondary"
            onClick={onClose}
          >
            Close
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}

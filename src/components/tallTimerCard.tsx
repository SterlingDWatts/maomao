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
  cardMedia,
  cardMediaAlt,
  releaseDateTime,
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
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontSize: ".9rem", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ lineHeight: 1, fontSize: ".75rem" }}
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

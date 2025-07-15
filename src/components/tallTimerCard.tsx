import * as React from "react";

import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TvOffIcon from "@mui/icons-material/TvOff";

import { AvailableNowProps } from "../app/showsAndMovies";

import useDistance from "@/app/hooks/useDistance";
import useExpanded from "@/app/hooks/useExpanded";

interface ExpandMoreProps extends BoxProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <Box {...other} />;
})(({}) => ({}));

export default function TallTimerCard({
  title,
  subheader,
  season,
  episode,
  cardMedia,
  cardMediaAlt,
  releaseDateTime,
  synopsis,
  watchUrl,
  isMovie = false,
  objectPosition = "50% 50%",
  SiteLogo,
}: AvailableNowProps) {
  const { expanded, handleExpandClick } = useExpanded();
  const distance = useDistance(releaseDateTime);

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

        {synopsis && (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>{synopsis}</Typography>
            </CardContent>
          </Collapse>
        )}

        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button
            component="button"
            size="small"
            href={watchUrl}
            startIcon={<SiteLogo />}
          ></Button>
          {/* {synopsis && (
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {expanded ? (
                <IconButton>
                  <ExpandLessIcon />
                </IconButton>
              ) : (
                <Button component="button" size="small">
                  Plot
                </Button>
              )}
            </ExpandMore>
          )} */}
        </CardActions>
      </Stack>
    </Card>
  );
}

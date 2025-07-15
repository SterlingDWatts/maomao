import * as React from "react";

import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvOffIcon from "@mui/icons-material/TvOff";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import TimerBox from "./timerBox";

import { getTimeUntil } from "../app/utils";

import { AvailableNowProps } from "../app/showsAndMovies";

import useDistance from "@/app/hooks/useDistance";
import useExpanded from "@/app/hooks/useExpanded";
import useInView from "@/app/hooks/useInView";

interface ExpandMoreProps extends BoxProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <Box {...other} />;
})(({}) => ({}));

export default function SmallTimerCard({
  title,
  subheader,
  season,
  episode,
  cardMedia,
  cardMediaAlt,
  releaseDateTime,
  synopsis,
  watchUrl,
  estimate = false,
  isMovie = false,
  objectPosition = "50% 50%",
  estimateDate,
}: AvailableNowProps) {
  const timerBoxRef = React.useRef<HTMLDivElement>(null);

  const { expanded, handleExpandClick } = useExpanded();
  const distance = useDistance(releaseDateTime);
  const isInView = useInView(timerBoxRef);

  const { days } = getTimeUntil(distance);

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "calc(100% - 151px)",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
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
          <Typography variant="body2" color="text.secondary">
            {!estimate
              ? new Date(releaseDateTime).toDateString()
              : estimateDate || "TBD"}
          </Typography>
        </CardContent>
        {synopsis && (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{ paddingTop: 0 }}>
              <Typography>{synopsis}</Typography>
            </CardContent>
          </Collapse>
        )}

        <CardActions sx={{ justifyContent: "space-between" }}>
          {isMovie ? (
            <Button
              component="button"
              size="small"
              href={watchUrl}
              startIcon={<ConfirmationNumberIcon />}
            ></Button>
          ) : distance > 0 ? (
            <Button
              component="button"
              size="small"
              href={watchUrl}
              startIcon={<TvOffIcon />}
            ></Button>
          ) : (
            <Button
              component="button"
              size="small"
              href={watchUrl}
              startIcon={<LiveTvIcon />}
            ></Button>
          )}
          {synopsis && (
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
          )}
        </CardActions>
      </Box>
      <Box
        sx={{
          height: "inherit",
          width: "151px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          width={"151px"}
          height={"100%"}
          sx={{
            objectPosition: objectPosition,
            position: "absolute",
            width: "151px",
            height: "100%",
          }}
          image={cardMedia}
          alt={cardMediaAlt}
        />

        <Grow in={isInView} {...(isInView ? { timeout: 1000 } : {})}>
          <Box
            ref={timerBoxRef}
            sx={{
              position: "absolute",
              width: "151px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {distance > 0 ? (
              <Box
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  padding: { xs: 1, sm: 2, md: 3 },
                  textShadow: "black 0px 0px 10px",
                }}
              >
                {estimate && (
                  <Typography
                    variant="subtitle1"
                    component="div"
                    color="white"
                    sx={{
                      fontWeight: "bold",
                      lineHeight: 1,
                      minWidth: "60px",
                      textAlign: "center",
                    }}
                  >
                    ESTIMATED
                  </Typography>
                )}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: { xs: 2, sm: 4, md: 6 },
                  }}
                >
                  <TimerBox time={days} timeUnit={"days"} />
                </Box>
              </Box>
            ) : (
              <Typography
                variant="h3"
                component="div"
                color="white"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  padding: 1,
                  fontSize: "1.3rem",
                }}
              >
                AVAILABLE
              </Typography>
            )}
          </Box>
        </Grow>
      </Box>
    </Card>
  );
}

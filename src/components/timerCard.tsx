import { useState, useEffect, useRef, useCallback } from "react";
import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import LocalMoviesTwoToneIcon from "@mui/icons-material/LocalMoviesTwoTone";
import TvOffIcon from "@mui/icons-material/TvOff";

import Timer from "./timer";

interface TimerCardProps {
  avatar: string;
  title: string;
  subheader: string;
  cardMedia: string;
  cardMediaAlt: string;
  releaseDateTime: string;
  synopsis?: string;
  watchUrl?: string;
  estimate?: boolean;
  estimateDate?: string;
  isMovie?: boolean;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({}) => ({}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function TimerCard({
  avatar,
  title,
  subheader,
  cardMedia,
  cardMediaAlt,
  releaseDateTime,
  synopsis,
  watchUrl,
  estimate = false,
  isMovie = false,
  estimateDate,
}: TimerCardProps) {
  const [eventDate] = useState(new Date(releaseDateTime).getTime());
  const [countdownText, setCountdownText] = useState("Loading countdown...");
  const [distance, setDistance] = useState(eventDate - new Date().getTime());
  const [expanded, setExpanded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const updateCountdown = useCallback(() => {
    const now = new Date().getTime();
    const newDistance = eventDate - now;
    setDistance(newDistance);

    if (newDistance < 0) {
      setCountdownText("It's time!");
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    const formatNumber = (num: number) => {
      return num < 10 ? `0${num}` : num.toString();
    };

    const getTimeUntil = (distance: number) => {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return {
        days: formatNumber(days),
        hours: formatNumber(hours),
        minutes: formatNumber(minutes),
        seconds: formatNumber(seconds),
      };
    };

    const { days, hours, minutes, seconds } = getTimeUntil(newDistance);

    setCountdownText(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  }, [eventDate]);

  useEffect(() => {
    updateCountdown();
    intervalRef.current = setInterval(updateCountdown, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [eventDate, updateCountdown]);

  return (
    <Card sx={{ maxWidth: "100vw" }}>
      <CardHeader
        avatar={
          isMovie ? (
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Avatar
                  variant="square"
                  sx={{
                    width: 22,
                    height: 22,
                    backgroundColor: "black",
                    border: `2px solid white`,
                  }}
                >
                  <LocalMoviesTwoToneIcon />
                </Avatar>
              }
            >
              <Avatar src={avatar} />
            </Badge>
          ) : (
            <Avatar src={avatar} />
          )
        }
        title={title}
        subheader={subheader}
      />
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
        />
        <Box
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
            <Timer distance={distance} estimate={estimate} />
          ) : (
            <Typography
              variant="h4"
              component="div"
              color="white"
              sx={{
                fontWeight: "bold",
                backgroundColor: "rgba(139, 139, 139, 0.3)",
                borderRadius: 2,
                padding: 1,
              }}
            >
              AVAILABLE
            </Typography>
          )}
        </Box>
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {!estimate
            ? new Date(releaseDateTime).toDateString()
            : estimateDate || "TBD"}
        </Typography>
      </CardContent>

      {synopsis && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>{synopsis}</Typography>
          </CardContent>
        </Collapse>
      )}

      <CardActions sx={{ justifyContent: "space-between" }}>
        {!watchUrl ? (
          <></>
        ) : distance > 0 ? (
          <Button
            component="button"
            size="small"
            href={watchUrl}
            startIcon={<TvOffIcon />}
            color="error"
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
              <ExpandLessIcon />
            ) : (
              <Button
                component="button"
                endIcon={<WarningAmberIcon />}
                color="secondary"
                size="small"
              >
                Plot
              </Button>
            )}
          </ExpandMore>
        )}
      </CardActions>
    </Card>
  );
}

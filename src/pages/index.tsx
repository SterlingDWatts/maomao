"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import Timer from "../components/timer";
import DrawerAppBar from "../components/appBarWithResponsiveMenu";

import ApothecaryDiaries from "../app/assets/ApothecaryDiaries.jpg";
import ADTheBeginning from "../app/assets/ADTheBeginning.jpg";
import MaomaoSmall from "../app/assets/MaomaoSmall.jpg";
import FoundationSeason3Episode1 from "../app/assets/FoundationSeason3Episode1.jpg";
import FoundationAvatar from "../app/assets/FoundationAvatar.jpg";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({}) => ({}));

export default function Page() {
  const [eventDate] = useState(new Date("July 18, 2025 13:00:00").getTime());
  const [countdownText, setCountdownText] = useState("Loading countdown...");
  const [distance, setDistance] = useState(eventDate - new Date().getTime());
  const [spoilerVisible, setSpoilerVisible] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
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
      const oneSecond = 1000;
      const oneMinute = oneSecond * 60;
      const oneHour = oneMinute * 60;
      const oneDay = oneHour * 24;
      const days = Math.floor(distance / oneDay);
      const hours = Math.floor((distance % oneDay) / oneHour);
      const minutes = Math.floor((distance % oneHour) / oneMinute);
      const seconds = Math.floor((distance % oneMinute) / oneSecond);
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
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: { xs: "56px", sm: "64px" },
          paddingLeft: { xs: 0, sm: 3 },
          paddingRight: { xs: 0, sm: 3 },
        }}
      >
        <DrawerAppBar />
        <Stack spacing={2} sx={{ marginTop: 2 }}>
          <Card sx={{ maxWidth: "100vw" }}>
            <CardHeader
              avatar={<Avatar src={FoundationAvatar.src} />}
              title="A Song for the End of Everything"
              subheader="Foundation Season 3 Episode 1"
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
                image={FoundationSeason3Episode1.src}
                alt="Apothecary Diaries"
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="white"
                  sx={{ fontWeight: "bold" }}
                >
                  AVAILABLE
                </Typography>
              </Box>
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>
                  A mysterious new pirate with terrifying abilities - known as
                  the Mule - catches the attention of the Foundation and Empire.
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                size="small"
                href="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
                color="primary"
              >
                Watch
              </Button>
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
                    startIcon={<WarningAmberIcon />}
                    color="error"
                  >
                    Plot
                  </Button>
                )}
              </ExpandMore>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: "100vw" }}>
            <CardHeader
              avatar={<Avatar src={MaomaoSmall.src} />}
              title="The Beginning"
              subheader="The Apothecary Diaries"
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
                image={ADTheBeginning.src}
                alt="Apothecary Diaries"
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Timer distance={distance} />
              </Box>
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>
                  After the war ends, Jinshi faces mounting work duties while
                  Maomao goes back to the pleasure quarter.
                </Typography>
              </CardContent>
            </Collapse>

            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                size="small"
                href="https://www.crunchyroll.com/watch/GWDU7300N/the-beginning"
                color={distance > 0 ? "secondary" : "primary"}
              >
                {distance > 0 ? "Visit" : "Watch"}
              </Button>
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
                    startIcon={<WarningAmberIcon />}
                    color="error"
                  >
                    Plot
                  </Button>
                )}
              </ExpandMore>
            </CardActions>
          </Card>
        </Stack>
      </Container>
    </React.Fragment>
  );
}

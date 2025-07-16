import * as React from "react";

import Avatar from "@mui/material/Avatar";
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
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

import Timer from "./timer";

import { AvatarBadge, Badge, CardHeader } from "./largeTimerCard.styles";

import { UpNextProps } from "../app/showsAndMovies";

import useDistance from "@/app/hooks/useDistance";
import useExpanded from "@/app/hooks/useExpanded";
import useInView from "@/app/hooks/useInView";

import { formatSubheader } from "../app/utils";

interface ExpandMoreProps extends BoxProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <Box {...other} />;
})(({}) => ({}));

const MovieBadge: React.FC<{ avatar: string }> = ({ avatar }) => (
  <Badge
    badgeContent={
      <AvatarBadge>
        <LocalMoviesIcon color="action" />
      </AvatarBadge>
    }
  >
    <Avatar src={avatar} />
  </Badge>
);

export default function LargeTimerCard({
  avatar,
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
  SiteLogo,
}: UpNextProps) {
  const timerBoxRef = React.useRef<HTMLDivElement>(null);

  const { expanded, handleExpandClick } = useExpanded();
  const distance = useDistance(releaseDateTime);
  const isInView = useInView(timerBoxRef);

  return (
    <Card sx={{ maxWidth: "100vw" }}>
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
              <Timer distance={distance} estimate={estimate} />
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
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
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
        <Typography
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
        </Typography>
      </CardContent>

      {synopsis && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ textAlign: "center", fontSize: ".875rem" }}>
              {synopsis}
            </Typography>
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
              <Button component="button" color="secondary">
                Plot
              </Button>
            )}
          </ExpandMore>
        )}
      </CardActions>
    </Card>
  );
}

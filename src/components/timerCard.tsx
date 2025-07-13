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

import useDistance from "@/app/hooks/useDistance";
import useExpanded from "@/app/hooks/useExpanded";

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
  const { expanded, handleExpandClick } = useExpanded();
  const distance = useDistance(releaseDateTime);

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

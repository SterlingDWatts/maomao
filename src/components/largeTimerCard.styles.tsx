import MuiAvatar, { AvatarProps } from "@mui/material/Avatar";
import MuiBadge, { BadgeProps } from "@mui/material/Badge";
import MuiCardHeader, { CardHeaderProps } from "@mui/material/CardHeader";

export const AvatarBadge = (props: AvatarProps) => {
  return (
    <MuiAvatar
      {...props}
      sx={{
        width: 22,
        height: 22,
        backgroundColor: "white",
        border: `1px solid black`,
      }}
    />
  );
};

export const Badge = (props: BadgeProps) => {
  return (
    <MuiBadge
      {...props}
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    />
  );
};

export const CardHeader = (props: CardHeaderProps) => {
  return (
    <MuiCardHeader
      {...props}
      slotProps={{
        title: { fontWeight: "bold", fontSize: "1rem" },
        subheader: {
          lineHeight: 1,
          fontSize: ".75rem",
          color: "white",
          fontWeight: "bold",
        },
      }}
      sx={{ backgroundColor: "primary.light", color: "white" }}
    />
  );
};

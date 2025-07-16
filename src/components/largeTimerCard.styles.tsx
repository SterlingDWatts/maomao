import MuiAvatar, { AvatarProps } from "@mui/material/Avatar";
import MuiBadge, { BadgeProps } from "@mui/material/Badge";

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

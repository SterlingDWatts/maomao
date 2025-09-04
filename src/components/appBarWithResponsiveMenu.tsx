import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
  backgroundColor?: string;
  color?: string;
}

interface ScrollTopProps {
  children?: React.ReactElement<unknown>;
}

function ScrollTop(props: ScrollTopProps) {
  const { children } = props;

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 101 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const drawerWidth = 240;
const navItems: { label: string; href: string }[] = [
  { label: "Watchlist", href: "/" },
  { label: "Anime Tracker", href: "/anime-tracker" },
];

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Watchlist
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link
              href={item.href}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <HideOnScroll {...props}>
          <AppBar
            component="nav"
            sx={{
              backgroundColor: props.backgroundColor || "primary.main",
              color: props.color || "black",
            }}
          >
            <Container maxWidth="lg" disableGutters>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  Watchlist
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      style={{ textDecoration: "none" }}
                    >
                      <Button sx={{ color: props.color || "black" }}>
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>

        <HideOnScroll {...props}>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </HideOnScroll>
      </Box>
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          color={props.backgroundColor ? "primary" : "secondary"}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

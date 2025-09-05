import {
  createTheme,
  ThemeOptions,
  Theme,
  Palette,
} from "@mui/material/styles";

// new type that uses the Theme interface and includes the new palette options
interface CustomPalette extends Palette {
  tertiary: Palette["primary"];
}

interface CustomTheme extends Theme {
  palette: CustomPalette;
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFDE03",
      light: "#FCF267",
      dark: "#FFAB00",
      darker: "#FF7F00",
      lighter: "#FDF795",
    },
    secondary: {
      main: "#0336FF",
      light: "#5954FF",
      dark: "#0026EB",
      darker: "#001BE6",
      lighter: "#8173FF",
    },
    tertiary: {
      main: "#FF0266",
      light: "#FF6297",
      dark: "#C2005D",
      darker: "#9E0057",
      lighter: "#FFBCD3",
      contrastText: "#000",
    },
  },
} as Omit<ThemeOptions, "components">) as unknown as CustomTheme;

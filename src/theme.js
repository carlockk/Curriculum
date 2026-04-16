import { createTheme } from "@mui/material";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#176b87" : "#d4d4d4",
      },
      secondary: {
        main: mode === "light" ? "#b45309" : "#a3a3a3",
      },
      background: {
        default: mode === "light" ? "#f4efe6" : "#212121",
        paper: mode === "light" ? "rgba(255,255,255,0.78)" : "rgba(42,42,42,0.78)",
      },
      text: {
        primary: mode === "light" ? "#13232f" : "#ececec",
        secondary: mode === "light" ? "#4b5a65" : "#a3a3a3",
      },
      divider: mode === "light" ? "rgba(19,35,47,0.12)" : "rgba(255,255,255,0.08)",
    },
    typography: {
      fontFamily: '"Segoe UI", "Inter", "Roboto", sans-serif',
      h1: { fontWeight: 700, letterSpacing: "-0.04em" },
      h2: { fontWeight: 700, letterSpacing: "-0.03em" },
      h3: { fontWeight: 600 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    shape: {
      borderRadius: 18,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background:
              mode === "light"
                ? "radial-gradient(circle at top left, rgba(23, 107, 135, 0.18), transparent 32%), radial-gradient(circle at 85% 20%, rgba(251, 191, 36, 0.16), transparent 26%), linear-gradient(180deg, #f8f4ed 0%, #f1e8db 100%)"
                : "radial-gradient(circle at 18% 0%, rgba(255, 255, 255, 0.04), transparent 24%), radial-gradient(circle at 84% 10%, rgba(255, 255, 255, 0.03), transparent 18%), linear-gradient(180deg, #1f1f1f 0%, #212121 48%, #1d1d1d 100%)",
            color: mode === "light" ? "#13232f" : "#ececec",
            transition: "background 220ms ease, color 220ms ease",
          },
        },
      },
    },
  });

export default getTheme;

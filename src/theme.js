import { createTheme, ThemeProvider } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1e53cc",
        },
        secondary: {
            main: "#F6803A",
        },
        background: {
            default: "#121212",
            paper: "#1E1E1E",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#B3B3B3", 
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#1976d2" },
    },
});
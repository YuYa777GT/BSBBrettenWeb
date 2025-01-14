import { grey } from "@mui/material/colors";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const mode = "light";

// Primary Colors
const primary = "#003d7b";
const lightPrimary = "#ccecf9";

// Secondary Colors
const secondary = "#00708e";
const lightSecondary = "#338da5";

// Text Colors
const textPrimary = "#454545";
const textSecondary = "#a7a8a9";

// Background Colors
const backgroundDefault = "#d9dadb";
const backgroundPaper = "#fff";

// Warning Colors
const warning = "#ed6c02";

// Error Colors
const error = "#d32f2f";

// Info Colors
const info = "#0288d1";

// Success Colors
const success = "#2e7d32";

// Common Contrast Text
const contrastText = "#eceded";
const styles: ThemeOptions = {
  /*  Example for using the colors of the palette in classes:
        import styles from "../../../style";
        <Button variant="contained" sx={{ bgcolor: styles.palette?.error.main }}>Test</Button>
  */
  palette: {
    mode,
    primary: {
      main: primary,
      contrastText,
      light: lightPrimary,
    },
    secondary: {
      main: secondary,
      contrastText,
      light: lightSecondary,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
    background: {
      default: backgroundDefault,
      paper: backgroundPaper,
    },
    warning: {
      main: warning,
      contrastText,
    },
    error: {
      main: error,
      contrastText,
    },
    info: {
      main: info,
      contrastText,
    },
    success: {
      main: success,
      contrastText,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          [`& fieldset`]: {
            borderRadius: 8,
            boxShadow: "1px 1.5px 1px 0px rgba(0,0,0,0.3)",
            borderColor: grey[500],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`& fieldset`]: {
            borderRadius: 8,
            boxShadow: "1px 1.5px 1px 0px rgba(0,0,0,0.3)",
            borderColor: grey[500],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          boxShadow: "1px 1.5px 1px 0px rgba(0,0,0,0.3)",
          borderColor: grey[500],
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          borderColor: grey[500],
          [`& fieldset`]: {
            borderRadius: 8,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          borderColor: grey[500],
          [`& fieldset`]: {
            borderRadius: 8,
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "inherit",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
        text: {
          "&:hover": {
            backgroundColor: "transparent",
            color: textSecondary,
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: textPrimary,
          "&:hover": {
            backgroundColor: "transparent",
            color: textSecondary,
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          marginLeft: 20,
          marginTop: 20,
          maxWidth: 300,
          position: "absolute",
          backgroundColor: "#d5e5d6",
          color: success,
          userSelect: "none",
        },
        standardWarning: {
          marginLeft: 20,
          marginTop: 20,
          maxWidth: 300,
          position: "absolute",
          backgroundColor: "#f6d5d5",
          color: warning,
          userSelect: "none",
        },
        standardError: {
          marginLeft: 20,
          marginTop: 20,
          maxWidth: 300,
          position: "absolute",
          backgroundColor: "#fbe2cc",
          color: error,
          userSelect: "none",
        },
        standardInfo: {
          marginLeft: 20,
          marginTop: 20,
          maxWidth: 300,
          position: "absolute",
          backgroundColor: "#cce7f6",
          color: info,
          userSelect: "none",
        },
      },
    },
  },
};

export default createTheme(styles);

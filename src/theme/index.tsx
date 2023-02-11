import { createMuiTheme } from "@mui/material";

const Theme = createMuiTheme({
    spacing: 10,
    typography: {
      fontFamily: "Montserrat",
      htmlFontSize: 10,
    },
    palette: {
      primary: {
        main: "#D91F05",
        light: "#626166",
      },
      secondary: {
        main: "#FFA722",
      },
      error: {
        main: "#C30C0C",
      },
      success: {
        main: "#5AC45F",
      },
      text: {
        primary: "#3E3D3D",
        disabled: "rgba(0,0,0,0.12)",
      },
    },
  });
  export default Theme;
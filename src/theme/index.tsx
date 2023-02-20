import { TypeBackground, TypeText, createTheme } from '@mui/material/styles';

export interface CustomTypeBackground extends TypeBackground {
  default: string;
  primary: string;
  secondary?: string;
}

export interface customTypographyOptions extends Partial<TypeText> {
  default: string;
  selected?: string;
  primary?: string;
  secondary?: string;
}

declare module '@mui/material/styles' {
  interface Palette { // Serve para conseguirmos acessar o atributo personalizado - Ex: theme.palette.backgroundColor?.primary
    backgroundColor: CustomTypeBackground;
    textColor?: customTypographyOptions;
  }
  interface PaletteOptions { // Serve para a variavel Theme Suporte atributos personalizado no body
    backgroundColor: CustomTypeBackground;
    textColor?: customTypographyOptions;
  }
}

const Theme = createTheme({
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
      textColor: {
        default: "#e8e6e3",
        selected: "#FFDB70",
      },
      backgroundColor: {
        default: "#0E0F0F",
        primary: "#17191A",
        secondary: "#26292B",
        paper: "#1F2023",
      }
    },
  });
  export default Theme;
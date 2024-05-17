import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  color: {
    mainColor: "#FF6666",
    mainColorL1: "#FFABAB",
    mainColorL2: "#FFCDCD",
    mainColorD1: "#BB3C3C",
    mainColorD2: "#992B2B",
    subColor: "#51B762",
    subColorL1: "#77E97C",
    subColorL2: "#D7F8D8",
    subColorD1: "#2A752D",
    subColorD2: "#1C581E",
    alert: "#FD0F0F",
    warning: "#FFCC23",
    red: "#F11212",
    blue: "#1B23D6",
    white: "#FFFFFF",
    black: "#000000",
    lightGray: "#D3D5DC",
    darkGray: "#938F8F",
    text1: "#090A0D0",
    text2: "#121319",
    text3: "#6F7382",
    text4: "#BABDC6",
    stroke1: "#BBC0CF",
    stroke2: "#D8DBE7",
    bg1: "#FFFFFF",
    bg2: "#F5F6F6",
    bg3: "#E7E8ED",
    bg4: "#D3D5DC",
    shadow: "#000000",
  },
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  color: {
    text1: "#FFFFFF",
    text2: "#E6E9F3",
    text3: "#D8DBE7",
    text4: "#8D909B",
    stroke1: "#2E313D",
    stroke2: "#1B1D25",
    bg1: "#090A0D",
    bg2: "#18181C",
    bg3: "#242529",
    bg4: "#43454F",
    shadow: "#FFFFFF",
  },
};

export type ColorTypes = typeof lightTheme;

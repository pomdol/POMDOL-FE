import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    windowSize: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    color: {
      mainColor: string;
      mainColorL1: string;
      mainColorL2: string;
      mainColorD1: string;
      mainColorD2: string;
      subColor: string;
      subColorL1: string;
      subColorL2: string;
      subColorD1: string;
      subColorD2: string;
      alert: string;
      warning: string;
      red: string;
      blue: string;
      white: string;
      black: string;
      lightGray: string;
      darkGray: string;
      text1: string;
      text2: string;
      text3: string;
      text4: string;
      stroke1: string;
      stroke2: string;
      bg1: string;
      bg2: string;
      bg3: string;
      bg4: string;
      shadow: string;
    };
    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      title1: string;
      title2: string;
      body1: string;
      body2: string;
      body3: string;
      caption: string;
    };
  }
}

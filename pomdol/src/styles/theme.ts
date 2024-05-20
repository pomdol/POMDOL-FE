import { DefaultTheme } from 'styled-components';

interface DeviceTheme {
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

type Device = 'desktop' | 'tablet' | 'mobile';

export const baseTheme: DeviceTheme = {
  fontSize: {
    h1: '36px',
    h2: '32px',
    h3: '28px',
    title1: '24px',
    title2: '20px',
    body1: '18px',
    body2: '16px',
    body3: '14px',
    caption: '13px',
  },
};

export const mobileTheme: DeviceTheme = {
  fontSize: {
    h1: '28px',
    h2: '24px',
    h3: '22px',
    title1: '18px',
    title2: '16px',
    body1: '14px',
    body2: '12px',
    body3: '11px',
    caption: '10px',
  },
};

export const lightTheme: (device: Device) => DefaultTheme = device => {
  return {
    windowSize: {
      mobile: 'screen and (max-width: 768px)',
      tablet: ' screen and (min-width:768px) and (max-width: 1023px)',
      desktop: 'screen and (min-width: 1024px)',
    },
    color: {
      mainColor: '#FF6666',
      mainColorL1: '#FFABAB',
      mainColorL2: '#FFCDCD',
      mainColorD1: '#BB3C3C',
      mainColorD2: '#992B2B',
      subColor: '#51B762',
      subColorL1: '#77E97C',
      subColorL2: '#D7F8D8',
      subColorD1: '#2A752D',
      subColorD2: '#1C581E',
      alert: '#FD0F0F',
      warning: '#FFCC23',
      red: '#F11212',
      blue: '#1B23D6',
      white: '#FFFFFF',
      black: '#000000',
      lightGray: '#D3D5DC',
      darkGray: '#938F8F',
      text1: '#090A0D0',
      text2: '#121319',
      text3: '#6F7382',
      text4: '#BABDC6',
      stroke1: '#BBC0CF',
      stroke2: '#D8DBE7',
      bg1: '#FFFFFF',
      bg2: '#F5F6F6',
      bg3: '#E7E8ED',
      bg4: '#D3D5DC',
      shadow: '#000000',
    },
    ...(device === 'mobile' ? mobileTheme : baseTheme),
  };
};

export const darkTheme: (device: Device) => DefaultTheme = device => {
  return {
    windowSize: {
      ...lightTheme(device).windowSize,
    },
    color: {
      ...lightTheme(device).color,
      text1: '#FFFFFF',
      text2: '#E6E9F3',
      text3: '#D8DBE7',
      text4: '#8D909B',
      stroke1: '#2E313D',
      stroke2: '#1B1D25',
      bg1: '#090A0D',
      bg2: '#18181C',
      bg3: '#242529',
      bg4: '#43454F',
      shadow: '#FFFFFF',
    },
    fontSize: {
      ...lightTheme(device).fontSize,
    },
  };
};

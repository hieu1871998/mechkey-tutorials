import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {
  createTheme,
  ThemeProvider
} from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();

const myTheme = createTheme({
  palette: {
    themePrimary: '#323130',
    themeLighterAlt: '#e7e6e5',
    themeLighter: '#d0cfce',
    themeLight: '#bab8b7',
    themeTertiary: '#a3a2a0',
    themeSecondary: '#8d8b8a',
    themeDarkAlt: '#767573',
    themeDark: '#605e5d',
    themeDarker: '#494847',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  }});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider applyTo='body' theme={myTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;

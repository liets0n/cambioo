/* eslint-disable @typescript-eslint/no-empty-object-type */

import { StyleSheet } from 'react-native-unistyles'

const baseColors = {
  white: '#fff',
  black: '#000'
}

const lightTheme = {
  colors: {
    'grey-50': 'oklch(98.5% 0 0)',
    'grey-100': 'oklch(96.7% 0.003 264.542)',
    'grey-200': 'oklch(92% 0.004 286.32)',
    'grey-300': 'oklch(87.1% 0.006 286.286)',
    'grey-400': 'oklch(70.5% 0.015 286.067)',
    'grey-500': 'oklch(55.2% 0.016 285.938)',
    'grey-600': 'oklch(44.2% 0.017 285.786)',
    'grey-700': 'oklch(37% 0.013 285.805)',
    'grey-800': 'oklch(27.4% 0.006 286.033)',
    'grey-900': 'oklch(21% 0.006 285.885)',
    'grey-950': 'oklch(14.1% 0.005 285.823)',

    ...baseColors
  }
}

const darkTheme = {
  colors: {
    'grey-950': 'oklch(98.5% 0 0)',
    'grey-900': 'oklch(96.7% 0.003 264.542)',
    'grey-800': 'oklch(92% 0.004 286.32)',
    'grey-700': 'oklch(87.1% 0.006 286.286)',
    'grey-600': 'oklch(70.5% 0.015 286.067)',
    'grey-500': 'oklch(55.2% 0.016 285.938)',
    'grey-400': 'oklch(44.2% 0.017 285.786)',
    'grey-300': 'oklch(37% 0.013 285.805)',
    'grey-200': 'oklch(27.4% 0.006 286.033)',
    'grey-100': 'oklch(21% 0.006 285.885)',
    'grey-50': 'oklch(14.1% 0.005 285.823)',

    ...baseColors
  }
}

const appThemes = {
  light: lightTheme,
  dark: darkTheme
}

type AppThemes = typeof appThemes

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  settings: {
    initialTheme: 'light'
  },
  themes: appThemes
})

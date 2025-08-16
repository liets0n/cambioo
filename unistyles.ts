/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Appearance } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

const baseColors = {
  white: '#fff',
  black: '#000'
}

const lightTheme = {
  colors: {
    'grey-50': '#fafafa',
    'grey-100': '#f3f4f6',
    'grey-200': '#e4e4e7',
    'grey-300': '#d4d4d8',
    'grey-400': '#9f9fa9',
    'grey-500': '#71717b',
    'grey-600': '#52525c',
    'grey-700': '#3f3f46',
    'grey-800': '#27272a',
    'grey-900': '#18181b',
    'grey-950': '#09090b',

    ...baseColors
  }
}

const darkTheme = {
  colors: {
    'grey-950': '#fafafa',
    'grey-900': '#f3f4f6',
    'grey-800': '#e4e4e7',
    'grey-700': '#d4d4d8',
    'grey-600': '#9f9fa9',
    'grey-500': '#71717b',
    'grey-400': '#52525c',
    'grey-300': '#3f3f46',
    'grey-200': '#27272a',
    'grey-100': '#18181b',
    'grey-50': '#09090b',

    ...baseColors
  }
}

const appThemes = {
  light: lightTheme,
  dark: darkTheme
}

const systemTheme = Appearance.getColorScheme() ?? 'light'

type AppThemes = typeof appThemes
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  settings: {
    initialTheme: systemTheme
  },
  themes: appThemes
})

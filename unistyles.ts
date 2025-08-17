/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Appearance } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

const fonts = {
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  bold: 'Poppins_700Bold'
}

const baseColors = {
  white: '#fff',
  black: '#000'
}

const lightTheme = {
  colors: {
    grey: {
      50: '#fafafa',
      100: '#f3f4f6',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#9f9fa9',
      500: '#71717b',
      600: '#52525c',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b'
    },
    ...baseColors
  },
  fonts
}

const darkTheme = {
  colors: {
    grey: {
      950: '#fafafa',
      900: '#f3f4f6',
      800: '#e4e4e7',
      700: '#d4d4d8',
      600: '#9f9fa9',
      500: '#71717b',
      400: '#52525c',
      300: '#3f3f46',
      200: '#27272a',
      100: '#18181b',
      50: '#09090b'
    },
    ...baseColors
  },
  fonts
}

const appThemes = {
  light: lightTheme,
  dark: darkTheme
}

type AppThemes = typeof appThemes
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

const systemTheme = Appearance.getColorScheme() ?? 'light'

StyleSheet.configure({
  settings: {
    initialTheme: systemTheme
  },
  themes: appThemes
})

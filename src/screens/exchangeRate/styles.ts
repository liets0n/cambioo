import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create(theme => ({
  container: colorScheme => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      colorScheme === 'dark' ? theme.colors.black : theme.colors.white
  })
}))

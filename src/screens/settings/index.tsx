import { Text, useColorScheme, View } from 'react-native'

import { styles } from './styles'

function Settings() {
  const colorScheme = useColorScheme()

  return (
    <View style={styles.content(colorScheme)}>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings

import { Text, useColorScheme, View } from 'react-native'

import { styles } from './styles'

function Market() {
  const colorScheme = useColorScheme()

  return (
    <View style={styles.container(colorScheme)}>
      <Text>Market</Text>
    </View>
  )
}

export default Market

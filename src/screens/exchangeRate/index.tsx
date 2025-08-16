import { Text, useColorScheme, View } from 'react-native'

import { styles } from './styles'

function ExchangeRate() {
  const colorScheme = useColorScheme()

  return (
    <View style={styles.container(colorScheme)}>
      <Text>ExchangeRate</Text>
    </View>
  )
}

export default ExchangeRate

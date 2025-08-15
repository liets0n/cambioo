import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

export default function Index() {
  return (
    <View style={styles.content}>
      <Text>Edit app/index.tsx to edit this screen. OK</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
})

import { Tabs } from 'expo-router'
import { Coins, Compass, GearSix } from 'phosphor-react-native'
import { useColorScheme } from 'react-native'
import { useUnistyles } from 'react-native-unistyles'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const { theme } = useUnistyles()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
          backgroundColor:
            colorScheme === 'dark' ? theme.colors.black : theme.colors.white,
          borderColor: theme.colors.grey[300]
        },
        tabBarLabelStyle: {
          marginTop: 4,
          fontSize: 12,
          fontFamily: theme.fonts.medium
        },
        tabBarActiveTintColor: theme.colors.grey[950],
        tabBarInactiveTintColor: theme.colors.grey[500]
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Mercado',
          tabBarLabel: 'Mercado',
          tabBarIcon: ({ color, size, focused }) => (
            <Compass
              color={color}
              size={size}
              weight={focused ? 'fill' : 'regular'}
            />
          )
        }}
      />

      <Tabs.Screen
        name='exchangeRate'
        options={{
          title: 'Cotação',
          tabBarLabel: 'Cotação',
          tabBarIcon: ({ color, size, focused }) => (
            <Coins
              color={color}
              size={size}
              weight={focused ? 'fill' : 'regular'}
            />
          )
        }}
      />

      <Tabs.Screen
        name='settings'
        options={{
          title: 'Definições',
          tabBarLabel: 'Definições',
          tabBarIcon: ({ color, size, focused }) => (
            <GearSix
              color={color}
              size={size}
              weight={focused ? 'fill' : 'regular'}
            />
          )
        }}
      />
    </Tabs>
  )
}

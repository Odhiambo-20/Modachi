import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const iconStyle = (focused: boolean) => ({
    width: 24,
    height: 24,
    tintColor: focused ? colors.tint : colors.tabIconDefault,
  });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.tabIconDefault,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icons/Dashboard.png')}
              style={iconStyle(focused)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="virtualcloset"
        options={{
          title: 'Closet',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icons/VirtualCloset.png')}
              style={iconStyle(focused)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="moodboards"
        options={{
          title: 'Moodboard',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icons/Moodboard.png')}
              style={iconStyle(focused)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="trends"
        options={{
          title: 'Trends',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icons/Trends.png')}
              style={iconStyle(focused)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icons/Profile.png')}
              style={iconStyle(focused)}
            />
          ),
        }}
      />
    </Tabs>
  );
}

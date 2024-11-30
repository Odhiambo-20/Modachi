import TabBarBackground from '@/components/ui/TabBarBackground';
import { StyleSheet, Image, Platform } from 'react-native';



export default function TabTwoScreen() {
  return (
    <TabBarBackground />
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, Image, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import database from '@react-native-firebase/database';

const DashboardScreen = ({ navigation }: { navigation: any }) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  interface FeaturedContent {
    id: string;
    title: string;
    description: string;
    image: string;
    type: string;
  }
  
  const [featuredContent, setFeaturedContent] = useState<FeaturedContent[]>([]);
  
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchFeaturedContent = async () => {
      const snapshot = await database()
        .ref('/featuredContent')
        .once('value');
      
      const content = snapshot.val();
      const formattedContent = Object.keys(content).map(key => ({
        id: key,
        ...content[key]
      }));
      
      setFeaturedContent(formattedContent);
    };

    fetchFeaturedContent();
  }, []);

  const menuItems = [
    { name: 'VirtualCloset', icon: require('../assets/icons/VirtualCloset.png'), label: 'Closet' },
    { name: 'Moodboards', icon: require('../assets/icons/Moodboard.png'), label: 'Moodboard' },
    { name: 'Trends', icon: require('../assets/icons/Trends.png'), label: 'Trends' },
    { name: 'Profile', icon: require('../assets/icons/Profile.png'), label: 'Profile' }
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={colorScheme === 'dark' ? "light-content" : "dark-content"} />
      
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, { color: colors.text }]}>Hello</Text>
          <Text style={[styles.name, { color: colors.text }]}>Jobby</Text>
        </View>
        <TouchableOpacity 
          style={styles.notificationButton} 
          onPress={() => navigation.navigate('Notifications')}
        >
          <Ionicons name="notifications-outline" size={24} color={colors.text} />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={colors.icon} style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, { backgroundColor: colors.cardBackground, color: colors.text }]}
          placeholder="Search designs, trends, designers..."
          placeholderTextColor={colors.icon}
        />
      </View>

      <View style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index}
            style={[styles.menuItem, { backgroundColor: colors.cardBackground }]}
            onPress={() => navigation.navigate(item.name)}>
            <Image
              source={item.icon}
              style={[styles.menuIcon, { tintColor: colors.text }]}
            />
            <Text style={[styles.menuText, { color: colors.text }]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.featuredSection}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Featured Content</Text>
        {featuredContent.map((item) => (
          <TouchableOpacity 
            key={item.id}
            style={[styles.featuredCard, { backgroundColor: colors.cardBackground }]}
          >
            <Image source={{ uri: item.image }} style={styles.featuredImage} />
            <View style={styles.featuredContent}>
              <View style={[styles.tagContainer, { backgroundColor: colors.tint + '20' }]}>
                <Text style={[styles.tagText, { color: colors.tint }]}>{item.type}</Text>
              </View>
              <Text style={[styles.featuredTitle, { color: colors.text }]}>{item.title}</Text>
              <Text style={[styles.featuredDescription, { color: colors.icon }]}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}      </View>

      <TouchableOpacity 
        style={[styles.floatingButton, { backgroundColor: colors.tint }]}
        onPress={() => navigation.navigate('NewDesign')}>
        <Ionicons name="add-outline" size={32} color={colors.background} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 16,
    marginBottom: 4,
  },
  name: {
    fontSize: 28,
    fontWeight: '600',
  },
  notificationButton: {
    padding: 8,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    paddingLeft: 40,
    paddingRight: 16,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 32,
  },
  menuItem: {
    width: '47%',
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  menuIcon: {
    width: 32,
    height: 32,
    marginBottom: 12,
  },
  menuText: {
    fontSize: 15,
    fontWeight: '500',
  },
  featuredSection: {
    marginBottom: 80,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  featuredCard: {
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  featuredContent: {
    padding: 16,
  },
  tagContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default DashboardScreen;

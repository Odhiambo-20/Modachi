import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FollowersScreen = ({ navigation }: { navigation: any }) => {
  const [activeTab, setActiveTab] = useState('Followers');
  const [searchQuery, setSearchQuery] = useState('');
  
  const followers = [
    {
      id: '1',
      name: 'Sarah Johnson',
      username: '@sarahj',
      avatar: 'avatar-url',
      bio: 'Fashion Designer • NYC',
      isFollowing: true,
    },
    {
      id: '2',
      name: 'Mike Chen',
      username: '@mikechen',
      avatar: 'avatar-url',
      bio: 'Creative Director',
      isFollowing: false,
    },
    // Add more followers
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <View style={styles.tabs}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Followers' && styles.activeTab]}
            onPress={() => setActiveTab('Followers')}
          >
            <Text style={[styles.tabText, activeTab === 'Followers' && styles.activeTabText]}>
              Followers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Following' && styles.activeTab]}
            onPress={() => setActiveTab('Following')}
          >
            <Text style={[styles.tabText, activeTab === 'Following' && styles.activeTabText]}>
              Following
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder={`Search ${activeTab.toLowerCase()}...`}
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <FlatList
        data={followers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <TouchableOpacity 
              style={styles.userInfo}
              onPress={() => navigation.navigate('Profile', { userId: item.id })}
            >
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.userDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.bio} numberOfLines={1}>{item.bio}</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.followButton,
                item.isFollowing && styles.followingButton
              ]}
            >
              <Text style={[
                styles.followButtonText,
                item.isFollowing && styles.followingButtonText
              ]}>
                {item.isFollowing ? 'Following' : 'Follow'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 24,
    padding: 4,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#1a1a1a',
    fontWeight: '500',
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#1a1a1a',
  },
  list: {
    padding: 24,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f8f8f8',
    marginRight: 12,
  },
  userDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: '#666',
  },
  followButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
  },
  followingButton: {
    backgroundColor: '#f8f8f8',
  },
  followButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  followingButtonText: {
    color: '#1a1a1a',
  },
});

export default FollowersScreen; 
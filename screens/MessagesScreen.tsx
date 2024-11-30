import React from 'react';
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

const MessagesScreen = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const chats = [
    {
      id: '1',
      user: 'Sarah Johnson',
      avatar: 'avatar-url',
      lastMessage: 'Thanks for the collaboration proposal!',
      time: '2m ago',
      unread: 2,
      online: true,
    },
    {
      id: '2',
      user: 'Mike Chen',
      avatar: 'avatar-url',
      lastMessage: 'The design looks great! When can we...',
      time: '1h ago',
      unread: 0,
      online: false,
    },
    // Add more chat items
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search messages"
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.chatItem}
            onPress={() => navigation.navigate('ChatDetail', { userId: item.id })}
          >
            <View style={styles.avatarContainer}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              {item.online && <View style={styles.onlineIndicator} />}
            </View>
            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={styles.username}>{item.user}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <View style={styles.chatFooter}>
                <Text 
                  style={[
                    styles.lastMessage,
                    item.unread > 0 && styles.unreadMessage
                  ]}
                  numberOfLines={1}
                >
                  {item.lastMessage}
                </Text>
                {item.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadCount}>{item.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
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
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
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
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 12,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f8f8f8',
  },
  onlineIndicator: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  time: {
    fontSize: 12,
    color: '#666',
  },
  chatFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastMessage: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  unreadMessage: {
    color: '#1a1a1a',
    fontWeight: '500',
  },
  unreadBadge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  unreadCount: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
});

export default MessagesScreen; 
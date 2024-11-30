import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationsScreen = ({ navigation }: { navigation: any }) => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Mentions', 'Likes'];

  const notifications = [
    {
      id: '1',
      type: 'like',
      user: 'Sarah',
      action: 'liked your design',
      time: '2m ago',
      read: false,
    },
    {
      id: '2',
      type: 'mention',
      user: 'Mike',
      action: 'mentioned you in a comment',
      time: '1h ago',
      read: true,
    },
    // Add more notifications as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => {
            console.log('Navigating back from NotificationsScreen');
            navigation.goBack()
          }}>
            <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
          </TouchableOpacity>
          <Text style={styles.title}>Notifications</Text>
          <TouchableOpacity>
            <Text style={styles.markAllRead}>Mark all read</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabBar}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {notifications.map((notification) => (
          <TouchableOpacity 
            key={notification.id} 
            style={[
              styles.notificationCard,
              !notification.read && styles.unreadCard
            ]}
          >
            <View style={styles.notificationContent}>
              <View style={styles.avatarContainer}>
                <Image
                  source={{ uri: 'placeholder-avatar' }}
                  style={styles.avatar}
                />
                <View style={[
                  styles.iconBadge,
                  { backgroundColor: notification.type === 'like' ? '#FF4B6E' : '#4B9AFF' }
                ]}>
                  <Ionicons 
                    name={notification.type === 'like' ? 'heart' : 'chatbubble'} 
                    size={12} 
                    color="#fff" 
                  />
                </View>
              </View>
              <View style={styles.textContent}>
                <Text style={styles.notificationText}>
                  <Text style={styles.username}>{notification.user}</Text>
                  {' '}{notification.action}
                </Text>
                <Text style={styles.timeText}>{notification.time}</Text>
              </View>
            </View>
            {!notification.read && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  markAllRead: {
    fontSize: 14,
    color: '#666',
  },
  tabBar: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 16,
  },
  tab: {
    paddingBottom: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a1a1a',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#1a1a1a',
    fontWeight: '500',
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  unreadCard: {
    backgroundColor: '#fafafa',
  },
  notificationContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f8f8f8',
  },
  iconBadge: {
    position: 'absolute',
    right: -4,
    bottom: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  textContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    color: '#1a1a1a',
    marginBottom: 4,
  },
  username: {
    fontWeight: '600',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1a1a1a',
  },
});

export default NotificationsScreen;

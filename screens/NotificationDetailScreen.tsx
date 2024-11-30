import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationDetailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.notificationHeader}>
            <Image
              source={{ uri: 'sender-avatar' }}
              style={styles.senderAvatar}
            />
            <View style={styles.notificationInfo}>
              <Text style={styles.senderName}>Sarah Johnson</Text>
              <Text style={styles.timestamp}>2 hours ago</Text>
            </View>
          </View>

          <Text style={styles.notificationTitle}>
            New Collaboration Request
          </Text>

          <Text style={styles.notificationBody}>
            Hi! I really love your design style and would like to collaborate 
            with you on an upcoming summer collection project. The project focuses 
            on sustainable fashion and innovative designs.
          </Text>

          <View style={styles.projectPreview}>
            <Image
              source={{ uri: 'project-preview' }}
              style={styles.previewImage}
            />
            <View style={styles.previewInfo}>
              <Text style={styles.previewTitle}>Summer Collection 2024</Text>
              <Text style={styles.previewDescription}>
                A sustainable fashion collection featuring...
              </Text>
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptText}>Accept Request</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.additionalInfo}>
            <View style={styles.infoItem}>
              <Ionicons name="calendar-outline" size={20} color="#666" />
              <Text style={styles.infoText}>Project Duration: 3 months</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="people-outline" size={20} color="#666" />
              <Text style={styles.infoText}>Team Size: 5 members</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="location-outline" size={20} color="#666" />
              <Text style={styles.infoText}>Location: New York, USA</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.messageButton}
          onPress={() => navigation.navigate('ChatDetail')}
        >
          <Ionicons name="chatbubble-outline" size={20} color="#fff" />
          <Text style={styles.messageText}>Message Sarah</Text>
        </TouchableOpacity>
      </View>
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
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  content: {
    padding: 24,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  senderAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f8f8f8',
    marginRight: 12,
  },
  notificationInfo: {
    flex: 1,
  },
  senderName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 14,
    color: '#666',
  },
  notificationTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  notificationBody: {
    fontSize: 16,
    color: '#1a1a1a',
    lineHeight: 24,
    marginBottom: 24,
  },
  projectPreview: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  previewImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
  },
  previewInfo: {
    padding: 16,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  previewDescription: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  acceptText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  declineButton: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  declineText: {
    color: '#1a1a1a',
    fontSize: 16,
    fontWeight: '600',
  },
  additionalInfo: {
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#1a1a1a',
    paddingVertical: 16,
    borderRadius: 12,
  },
  messageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default NotificationDetailScreen; 
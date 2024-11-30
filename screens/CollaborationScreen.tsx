// Modachi/screens/CollaborationScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Images } from '../constants/Images';

const CollaborationScreen = ({ navigation }: { navigation: any }) => {
  const [message, setMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
            console.log('Navigating back from CollaborationScreen');
            navigation.goBack()
        }}>
          <Ionicons name="close" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.title}>New Collaboration</Text>
        <TouchableOpacity>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.designerInfo}>
          <Image
            source={Images.placeholders.avatar}
            style={styles.avatar}
          />
          <View style={styles.designerDetails}>
            <Text style={styles.designerName}>Sarah Johnson</Text>
            <Text style={styles.designerRole}>Fashion Designer</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Details</Text>
          <View style={styles.projectCard}>
            <Image
              source={{ uri: 'project-image' }}
              style={styles.projectImage}
            />
            <View style={styles.projectInfo}>
              <Text style={styles.projectTitle}>Summer Collection 2024</Text>
              <Text style={styles.projectType}>Fashion Design</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Message</Text>
          <View style={styles.messageContainer}>
            <TextInput
              style={styles.messageInput}
              value={message}
              onChangeText={setMessage}
              placeholder="Write your collaboration proposal..."
              placeholderTextColor="#999"
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Attachments</Text>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={20} color="#1a1a1a" />
              <Text style={styles.addText}>Add Files</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.attachmentsScroll}
          >
            {selectedFiles.map((file, index) => (
              <View key={index} style={styles.attachmentItem}>
                <Image source={{ uri: file }} style={styles.attachmentPreview} />
                <TouchableOpacity style={styles.removeButton}>
                  <Ionicons name="close-circle" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity style={styles.uploadButton}>
              <Ionicons name="cloud-upload-outline" size={24} color="#666" />
              <Text style={styles.uploadText}>Upload Files</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
  sendText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  designerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f8f8f8',
  },
  designerDetails: {
    marginLeft: 12,
  },
  designerName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  designerRole: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  projectCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    overflow: 'hidden',
  },
  projectImage: {
    width: 80,
    height: 80,
    backgroundColor: '#eee',
  },
  projectInfo: {
    flex: 1,
    padding: 12,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  projectType: {
    fontSize: 14,
    color: '#666',
  },
  messageContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
  },
  messageInput: {
    fontSize: 16,
    color: '#1a1a1a',
    minHeight: 120,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addText: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  attachmentsScroll: {
    marginLeft: -24,
    paddingLeft: 24,
  },
  attachmentItem: {
    position: 'relative',
    marginRight: 12,
  },
  attachmentPreview: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
  },
  removeButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
  },
  uploadButton: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default CollaborationScreen;
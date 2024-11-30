import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const DesignDetailsScreen = ({ navigation }: { navigation: any }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={() => setIsSaved(!isSaved)}
          >
            <Ionicons 
              name={isSaved ? "bookmark" : "bookmark-outline"} 
              size={24} 
              color="#fff" 
            />
          </TouchableOpacity>
        </View>

        <Image
          source={{ uri: 'design-image-placeholder' }}
          style={styles.designImage}
        />

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Summer Collection 2024</Text>
            <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
              <Ionicons 
                name={isLiked ? "heart" : "heart-outline"} 
                size={24} 
                color={isLiked ? "#FF4B6E" : "#1a1a1a"} 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.designerInfo}>
            <Image
              source={{ uri: 'designer-avatar-placeholder' }}
              style={styles.avatar}
            />
            <View style={styles.designerText}>
              <Text style={styles.designerName}>Sarah Johnson</Text>
              <Text style={styles.designerRole}>Fashion Designer</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            A modern take on summer fashion, featuring lightweight fabrics and 
            versatile pieces that can be mixed and matched for various occasions.
          </Text>

          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.detailsGrid}>
            {['Casual', 'Summer', 'Sustainable'].map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.collaborateButton}>
            <Ionicons name="people-outline" size={20} color="#fff" />
            <Text style={styles.collaborateText}>Request Collaboration</Text>
          </TouchableOpacity>
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
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    zIndex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  designImage: {
    width,
    height: width,
    backgroundColor: '#f8f8f8',
  },
  content: {
    padding: 24,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  designerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f8f8f8',
  },
  designerText: {
    flex: 1,
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
  followButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  followText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 32,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 32,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#f8f8f8',
  },
  tagText: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  collaborateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#1a1a1a',
    paddingVertical: 16,
    borderRadius: 12,
  },
  collaborateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default DesignDetailsScreen; 
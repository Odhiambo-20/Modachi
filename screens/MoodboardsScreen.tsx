import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const MoodboardScreen = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUploadedImages([...uploadedImages, result.assets[0].uri]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Moodboard</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity 
            style={styles.viewModeButton} 
            onPress={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
            <Ionicons 
              name={viewMode === 'grid' ? 'grid-outline' : 'list-outline'} 
              size={24} 
              color="#1a1a1a" 
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={pickImage}>
            <Ionicons name="add-outline" size={24} color="#1a1a1a" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.imageGrid, viewMode === 'list' && styles.imageList]}>
          {uploadedImages.map((uri, index) => (
            <View 
              key={index} 
              style={[styles.imageContainer, viewMode === 'list' && styles.imageListItem]}>
              <Image source={{ uri }} style={styles.image} />
              <TouchableOpacity style={styles.imageOverlay}>
                <Ionicons name="ellipsis-horizontal" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {uploadedImages.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="images-outline" size={48} color="#666" />
            <Text style={styles.emptyText}>Add images to your moodboard</Text>
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              <Text style={styles.uploadText}>Upload Images</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  viewModeButton: {
    padding: 8,
  },
  addButton: {
    padding: 8,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 12,
  },
  imageList: {
    flexDirection: 'column',
    padding: 24,
    gap: 16,
  },
  imageContainer: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageListItem: {
    width: '100%',
    aspectRatio: 16/9,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 16,
    marginBottom: 24,
  },
  uploadButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#1a1a1a',
    borderRadius: 24,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});

export default MoodboardScreen;

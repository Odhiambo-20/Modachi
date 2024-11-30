// Modachi/screens/VirtualClosetScreen.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image,
  FlatList,
  Alert 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Images } from '@/constants/Images';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const VirtualClosetScreen = ({ navigation }: { navigation: any }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Accessories'];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const items = [
    { id: '1', name: 'Summer Dress', category: 'Dresses' },
    { id: '2', name: 'Denim Jacket', category: 'Tops' },
    // Add more items as needed
  ];

  const saveDesignToLocal = async (imageUri: string) => {
    try {
      const filename = imageUri.split('/').pop();
      const newPath = `${FileSystem.documentDirectory}designs/${filename}`;
      
      await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}designs/`, {
        intermediates: true
      });
      
      await FileSystem.copyAsync({
        from: imageUri,
        to: newPath
      });
      
      Alert.alert('Success', 'Design saved to local storage');
      return newPath;
    } catch (error) {
      Alert.alert('Error', 'Failed to save design');
      console.error(error);
      return null;
    }
  };

  const pickImage = async () => {
    try {
      // Request permissions
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          'Permission Required',
          'Sorry, we need camera roll permissions to upload images.'
        );
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const savedPath = await saveDesignToLocal(result.assets[0].uri);
        if (savedPath) {
          setSelectedImage(savedPath);
        }
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Virtual Closet</Text>
        <TouchableOpacity onPress={pickImage}>
          <Ionicons name="add-circle-outline" size={24} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.previewImage} />
      )}

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              activeCategory === category && styles.categoryButtonActive
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              activeCategory === category && styles.categoryTextActive
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={items}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemCard}>
            <View style={styles.imageContainer}>
              <Image
                source={Images.placeholders.item}
                style={styles.itemImage}
              />
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCategory}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-outline" size={28} color="#fff" />
      </TouchableOpacity>
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
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  categoryScroll: {
    paddingLeft: 24,
    marginBottom: 24,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  categoryButtonActive: {
    backgroundColor: '#1a1a1a',
  },
  categoryText: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  categoryTextActive: {
    color: '#fff',
  },
  grid: {
    padding: 12,
  },
  itemCard: {
    flex: 1,
    margin: 12,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    aspectRatio: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
  },
  itemInfo: {
    padding: 12,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  itemCategory: {
    fontSize: 12,
    color: '#666',
  },
  addButton: {
    position: 'absolute',
    right: 24,
    bottom: 40,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  previewImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
    marginVertical: 10,
  },
});

export default VirtualClosetScreen;
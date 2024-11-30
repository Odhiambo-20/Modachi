import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FirebaseService from '../src/services/firebase/FirebaseService';
import * as Notifications from 'expo-notifications';

const NewDesignScreen = ({ navigation }: { navigation: any }) => {
  const [designName, setDesignName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const categories = ['Casual', 'Formal', 'Sports', 'Evening'];

  const requestNotificationPermission = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Please enable notifications to receive updates');
      return false;
    }
    return true;
  };

  const scheduleDesignReminder = async (designName: string) => {
    const hasPermission = await requestNotificationPermission();
    if (!hasPermission) return;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Design Reminder',
        body: `Continue working on your design: ${designName}`,
        data: { designName },
      },
      trigger: {
        seconds: 86400,
      } as Notifications.NotificationTriggerInput,
    });
  };

  const handleSaveDesign = async () => {
    if (!designName.trim()) {
      Alert.alert('Error', 'Please enter a design name');
      return;
    }
    if (!selectedCategory) {
      Alert.alert('Error', 'Please select a category');
      return;
    }
    try {
      const designId = await FirebaseService.createDesign({
        title: designName,
        description: '',
        category: selectedCategory,
        // ... other design data
      }, '');
      
      await scheduleDesignReminder(designName);
      navigation.navigate('DesignDetails', { designId });
    } catch (error) {
      console.error('Error saving design:', error);
      Alert.alert(
        'Error',
        'Failed to save design. Please try again.',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={28} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.title}>New Design</Text>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveDesign}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Design Name</Text>
            <TextInput
              style={styles.input}
              value={designName}
              onChangeText={setDesignName}
              placeholder="Enter design name"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Category</Text>
            <View style={styles.categoryGrid}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryButton,
                    selectedCategory === category && styles.categoryButtonActive
                  ]}
                  onPress={() => setSelectedCategory(category)}
                >
                  <Text style={[
                    styles.categoryText,
                    selectedCategory === category && styles.categoryTextActive
                  ]}>
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons name="image-outline" size={24} color="#1a1a1a" />
            <Text style={styles.uploadText}>Add Reference Images</Text>
          </TouchableOpacity>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Notes</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              multiline
              numberOfLines={4}
              placeholder="Add design notes..."
              placeholderTextColor="#999"
              textAlignVertical="top"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  saveButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
  },
  saveText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  form: {
    padding: 24,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1a1a1a',
  },
  textArea: {
    height: 120,
    paddingTop: 16,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
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
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginBottom: 24,
  },
  uploadText: {
    fontSize: 16,
    color: '#1a1a1a',
  },
});

export default NewDesignScreen; 
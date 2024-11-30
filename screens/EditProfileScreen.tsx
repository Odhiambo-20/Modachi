import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ navigation }: { navigation: any }) => {
  const [profileData, setProfileData] = useState({
    name: 'Jobby Designer',
    bio: 'Fashion Designer • NYC',
    email: 'jobby@example.com',
    phone: '+1 234 567 8900',
    website: 'jobbydesigner.com'
  });
  const [profileImage, setProfileImage] = useState('placeholder-url');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <TouchableOpacity>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageSection}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: profileImage }}
              style={styles.profileImage}
            />
            <TouchableOpacity 
              style={styles.imageEditButton}
              onPress={pickImage}
            >
              <Ionicons name="camera" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={profileData.name}
                onChangeText={(text) => setProfileData({...profileData, name: text})}
                placeholder="Enter your full name"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Bio</Text>
            <View style={[styles.inputContainer, styles.bioInput]}>
              <TextInput
                style={styles.input}
                value={profileData.bio}
                onChangeText={(text) => setProfileData({...profileData, bio: text})}
                placeholder="Tell us about yourself"
                placeholderTextColor="#999"
                multiline
                numberOfLines={3}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={profileData.email}
                onChangeText={(text) => setProfileData({...profileData, email: text})}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={profileData.phone}
                onChangeText={(text) => setProfileData({...profileData, phone: text})}
                placeholder="Enter your phone number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Website</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={profileData.website}
                onChangeText={(text) => setProfileData({...profileData, website: text})}
                placeholder="Enter your website"
                placeholderTextColor="#999"
                autoCapitalize="none"
              />
            </View>
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
  saveText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  imageSection: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f8f8f8',
  },
  imageEditButton: {
    position: 'absolute',
    right: -4,
    bottom: -4,
    backgroundColor: '#1a1a1a',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  form: {
    paddingHorizontal: 24,
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
  inputContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
    height: '100%',
  },
  bioInput: {
    height: 100,
    paddingVertical: 16,
  },
});

export default EditProfileScreen; 
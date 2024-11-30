import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PrivacySettingsScreen = ({ navigation }: { navigation: any }) => {
  const [settings, setSettings] = useState({
    profileVisibility: 'public',
    showOnline: true,
    showActivity: true,
    allowMessages: 'followers',
    showEmail: false,
    twoFactorAuth: true,
    dataCollection: true,
    locationServices: false,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Privacy Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Privacy</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Profile Visibility</Text>
              <Text style={styles.settingDescription}>
                Control who can see your profile
              </Text>
            </View>
            <TouchableOpacity style={styles.selector}>
              <Text style={styles.selectorText}>{settings.profileVisibility}</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Online Status</Text>
              <Text style={styles.settingDescription}>
                Show when you're active
              </Text>
            </View>
            <Switch
              value={settings.showOnline}
              onValueChange={(value) => 
                setSettings(prev => ({ ...prev, showOnline: value }))
              }
              trackColor={{ false: '#e0e0e0', true: '#1a1a1a' }}
              thumbColor="#fff"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interactions</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Activity Status</Text>
              <Text style={styles.settingDescription}>
                Show your likes and comments to others
              </Text>
            </View>
            <Switch
              value={settings.showActivity}
              onValueChange={(value) => 
                setSettings(prev => ({ ...prev, showActivity: value }))
              }
              trackColor={{ false: '#e0e0e0', true: '#1a1a1a' }}
              thumbColor="#fff"
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Message Privacy</Text>
              <Text style={styles.settingDescription}>
                Control who can send you messages
              </Text>
            </View>
            <TouchableOpacity style={styles.selector}>
              <Text style={styles.selectorText}>{settings.allowMessages}</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Two-Factor Authentication</Text>
              <Text style={styles.settingDescription}>
                Add an extra layer of security
              </Text>
            </View>
            <Switch
              value={settings.twoFactorAuth}
              onValueChange={(value) => 
                setSettings(prev => ({ ...prev, twoFactorAuth: value }))
              }
              trackColor={{ false: '#e0e0e0', true: '#1a1a1a' }}
              thumbColor="#fff"
            />
          </View>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Manage Connected Apps</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data & Personalization</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Data Collection</Text>
              <Text style={styles.settingDescription}>
                Help improve our services
              </Text>
            </View>
            <Switch
              value={settings.dataCollection}
              onValueChange={(value) => 
                setSettings(prev => ({ ...prev, dataCollection: value }))
              }
              trackColor={{ false: '#e0e0e0', true: '#1a1a1a' }}
              thumbColor="#fff"
            />
          </View>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Download My Data</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, styles.dangerButton]}>
            <Text style={styles.dangerButtonText}>Delete Account</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  section: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    color: '#1a1a1a',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  selectorText: {
    fontSize: 14,
    color: '#666',
  },
  actionButton: {
    paddingVertical: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  dangerButton: {
    backgroundColor: '#fff0f0',
  },
  dangerButtonText: {
    color: '#ff4b4b',
  },
});

export default PrivacySettingsScreen; 
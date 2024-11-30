// Modachi/screens/ProfileScreen.tsx
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
import { Images } from '../constants/Images';

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={Images.placeholders.avatar}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="pencil" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Jobby Designer</Text>
          <Text style={styles.bio}>Fashion Designer • NYC</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>124</Text>
              <Text style={styles.statLabel}>Designs</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1.2k</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>890</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item} style={styles.activityCard}>
              <View style={styles.activityIcon}>
                <Ionicons name="create-outline" size={20} color="#666" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>Created new design</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Portfolio Highlights</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.portfolioScroll}
          >
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={styles.portfolioItem}>
                <Image
                  source={Images.placeholders.portfolio}
                  style={styles.portfolioImage}
                />
              </TouchableOpacity>
            ))}
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
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f8f8f8',
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#1a1a1a',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#e0e0e0',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 16,
    color: '#1a1a1a',
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 14,
    color: '#666',
  },
  portfolioScroll: {
    marginLeft: -24,
    paddingLeft: 24,
  },
  portfolioItem: {
    width: 160,
    height: 200,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  portfolioImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
  },
});

export default ProfileScreen;
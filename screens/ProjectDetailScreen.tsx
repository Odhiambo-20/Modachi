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

const ProjectDetailScreen = ({ navigation }: { navigation: any }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Tasks', 'Files', 'Team'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Summer Collection</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.projectBanner}>
          <Image
            source={{ uri: 'project-banner' }}
            style={styles.bannerImage}
          />
          <View style={styles.projectStatus}>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>In Progress</Text>
            </View>
            <Text style={styles.deadline}>Due: July 30, 2024</Text>
          </View>
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

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>
              A modern summer collection featuring sustainable materials and versatile 
              designs. The collection includes both casual and formal wear suitable 
              for various occasions.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Team Members</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.teamScroll}
            >
              {Array(5).fill(null).map((_, index) => (
                <View key={index} style={styles.memberCard}>
                  <Image
                    source={{ uri: 'member-avatar' }}
                    style={styles.memberAvatar}
                  />
                  <Text style={styles.memberName}>Sarah J.</Text>
                  <Text style={styles.memberRole}>Designer</Text>
                </View>
              ))}
              <TouchableOpacity style={styles.addMemberButton}>
                <Ionicons name="add" size={24} color="#666" />
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Progress</Text>
              <Text style={styles.progressText}>75%</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '75%' }]} />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Files</Text>
            {Array(3).fill(null).map((_, index) => (
              <TouchableOpacity key={index} style={styles.fileItem}>
                <View style={styles.fileIcon}>
                  <Ionicons name="document-outline" size={24} color="#666" />
                </View>
                <View style={styles.fileInfo}>
                  <Text style={styles.fileName}>Design_Draft_{index + 1}.pdf</Text>
                  <Text style={styles.fileSize}>2.4 MB</Text>
                </View>
                <TouchableOpacity>
                  <Ionicons name="download-outline" size={24} color="#1a1a1a" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={20} color="#fff" />
          <Text style={styles.actionText}>Discussion</Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  projectBanner: {
    position: 'relative',
  },
  bannerImage: {
    width,
    height: width * 0.6,
    backgroundColor: '#f8f8f8',
  },
  projectStatus: {
    position: 'absolute',
    bottom: 16,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  deadline: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tab: {
    paddingVertical: 16,
    marginRight: 24,
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
  content: {
    padding: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  teamScroll: {
    flexDirection: 'row',
    gap: 16,
  },
  memberCard: {
    alignItems: 'center',
  },
  memberAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f8f8f8',
    marginBottom: 8,
  },
  memberName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  memberRole: {
    fontSize: 12,
    color: '#666',
  },
  addMemberButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginBottom: 8,
  },
  fileIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  fileSize: {
    fontSize: 12,
    color: '#666',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#1a1a1a',
    paddingVertical: 16,
    borderRadius: 12,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default ProjectDetailScreen; 
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
const ITEM_WIDTH = (width - 48) / 2;

const SavedItemsScreen = ({ navigation }: { navigation: any }) => {
  const [activeTab, setActiveTab] = useState('Designs');
  const tabs = ['Designs', 'Collections', 'Articles'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Saved Items</Text>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={24} color="#1a1a1a" />
        </TouchableOpacity>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {Array(6).fill(null).map((_, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.gridItem}
              onPress={() => navigation.navigate('DesignDetails')}
            >
              <Image
                source={{ uri: 'design-placeholder' }}
                style={styles.itemImage}
              />
              <View style={styles.itemOverlay}>
                <TouchableOpacity style={styles.saveButton}>
                  <Ionicons name="bookmark" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.itemInfo}>
                <View>
                  <Text style={styles.itemTitle} numberOfLines={1}>
                    Summer Design {index + 1}
                  </Text>
                  <Text style={styles.designerName} numberOfLines={1}>
                    by Sarah Johnson
                  </Text>
                </View>
                <View style={styles.itemStats}>
                  <View style={styles.stat}>
                    <Ionicons name="heart" size={14} color="#FF4B6E" />
                    <Text style={styles.statText}>128</Text>
                  </View>
                  <View style={styles.stat}>
                    <Ionicons name="chatbubble" size={14} color="#666" />
                    <Text style={styles.statText}>24</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  tab: {
    marginRight: 24,
    paddingBottom: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a1a1a',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#1a1a1a',
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 24,
    gap: 16,
  },
  gridItem: {
    width: ITEM_WIDTH,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  itemImage: {
    width: '100%',
    height: ITEM_WIDTH * 1.2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#f8f8f8',
  },
  itemOverlay: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  saveButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInfo: {
    padding: 12,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  designerName: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  itemStats: {
    flexDirection: 'row',
    gap: 12,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: '#666',
  },
});

export default SavedItemsScreen; 
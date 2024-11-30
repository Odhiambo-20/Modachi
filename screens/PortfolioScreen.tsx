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

const PortfolioScreen = ({ navigation }: { navigation: any }) => {
  const [activeTab, setActiveTab] = useState('Designs');
  const tabs = ['Designs', 'Collections', 'Drafts'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Portfolio</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={24} color="#1a1a1a" />
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
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle} numberOfLines={1}>
                  Design Project {index + 1}
                </Text>
                <View style={styles.itemStats}>
                  <View style={styles.stat}>
                    <Ionicons name="heart-outline" size={14} color="#666" />
                    <Text style={styles.statText}>128</Text>
                  </View>
                  <View style={styles.stat}>
                    <Ionicons name="chatbubble-outline" size={14} color="#666" />
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
  itemInfo: {
    padding: 12,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
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

export default PortfolioScreen; 
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
  ScrollView,
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Designs', 'Designers', 'Collections'];
  const recentSearches = ['Summer dress', 'Minimalist', 'Streetwear'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search designs, designers..."
            placeholderTextColor="#999"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.filterRow}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterChip,
              activeFilter === filter && styles.activeFilterChip
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text style={[
              styles.filterText,
              activeFilter === filter && styles.activeFilterText
            ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {searchQuery.length === 0 ? (
          <View style={styles.recentSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Searches</Text>
              <TouchableOpacity>
                <Text style={styles.clearText}>Clear all</Text>
              </TouchableOpacity>
            </View>
            {recentSearches.map((search, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.recentItem}
                onPress={() => setSearchQuery(search)}
              >
                <Ionicons name="time-outline" size={20} color="#666" />
                <Text style={styles.recentText}>{search}</Text>
                <TouchableOpacity style={styles.removeButton}>
                  <Ionicons name="close" size={16} color="#666" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.resultsGrid}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={styles.resultCard}>
                <Image
                  source={{ uri: 'placeholder-result' }}
                  style={styles.resultImage}
                />
                <View style={styles.resultInfo}>
                  <Text style={styles.resultTitle}>Design Title</Text>
                  <Text style={styles.resultSubtitle}>Designer Name</Text>
                </View>
              </TouchableOpacity>
            ))}
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
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 16,
    marginBottom: 24,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#1a1a1a',
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
    gap: 12,
  },
  filterChip: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  activeFilterChip: {
    backgroundColor: '#1a1a1a',
  },
  filterText: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  activeFilterText: {
    color: '#fff',
  },
  recentSection: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  clearText: {
    fontSize: 14,
    color: '#666',
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  recentText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1a1a1a',
  },
  removeButton: {
    padding: 4,
  },
  resultsGrid: {
    padding: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  resultCard: {
    width: '47%',
    marginHorizontal: '1.5%',
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  resultImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#f8f8f8',
  },
  resultInfo: {
    padding: 12,
  },
  resultTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  resultSubtitle: {
    fontSize: 12,
    color: '#666',
  },
});

export default SearchScreen;

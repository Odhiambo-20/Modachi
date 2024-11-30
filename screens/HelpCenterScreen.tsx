import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HelpCenterScreen = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqCategories = [
    {
      icon: 'person-outline',
      title: 'Account',
      description: 'Manage your account settings and preferences',
    },
    {
      icon: 'lock-closed-outline',
      title: 'Privacy & Security',
      description: 'Learn about privacy options and security features',
    },
    {
      icon: 'people-outline',
      title: 'Collaboration',
      description: 'Get help with project collaboration features',
    },
    {
      icon: 'card-outline',
      title: 'Billing',
      description: 'Subscription plans and payment information',
    },
  ];

  const popularQuestions = [
    'How do I reset my password?',
    'How to start a collaboration?',
    'Can I delete my account?',
    'How to change notification settings?',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Help Center</Text>
        <TouchableOpacity>
          <Ionicons name="chatbubbles-outline" size={24} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search help articles..."
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.categoriesGrid}>
          {faqCategories.map((category, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.categoryCard}
              onPress={() => navigation.navigate('HelpCategory', { category })}
            >
              <View style={styles.categoryIcon}>
                <Ionicons name={category.icon as any} size={24} color="#1a1a1a" />
              </View>
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <Text style={styles.categoryDescription}>
                {category.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Questions</Text>
          {popularQuestions.map((question, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.questionItem}
              onPress={() => navigation.navigate('HelpArticle', { question })}
            >
              <Text style={styles.questionText}>{question}</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Still need help?</Text>
          <Text style={styles.contactDescription}>
            Our support team is available 24/7 to assist you with any questions.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Ionicons name="mail-outline" size={20} color="#fff" />
            <Text style={styles.contactButtonText}>Contact Support</Text>
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
  searchContainer: {
    padding: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#1a1a1a',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 24,
    gap: 16,
  },
  categoryCard: {
    width: '47%',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  categoryDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  section: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  questionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  questionText: {
    fontSize: 14,
    color: '#1a1a1a',
    flex: 1,
    marginRight: 16,
  },
  contactSection: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  contactDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    gap: 8,
  },
  contactButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
});

export default HelpCenterScreen; 
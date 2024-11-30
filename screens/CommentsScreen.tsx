import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CommentsScreen = ({ navigation }: { navigation: any }) => {
  const [comment, setComment] = useState('');
  const [comments] = useState([
    {
      id: '1',
      user: 'Sarah Johnson',
      avatar: 'avatar-url',
      comment: 'Love the color palette! Would be perfect for a summer collection.',
      time: '2h ago',
      likes: 12,
      isLiked: false,
    },
    {
      id: '2',
      user: 'Mike Chen',
      avatar: 'avatar-url',
      comment: 'The design details are incredible. Great work!',
      time: '5h ago',
      likes: 8,
      isLiked: true,
    },
  ]);

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Comments</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.commentsList}
        renderItem={({ item }) => (
          <View style={styles.commentItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.commentContent}>
              <View style={styles.commentHeader}>
                <Text style={styles.username}>{item.user}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <Text style={styles.commentText}>{item.comment}</Text>
              <View style={styles.commentActions}>
                <TouchableOpacity style={styles.likeButton}>
                  <Ionicons 
                    name={item.isLiked ? "heart" : "heart-outline"} 
                    size={16} 
                    color={item.isLiked ? "#FF4B6E" : "#666"} 
                  />
                  <Text style={[
                    styles.likeCount,
                    item.isLiked && styles.likedText
                  ]}>
                    {item.likes}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.replyButton}>
                  <Text style={styles.replyText}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <Image 
          source={{ uri: 'current-user-avatar' }} 
          style={styles.currentUserAvatar} 
        />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={comment}
            onChangeText={setComment}
            placeholder="Add a comment..."
            placeholderTextColor="#999"
            multiline
          />
          <TouchableOpacity 
            style={[
              styles.sendButton,
              !comment.trim() && styles.sendButtonDisabled
            ]}
            disabled={!comment.trim()}
          >
            <Ionicons 
              name="send" 
              size={20} 
              color={comment.trim() ? "#1a1a1a" : "#999"} 
            />
          </TouchableOpacity>
        </View>
      </View>
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
  commentsList: {
    padding: 24,
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  time: {
    fontSize: 12,
    color: '#666',
  },
  commentText: {
    fontSize: 14,
    color: '#1a1a1a',
    lineHeight: 20,
    marginBottom: 8,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  likeCount: {
    fontSize: 12,
    color: '#666',
  },
  likedText: {
    color: '#FF4B6E',
  },
  replyButton: {
    padding: 4,
  },
  replyText: {
    fontSize: 12,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  currentUserAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f8f8f8',
    marginRight: 12,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1a1a1a',
    maxHeight: 100,
  },
  sendButton: {
    padding: 4,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
});

export default CommentsScreen; 
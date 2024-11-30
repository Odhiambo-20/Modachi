import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatDetailScreen = ({ navigation }: { navigation: any }) => {
  const [message, setMessage] = useState('');
  const flatListRef = useRef<FlatList>(null);
  
  const messages = [
    {
      id: '1',
      text: 'Hi! I saw your latest design collection',
      time: '10:30 AM',
      sender: 'them',
      read: true,
    },
    {
      id: '2',
      text: 'Thanks! What do you think about it?',
      time: '10:31 AM',
      sender: 'me',
      read: true,
    },
    {
      id: '3',
      text: 'I love the color combinations! Would you be interested in collaborating on a project?',
      time: '10:32 AM',
      sender: 'them',
      read: true,
    },
  ];

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.userInfo}>
          <Image
            source={{ uri: 'avatar-url' }}
            style={styles.avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.username}>Sarah Johnson</Text>
            <Text style={styles.status}>Online</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        inverted
        renderItem={({ item }) => (
          <View style={[
            styles.messageContainer,
            item.sender === 'me' ? styles.myMessage : styles.theirMessage
          ]}>
            <View style={[
              styles.messageBubble,
              item.sender === 'me' ? styles.myBubble : styles.theirBubble
            ]}>
              <Text style={[
                styles.messageText,
                item.sender === 'me' ? styles.myMessageText : styles.theirMessageText
              ]}>
                {item.text}
              </Text>
            </View>
            <View style={styles.messageFooter}>
              <Text style={styles.messageTime}>{item.time}</Text>
              {item.sender === 'me' && (
                <Ionicons 
                  name={item.read ? "checkmark-done" : "checkmark"} 
                  size={16} 
                  color={item.read ? "#4CAF50" : "#666"} 
                />
              )}
            </View>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          <Ionicons name="add-circle-outline" size={24} color="#666" />
        </TouchableOpacity>
        
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
            placeholderTextColor="#999"
            multiline
          />
          <TouchableOpacity style={styles.emojiButton}>
            <Ionicons name="happy-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={[
            styles.sendButton,
            !message.trim() && styles.sendButtonDisabled
          ]}
          disabled={!message.trim()}
        >
          <Ionicons 
            name="send" 
            size={20} 
            color={message.trim() ? "#fff" : "#999"} 
          />
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 8,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  userDetails: {
    marginLeft: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  status: {
    fontSize: 12,
    color: '#4CAF50',
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
  },
  theirMessage: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    borderRadius: 20,
    padding: 12,
  },
  myBubble: {
    backgroundColor: '#1a1a1a',
  },
  theirBubble: {
    backgroundColor: '#f8f8f8',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  myMessageText: {
    color: '#fff',
  },
  theirMessageText: {
    color: '#1a1a1a',
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  },
  messageTime: {
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
  attachButton: {
    padding: 8,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 24,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    maxHeight: 100,
    padding: 8,
  },
  emojiButton: {
    padding: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#f8f8f8',
  },
});

export default ChatDetailScreen; 
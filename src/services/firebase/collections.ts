// Collection names as constants
export const COLLECTIONS = {
  USERS: 'users',
  DESIGNS: 'designs',
  PROJECTS: 'projects',
  MOODBOARDS: 'moodboards',
  COLLABORATIONS: 'collaborations',
  NOTIFICATIONS: 'notifications',
  SETTINGS: 'settings'
};

// Document structure types
export interface Design {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrls: string[];
  likes: number;
  comments: number;
  savedBy: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  darkMode: boolean;
  language: string;
  privacySettings: {
    profileVisibility: 'public' | 'private' | 'followers';
    showOnline: boolean;
    showActivity: boolean;
    allowMessages: 'everyone' | 'followers' | 'none';
  };
}

export interface User {
  id: string;
  email: string;
  username: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  following: string[];
  followers: string[];
  savedDesigns: string[];
  settings: UserSettings;
}

// Add other interfaces... 
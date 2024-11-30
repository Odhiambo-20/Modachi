import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { COLLECTIONS } from './collections';
import type { User, Design } from './collections';

interface CacheImage {
  url: string;
  localPath: string;
  timestamp: number;
}

class FirebaseService {
  private cachedImages: Map<string, CacheImage> = new Map();

  // Authentication methods
  async signUp(email: string, password: string, userData: Partial<User>) {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      await firestore()
        .collection(COLLECTIONS.USERS)
        .doc(user.uid)
        .set({
          ...userData,
          createdAt: firestore.FieldValue.serverTimestamp(),
          updatedAt: firestore.FieldValue.serverTimestamp()
        });

      return user;
    } catch (error) {
      console.error('Error in signUp:', error);
      throw error;
    }
  }

  // Image handling methods
  async cacheImage(url: string): Promise<string> {
    const cached = this.cachedImages.get(url);
    if (cached && Date.now() - cached.timestamp < 24 * 60 * 60 * 1000) {
      return cached.localPath;
    }

    try {
      const filename = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const reference = storage().ref(`cache/${filename}`);
      await reference.putFile(url);
      const localPath = await reference.getDownloadURL();

      this.cachedImages.set(url, {
        url,
        localPath,
        timestamp: Date.now()
      });

      return localPath;
    } catch (error) {
      console.error('Error caching image:', error);
      throw error;
    }
  }

  // Firestore methods
  async createDesign(designData: Partial<Design>, imageUri: string) {
    try {
      const user = auth().currentUser;
      if (!user) throw new Error('No authenticated user');

      // Upload image to Storage
      const imageRef = storage().ref(`designs/${user.uid}/${Date.now().toString()}`);
      const response = await fetch(imageUri);
      const blob = await response.blob();
      await imageRef.putFile(imageUri);
      const imageUrl = await imageRef.getDownloadURL();

      // Save design data to Firestore
      const designRef = firestore().collection(COLLECTIONS.DESIGNS).doc();
      await designRef.set({
        ...designData,
        imageUrl,
        userId: user.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
        updatedAt: firestore.FieldValue.serverTimestamp()
      });

      return designRef.id;
    } catch (error) {
      console.error('Error in createDesign:', error);
      throw error;
    }
  }

  // Add other methods...
}

export default new FirebaseService(); 
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';

const IMAGE_CACHE_DIR = 'image_cache';

class LocalStorageService {
  private imageCacheDir: string;

  constructor() {
    this.imageCacheDir = `${FileSystem.cacheDirectory}${IMAGE_CACHE_DIR}`;
    this.initializeImageCache();
  }

  private async initializeImageCache(): Promise<void> {
    const dirInfo = await FileSystem.getInfoAsync(this.imageCacheDir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(this.imageCacheDir, {
        intermediates: true
      });
    }
  }

  async cacheImage(url: string): Promise<string> {
    const filename = url.split('/').pop() || Date.now().toString();
    const filePath = `${this.imageCacheDir}/${filename}`;

    const fileInfo = await FileSystem.getInfoAsync(filePath);
    if (!fileInfo.exists) {
      await FileSystem.downloadAsync(url, filePath);
    }
    return filePath;
  }

  async clearImageCache(): Promise<void> {
    await FileSystem.deleteAsync(this.imageCacheDir);
    await this.initializeImageCache();
  }

  // User preferences
  async saveUserPreferences(preferences: any): Promise<void> {
    try {
      await AsyncStorage.setItem('userPreferences', JSON.stringify(preferences));
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  }

  async getUserPreferences(): Promise<any> {
    try {
      const preferences = await AsyncStorage.getItem('userPreferences');
      return preferences ? JSON.parse(preferences) : null;
    } catch (error) {
      console.error('Error getting preferences:', error);
      return null;
    }
  }
}

export default new LocalStorageService(); 